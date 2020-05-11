<template class="template-login">
<section class="login-section">
  <!-- logo-->
  <div class="login-logo">
    <img class="login-img" src="~@/assets/images/login/logo-80x81.png" />
    <p class="login-text">武汉市公安局智慧警务系统</p>
  </div>
  <!-- 登录框 -->
  <div class="login-input">
    <div class="login-title">欢迎登陆</div>
    <div class="input-bar user">
      <input ref="userInput" placeholder="请输入用户名" v-model="loginUiModel.loginname" />
    </div>
    <div class="input-bar password">
      <input type="password" placeholder="请输入密码" v-model="loginUiModel.pwd" @keyup.enter="handleLogin" />
    </div>
    <div class="save-password-box">
      <el-checkbox class="remember" v-model="checked">记住密码</el-checkbox>
    </div>
    <button class="submit" type="button" @click="handleLogin">登录</button>
  </div>

  <!-- 版权 -->
  <!-- <div class="copyright">
    <img class="logo-company" src="~@/assets/images/login/copyright-logo-46x46.png" />
    <p>
      当前版本:{{ this.currentVersion }}@copyright 湖北金鹏信息系统有限公司技术支持
    </p>
  </div> -->
</section>
</template>

<script lang="ts">
import Vue from "vue";

//现在的方式以下是vue-property-decorator + vuex-class写法：

import { JPConfig } from "@/config/JPConfig";
import { Component } from "vue-property-decorator";
import { Action, Getter, State, Mutation } from "vuex-class";
import moment from "moment";
//model&service
import {
  login_ui_model,
  token_ui_model,
  userinfo_ui_model,
} from "@/model/sysManage/login_result_model";
import { loginService } from "@/bll/sysManage/loginService";
import { dictTag_ui_model } from "@/model/sysManage/dictTag_model";
import { dictTagService } from "@/bll/sysManage/dictTagService";

import { menus_result_model_detail } from "@/model/sysManage/menus_result_model";
import { menusService } from "@/bll/sysManage/menusService";
import { jpConsole } from "../utils/jpConsole";
import { common } from "@/utils/common";
import {
  now
} from 'moment';

@Component
export default class Login extends Vue {
  @Action("setTokenAction") setTokenActionCommand!: any;
  @Action("setUserinfoAction") setUserinfoActionCommand!: any;
  @Action("setPermissionMenu") setPermissionMenuActionCommand!: any;
  @Action("setVideoServerId") setVideoServerIdActionCommand!: any;
  @Action("setVideoUrl") setVideoUrlActionCommand!: any;
  @Action("setSignalrUrl") setSignalrUrlActionCommand!: any;
  @Action("setCheckInfo") setCheckInfoActionCommand!: any;
  @Action("setMapSomeUrl") setMapSomeUrlActionCommand!: any;
  @Action("setMapServer") setMapServerActionCommand!: any;

  @State('environmentKey') environmentKey!: any;
  @State('instructEnvironment') instructEnvironment!: any;

  @Getter('getVideoServerId') videoServerId!: any;
  @Getter('getMapServer') mapServer!: any;
  /**
   * 当前系统版本号
   */
  private currentVersion: string = "";

  /**data */
  private loginUiModel = new login_ui_model();
  private codeUrl: string = ""; // 验证码
  private checked: boolean = false; // 记住密码

  /**
   * 加载完毕后的mouted事件（钩子函数）
   */
  created() {
    // 判断是否为调试状态
    this.ifDebug();
    this.judgeRemember(); // 是否记住密码
    // this.getCode();
  }

  /**
   * 加载完毕后的mouted事件（钩子函数）
   */
  mounted() {
    //用户框自动获得光标
    ( < any > this.$refs).userInput.focus();
    this.currentVersion = JPConfig.Instance().Version;

    // this.loginUiModel.loginname="sj001"
    // this.loginUiModel.pwd="sj001"
  }

  private async getCode() {
    let bll = new loginService();
    let data = await bll.getCodeImg();
    // this.codeUrl = data.data.img;
    //  this.loginUiModel.uuid = data.data.uuid;
  }
  
  /** 
   * 判断用户是否勾选记住密码功能
  */
  private judgeRemember(): void {
    if (localStorage.getItem('userName')) {
      this.checked = true;
      this.loginUiModel.loginname = localStorage.getItem('userName');
      this.loginUiModel.pwd = localStorage.getItem('passWord');
    }
  }

