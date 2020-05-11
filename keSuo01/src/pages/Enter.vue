<template>
  <section class="enter-section">
    <!-- 四角装饰 -->
    <em class="corner corner-t-l"></em>
    <em class="corner corner-t-r"></em>
    <em class="corner corner-b-l"></em>
    <em class="corner corner-b-r"></em>
    <em class="corner line-t-l"></em>
    <em class="corner line-t-r"></em>
    <em class="corner line-t-l-c"></em>
    <em class="corner line-t-r-c"></em>
    <!-- 主体内容 -->
    <div class="enter-wrapper">
      <!-- 头部 -->
      <header>
        <div class="header-center">
          <img class="login-img" src="~@/assets/images/login/logo-50x50.png" />
          <p>公安系统测试页面(临时)</p>
        </div>
        <i class="close-btn" @click="handleQuit"></i>
      </header>
      <!-- 主内容 -->
      <article>
        <div class="enter-cards">
          <div
            class="card-item"
            v-for="(enterMenu, index) in enterMenus"
            :key="index"
          >
            <div class="card" @click="handleEnter(enterMenu)">
              <i :class="`icon-0${index + 1}`"></i>
              <p>
                {{ enterMenu.title }}
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="panel-wrapper">
          <span class="panel-btn" @click="handleEnter('数据看板')"></span>
        </div> -->
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { jpConsole } from "@/utils/jpConsole";

//现在的方式以下是vue-property-decorator + vuex-class写法：
import { Component } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { JPConfig } from "../config/JPConfig";
import store from "@/store/store";

import { menus_result_model_detail } from "@/model/sysManage/menus_result_model";

@Component
export default class Enter extends Vue {
  @Action("setTokenAction") setTokenActionCommand!: any;

  private  enterMenus=[{
    title:"警情任务",
    type:"jq"
  },{
    title:"舆情任务", 
    type:"yq"
  },{
    title:"重点人任务",
    type:"zdr"
  },{
    title:"情报任务" ,
    type:"qb"
  },{
    title:"工作任务" ,
    type:"gz"
  },
  {
    title:"辅助工具" ,
    type:""
  }];

  /**
   * 业务系统菜单
   */
  private communityMenus = Array.from([
    "电子巡更管理",
    "访客管理",
    "感知预警管理",
    "人员管理",
    "车辆管理",
    "报警联动管理",
    "数据看板"
  ]);
  //private enterMenus = new Array<menus_result_model_detail>();
  /**
   * 当前登录用户名称
   */
  private currentLoginName: string = "";

  /**
   * 当前系统版本号
   */
  private currentVersion: string = "";

  /**
   * 点击退出按钮
   */
  private handleQuit = () => {
    this.$confirm("请确认是否退出登录？", "提示", {
      type: "warning"
    })
      .then(() => {
        //清除token值
        this.setTokenActionCommand("");
        //清除sessionStorage的token值
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userinfo");
        sessionStorage.removeItem("PermissionMenu");
        //跳转到登录页
        this.$root.$router.push({
          path: "/Login"
        });
      })
      .catch(() => {});
  };

  /**
   * 点击入口卡片
   * @param enterName 入口卡片name
   */
  private handleEnter = (enterMenu: any) => {

      this.$root.$router.push({
        path: "/Home", query: {paramter: enterMenu}
      });
      // 保存到sessionStorage中
      //sessionStorage.setItem("enterMenu", JSON.stringify(enterMenu));
    //}
  };

  /**
   * 进入视频综合应用平台
   */

  private enterRadioPlatform = () => {
    this.$root.$router.push({
      path: "/Home"
    });
  };

  /**
   * 加载
   */
  private async mounted() {
    //获取子系统详细信息
  //  this.currentVersion = JPConfig.Instance().Version;

    // if (!!store.state.userinfo) {
    //   this.currentLoginName = (<any>store.state.userinfo).nickName;
    // } else if (!!sessionStorage.getItem("userinfo")) {
    //   let useinfoboj: any = JSON.parse(
    //     sessionStorage.getItem("userinfo") || ""
    //   );
    //   this.currentLoginName = useinfoboj.nickName;
    // }

    // let getPermissionMenu: any =
    //   store.state.permissionMenu ||
    //   JSON.parse(sessionStorage.getItem("PermissionMenu") || "");
    // this.enterMenus = getPermissionMenu.filter(
    //   (menus: menus_result_model_detail) =>
    //     this.communityMenus.includes(menus.meta.title)
    // );
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/pages/enter.scss";
</style>
