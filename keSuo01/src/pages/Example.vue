<!-- 地图无交互页面---例子 -->
<template>
  <section class="table-page-section">
    <PanelPopup title="我是例子的标题" @handleClose="handleClose">
      <div slot="body-content" class="table-page-wrapper">
        <div class="search-block">
          <div class="search-left">
            <el-form ref="ruleForm" label-width="120px" class="search-form">
              <el-form-item class="search-item" label="下拉框">
                <el-select
                  size="small"
                  v-model="ruleForm.region"
                  placeholder="请选择"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class="search-item" label="输入框">
                <el-input
                  clearable
                  size="small"
                  placeholder="请输入合同编号"
                ></el-input>
              </el-form-item>
              <el-form-item class="search-item" label="时间">
                <el-date-picker
                  size="small"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item class="search-item btns">
                <div class="search-btns">
                  <el-button type="primary">查询</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
          <div class="search-right">
            <el-button icon="el-icon-plus" @click="ifShow('详情弹框',true)"
              >新增</el-button
            >
          </div>
        </div>
        <div class="table-block">
          <el-scrollbar class="common-scroll-y">
            <el-table
              ref="multipleTable"
              :data="tableData3"
              tooltip-effect="dark"
              style="width: 100%"
              stripe
            >
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column label="日期" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip
              >
              </el-table-column>

              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <span class="common-table-btn">删除</span>
                  <span class="common-table-btn">编辑</span>
                </template>
              </el-table-column>
            </el-table>
          </el-scrollbar>
        </div>
        <el-pagination
          class="table-pagination"
          :current-page="tableCurrentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="tablePageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableTotal"
        >
        </el-pagination>
      </div>
    </PanelPopup>

    <!-- 弹框面板 -->
    <DetailPopup
      v-if="isShowDetailPopup"
      title="新增弹框"
      width="1000px"
      height="500px"
      :hasBottom="hasBottom"
      :hasCloseBtn="hasCloseBtn"
      @handleClose="ifShow('详情弹框',false)"
    >
      <!-- 内容部分 -->
      <section
        slot="slot-content"
        class="detail-popup-section"
        style="padding:0 40px;"
      >
        <el-form ref="uiProjectModelForm" label-width="100px">
          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="用户名">
                <el-input
                  clearable
                  placeholder="请输入用户名"
                  size="small"
                  maxlength="32"
                  show-word-limit
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="用户名">
                <el-input
                  clearable
                  placeholder="请输入用户名"
                  size="small"
                  maxlength="32"
                  show-word-limit
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="开始日期">
                <el-date-picker
                  clearable
                  size="small"
                  type="date"
                  placeholder="选择开始日期"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="结束日期">
                <el-date-picker
                  clearable
                  size="small"
                  type="date"
                  placeholder="选择结束日期"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="项目经理">
                <el-select
                  size="small"
                  v-model="ruleForm.region"
                  placeholder="请选择"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目经理">
                <el-select
                  size="small"
                  v-model="ruleForm.region"
                  placeholder="请选择"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </section>
      <!-- 底部按钮部分 -->
      <div slot="slot-bottom">
        <el-button type="default">取消</el-button>
        <el-button type="default">确定</el-button>
      </div>
    </DetailPopup>
  </section>
</template>

<script lang="ts">
  //现在的方式以下是vue-property-decorator + vuex-class写法：
  import Vue from "vue";
  import { jpConsole } from "../utils/jpConsole";
  import { Component, Prop, Emit } from "vue-property-decorator";

  //基础组件
  import PanelPopup from "@/controls/panelPopup.vue"; //背景面板
  import DetailPopup from "@/controls/detailPopup.vue"; //弹框

  //model&service
  // import { test_ui_model } from "../model/test_model";
  // import { testService } from "@/bll/testService";

  //注册组件
  @Component({
    components: { PanelPopup, DetailPopup }
  })
  export default class Example extends Vue {
    /**data */
    private tableData3: Array<any> = [
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-08",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-06",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-07",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      }
    ];
    private tableCurrentPage: number = 1;
    private tableTotal: number = 100;
    private tablePageSize: number = 100;
    private ruleForm: any = {
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    };
    private isShowDetailPopup: boolean = false; //是否显示详情弹框
    private hasBottom: boolean = true; //弹框是否有底部
    private hasCloseBtn: boolean = true; //弹框是否有关闭button

    /**
     * 点击关闭按钮
     */
    private handleClose() {
      jpConsole.log(`点击了关闭按钮`, "");
    }

    /**
     * 点击关闭详情弹框按钮
     */
    private handleCloseDetailPopup() {}

    /**
     * 是否显示各种组件
     */
    private ifShow(name: string, value: boolean) {
      switch (name) {
        case "详情弹框":
          this.isShowDetailPopup = value;
          break;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/pages/example.scss";
</style>
