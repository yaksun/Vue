<template>
  <div class="template-chat" v-if="taskId">
    <div class="chat-img" @click="openChat">
      <img src="~@/assets/images/calledStation/called-button.png" />
    </div>
    <!-- 聊天框 -->
    <div class="chat-box" v-if="chatShow" @click="showSetting">
      <div class="chat-title flex-between">
        <div class="flex flex-center">
          <img src="~@/assets/images/calledStation/called-button-1.png" class="title-img" />
          <div>聊天通讯</div>
        </div>
        <div class="title-close-box" @click="closeChat">
          <img src="~@/assets/images/calledStation/close-1.png" class="title-close-img" />
        </div>
      </div>
      <div class="chat-content">
        <div class="chat-content-son" id="chat-box" @scroll="scrollTop" ref="box">
          <!--查看更多-->
          <div
            class="read-more-msg"
            v-if="showMoreMsg && !chatList_loading_show"
            @click="historyMsg(false)"
            v-loading="chatList_loading_show"
            element-loading-text="拼命加载中"
            element-loading-background="rgba(0, 0, 0, 0.4)"
          >查看更多信息</div>
          <div
            class="read-more-msg"
            v-loading="chatList_loading_show"
            element-loading-text="拼命加载中"
            element-loading-background="rgba(0, 0, 0, 0.4)"
          ></div>
          <div v-for="(item, index) in chatList" :key="index">
            <!-- 左边的信息 -->
            <div v-if="item.I === 'left'" class="chatRoom-l">
              <div class="chatRoom-name">
                <div>{{ item.extendedFields.stationName }}</div>
                <div class="chatRoom-time">{{ item.extendedFields.userName }}</div>
                <div class="chatRoom-time">{{ item.time }}</div>
              </div>
              <div class="chatRoom-txt-l">
                <div class="chatRoom-txt" v-for="(item,index) in item.content" :key="index">
                  <div v-if="item.catalog == 1">{{ item.textare }}</div>
                  <div v-if="item.catalog == 2 && item.type != 'Picture'">
                    <div class="chatRoom-receive-file">
                      <img :src="item.imgUrl" />
                      <div>{{ item.fileName }}</div>
                    </div>
                    <div class="chatRoom-down">
                      <a class="uplode-file-cancel" :href="item.uri" @click="downFile(item)">下载</a>
                    </div>
                  </div>
                  <div v-if="item.catalog == 2 && item.type == 'Picture'">
                    <jpImg :url="item.uri"></jpImg>
                  </div>
                  <!-- <audioRecord
                    :recordTime="item.file.speechTime"
                    :msource="item.uri"
                    v-if="item.catalog == 3"
                  />-->
                </div>
              </div>
            </div>
            <!-- 右边的信息 -->
            <div v-if="item.I === 'right'" class="chatRoom-r">
              <div class="chatRoom-name-r">
                <div class="chatRoom-time-r">{{ item.time }}</div>
                <div class="chatRoom-time-r">{{ item.extendedFields.userName }}</div>
                <div>{{ item.extendedFields.stationName }}</div>
              </div>
              <div class="chatRoom-txt-r">
                <div class="chatRoom-txt" v-for="(item,index) in item.content" :key="index">
                  <div v-if="item.catalog == 1">{{ item.textare }}</div>
                  <div v-if="item.catalog == 2 && item.type != 'Picture'">
                    <div class="chatRoom-receive-file">
                      <!-- <svg-icon :icon-class="'file-1'" /> -->
                      <img :src="item.imgUrl" />
                      <div>{{ item.fileName }}</div>
                    </div>
                    <div class="chatRoom-down">
                      <a class="uplode-file-cancel" @click="downFile(item)">下载</a>
                    </div>
                  </div>
                  <div v-if="item.catalog == 2 && item.type == 'Picture'">
                    <jpImg :url="item.uri"></jpImg>
                  </div>
                  <!-- <audioRecord
                    :recordTime="item.file.speechTime"
                    :msource="item.uri"
                    v-if="item.catalog == 3"
                  />-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-input">
        <div class="chat-input-top">
          <img class="chat-input-img" src="~@/assets/images/calledStation/recording.png" />
          <img class="chat-input-img" src="~@/assets/images/calledStation/append.png" />
          <img
            class="chat-input-img"
            src="~@/assets/images/calledStation/common-word.png"
            @click="commonWord($event)"
          />
        </div>
        <div class="chat-input-text">
          <el-input
            class="el-input-text"
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="textarea"
            @change="sendMsg('', 1)"
          ></el-input>
        </div>
        <div class="flex-end btn-box">
          <div class="btn-clear flex-item" @click="clearMsg">清空</div>
          <div class="btn-send flex-item" @click="sendMsg('', 1)">发送</div>
        </div>
      </div>
      <div class="commonWord-box" v-if="commonShow" @click="settingEvent($event)">
        <div class="commonWord-list">
          <div class="commonWord-list-son">
            <div v-for="(item, index) in comWordList" :key="index">
              <div class="commonWord-item" @click="subCommon(item)">{{ item.content }}</div>
            </div>
          </div>
        </div>
        <div class="setComWord" @click="goComBox">去设置常用语 >></div>
      </div>
      <!-- 设置常用语盒子 -->
      <div class="comWord-box" v-if="comShow">
        <div class="flex-between comWord-title">
          <div class="flex">
            <div class="comWord-title-txt">设置常用语回复</div>(50字以内)
          </div>
          <div>
            <img
              src="~@/assets/images/calledStation/close-2.png"
              class="title-close-img"
              @click="closeButton"
            />
          </div>
        </div>
        <div class="flex comWord-content">
          <div class="comWrod-content-left">
            <div class="comWrod-content-left-son">
              <div v-for="(item, index) in comWordList" :key="index">
                <div
                  :class="{
                    'selected-item': item.selectedShow,
                    'commonWord-item': true
                  }"
                  @click="selectItem(item, index)"
                >{{ item.content }}</div>
              </div>
            </div>
          </div>
          <div class="comWrod-content-right">
            <div class="edit-comWord" @click="editWord" style="cursor: pointer;">编辑</div>
            <div class="del-comWord" @click="delWord" style="cursor: pointer;">删除</div>
          </div>
        </div>
        <div class="edit-comWord">
          <el-input
            class="el-input-text edit-input-text"
            type="textarea"
            :rows="3"
            ref="editFocus"
            placeholder="请输入内容"
            v-model="editedWord.content"
            maxlength="50"
          ></el-input>
          <div class="edite-text-length">{{ editedWord.content.length }}/50</div>
        </div>
        <div class="flex btn-box com-bottom">
          <div class="btn-add" @click="addButton">添加</div>
          <div class="btn-ok" @click="okButton">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//现在的方式以下是vue-property-decorator + vuex-clasee 写法；
