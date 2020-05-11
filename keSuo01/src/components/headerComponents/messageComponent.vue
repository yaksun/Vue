<template>
  <div class="message-box">
    <img src="~@/assets/images/header-footer/message-icon.png" title="消息" @click.stop="openMessageBox">
    <span class="message-tips"></span>
    <el-collapse-transition>
      <div class="message-content" v-show="messageFlag">
        <div class="messsage-top-box">
          <div>通知</div>
          <div class="function-box">
            <img src="~@/assets/images/header-footer/is-read-icon.png" title="已读">
            <img src="~@/assets/images/header-footer/more-icon.png" title="更多">
          </div>
        </div>
        <div class="message">
          <ul>
            <li>
              <div class="content">
                <div class="titel-box">
                  <p class="title">您有一条任务待回告</p>
                  <p class="time">14分钟前</p>
                </div>
                <div>警情任务（201912090000T00287）</div>
              </div>
              <div class="time">1分钟前</div>
            </li>
            <li>
               <div class="content">
                <div class="titel-box">
                  <p class="title">您有一条任务待回告</p>
                  <p class="time">14分钟前</p>
                </div>
                <div>警情任务（201912090000T00287）</div>
              </div>
              <div class="time">1分钟前</div>
            </li>
            <li>
              <div class="content">
                <div class="titel-box">
                  <p class="title">您有一条任务待回告</p>
                  <p class="time">14分钟前</p>
                </div>
                <div>警情任务（201912090000T00287）</div>
              </div>
              <div class="time">1分钟前</div>
            </li>
             <li>
              <div class="content">
                <div class="titel-box">
                  <p class="title">您有一条任务待回告</p>
                  <p class="time">14分钟前</p>
                </div>
                <div>警情任务（201912090000T00287）</div>
              </div>
              <div class="time">1分钟前</div>
            </li>
            <li>
               <div class="content">
                <div class="titel-box">
                  <p class="title">您有一条任务待回告</p>
                  <p class="time">14分钟前</p>
                </div>
                <div>警情任务（201912090000T00287）</div>
              </div>
              <div class="time">1分钟前</div>
            </li>
            <li>
              <div class="content">
                <div class="titel-box">
                  <p class="title">您有一条任务待回告</p>
                  <p class="time">14分钟前</p>
                </div>
                <div>警情任务（201912090000T00287）</div>
              </div>
              <div class="time">1分钟前</div>
            </li>
          </ul>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit } from "vue-property-decorator";

@Component
export default class Message extends Vue {
  private messageFlag: boolean = false; // 设置弹框状态值

  /**
   * 设置弹窗弹出
   */
  private openMessageBox(): void {
    this.messageFlag = !this.messageFlag;
    this.$emit('closeMessageBox')
  }

  closeMessageBox(): void {
    this.messageFlag = false;
  }
}
</script>

<style lang="scss" scoped>
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #eaeaea;
	opacity: 0.6;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #d3d3d3;
}
/*定义最上方和最下方的按钮*/
::-webkit-scrollbar-button {
}

.message-box {
  position: relative;
  img {
    cursor: pointer;
  }
  .message-tips {
    width: 6px;
    height: 6px;
    background-color: #ea5a54;
    border-radius: 50%;
    position:absolute;
    top: -3px;
    right: -3px;
  }
  .message-content {
    position: absolute;
    top: 170%;
    right: 0;
    z-index: 1000;
    width: 400px;
    height: 420px;
    background-color: #ffffff;
    box-shadow: 0px 10px 9px 1px 
      #e9e9e9;
    border: solid 1px #e0e0e0;
    overflow: hidden;
    .messsage-top-box{
      width: 100%;
      height: 50px;
      background-color: #f6f6f6;
      border-bottom: solid 2px #eaeaea;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 22px 0 18px;
      font-size: 18px;
      div {
        color: #304363;
      }
      .function-box {
        display: flex;
        align-items: center;

        img:first-child {
          margin-right: 34px;
        }
      }
    }
    .message {
      width:100%;
      height: calc(100% - 50px);
      overflow-y: scroll;
      ul {
        width: 100%;
        height: 100%;
        li {
          position: relative;
          width:100%;
          height: 85px;
          border-bottom: solid 2px #eaeaea;
          overflow: hidden;
          .content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .titel-box {
              display: flex;
              justify-content: space-between;
              padding: 0 20px;
              margin-bottom: 8px;
              p {
                font-size: 16px;
                color:#666;
              }
              /** 
                color: #ff2d2d; 待分派 
                color: #4179f7; 待回告
              */
              .title {
                color: #4179f7;
              }
            }
            div:last-child {
              font-size: 16px;
              color: #666;
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}
</style>