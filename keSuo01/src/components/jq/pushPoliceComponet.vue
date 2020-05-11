<template>
  <div :class="[selectPoliceArr.length > 0 ? 'push-box-tips' : '', 'push-box']" v-drag>
    <div class="title-box drog-box">
      <div class="left-box">
        <img src="~@/assets/images/police-box/push-icon.png">
        <span>分派列表</span>
      </div>
      <img src="~@/assets/images/police-box/close.png" title="关闭" @click="closePushPoliceBox">
    </div>
    <div class="function-box">
      <div class="left-box">
        <div class="search-box">
          <input placeholder="请输入姓名或者警号进行搜索" v-model="keyWord" @keyup.enter="searchPolice" />
          <i class="el-icon-search" @click="searchPolice"></i>
        </div>
        <div class="condition-box">
          <el-checkbox-group v-model="checkedLists" @change="handleCheckedListsChange">
            <el-checkbox v-for="list in lists" :label="list" :key="list">{{list}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="right-box">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-button @click="handelPushMorePolice">推送</el-button>
      </div>
    </div>
    <div class="select-list-box" v-show="selectPoliceArr.length > 0">
      <p>已选：</p>
      <div class="btn-selected-box">
        <div class="btn-selected" v-for="(item, index) in selectPoliceArr" :key="item.userId">
          <span :title="item.policeName" class="ellipsis">{{item.policeName}}</span>
          <img src="~@/assets/images/police-box/close-selected.png" title="取消" @click="cancelSelectPolice(index)">
        </div>
      </div>
    </div>
    <div :class="[selectPoliceArr.length === 0 ? 'police-list-box-tips' : '', 'police-list-box']">
      <div :class="[item.selected ? 'selected' : '', 'police-info-box']" v-for="(item, index) in policeDatas" :key="item.userId">
        <div class="top-info-box" @click="selectPolice(item, index)">
          <div class="info-box">
            <img src="~@/assets/images/police-box/police-img.png">
            <div class="info">
              <p class="ellipsis" :title="item.policeName + '('+ item.policeCode + ')'">{{item.policeName}}({{item.policeCode}})</p>
              <p>{{item.stationName}}</p>
            </div>
          </div>
          <div class="status-box">
            <div :class="[item.onlineStatus === 0 ? '' : 'online', 'if-online-box']">
              <span class="status"></span>
              <span>{{item.onlineStatus | onlineStatus}}</span>
            </div>
            <div :class="[item.sendStatus === 0 ? '' : 'pushed', 'if-pushed-box']">{{item.sendStatus | sendStatus}}</div>
          </div>
        </div>
        <div class="push-function-box">
          <div v-if="item.sendStatus == 0" class="left-push-box" @click.stop="handlePushPolice(item)">
            <img src="~@/assets/images/police-box/push.png">
            <span>推送</span>
          </div>
          <div v-if="item.sendStatus == 1" class="left-push-box" @click.stop="rePushPolice(item)">
            <img src="~@/assets/images/police-box/push.png">
            <span>重推</span>
          </div>
          <div class="right-push-box" @click.stop="handleBack(item)">
            <img src="~@/assets/images/police-box/reback.png">
            <span>撤回</span>
          </div>
        </div>
        <img v-if="item.selected" class="select-police-box" src="~@/assets/images/police-box/selected.png">
      </div>
    </div>
    <div class="page-box">
      <img src="~@/assets/images/police-box/left-page.png" title="上一页" @click="goUpPage">
      <div class="page">
        <span class="current-page">{{pageIndex}}</span>
        <span>/</span>
        <span>{{maxPage}}</span>
      </div>
      <img src="~@/assets/images/police-box/right-page.png" title="下一页" @click="goDownPage">
    </div>
  </div>     
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Emit } from "vue-property-decorator";
import { Action, Getter, State, Mutation } from "vuex-class";

import { userPageParameter_ui_model } from "@/model/instructionInfo/taskInfo_model";
import { instructionInfoService } from "@/bll/instructionInfo/taskInfoService";

import {
  orderTaskPush_par_model,
  orderTaskBack_par_model,
  orderTaskRePush_par_model,
} from "@/model/instructionInfo/orderTask_model";
import { orderTaskService } from "@/bll/instructionInfo/orderTaskService";

@Component({
  filters: {
    reportStatus: (val: number) => {
      let arr = ['未报备', '已报备'];
      return arr[val];
    },
    sendStatus: (val: number) => {
      let arr = ['未推送', '已推送'];
      return arr[val];
    },
    onlineStatus: (val: number) => {
      let arr = ['不在线', '在线'];
      return arr[val];
    }
  },
})
export default class PushPolice extends Vue {
  @Prop() public currentInsDatas!: any; // 当前指令的数据
  