import { Component, Watch } from "vue-property-decorator";
import { JPConfig } from "@/config/JPConfig";
import store from "@/store/store";
import { Getter, State } from "vuex-class";
import { time } from "@/utils/formatTime";
import { businessTypeEnum } from "@/model/businessEnum/businessTypeEnum";
import {
  instructions_send_par_model,
  specificDataParams_model_detail
} from "@/model/instructionInfo/insQuickReply_model";
import {
  instructionReceive_model,
  param_par_two_model
} from "@/model/instructionReceive/instructionReceive_model";
import { instructReply_model } from "@/model/instructReply/instructReply_model";
import { insQuickReplyService } from "@/bll/instructionInfo/insQuickReplyService";
import { instructionReceiveService } from "@/bll/instructionReceive/instructionReceiveService";
import { instructReplyService } from "@/bll/instructReplay/instructReplyService";
import { Message } from "element-ui";

import { jpConsole } from "@/utils/jpConsole";
@Component({
  data() {
    return {
      taskId: "",
      chatList: []
    };
  }
})
export default class About extends Vue {
  private insQuickService: insQuickReplyService = new insQuickReplyService();
  private chatShow: boolean = false;
  private commonShow: boolean = false;
  private comShow: boolean = false;
  // private selectedShow: boolean = false;
  private textarea: string = "";
  private selectedWord: any = {};
  private editedWord: any = {
    id: "",
    content: "",
    selectedShow: false
  };
  /**消息列表**/
  private chatList: Array<object> = [];
  /**
   * ***
   * 常用语列表
   * **
   * **/
  private comWordList: Array<any> = [];
  /**当前页**/
  private pageIndex: any = 0;
  /**当前指令**/
  private taskId: any;
  /**是否展示查看更多按钮,**/
  private showMoreMsg: boolean = false;
  /**显示加载中，加载更多数据**/
  private chatList_loading_show: boolean = false;
  /**每次切换指令都要重新查询历史聊天信息**/
  @Watch("currentTaskId")
  private on_currentTaskId_command(val: any) {
    this.taskId = val;
    if (val) {
      this.historyMsg(true);
    }
  }
  /**接收signalr推送过来的消息**/
  @Watch("initMsg")
  private on_initMsg_command(val: any) {
    console.log("接收signalr");
    console.log(val);
    if (this.taskId == val.taskId) {
      this.chatList.push(val);
      /**聊天定位到底部 */
      this.$nextTick(() => {
        let scrollBox: any = document.getElementById("chat-box");
        scrollBox.scrollTop = scrollBox.scrollHeight;
      });
    }
  }
  async mounted() {
    this.taskId = this.$store.state.taskId;
    await this.historyMsg(true);
    await this.getPersonQuickReplyList();
  }
  private async openChat() {
    this.chatShow = !this.chatShow;
  }
  private async closeChat() {
    this.chatShow = false;
  }
  /**查询历史消息**/
  private async historyMsg(first: boolean) {
    var _this = this;
    this.chatList_loading_show = true;

    let params = new instructReply_model();
    if (first) {
      this.pageIndex = 0;
      this.chatList = [];
    } else {
      this.pageIndex = this.pageIndex + 1;
    }
    params.pageIndex = this.pageIndex;
    params.userId = this.$store.state.userinfo.userId;
    params.insId = this.taskId;
    params.pageSize = 10;
    params.loadingTarget = ".chat-box";
    let resultData = await new instructReplyService().instructions(params);
    if (resultData.code == "200" && resultData.msg == "ok") {
      _this.chatList_loading_show = false;
      var check_num = 0;
      for (var key in resultData.data.data) {
        var val = resultData.data.data[key];
        var extendedFields = {
          stationName: val.replyStationName,
          userName: val.replyPersonName,
          time: val.replyTime
        };
        var msgContent = {
          policeId: val.userId,
          textare: val.replyContent,
          catalog: 1,
          uri: "",
          fileName: "",
          type: "text",
          imgUrl: require("@/assets/images/calledStation/dom.png")
        };
        var msg: any = {
          time: time.getDateTimeByStr(val.replyTime, false, false),
          id: val.id,
          extendedFields: extendedFields,
          I: "",
          policeId: val.userId,
          content: []
        };
        if (val.replyPersonId == _this.$store.state.userinfo.userId) {
          msg.I = "right";
        } else {
          msg.I = "left";
        }

        if (val.fileIds) {
          for (var i in val.fileInfos) {
            var eleInfo = val.fileInfos[i];
            msgContent.fileName = eleInfo.fileName + "." + eleInfo.fileType;
            msgContent.uri =
              JPConfig.Instance()["jpHttpUrl"] +
              "/api/jp-TIFS-FileCenter-ms/file?businessId=" +
              eleInfo.fileID;
            if (eleInfo.type === "Voice") {
              msgContent.catalog = 3;
            } else {
              msgContent.catalog = 2;
            }
            msgContent.type = eleInfo.type;
            if (msgContent.type == "Video") {
              msgContent.imgUrl = "@/assets/img/disposalResult/video.png";
            }
            msg.content.push(msgContent);
          }
        } else {
          msg.content.push(msgContent);
        }
        _this.chatList.unshift(msg);
      }
      /**如果现在的数据，比总数小，还可以上拉刷新**/
      if (resultData.data.elementsSum > _this.chatList.length) {
        _this.showMoreMsg = true;
      } else {
        _this.showMoreMsg = false;
      }
    } else {
      console.log("历史查询不成功");
      console.log(resultData);
    }

    // // var check_num = 0;
    // for (var key in res.data.data) {

    //   }
    //   //
    //   var ins = false;
    //   for (var i = 0; i < _this.chatRoomList.length; i++) {
    //     var val = _this.chatRoomList[i];
    //     if (val.id == msg.id) {
    //       ins = true;
    //     }
    //   }
    //   if (!ins || _this.pageIndex == 0) {
    //     _this.chatRoomList.unshift(msg);
    //     check_num++;
    //   }
    // }
    // if (check_num == 0) {
    //   _this.historyMsg();
    // } else {
    //   if (res.data.elementsSum > _this.chatRoomList.length) {
    //     _this.showMoreMsg = true;
    //   } else {
    //     _this.showMoreMsg = false;
    //   }
    //   if (_this.first_num == 1) {
    //     this.$nextTick(() => {
    //       var scrollBox = document.getElementById("chat-box");
    //       scrollBox.scrollTop = scrollBox.scrollHeight;
    //     });
    //   }
    //   _this.first_num = _this.first_num + 1;
    //   //读取消息为已读
    //   _this.messageRead();
    // }
  }
  /**发送信息**/
  private async sendMsg(fileKey: any, catalog: any) {
    var textarea = this.textarea.replace(/(^\s*)|(\s*$)/g, "");
    /**内容类型(1:文本 2:文件 3:语音)**/
    if (catalog == 1) {
      if (this.textarea.trim().length < 1) {
        this.$message({
          message: "请输入信息",
          type: "warning"
        });
        return;
      } else if (this.textarea.trim().length > 300) {
        this.$message({
          message: "最大字数不能超过300",
          type: "warning"
        });
        return;
      }
    }
    let params = new instructionReceive_model();
    params.userId = this.$store.state.userinfo.userId;
    params.taskId = this.taskId;

    let sendMessageParam = new param_par_two_model();
    sendMessageParam.catalog = catalog;
    sendMessageParam.forceRemind = false;
    sendMessageParam.visible = 0;
    //文本
    if (!fileKey.params) {
      sendMessageParam.fileKey = [];
      sendMessageParam.payload = textarea;
    } else {
      // 音频 、文件
      sendMessageParam.catalog = fileKey.params.catalog;
      // sendMessageParam.fileKey.push(fileKey.params.fileKey);
    }

    params.sendMessageParam = sendMessageParam;
    params.loadingTarget = ".chat-box"; //'.setComWord';
    let resultData = await new instructionReceiveService().instructions_tasks(
      params
    );
    if (resultData.code == "200" && resultData.msg == "ok") {
      this.textarea = "";
      this.$message({
        message: "消息发送成功",
        type: "success"
      });
    }
  }
  /**当前指令**/
  private get currentTaskId() {
    return this.$store.state.taskId;
  }
  /**当前指令推送过来的signalr信息**/
  private get initMsg() {
    return this.$store.state.signalrMsg;
  }
  private async scrollTop() {
    // let innerHeight = document.querySelector('#chat-box').clientHeight
    // let outerHeight = document.documentElement.clientHeight
    let scrollTop: any = document.getElementById("chat-box");
    if (scrollTop === 0 && this.showMoreMsg) {
      (this.chatList_loading_show = true), //
        this.historyMsg(false);
    }
  }
  private async commonWord(event: any) {
    event.stopPropagation();
    this.commonShow = !this.commonShow;
  }
  private async clearMsg() {
    this.textarea = "";
  }
  private async goComBox() {
    this.commonShow = false;
    this.comShow = !this.comShow;
  }

