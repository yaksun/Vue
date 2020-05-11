<template>
  <div class="template-detail" >
    <!--头部-->
    <div class="detail-title-box flex-between flex-item">
       <div class="flex">
         <img class="title-img" src='~@/assets/images/taskList/police-info.png'/>
         <div>警情信息</div>
       </div>
       <img class='close-img' src='~@/assets/images/calledStation/close-1.png' @click="closeDetail"/>
    </div>
    <!--下面的内容-->
    <div class="detail-content-box">
      <div class="detail-content">
         <!--基本信息-->
        <div class="content-box">
          <div class="content-title">基本信息</div>
          <div class="content-list">
            <div class="flex content-item">
              <div class="item-left">流水号</div>
              <div class="item-right" >{{detailInfo.sn}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">接警时间</div>
              <div class="item-right">{{detailInfo.recvTime}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">接警员</div>
              <div class="item-right">{{detailInfo.recvPerson}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">报警时间</div>
              <div class="item-right">{{detailInfo.alarmTime}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">报警电话</div>
              <div class="item-right">{{detailInfo.aPhone}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">机主姓名</div>
              <div class="item-right">{{detailInfo.aperson}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">案件来源</div>
              <div class="item-right">{{detailInfo.origin}}</div>
            </div>
          </div>
        </div>
        <!--警情信息-->
        <div class="content-box">
          <div class="content-title">警情信息</div>
          <div class="content-list">
            <div class="flex content-item">
              <div class="item-left">警情摘要</div>
              <div class="item-right">{{detailInfo.summary}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">发案地址</div>
              <div class="item-right">{{detailInfo.address}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">等级</div>
              <div class="item-right">{{detailInfo.levels}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">案件类型</div>
              <div class="item-right">{{detailInfo.alarmCategoryName}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">发案部位</div>
              <div class="item-right">{{detailInfo.casePositionName}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">报警人</div>
              <div class="item-right">{{detailInfo.aphoneOwner}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">性别</div>
              <div class="item-right">{{detailInfo.aPersonGender}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">联系电话</div>
              <div class="item-right">{{detailInfo.apersonPhone}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">历史报警次数</div>
              <div class="item-right item-alarmCount" @click="historyCount">{{detailInfo.alarmCount}}</div>
            </div>
          </div>
        </div>
         <!--处警信息-->
        <div class="content-box">
          <div class="content-title">处警信息</div>
          <div class="content-list">
            <div class="flex content-item">
              <div class="item-left">处置结果</div>
              <div class="item-right" >{{detailInfo.eventResult}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">回告人单位</div>
              <div class="item-right">{{detailInfo.reportStationName}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">回告人</div>
              <div class="item-right" >{{detailInfo.reportPoliceUserName}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">到场时间</div>
              <div class="item-right" v-if="detailInfo.dealModelList">{{detailInfo.dealModelList.policedTime}}</div>
              <!--<div class="item-left">回告时间</div>-->
              <!--<div class="item-right">{{detailInfo.reportTime}}</div>-->
            </div>
            <div class="flex content-item">
              <div class="item-left">处警部门</div>
              <div class="item-right">{{detailInfo.handleStationName}}</div>
            </div>
            <div class="flex content-item">
              <div class="item-left">处警人</div>
              <div class="item-right">{{detailInfo.handleUserNames}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

// //常规写法
// export default Vue.extend({
//   name: "BaseComponent",
//   data() {
//     return {};
//   },
//   methods: {},
//   computed: {}
// });

//现在的方式以下是vue-property-decorator + vuex-class写法：
import { Component, Prop ,Emit} from "vue-property-decorator";
import { time } from "@/utils/formatTime";
import { alarmService } from "@/bll/sysManage/alarmService";
import {businessModel_par_model} from "@/model/sysManage/alarm_result_model";

@Component({
  props:['taskDetail'],
  data(){
    return{
detailInfo:{}
    }


  }
})

export default class taskDetail extends Vue {

  @Prop() private taskDetail!:any;
  /**素有详情信息**/
  private detailInfo:any;
  /**当前业务id**/
  private id:any;
  /**
   * 业务类型
   * **/
  private type:any;
  /***所有的详情信息***/
  creater(){
    alert('taskDetail')
    console.log(this.taskDetail);
    // debugger;
  }
mounted() {
  this.id = this.taskDetail.businessKey
  this.type = this.taskDetail.businessFrom
  this.viewDetail();
}
/**查询详情**/
private async viewDetail(){
  let param = new businessModel_par_model();
  param.id = this.id;
  param.type= this.type;
  let resultData = await new alarmService().orderAggregation_business_detail(
    param
  )
  if (resultData.code == "200" && resultData.msg == "ok") {
    this.detailInfo = resultData.data
    this.detailInfo.alarmTime = time.getDateTimeByStr(this.detailInfo.alarmTime, false, false)
    this.detailInfo.recvTime =time.getDateTimeByStr(this.detailInfo.recvTime, false, false)
    /**案件类型**/
    if(this.detailInfo.alarmTypeName){
      this.detailInfo.alarmCategoryName = this.detailInfo.alarmCategoryName+'/'+this.detailInfo.alarmTypeName
    }
    if(this.detailInfo.alarmTinyTypeName){
      this.detailInfo.alarmCategoryName = this.detailInfo.alarmCategoryName+'/'+this.detailInfo.alarmTinyTypeName
    }
    /**发案部位**/
    if(this.detailInfo.positionTypeName){
      this.detailInfo.casePositionName=this.detailInfo.casePositionName +'/'+this.detailInfo.positionTypeName
    }
    if(this.detailInfo.positionTinyTypeName){
      this.detailInfo.casePositionName=this.detailInfo.casePositionName +'/'+this.detailInfo.positionTinyTypeName
    }
  }

}
/***
 * 关闭详情页面
*/
closeDetail(){
  this.$emit('closeDetail',false)
  // this.isVisibale = !this.isVisibale
}

/**查看历史次数**/
 historyCount(){

 }
}
</script>
<style lang="scss">
  @import "~@/assets/css/components/taskList/taskDetail.scss";
</style>

