<template>
  <div class="header-box">
    <weatherComponent></weatherComponent>
    <div class="title-box">
      <div class="title">
        <img src="~@/assets/images/header-footer/logo.png">
        <p>{{title}}</p>
      </div>
      <img class="bottom-img" src="~@/assets/images/header-footer/title-bottom.png">
    </div>
    <div class="setting-box" v-clickoutside="handleClickOutside">
      <messageComponent ref="messages" @closeMessageBox="closeMessageBox"></messageComponent>
      <settingComponent ref="setting" @closeSettingBox="closeSettingBox"></settingComponent>
      <img src="~@/assets/images/header-footer/log-off-icon.png" title="退出" @click="handleQuit">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit } from "vue-property-decorator";

import weatherComponent from '@/components/headerComponents/weatherComponent.vue'
import settingComponent from '@/components/headerComponents/settingComponent.vue'
import messageComponent from '@/components/headerComponents/messageComponent.vue'

import Clickoutside from "element-ui/src/utils/clickoutside";

@Component({
  components: {
    weatherComponent,
    settingComponent,
    messageComponent
  },
  directives: { Clickoutside }
})
export default class Header extends Vue {
  private title: string = '武汉公安局智慧警务系统';

  public $refs!: {
    messages: HTMLFormElement,
    setting: HTMLFormElement
  }

  /**
   * 组件外点击关闭弹窗 
   * 
   */
  private handleClickOutside():void {
    this.$refs.messages.closeMessageBox();
    this.$refs.setting.closeSettingBox();
  }

  @Emit()
  closeMessageBox() {
    this.$refs.setting.closeSettingBox();
  }

  @Emit()
  closeSettingBox() {
    this.$refs.messages.closeMessageBox();
  }

  /**
   * 点击退出按钮
   */
  private handleQuit = () => {
    this.handleClickOutside();
    this.$confirm("请确认是否退出登录？", "提示", {
      type: "warning"
    })
      .then(() => {
        //跳转到登录页
        this.$root.$router.push({
          path: "/Login"
        });
      })
      .catch(() => {});
  };
}
</script>

<style lang="scss" scoped>
.header-box {
  width: 100%;
	height: 60px;
	background-color: #4179f7;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top:0;
  left: 0;
  z-index: 99;

  .title-box {
    width: 47.08%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 99;
      img {
        margin-right: 14px;
      }
      p {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        height: 27px;
        line-height: 28px;
        font-weight: 550;
        letter-spacing: 1px;
        color:#fff;
      }
    }
    .bottom-img {
      position: absolute;
      left: 50%;
      bottom: -40px;
      transform: translateX(-50%);
    }
  }

  .setting-box {
    position: absolute;
    right: 30px;
    top:50%;
    transform: translateY(-50%);
    width: 131px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      cursor: pointer;
    }
  }
}
</style>