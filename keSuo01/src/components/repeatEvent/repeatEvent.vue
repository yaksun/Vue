<template>
  <div class="case-relations-w" v-drag>
    <div class="title-box drog-box">
      <div class="left-box">
        <img src="~@/assets/images/notice/notice-icon.png" />
        <span>警情关联</span>
      </div>
      <img
        src="~@/assets/images/police-box/close.png"
        title="关闭"
        @click="closeRepeatEventBox()"
      />
    </div>
    <div class="content-box">
      <div style="flex-direction: column;display: flex;">
        <!--可能重复警情-->
        <div id="div-forecast-result-list" v-if="PossibleRepetitionWarningsList.length>0">
          <el-row>
            <el-col :span="24">
              <h5 style="margin-left: 20px;margin-bottom: 0px;">可能重复警情</h5>
            </el-col>
          </el-row>

          <div style="width: 100%;	white-space: nowrap;overflow-x: auto;overflow-y: hidden;">
            <div
              v-for="(item, index) in PossibleRepetitionWarningsList"
              :key="index"
              style="width: 33%;display: inline-block;padding: 10px 20px;"
            >
              <resultListBox :result="item" @showAlarmInfoDetail="showAlarmInfoDetail"  @selectedctEvent="selectedctEvent"></resultListBox>
            </div>
          </div>
        </div>
      </div>
      <div style="flex: 1;border-top: 1px #03588E solid;">
        <!--左侧查询列表-->
        <div style="width: 70%; float: left;height: 100%;padding: 0 20px 1%;">
          <div style="width: 100%;height: 100%;flex-direction: column;display: flex;">
            <el-tabs v-model="activeName" :stretch="true" @tab-click="tabHandleClick">
              <el-tab-pane label="全部警情" name="first"></el-tab-pane>
              <el-tab-pane label="已关联警情" name="second"></el-tab-pane>
            </el-tabs>
            <!--全部警情-->
            <div v-show="activeName=='first'" style="flex-direction: column;display: flex;">
              <!--查询条件-->
              <div>
                <normalSearch @getSearchDataByParameter="getSearchDataByParameter"></normalSearch>
              </div>
              <!--列表-->
              <div class="div-search-warnings-list" style="flex: 1;overflow: auto;">
                <el-row v-if="totalNum > 0">
                  <el-col v-bind:span="12" v-for="(item, index) in wholeWarningsList" :key="index">
                    <resultListBox :result="item" @selectedctEvent="selectedctEvent"  @showAlarmInfoDetail="showAlarmInfoDetail"></resultListBox>
                  </el-col>
                </el-row>
                <div  v-else class="common-noData">---暂无数据---</div>
              </div>
              <div>
                <!--翻页-->
                <div v-if="totalNum > 0" class="div-datelist-pagination" style="text-align: center;">
                  <div style="padding: 10px 0;">
                    <el-pagination
                      small
                      :page-size="pageSize"
                      layout="total,jumper,prev, pager, next"
                      @current-change="handleCurrentChange"
                      :current-page="pageIndex"
                      :total="totalNum"
                    ></el-pagination>
                  </div>
                  <div>
                    <el-button size="mini" v-if="!currentInsDatas.noticeStatus" type="primary" @click="addAlarmRepeatConfirm">确定关联</el-button>
                  </div>
                </div>
              </div>
            </div>

            <!--已关联警情-->
            <div v-show="activeName=='second'" style="flex-direction: column;display: flex;">
              <!--列表-->
              <div v-if="isHasPower" class="div-search-warnings-list" style="flex: 1;overflow: auto;">
                <el-row v-if="RepetitionWarningsList.length > 0">
                  <el-col
                    :span="12"
                    v-for="(item, index) in RepetitionWarningsList"
                    :key="index"
                  >
                    <resultListBox :result="item"  @showAlarmInfoDetail="showAlarmInfoDetail"  @selectedctEvent="selectedctEvent"></resultListBox>
                  </el-col>
                </el-row>
                <div  v-else class="common-noData">---暂无数据---</div>
              </div>
              <div v-else>
                <h3 style="text-align: center;">该用户无权查看关联的重复警情信息</h3>
              </div>
            </div>
          </div>
        </div>
        <!--右侧详情-->
        <div
          style="width: 30%; float: left;height: 100%;padding: 0px 0px 0px 10px;border-left:1px #03588E  dashed;"
        >
          <AlarmInfoDetail
            v-if="isDetailDisplay"
            :AlarmInfoDetail="selectedDataInfo"
            @closeDetail="closeDetail"
          ></AlarmInfoDetail>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/*
 *
 * */
