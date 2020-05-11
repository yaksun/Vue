/**
 * 引入socketioClient单例
 */
import socketioClient from "./socketioClient";

import { globalAPI } from "@/api/globalAPI";

import { common } from "@/utils/common";

import store from "@/store/store";

/**
 * 引入vue-socket.io组件
 */
import io from 'socket.io-client';
import { jpConsole } from '@/utils/jpConsole';

/**
 * socketio
 */
export default {
    data() {
        return {};
    },
    methods: {
        socketioInit() {
            /**
             * open
             */
            let newGuid = common.getNewGuid();
            store.state.socketioClientId = newGuid;
            jpConsole.log("socketioClientId-newGuid", newGuid);
            var url = globalAPI.socketioAPIs.jp_socketio_api.url.concat("?clientId=", newGuid);
            jpConsole.log("socketioClientId-url", url);
            let socket = io.connect(url);

            /**
             * 连接connect状态
             */
            socket.on('connect', socketioClient.getInstance().connection);

            /**
             * 断开连接disconnect
             */
            socket.on('disconnect', socketioClient.getInstance().disConnection);
        },
        closesocket(){
            let socket= socketioClient.currentSocket;
            socket.removeAllListeners();
            socket.disconnect();
        }
    },
};