import store from "../../store/store";;
import { Action, Getter, State, Mutation } from "vuex-class"
import * as types from "../../store/mutation-types";
// import baseUrl from '@/request/base'

import $ from 'jquery';
(window as any).jQuery = $
require('signalr')
// import { Getter } from 'vuex-class'

export default function connectionServer(messagehub:any, eventhub:any) {
    // @Getter('getConnectState') connectionState:any;

    if (typeof (window as any).signalrConnection === "undefined" || typeof (window as any).signalrId === "undefined") {
        //未定，即页面未加载
    }
    else {
        if ((window as any).signalrConnection.state == 1) {
            //如果状态已连接，返回当前连接
            return (window as any).signalrConnection;
        }
        else {
            // 清理连接
            (window as any).signalrConnection.stop();
        }
    }
    let userId = (store.state.userinfo as any).userId;
    let signalrUrl = store.state.signalrUrl
    //let connection = $.hubConnection('http://172.16.14.156:8001') // 用户名，web端默认2
    let connection = ($ as any).hubConnection(signalrUrl) // 用户名，web端默认2
    connection.qs = {
        UserId: userId,
        DeviceType: '2'
    }
    /**此处创建代理**/
    //var messagehub = messageHub();
    messagehub.init(connection);
    //store.state.signalR.messageHub = messagehub;
    //var eventhub = eventHub();
    eventhub.init(connection);
    //store.state.signalR.eventHub = eventhub;
    /**重连延时**/
    var reconnectDelay = connection.reconnectDelay;
    /**是否开启客户端连接日志**/
    var logging = connection.logging;
    /**连接状态***/
    var state = connection.state;
    
    var transportConnectTimeout = connection.transportConnectTimeout;
    /***连接断开时限，默认30000毫秒，***/
    var disconnectTimeout = connection.disconnectTimeout;
    /**连接缓慢阈值，默认 2/3=67%，触发连接缓慢事件**/
    var keepAliveWarnAt = connection.keepAliveWarnAt;

    /**重连**/
    connection.reconnecting(function () {
        console.info('重连');
    });
    connection.reconnected(function () {
        console.info('reconnected');
        eventhub.afterConnnected();
    });

    /**断开*/
    connection.disconnected(function () {
        console.info('断开');
    });
    /**接收**/
    connection.received(function (c:any) {
         console.info('接收');
    });
    /**启动中**/
    connection.starting(function () {
        console.info('启动中');
        //store.commit('signalrConnectionState', 5)
    });
    /***状态变更**/
    connection.stateChanged(function (c:any) {
        //     Connecting = 0,
        //     Connected = 1,
        //     Reconnecting = 2,
        //     Disconnected = 3
        // getConnectState
        // store.commit(types.SET_SIGNALRSTATE,c.newState);
        store.state.connectionState = c.newState;
        // store.commit('signalrConState', c.newState)
        console.info('状态变更');
    });
    /***慢速连接中***/
    connection.connectionSlow(function () {
        console.info('慢速连接中');
    });
    /**错误的时候处理**/
    connection.error(function (err:any) {
        console.info('错误的时候处理');
        store.commit(types.SET_SIGNALRSTATE,connection.state);

    });
    function startSignalr() {
        /**启动**/
        connection.start(function () {
            /**当前 启动回调**/
        }).done(function () {
            store.commit(types.SET_SIGNALRSTATE,1);
            (window as any).signalrConnection = connection;
            (window as any).messageHub = messagehub;
            (window as any).eventHub = eventhub;

            (window as any).signalrId = connection.id;
            eventhub.afterConnnected();
        }).fail(function (err:any) {
            store.commit(types.SET_SIGNALRSTATE,4);
        })
    }

    // var timer = {};

    window.onbeforeunload = function () {
        // this.clearInterval(timer);
        connection.stop();
        (window as any).signalrConnection = null;
        (window as any).signalrId = null;
        (window as any).messageHub = null;
        (window as any).eventHub = null;
        store.commit(types.SET_SIGNALRSTATE,4);
    }
    store.commit(types.SET_SIGNALRSTATE,5);
    startSignalr();
     var timer = setInterval(() => {
        /***取 系统 状态值目的是防止计时器对signalr重连，只有当出现断开连接的时候才对计时器中可行
        ***connection.state 虽然可用，但是不可取。这里代表的是SignalR的状态，被下载不再这个范围内。
        **/
        let connectionstate = store.state.connectionState;
        if (connectionstate == 4 || connectionstate == 5 ) {
            startSignalr();
        }
     }, 5000);
    return connection
}
