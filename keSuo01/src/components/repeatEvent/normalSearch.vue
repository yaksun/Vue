<template>
  <div class="normal-search">
    <el-form label-width="85px" label-position="right">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="关键字：">
            <el-input size="mini" v-model="keyWord"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="警情状态：">
            <div class="select-source">
              <div class="mut-select f-l">
                <el-select v-model="instructType" collapse-tags placeholder="请选择">
                  <el-option
                    v-for="item in selectStatusDataList"
                    :key="item.dicKey"
                    :label="item.dicValue"
                    :value="parseInt(item.dicKey)"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="警情级别：">
            <div class="select-source">
              <div class="mut-select f-l">
                <el-select v-model="levels" multiple collapse-tags placeholder="请选择">
                  <!--<el-option label="全选" value=""></el-option>-->
                  <el-option
                    v-for="item in selectLevelDataList"
                    :key="item.dicKey"
                    :label="item.dicValue"
                    :value="parseInt(item.dicKey)"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="警情来源：">
            <div class="select-source">
              <div class="mut-select f-l">
                <el-select v-model="origins" multiple collapse-tags placeholder="请选择">
                  <!--<el-option label="全选" value=""></el-option>-->
                  <el-option
                    v-for="item in selectSourceDataList"
                    :key="item.id"
                    :label="item.sourceName"
                    :value="(item.sourceCode)"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="案件类别：">
            <div class="select-source">
              <div class="mut-select f-l">
                <el-select v-model="caseTypeIds" multiple collapse-tags placeholder="请选择">
                  <!--<el-option label="全选" value=""></el-option>-->
                  <el-option
                    v-for="item in selectCaseDataList"
                    :key="item.id"
                    :label="item.typeName"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </div>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="3" style="text-align: center;">
          <el-form-item label-width="0">
            <el-checkbox v-model="hasRepeatAlarm">已关联</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="3" style="text-align: center;">
          <el-form-item label-width="0">
            <el-button type="text" @click="clear">恢复默认</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="3" style="text-align: center;">
          <el-form-item label-width="0">
            <el-button type="primary" size="mini" @click="search">搜索</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit } from "vue-property-decorator";
import { State, Mutation, Getter } from "vuex-class";
@Component({
  components: {}
})
export default class NormalSearch extends Vue {
  /**
   * 状态
   */
  selectStatusDataList: any[] = [];
  /**
   * 级别
   */
  selectLevelDataList: any[] = [];
  /**
   * 来源
   */
  @Getter('getCaseSource') selectSourceDataList!: any; 
 
  /**
   * 案件类别
   */
   @Getter('getCaseDatas') selectCaseDataList!: any; 
  /**
   * 查询字段
   */
  keyWord: string = "";
  instructType: number = 0;
  levels: Array<string> = [];
  origins: Array<string> = [];
  caseTypeIds: Array<string> = [];
  hasRepeatAlarm: boolean = false;
  mounted() {
    this.getStatusDataList();
    this.getLevelDataList();
  }
  /**
   * 警情状态
   */
  getStatusDataList() {
    this.selectStatusDataList = [
      {
        dicKey: 0,
        dicValue: "全部"
      },
      {
        dicKey: 1,
        dicValue: "待处置"
      },
      {
        dicKey: 2,
        dicValue: "已处置 "
      }
    ];
  }
  /**
   * 警情级别
   */
  getLevelDataList() {
    this.selectLevelDataList = [
      {
        dicKey: 1,
        dicValue: "一级"
      },
      {
        dicKey: 2,
        dicValue: "二级"
      },
      {
        dicKey: 3,
        dicValue: "三级"
      }
    ];
  }
  /**传递查询条件 */
  @Emit("getSearchDataByParameter")
  search() {
    return {
      keyWord: this.keyWord,
      instructType: this.instructType,
      levels: this.levels,
      origins: this.origins,
      caseTypeIds: this.caseTypeIds,
      hasRepeatAlarm: this.hasRepeatAlarm
    };
  }
  /**
   * 恢复默认
   */
  clear() {
    this.keyWord = "";
    this.instructType = 0;
    this.levels = [];
    this.origins = [];
    this.caseTypeIds = [];
    this.hasRepeatAlarm = false;
  }
}
</script>
 <style lang="scss">
.select-source .mut-select .el-tag:nth-of-type(1) {
  width: 60%;
  overflow: hidden;
}
.select-source .mut-select {
  width: 100%;
}
.select-source .mut-select .el-select {
  width: 100%;
  position: initial;
}
.normal-search {
  .el-tabs.el-tabs--top .el-tabs__item {
    color: #000 !important;
    &.is-active {
      color: #4179f6 !important;
      // font-weight: 400 !important;
    }
  }
  .el-form .el-form-item__label {
    color: #000 !important;
  }
  .el-checkbox .el-checkbox__label {
    color: #000 !important;
  }
  .el-button {
    color: #37b0ff !important;
    &.el-button--primary {
      color: #fff !important;
      background-color: #37b0ff !important;
    }
  }
}
</style>