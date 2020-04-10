<template>
  <div id="app">
    <!-- v-if="isRouterAlive"  -->
    <router-view />
    <div id="dragHideDiv"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { JPConfig } from "@/config/JPConfig";
import { timeService } from "@/bll/sysManage/timeService";
import { Action } from "vuex-class";

@Component
export default class App extends Vue {
  @Action("setSystemTime") setSystemTimeActionCommand!: any;
  public isRouterAlive: boolean = true; //
  // provide() {
  //   return {
  //     reload: this.reload
  //   };
  // }
  // reload() {
  //   this.isRouterAlive = false;
  //   this.$nextTick(function() {
  //     this.isRouterAlive = true;
  //   });
  // }

  created() {
    // 避免刷新浏览器 vuex state保存的数据清空
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      let data: any = sessionStorage.getItem("store");
      this.$store.replaceState(
        Object.assign({}, this.$store.state, JSON.parse(data))
      );
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
}
</script>
<style lang="scss">
#app,
body,
html {
  padding: 0;
  margin: 0;
}

/* //全局隐藏层 */
#dragHideDiv {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  opacity: 0;
  width: 100%;
  visibility: hidden;
}
@import "~@/assets/css/common.scss";
@import "~@/assets/css/element-ui-reset.scss";
</style>