import Vue from "vue";
import { Component, Prop, Emit } from "vue-property-decorator";
import { State, Mutation, Getter } from "vuex-class";
import normalSearch from "@/components/repeatEvent/normalSearch.vue";
// import taskDetail from "@/components/taskList/taskDetail.vue";
import AlarmInfoDetail from "@/components/repeatEvent/baseInfoBox.vue";
import resultListBox from "@/components/repeatEvent/resultListBox.vue";
import { RepeatEventService } from "@/bll/repeatEvent/repeatEvent";
import {
  /**
   * 查询大数据推荐的重复警情
   */
  RepeatEvent_bigData_ui_model,
  /**
   * 重复警情-警情列表高级查询
   */
  RepeatEvent_list_ui_model,
  /**
   * 重复警情-关联接口
   */
  RepeatEvent_add_ui_model,
  /**
   * 重复警情-根据sn查询所有与他关联的警情详情，有权限
   */
  RepeatEvent_relationed_ui_model,
  /**获取已关联流水号 */
  RepeatEvent_relation_num_ui_model
} from "@/model/repeatEvent/repeatEvent_model";
import { Loading } from "element-ui";
@Component({
  components: {
    /**任务详情 */

    AlarmInfoDetail,
    /**查询 */

    normalSearch,
    /**任务列表 */

    resultListBox
  }
})
export default class repeatEvent extends Vue {
  public pageIndex: number = 1; // 页码
  public pageSize: number = 10; // 查询个数
  public totalNum: number = 0; // 总页码数

  @Getter("getUserinfo") userInfo: any;
  
  @Prop() currentInsDatas!: any;
  /**展示tab */
  activeName: string = "first";
  /**权限 */
  isHasPower: boolean = true;
  /**选中警情id */
  selectedId: string = "";
  /**选中警情信息 */
  selectedDataInfo: any;
  keyWord!: string;
  instructType!: number;
  levels!: Array<any>;
  alarmCategory!: string;
  origins!: Array<any>;
  caseTypeIds!: Array<any>;
  hasRepeatAlarm!: boolean;
  /**
   * 重复警情
   */
  public PossibleRepetitionWarningsList: any[] = [];
  /**
   * 列表
   */
  wholeWarningsList: any[] = [
  ];
  /**
   * 已关联警情
   */
  RepetitionWarningsList: any[] = [
  ];
  mounted() {
    /**获取大数据智能关联推荐 */
    this.getBigDataRepeatEvent();
    /**获取所有列表 */
    this.getList();
    /**获取已关联的警情流水号 */
    this.getRelationsData();
  }
  /**tab切换 */
  tabHandleClick(tab: any) {
    if (tab.name === "first") {
      this.getList();
    } else {
      this.getRelationedList();
    }
  }
  /**获取所有列表 */
  async getList() {
    let param = new RepeatEvent_list_ui_model();
    param.userId = this.userInfo.userId;
    param.alarmPageParam.hasRepeatAlarm = this.hasRepeatAlarm;
    param.alarmPageParam.keyWord = this.keyWord;
    param.alarmPageParam.levels = this.levels;
    param.alarmPageParam.origins = this.origins;
    param.alarmPageParam.caseTypeIds = this.caseTypeIds;
    param.pageIndex = this.pageIndex - 1;
    param.pageSize = this.pageSize;
    param.status = this.instructType;
    param.startTime = this.formatDate(new Date(), "yyyy-MM-dd") +
        "T00:00:00.0000000+08:00";
    param.endTime = this.formatDate(new Date(), "yyyy-MM-dd") +
        "T23:59:59.0000000+08:00";
    let resultData = await new RepeatEventService().getRepeatEventList(param);
    if (resultData.code == "200" && resultData.msg == "ok") {
      resultData.data.list.map((item: any) => {
        item.sendTime = this.formatDate(new Date(item.sendTime), "yyyy-MM-dd hh:mm:ss") 
      });
      this.wholeWarningsList = resultData.data.list;
      this.totalNum = resultData.data.num;
    }
  }
  /**获取已关联列表 */
  async getRelationedList() {
    let _this:any = this;
    let param = new RepeatEvent_relationed_ui_model();
    param.eventSn = this.currentInsDatas.no;
    param.userId = this.userInfo.userId;
    let resultData = await new RepeatEventService().getRepeatEventRelationedList(
      param
    );
    if (resultData.code == "200" && resultData.msg == "ok") {
      _this.RepetitionWarningsList =
        resultData.data && resultData.data.instructInfoList
          ? resultData.data.instructInfoList
          : [];
      _this.RepetitionWarningsList.forEach((value:any,index:number, array:any)=> {
        if(value.alarmInfo.recvTime){
          // 处理时间
          _this.RepetitionWarningsList[index].alarmInfo.recvTime = _this.formatDate(new Date(value.recvTime), "yyyy-MM-dd hh:mm:ss") 
        }
        // 处理状态
        _this.RepetitionWarningsList[index].alarmInfo.status = value.status;
         // 处理【警情摘要】
        _this.RepetitionWarningsList[index].alarmInfo.summary = `【警情摘要】${value.alarmInfo.summary}`
      });
    } else {
      if (
        resultData.errCode &&
        (resultData.errorMsg as any).indexOf("该用户无权查看关联的重复警情信息") > -1
      ) {
        _this.isHasPower = false;
      } else {
        _this.isHasPower = true;
      }
    }
  }
  /**获取大数据智能关联推荐 */
  async getBigDataRepeatEvent() {
    let param = new RepeatEvent_bigData_ui_model();
    param.userId = this.userInfo.userId;
    param.eventSn = this.currentInsDatas.no;
     param.startDate = this.formatDate(new Date(), "yyyy-MM-dd") +
        "T00:00:00.0000000+08:00";
    param.endDate = this.formatDate(new Date(), "yyyy-MM-dd") +
        "T23:59:59.0000000+08:00";
    param.similarity = 90;
    let resultData = await new RepeatEventService().getBigDataRecomend(param);
    if (resultData.code == "200" && resultData.msg == "ok") {
      this.PossibleRepetitionWarningsList =
        resultData.data && resultData.data.instructInfoList
          ? resultData.data.instructInfoList
          : [];
    }
  }
  
