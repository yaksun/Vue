<template>
  <div class="msgPops-template">
    <MsgPopDetailPanel
      class="msg-detail-section"
      title="版本日志"
      width="470px"
      height="480px"
      @handleClose="handleClose"
    >
      <div slot="slot-content" class="content car-content">
        <div class="equipList-search-section">
          <div class="equipList-search-title">
            <h5>{{ this.resultData.version }}</h5>
            <i class="equipList-close-btn icon-popups-close28x28"></i>
          </div>
          <div class="banbenhao-show-list">
            <el-scrollbar class="deepadd-scroll-y" style="height:100%">
              <ul>
                <li v-for="(item,index) in this.resultData.data" :key="index">{{ item }}</li>
              </ul>
            </el-scrollbar>
          </div>
        </div>
      </div>
    </MsgPopDetailPanel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit } from "vue-property-decorator";
import { common } from "@/utils/common.ts";
import { versionLogModel } from "@/versionPublish/versionLog";
import { jpConsole } from "@/utils/jpConsole";
import { testService } from "@/bll/testService";

import MsgPopDetailPanel from "@/controls/msgPopDetailPanel.vue";
import MsgPopPanel from "@/controls/msgPopPanel.vue"; //消息弹窗面板
import { test_ui_model, test_result_model } from "../model/test_model";

@Component({
  components: { MsgPopDetailPanel, MsgPopPanel }
})
export default class test extends Vue {
  /**
   * uimodel绑定界面上需要输入值的地方和手动赋值
   */
  private uiModel!: test_ui_model;

  /**
   * 查询、执行返回的结果数据，用于绑定显示
   */
  private resultData = new test_result_model();

  /**
   * 数据加载
   */
  private async mounted() {
    this.resultData = await new testService().getRelation(this.uiModel);
    
  }

  /**
   * 窗体关闭事件
   */
  @Emit("handleClose")
  private handleClose() {}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/css/components/msgPops/msgPops.scss";
@import "~@/assets/css/components/versionLog.scss";
</style>