  @Getter('getUserinfo') userInfo: any; // 用户信息
  @Getter('getCurrentInsInfo') currentInsInfo: any; //当前指令信息

  public pageSize: number = 5; // 查询一页数量
  public pageIndex: number = 1; // 索引 
  public maxPage: number = 0; // 最大页码
  public keyWord: string = ''; // 关键字
  public status: any = []; // 警员状态 1在线、0离线、3报备、4未报备

  public totalNum: number = 0; // 警察总数
  public policeDatas: any = []; // 警察列表数组
  public selectPoliceArr: Array<object> = []; // 选中警察列表

  // private lists: Array<string> = ['在线', '离线', '报备', '未报备'];
  private lists: Array<string> = ['在线', '离线'];
  private checkedLists: Array<string> = [];
  private checkAll: boolean = false;
  private isIndeterminate: boolean = true;

  mounted () {
    this.getPoliceList();
    console.log(this.currentInsDatas);
  }

  /** 关闭民警弹框 */
  closePushPoliceBox() {
    this.$emit('closePushPolice', false);
  }

  /** 
   * 查询 
   */
  private searchPolice() {
    this.getPoliceList();
  }

  /** 上一页 */
  goUpPage() {
    if(this.pageIndex < 1) {
      this.pageIndex = 1;
    }
    this.pageIndex--;
    this.getPoliceList();
  }

  /** 下一页 */
  goDownPage() {
    if(this.pageIndex > this.maxPage) {
      this.pageIndex = this.maxPage;
    }
    this.pageIndex++;
    this.getPoliceList();
  }

  /** 取消民警选中 */
  cancelSelectPolice(idx: number) {
    let selectData: any = this.selectPoliceArr[idx];
    console.log(selectData);
    /* 取消显示民警轨迹和时间 */
    this.$emit('closeShowTimeAndDistance', selectData);
    this.selectPoliceArr.splice(idx, 1);
    this.policeDatas.map((item:any, index: number) => {
      if (item.userId === selectData.userId) {
        this.policeDatas[index].selected = false;
      }
    })
  }

  /** 选中民警 */
  selectPolice(item: any, index: number) {
    if (item.userId === this.userInfo.userId) {
       this.$message({
        type: 'warning',
        message: '推送人和接收人不能为同一个人！'
      });
      return;
    }
    this.policeDatas[index].selected = !this.policeDatas[index].selected;

    /** 选中插入数组 */
    if (this.policeDatas[index].selected) {
      this.selectPoliceArr.push(item);
      /** 展示民警轨迹和时间 */
      this.$emit('showTimeAndDistance', item);
      return;
    }

    /** 取消选中 */
    if (!this.policeDatas[index].selected) {
      this.$emit('closeShowTimeAndDistance', item);
    }

    /** 选中取消 在数组中删除此项 */
    if (this.selectPoliceArr.length > 0) {
      this.selectPoliceArr.map((val: any, index: number) => {
        if (item.userId === val.userId) {
          this.selectPoliceArr.splice(index, 1);
          return;
        }
      })
    }
    console.log(this.selectPoliceArr)
  }

  /** 获取民警列表 */
  public async getPoliceList() {
    let params = new userPageParameter_ui_model();
    params.keyWord = this.keyWord;
    params.pageSize = this.pageSize;
    params.pageIndex = this.pageIndex;
    params.status = this.status; // 分状态查询接口目前不支持
    params.stationId = this.userInfo.policeStationInfo.id; // 部门ID
    params.insId = this.currentInsDatas.id;
    params.loadingTarget=".right-push-box";

    let result = await new instructionInfoService().bus_instructions_page(params);
    if(result.code == '200' && result.msg == 'ok') {
      this.totalNum = result.data.elementsSum;
      this.maxPage = Math.ceil(this.totalNum / this.pageSize);
      /** 添加是否选中状态值 */
      result.data.data.map((item: any) => {
        item.selected = false;
      });
      this.policeDatas = result.data.data;
      this.selectPoliceArr = [];
      console.log(this.policeDatas);
    }

  }

  private handleCheckedListsChange(val: any) {
    console.log(val);
    this.status = [];
    val.map((item:any) => {
      if(item === '在线') {
        this.status.push(1);
      }

      if(item === '离线') {
        this.status.push(0);
      }
    })
    this.getPoliceList();
  }

