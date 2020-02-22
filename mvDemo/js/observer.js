function Observer(data) {
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    constructor: Observer,
    walk: function(data) {
        var me = this;
        Object.keys(data).forEach(function(key) {
            me.convert(key, data[key]);
        });
    },
    convert: function(key, val) {
        this.defineReactive(this.data, key, val);
    },

    defineReactive: function(data, key, val) {

        // 给每一个属性 新建一个dep实例
        // 有几个数据，就生成几个dep 
        //  name  data = {name: "数据劫持", b: {…}}, key = "name", val = "数据劫持"
        //  b     
        //  c      

        var dep = new Dep();
        var childObj = observe(val);

        Object.defineProperty(data, key, {
            enumerable: true, // 可枚举
            configurable: false, // 不能再define
            get: function() {
                // 如果watcher存在才执行
                if (Dep.target) {
                    // 建立和watcher的连接
                    dep.depend();
                }
                return val;
            },
            set: function(newVal) {
                // 如果新的值和以前的值一样 ，就返回
                if (newVal === val) {
                    return;
                }
                // 不一样就把新值保存起来
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知订阅者
                dep.notify();
            }
        });
    }
};

function observe(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }

    return new Observer(value);
};


var uid = 0;


// Dep对象
function Dep() {
    // id自增长
    this.id = uid++;
    // watcher的容器
    this.subs = [];
}

Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },

    depend: function() {
        Dep.target.addDep(this);
    },

    removeSub: function(sub) {
        var index = this.subs.indexOf(sub);
        // 如果存在才执行删除操作
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },

    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        });
    }
};

Dep.target = null;