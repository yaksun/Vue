<template>
  <div class="setting">
    <img src="~@/assets/images/header-footer/setting-icon.png" title="设置" @click.stop="openSetting">
    <el-collapse-transition>
      <div class="setting-content" v-show="settingFlag">
        <ul>
          <li>修改密码</li>
          <li>通知设置</li>
          <li>字体设置</li>
          <li>换肤设置</li>
        </ul>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit } from "vue-property-decorator";

@Component
export default class Setting extends Vue {
  private settingFlag: boolean = false; // 设置弹框状态值

  /**
   * 设置弹窗弹出
   */
  private openSetting(): void {
    this.settingFlag = !this.settingFlag;
    this.$emit('closeSettingBox')
  }

  private closeSettingBox(): void {
    this.settingFlag = false;
  }

}
</script>

<style lang="scss" scoped>
.setting {
  position: relative;
  img {
    cursor: pointer;
  }

  .setting-content {
    position: absolute;
    top: 160%;
    right: 50%;
    transform: translateX(50%);
    z-index: 1000;
    min-width: 120px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    ul {
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 40px;
        height: 40px;
        text-align: center;
        position: relative;
        color:#000;

        &:hover {
          color: #262626;
          text-decoration: none;
          background-color: #f5f5f5;
        }
      }
    }
  }
}
</style>