  private handleCheckAllChange(val: Array<string>) {
    console.log(val);
    this.checkedLists = val ? this.lists : [];
    this.status = val ? ['1', '2'] : [];
    this.isIndeterminate = false;
  }

  /** 推送多个民警 */
  public async handelPushMorePolice() {
    if (this.selectPoliceArr.length === 0) {
      this.$message({
        type: 'warning',
        message: '请选择推送民警'
      });
      return;
    }

    let params = new orderTaskPush_par_model();
    params.taskId = this.currentInsDatas.taskId;
    params.userId = this.userInfo.userId;
    let receivePartParamObj: any = {
      receivePartParam: []
    };
    this.selectPoliceArr.map((item: any) => {
      let obj = {
        /***内容类型(1:文本 2:文件 3:语音)***/
        catalog: 1,
        /***文件ID集合***/
        fileKey: [],
        /***	是否知会(0:不知会 1:知会)***/
        isNotified: 0,
        /***用户或者部门标识符***/
        partId: item.userId,
        /***	参与者类型(0:人 1:部门 2:警务通 3:车小丫 4:手台)***/
        partType: 0,
        /***内容***/
        payload: this.userInfo.policeStationInfo.stationName + '分派给' + item.policeName,
        /***推送设备类型，默认全部ALL***/
        pushDevice: 'ALL',
        /***限制时长***/
        timeSpan: this.currentInsDatas.timeSpan,
        /***限制时长单位***/
        timeUnit: this.currentInsDatas.timeUnit
      };
      receivePartParamObj.receivePartParam.push(obj);
    })
    params.receivePartParamObj = receivePartParamObj;
    let resultData = await new orderTaskService().orderTaskPush(params);
    if(resultData.code == '200' && resultData.msg == 'ok') {
      this.$message({
        type: 'success',
        message: '推送成功！'
      });
      this.getPoliceList();
    }
  }

  /** 推送民警 */
  public async handlePushPolice(item: any) {
    if (item.userId === this.userInfo.userId) {
      this.$message({
        type: 'warning',
        message: '推送人和接收人不能为同一个人！'
      });
      return;
    }
    let params = new orderTaskPush_par_model();
    params.taskId = this.currentInsDatas.taskId;
    params.userId = this.userInfo.userId;
    params.receivePartParamObj = {
      receivePartParam: [
        {
          /***内容类型(1:文本 2:文件 3:语音)***/
          catalog: 1,
          /***文件ID集合***/
          fileKey: [],
          /***	是否知会(0:不知会 1:知会)***/
          isNotified: 0,
          /***用户或者部门标识符***/
          partId: item.userId,
          /***	参与者类型(0:人 1:部门 2:警务通 3:车小丫 4:手台)***/
          partType: 0,
          /***内容***/
          payload: this.userInfo.policeStationInfo.stationName + '分派给' + item.policeName,
          /***推送设备类型，默认全部ALL***/
          pushDevice: 'ALL',
          /***限制时长***/
          timeSpan: this.currentInsDatas.timeSpan,
          /***限制时长单位***/
          timeUnit: this.currentInsDatas.timeUnit
        }
      ]
    };
    let resultData = await new orderTaskService().orderTaskPush(params);
 
    if(resultData.code == '200' && resultData.msg == 'ok') {
      this.$message({
        type: 'success',
        message: '推送成功！'
      });
      this.getPoliceList();
    }
  }

  /** 撤回推送 */
  public async handleBack(item: any) {
    console.log(item);
    if (item.userId && item.sendStatus === 1) {
      let params = new orderTaskBack_par_model();
      params.userId = this.userInfo.userId;
      params.taskIdList = item.taskId;
      let resultData = await new orderTaskService().orderTaskBack(params);
      if(resultData.code == '200' && resultData.msg == 'ok') {
        this.$message({
          type: 'success',
          message: '撤回成功！'
        });
        this.getPoliceList();
      }
    } else {
       this.$message({
          type: 'warning',
          message: '当前民警没推送，不能撤回！'
        });
    }
  }

  /** 一键重发 */
  public async rePushPolice(item: any) {
    let params = new orderTaskRePush_par_model();
    params.taskId = item.taskId;
    let resultData = await new orderTaskService().orderTaskRePush(params);
    if(resultData.code == '200' && resultData.msg == 'ok') {
      this.$message({
        type: 'success',
        message: '一键重推成功！'
      });
      this.getPoliceList();
    }
  }
}

</script>

<style lang="scss" scoped>
@import "~@/assets/css/components/pushPoliceComponent/pushPolice.scss";
</style>