  /**关联警情问询框*/
  async addAlarmRepeatConfirm() {
    let confirmStr:string = '是否确定与“' + this.selectedId + '”的警情关联?';
    this.$confirm(confirmStr, '提示', {
      cancelButtonClass: 'el-button--info',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.saveAlarmRepeat();
    }).catch(() => {

    });
  }
  /**关联警情保存接口*/
  async saveAlarmRepeat() {
    let param = new RepeatEvent_add_ui_model();
    param.addUserId = this.userInfo.userId;
    param.startSn = this.selectedId;
    param.endSn = this.currentInsDatas.no;
    let resultData = await new RepeatEventService().addRepeatEvent(param);
    if(resultData.code == "200" && resultData.msg == "ok") {
        this.$message({
              type: 'success',
              message: '关联成功！'
            });
        this.closeRepeatEventBox();
    } else{

    }
  }
  /**选中警情 */
  selectedctEvent(data:any){
    this.selectedId = data.no;
    this.selectedDataInfo = data;
    this.showAlarmInfoDetail()
  }
  /**获取已关联的警情流水号 */
  public async getRelationsData(){
    let params = new RepeatEvent_relation_num_ui_model();
    params.eventSn = this.currentInsDatas.no;
    let resultData = await new RepeatEventService().getRelationNum(params);
    if(resultData.code == "200" && resultData.msg == "ok"){
      // this.form.repeatAlarm = resultData.data.join();
    } else{
      // this.form.repeatAlarm = "";
    }
  }
  /**
   * 是否展示警情详情
   */
  isDetailDisplay: boolean = false;
  /**打开警情详情 */
  showAlarmInfoDetail() {
    this.isDetailDisplay = true;
  }
   /**关闭警情详情 */
  closeAlarmInfoDetail() {
    this.isDetailDisplay = false;
  }
  /**
   * 关闭关联重复警情
   */
  @Emit("closeRepeatEventBox")
  closeRepeatEventBox() {}
  /**
   * 翻页
   */
  handleCurrentChange(value:number) {
    this.pageIndex = value;
    this.getList();
  }
  /**
   * 关闭详情组件
   */
  closeDetail() {}
  /**
   * 查询条件参数
   */
  getSearchDataByParameter(data: any) {
    this.keyWord = data.keyWord;
    this.instructType = data.instructType;
    this.levels = data.levels;
    this.origins = data.origins;
    this.caseTypeIds = data.caseTypeIds;
    this.hasRepeatAlarm = data.hasRepeatAlarm;
    this.getList();
  }
  formatDate(date: any, fmt: string) {
    if (date.getMonth().toString() == "NaN") {
      date = new Date();
    }

    function padLeftZero(str: string) {
      return ("00" + str).substr(str.length);
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    let o: any = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
    let k: any;
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? str : padLeftZero(str)
        );
      }
    }
    return fmt;
  }
  formatDateToJavaJson(str: string) {
    str = str.replace(" ", "T");
    str = str + ".0000000+08:00";
    return str;
  }
}
</script>
<style lang="scss">
.case-relations-w {
  .el-tabs.el-tabs--top .el-tabs__item {
    color: #000 !important;
    &.is-active {
      color: #4179f6 !important;
    }
  }
  .template-detail {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    .detail-content {
      overflow-y: auto;
    }
    .detail-title-box {
      display: none;
    }
  }
  .el-pagination .el-pager .number{
    color:#000;
  }
}
.case-relations-w {
  width: 62.5%;
  height: 70%;
  background-color: #ffffff;
  box-shadow: 0px 10px 7px 1px #f0f1f1;
  border-radius: 6px;
  border: solid 1px #e0e0e0;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: 999;
  .title-box {
    width: 100%;
    height: 54px;
    border-bottom: solid 1px #eaeaea;
    background-color: #4179f6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px 0 20px;
    color: #fff;
    font-size: 16px;
    .left-box {
      img {
        margin-right: 14px;
        width: 24px;
        height: 24px;
      }
    }

    > img {
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }
  .content-box {
    width: 100%;
    height: calc(100% - 56px);
    overflow-y: scroll;
  }
}
.div-search-warnings-list{
  .list-item{
    display:flex;
    .list-item-item{
      align-items:center;
      flex:1;
      color: #333;
      font-size: 0.8em;
    }
    
  }
  .div-result-box-selected {
    // background-color: #0061b9 !important;
    border:1px solid #4179f6;
  }
}
.list-item{
  .icon-text{
      margin-left:5px;
      font-size: 13px;
    }
}
</style>