<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  create () {
    // 避免刷新浏览器 vuex state保存的数据清空
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style lang="scss">
@import './scss/base.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width:100%;
  height:100%;
  font-size: 14px;
  color:#fff;
}
</style>
