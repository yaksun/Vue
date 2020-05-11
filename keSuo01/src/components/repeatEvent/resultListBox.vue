<template>
  <div class="div-result-box" @click="clickBox($event)">
      <p class="text-one-ellipsis" :title="result.alarmInfo.summary">
        {{result.alarmInfo.summary}}
      </p>
    <div class="list-item">
      <div  class="list-item-item text-one-ellipsis" >
        <img src="~@/assets/images/taskList/time-1.png"/>
        <span class="icon-text" :title="result.alarmInfo.sendTime||result.alarmInfo.recvTime">{{result.alarmInfo.sendTime||result.alarmInfo.recvTime}}</span>
      </div>
        <div style="text-align: right;" class="list-item-item text-one-ellipsis">
          <img src="~@/assets/images/taskList/addr-1.png" />
          <span class="icon-text" :title="result.alarmInfo.address">{{result.alarmInfo.address}}</span>
        </div>
    </div>

    <div class="list-item" style="border-top: 1px #03588E solid;">
      <div class="list-item-item">报警人：{{result.alarmInfo.aPerson}}</div>
      <div class="list-item-item">
        报警电话：{{result.alarmInfo.aPhone}}  
      </div>
    </div>

    <div  class="list-item">
      <div  class="list-item-item">状态:{{statusText}}</div>
      <div class="list-item-item">关联警情数：xxxxx</div>
    </div>
    <!-- <div  class="list-item" >
      <div class="list-item-item">
        重复概率：
        <span class="font-light-red">40%</span>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit } from "vue-property-decorator";
import $ from "jquery";
@Component({
  components: {},
})
export default class extends Vue {
  public statusText:string = '';
  /**
   * 查询返回结果
   */
  @Prop() result!:any  
  mounted() {
    this.dealData()
  }
  /**处理数据 */
  dealData(){
    if(this.result.status){
      this.statusText = this.getStatus(this.result.alarmInfo.status);
    }
    if(this.result.taskStateeWord){
      this.statusText = this.result.alarmInfo.taskStateeWord;
    }
    
  }
  /**
     * 处理状态
     */
    getStatus(num: number) {
      let str: string = "";
      switch (num) {
        case 0:
          str = "待处理";
          break;
        case 1:
          str = "处置中";
          break;
        case 2:
          str = "已结束";
          break;
        case 5:
          str = "已撤回";
          break;
        case 6:
          str = "已回退";
          break;
        default:
          str = "其他";
          break;
      }

      return str;
    }
  /**
   * 点击模块
   */
  @Emit("selectedctEvent")
  clickBox(e: any){
    $('.div-result-box').removeClass('div-result-box-selected');
    $((event as any).target).parents('.div-result-box').addClass('div-result-box-selected');
    return this.result;
  }
}
</script>
<style lang="scss" >
.div-result-box {
  border: 1px #d6d7da solid;
  word-break: break-all;
  padding: 10px;
  font-size: 14px;
  line-height: 2;
  cursor: pointer;
}

/*单数*/
.div-search-warnings-list .el-col:nth-child(odd) .div-result-box {
  margin: 10px 10px 5px 0px;
}
/*双数*/
.div-search-warnings-list .el-col:nth-child(even) .div-result-box {
  margin: 10px 0px 5px 10px;
}
</style>