  private async selectItem(value: any, index: number) {
    this.comWordList.forEach((element, i) => {
      if (i === index) {
        element.selectedShow = true;
      } else {
        element.selectedShow = false;
      }
    });
    // this.comWordList[index].selectedShow = !this.comWordList[index].selectedShow;
    this.selectedWord = value;
    this.selectedWord.index = index;
  }
  /*常用语句增、改、删、查*/
  private async addButton() {
    if (this.comWordList && this.comWordList.length >= 30) {
      Message.warning("最多添加30条常用语");
      return;
    }
    try {
      let respData = await this.insQuickService.addOrEditInsQuickReply({
        userId: this.$store.state.userinfo.userId,
        businessFrom: businessTypeEnum.CaseEvent,
        content: this.editedWord.content,
        signDefault: 0,
        sort: 0,
        id: this.editedWord.id || null
      });
      if (respData.code === 200) {
        this.$notify.success(`保存成功！`);
        // this.getPersonQuickReplyList();
        this.getPersonQuickReplyList();
        // this.
        // if (this.editedWord.index) {
        //   this.comWordList[
        //     this.editedWord.index
        //   ].content = this.editedWord.text;
        // } else {
        //   this.comWordList.push({
        //     content: this.editedWord.text,
        //     selectedShow: false
        //   });
        // }
        this.editedWord.content = "";
        this.editedWord.id = "";
      } else this.$notify.error(`保存失败！`);
    } catch (e) {
      jpConsole.log(e);
      this.$notify.error(`addButton 保存失败！`);
    }
  }
  private async editWord() {
    this.editedWord = { ...this.selectedWord };
    this.$nextTick(() => {
      (this.$refs.editFocus as any).focus();
    });
  }
  private async delWord() {
    this.$confirm("是否删除所选模板回复?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    }).then(async () => {
      let resp = await this.insQuickService.deleteInsQuickReply(
        this.selectedWord.id
      );
      if (resp.code === 200) {
        let index = this.comWordList.findIndex(
          x => x.id === this.selectedWord.id
        );
        this.comWordList.splice(index, 1);
        this.selectedWord = {};
        this.$notify.success(`删除成功！`);
      } else this.$notify.error(`删除失败！`);
    });
  }
  private async getPersonQuickReplyList() {
    //查询所在部门默认模板
    let defaultReplyRespData = await this.insQuickService.getDepDefaultQuickReplyList(
      {
        userId: this.$store.state.userinfo.userId,
        businessFrom: businessTypeEnum.CaseEvent
      }
    );
    if (defaultReplyRespData.code === 200) this.comWordList = [];
    if ((defaultReplyRespData.data as any).length > 0) {
      this.comWordList.push((defaultReplyRespData.data as any)[0]);
    }

    //查询个人模板
    let respData = await this.insQuickService.getPersonQuickReplyList({
      userId: this.$store.state.userinfo.userId,
      businessFrom: businessTypeEnum.CaseEvent
    });
    if (respData.code === 200) {
      for (let i in respData.data) {
        this.comWordList.push({
          ...respData.data[i],
          selectedShow: false,
          content: respData.data[i].content
        });
      }
    } else this.comWordList = [];
  }
  // 关闭常用语编辑框
  private closeButton() {
    this.comWordList.forEach((element, i) => {
      element.selectedShow = false;
    });
    this.comShow = !this.comShow;
  }

  //窗口确认操作
  private async okButton() {
    // let list = this.comWordList;
    let list: any = [];
    //查询个人模板
    let respData = await this.insQuickService.getPersonQuickReplyList({
      userId: this.$store.state.userinfo.userId,
      businessFrom: businessTypeEnum.CaseEvent
    });
    if (respData.code === 200) {
      // let list = respData.data;
      respData.data.forEach(element => {
        let obj = {
          content: element.content || "",
          userId: element.userId || "",
          sort: element.sort || 0,
          signDefault: element.signDefault || 0,
          businessFrom: element.businessFrom || 1,
          selectedShow: element.selectedShow || false,
          text: element.text || ""
        };
        list.push(obj);
      });
    } else this.comWordList = [];
    try {
      let respData = await this.insQuickService.batchAddInsQuickReply({
        businessFrom: businessTypeEnum.CaseEvent,
        userId: this.$store.state.userinfo.userId,
        list: list
      });
      if (respData.code === 200) {
        this.$notify.success(`保存成功！`);
        this.editedWord.id = "";
      } else this.$notify.error(`保存失败！`);
    } catch (e) {
      jpConsole.log(e);
      this.$notify.error(`addButton 保存失败！`);
    }
    this.comShow = !this.comShow;
  }
  // 点击常用语盒子其他部分，自定义常用语盒子关闭
  private showSetting() {
    this.$set(this, "commonShow", false);
  }
  // 自定义常用语盒子不收影响  上面点击图标也不收影响
  private settingEvent(event: any) {
    event.stopPropagation(); //此区域不受上面方法的影响
  }
  private async subCommon(item: any) {
    this.textarea = item.content;
    this.sendMsg("", 1);
    this.commonShow = !this.commonShow;
    let params1 = new specificDataParams_model_detail();
    params1.feedPersonId = "我的id";
    params1.feedTime = "我的时间";
    params1.source = 1;

    let params2 = new instructions_send_par_model();
    params2.catalog = 888;
    params2.fileKey = [];
    params2.forceRemind = false;
    params2.payload = "888";
    params2.receivePartList = ["888", "999"];
    params2.specificDataParams = [];
    params2.specificDataParams.push(params1);

    try {
      // let result = await new instructionInfoService().bus_instructions_back(
      //   params
      // );
      // if (result.code == 200 && result.msg == "ok") {
      //   this.$message({
      //     message: "警情回退成功"
      //   });
      //   this.$emit("closeBackBox", false);
      //   this.$emit("isGetListFlagFn", true);
      // }
    } catch (err) {
      // this.$emit("closeBackBox", false);
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/css/components/chatRoom/chatRoom.scss";
</style>