  /**
   * 点击登录按钮
   */
  private async handleLogin() {

    //验证 304041  1   "2020-03-06T15:28:08.7686473+08:00";//2020-03-06T16:35:32+08:00
    let username: string | null = this.loginUiModel.loginname;
    let password: string | null = this.loginUiModel.pwd;
    if (!username || !password) {
      this.$message.error("账号,密码不能为空");
      return;
    }
    let param =new login_ui_model(); 
    let bll = new loginService();
     
    let str = username + "-" + password + "-" + moment().format("YYYY-MM-DDThh:mm:ss.SSSSSSSZ");
    var strpwd = btoa(str);  //加密密码
    param.loginname =  this.loginUiModel.loginname;
    param.pwd =strpwd;
    let data = await bll.login(param);
    if (data.code == "200" && data.msg == "ok") {

      let para = new token_ui_model();
      para.clientVersion = "1.2.3.8";
      para.path = "E:\\workFile\\消息通知中心\\Output";
      para.code = "BFEBFBFF000806EA-335A_4830_4B22_3271_0025_3846_0000_0001.";
      para.isNew = 1;
      para.isOnline =1;
      para.sysLoginname =this.loginUiModel.loginname;
      let tokenData = await bll.getToken(para);

      if(tokenData.code == "200" && tokenData.msg == "ok"){
        //保存token值
        this.setTokenActionCommand(tokenData.data.token);
        // 保存到sessionStorage中
        sessionStorage.setItem("token", tokenData.data.token);
      }

      //存储用户信息
      let userinfoparamter =new userinfo_ui_model();
      userinfoparamter.loginName = this.loginUiModel.loginname;
      let userinfoData = await bll.getUserInfo(userinfoparamter);
 
      if(userinfoData.code == "200" && userinfoData.msg == "ok"){
        //保存token值
        this.setUserinfoActionCommand(userinfoData.data);
        // 保存到sessionStorage中
        sessionStorage.setItem("userinfo", JSON.stringify(userinfoData.data));
      }

      // 获取后台配置信息
      let tagParamter = new dictTag_ui_model();
      tagParamter.key = this.environmentKey;
      tagParamter.type = this.instructEnvironment;
      let tagTreeData = await new dictTagService().tag_tree_type(tagParamter)
      if(tagTreeData.code == "200" && tagTreeData.msg == "ok"){
        if(tagTreeData.data.tag.objs.length > 0) {
          let result: Array<object> = tagTreeData.data.tag.objs;
          result.map((item: any) => {
            // 视频信令中心
            if(item.code === 'videoServerId') {
              this.setVideoServerIdActionCommand(item.description)
              console.log(this.videoServerId)
            }
            // 视频地址
            if(item.code === 'videoUrl') {
              this.setVideoUrlActionCommand(item.description);
            }
            // signalr
            if(item.code === 'signalrUrl') {
              this.setSignalrUrlActionCommand(item.description);
            }
            // 信息核查地址
            if(item.code === 'checkInfo') {
              this.setCheckInfoActionCommand(item.description);
            }
            // 地图地图
            if(item.code === 'mapServer') {
              this.setMapServerActionCommand(item.description);
              console.log(this.mapServer)
            }
            // 地图js css
            if(item.code === 'mapSomeURL') {
              this.setMapSomeUrlActionCommand(item.description);
            }
          })
        } else {
          this.$message({
            type: 'warning',
            message: '请在后台添加指令web配置'
          })
        }
      } else {
        this.$message.warning('后台配置文件读取失败')
      }

      // 保存用户名，密码
      if(this.checked) {
        localStorage.setItem('userName', username);
        localStorage.setItem('passWord', password);
      } else {
        localStorage.setItem('userName', "");
        localStorage.setItem('passWord', "");
      }

      this.$router.push({
        path: "/Home"
      });

      //存储用户菜单信息
      // this.getCurrentPermissionMenu().then((PermissionMenu: any) => {
      //   this.setPermissionMenuActionCommand(PermissionMenu);
      //   // 保存到sessionStorage中
      //   sessionStorage.setItem(
      //     "PermissionMenu",
      //     JSON.stringify(PermissionMenu)
      //   );

      //   // 跳转到导航页面
      //   this.$router.push({
      //     path: "/Enter"
      //   });
      // });
    } else {
      this.$message.error(data.msg);
    }
  }
  /**
   * 是否为调试状态
   */
  private ifDebug() {
    const IsDebugMode = JPConfig.Instance().IsDebugMode;
  }

  /**
   * @description: 获取当前用户菜单信息
   * @param {type}
   * @return:
   */
  private async getCurrentPermissionMenu() {
    let data = await new menusService().getMeuns();
    if (data.code == "0") {
      console.log(
        "getCurrentPermissionMenu=================>>>>>>>>>>>",
        data.data
      );
      return data.data;
    } else {
      this.$message.error(data.msg);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/pages/login.scss";
</style>
