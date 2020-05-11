<template>
  <div class="template-taskList">
    <el-tabs class="taskList-tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="'待处置 (' + waitNum + ')'" name="first">
        <div class="todo-list">
          <el-form label-width="100px">
            <el-row :gutter="20">
              <el-col :span="24">
                <el-form-item label="任务类型：">
                  <el-select
                    class="el-select-task"
                    v-model="taskTypeKey"
                    multiple
                    collapse-tags
                    placeholder="请选择"
                    @change="selectTaskArr"
                  >
                    <el-option
                      v-for="item in taskTypeArr"
                      :key="item.key"
                      :label="item.value"
                      :value="item.key"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top:10px;">
              <el-col :span="24">
                <el-checkbox-group v-model="checkedList" class="el-checkList" @change="changeCheck">
                  <el-checkbox v-for="item in checkedLists" :label="item" :key="item">{{ item }}</el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <!-- 点击条件筛选出现的过滤条件 -->
            <div class="guolv-box" v-if="filter">
              <div class="flex high-search">
                <div class="back-default" @click="backDefault">恢复默认</div>
                <div @click="advanceSearch">高级搜索</div>
              </div>
              <!--下发时间-->
              <el-row class="xiafa-time" :gutter="20">
                <el-col :span="24">
                  <el-form-item label="下发时间：">
                    <el-date-picker
                      class="time-select"
                      v-model="sendTime"
                      @change="selectTimeRange"
                      value-format="yyyy-MM-ddTHH:mm:ss.0000000+08:00"
                      type="daterange"
                      :picker-options="pickerOptions"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      align="right"
                    >></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <!--关键字搜索-->
              <el-row class="search-box">
                <el-form-item label="关键字搜索：">
                  <el-col :span="24">
                    <input
                      class="search-input"
                      placeholder="可搜索流水号、指令标题、涉事人"
                      v-model="keyWord"
                      @keyup.enter="searchPolice()"
                    />
                    <i class="el-icon-search flex-fr" title="搜索" @click="searchPolice"></i>
                  </el-col>
                </el-form-item>
              </el-row>
            </div>
          </el-form>
          <!--列表有数据或者没有数据--->
          <div class="taskList-box-grand">
            <div v-if="totalNum > 0" class="taskList-box-father">
              <!-- 列表 -->
              <div :class="[filter ? 'tablist-tips' : '', 'taskList-box']">
                <div
                  v-for="(item, index) in taskList"
                  :key="index"
                  :class="[
                    item.selected ? 'selected' : '',
                    'task-list-content-box'
                  ]"
                  @click="selectThisTask(item, index)"
                  @contextmenu.prevent="e => rightClick(e, item, index)"
                >
                  <!--item.status == 1  原本为这个  现在改为已经签收的不再闪烁 isRead false 未签收 -->
                  <div
                    :class="[
                      'task-list-content flex',
                      !item.isRead  ? 'task-list-un-shaow' : ''
                    ]"
                  >
                    <div class="list-left">
                      <div
                        :class="[
                          'level' + item.levels,
                          'left-content flex-item'
                        ]"
                      ></div>
                    </div>
                    <div class="list-right">
                      <div class="list-number flex-between">
                        <div class="list-number-no" :title="item.no">{{ item.no }}</div>
                        <div :class="item.taskState">{{ item.taskStateWord }}</div>
                      </div>

                      <div class="list-content" :title="item.summary">{{ item.summary }}</div>
                      <div class="list-keyword flex">
                        <!-- <div v-if="item.isFavourite" class="key-word attention">关注</div>
                        <div v-if="item.isSensitive" class="key-word sensitive">敏感</div>-->
                        <div
                          class="key-word"
                          v-for="(val, index) in item.keyWords"
                          :key="index"
                        >{{ val }}</div>
                      </div>
                      <div class="list-bottom flex">
                        <div class="flex">
                          <img class="list-img" src="~@/assets/images/taskList/time-1.png" />
                          <div
                            class="list-time"
                            :title="item.sendTime | transferTime"
                          >{{ item.sendTime | transferTime }}</div>
                        </div>
                        <div class="list-bottom-content flex">
                          <img class="list-img" src="~@/assets/images/taskList/addr-1.png" />
                          <div
                            class="list-addr"
                            :title="item.address | transferAddress"
                          >{{ item.address | transferAddress }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 分页 -->
              <div class="page-box" style="text-align: center; padding:10px 0;">
                <el-pagination
                  class="taskList-page"
                  :pager-count="pageCount"
                  layout="prev, pager, next, jumper"
                  :total="totalNum"
                  @current-change="handleCurrentChange"
                ></el-pagination>
              </div>
            </div>
            <div v-else class="list-no-date">---暂无数据---</div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="'已处置(' + doneNum + ')'" name="second">
        <div class="todo-list">
          <el-form label-width="100px">
            <el-row :gutter="20">
              <el-col :span="24">
                <el-form-item label="任务类型：">
                  <el-select
                    class="el-select-task"
                    v-model="taskTypeKey"
                    multiple
                    collapse-tags
                    placeholder="请选择"
                    @change="selectTaskArr"
                  >
                    <el-option
                      v-for="item in taskTypeArr"
                      :key="item.key"
                      :label="item.value"
                      :value="item.key"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top:10px;">
              <el-col :span="24">
                <el-checkbox-group v-model="checkedList" class="el-checkList" @change="changeCheck">
                  <el-checkbox v-for="item in checkedLists" :label="item" :key="item">{{ item }}</el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <!-- 点击条件筛选出现的过滤条件 -->
            <div class="guolv-box" v-if="filter">
              <div class="flex high-search">
                <div class="back-default" @click="backDefault">恢复默认</div>
                <div @click="advanceSearch">高级搜索</div>
              </div>
              <el-row class="xiafa-time" :gutter="20">
                <el-col :span="24">
                  <el-form-item label="下发时间：">
                    <el-date-picker
                      class="time-select"
                      v-model="sendTime"
                      @change="selectTimeRange"
                      value-format="yyyy-MM-ddTHH:mm:ss.0000000+08:00"
                      type="daterange"
                      :picker-options="pickerOptions"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      align="right"
                    >></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row class="search-box">
                <el-form-item label="关键字搜索：">
                  <el-col :span="24">
                    <input
                      class="search-input"
                      placeholder="可搜索流水号、指令标题、涉事人"
                      v-model="keyWord"
                      @keyup.enter="searchPolice()"
                    />
                    <i class="el-icon-search flex-fr" title="搜索" @click="searchPolice"></i>
                  </el-col>
                </el-form-item>
              </el-row>
            </div>
          </el-form>
          <!--列表有数据，或者没有数据-->
          <div class="taskList-box-grand">
            <div v-if="totalNum > 0" class="taskList-box-father">
              <!-- 列表 -->
              <div :class="[filter ? 'tablist-tips' : '', 'taskList-box']">
                <div
                  v-for="(item, index) in taskList"
                  :key="index"
                  :class="[
                    item.selected ? 'selected' : '',
                    'task-list-content-box'
                  ]"
                  @click="selectThisTask(item, index)"
                  @contextmenu.prevent="e => rightClick(e, item, index)"
                >
                  <div class="task-list-content flex">
                    <div class="list-left">
                      <div
                        :class="[
                          'level' + item.levels,
                          'left-content flex-item'
                        ]"
                      ></div>
                    </div>
                    <div class="list-right">
                      <div class="list-number flex-between">
                        <div class="list-number-no" :title="item.no">{{ item.no }}</div>
                        <div :class="item.taskState">{{ item.taskStateWord }}</div>
                      </div>
                      <div class="list-content" :title="item.summary">{{ item.summary }}</div>
                      <div class="list-keyword flex">
                        <!-- <div v-if="item.isFavourite" class="key-word attention">关注</div>
                        <div v-if="item.isSensitive" class="key-word sensitive">敏感</div>-->
                        <div
                          class="key-word"
                          v-for="(val, index) in item.keyWords"
                          :key="index"
                        >{{ val }}</div>
                      </div>
                      <div class="list-bottom flex">
                        <div class="flex">
                          <img class="list-img" src="~@/assets/images/taskList/time-1.png" />
                          <div
                            class="list-time"
                            :title="item.sendTime | transferTime"
                          >{{ item.sendTime | transferTime }}</div>
                        </div>
                        <div class="list-bottom-content flex">
                          <img class="list-img" src="~@/assets/images/taskList/addr-1.png" />
                          <div
                            class="list-addr"
                            :title="item.address | transferAddress"
                          >{{ item.address | transferAddress }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 分页 -->
              <div class="page-box" style="text-align: center; padding:10px 0;">
                <el-pagination
                  class="taskList-page"
                  :pager-count="pageCount"
                  layout="prev, pager, next, jumper"
                  :total="totalNum"
                  @current-change="handleCurrentChange"
                ></el-pagination>
              </div>
            </div>
            <div v-else class="list-no-date">---暂无数据---</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div v-show="menuVisible">
      <div id="menu" class="menu flex">
        <img
          class="right-click-img"
          src="~@/assets/images/taskList/view-detail.png"
          title="查看详情"
          @click.stop="showItemInfo"
        />

        <img
          class="right-click-img"
          src="~@/assets/images/taskList/view-default.png"
          v-if="!selectedTask.isFavourite"
          title="置为关注"
          @click.stop="toggleFavourite"
        />
        <img
          class="right-click-img"
          src="~@/assets/images/taskList/view-selected.png"
          v-else
          title="取消关注"
          @click.stop="toggleFavourite"
        />
        <img
          class="right-click-img"
          v-if="!selectedTask.isSensitive && selectedTask.businessFrom == 1"
          src="~@/assets/images/taskList/sensitive-selected.png"
          title="置为敏感"
          @click.stop="toggleSensitive"
        />
        <img
          class="right-click-img"
          v-if="selectedTask.isSensitive && selectedTask.businessFrom == 1"
          src="~@/assets/images/taskList/sensitive-default.png"
          title="取消敏感"
          @click.stop="toggleSensitive"
        />
      </div>
    </div>
    <taskDetail v-if="isDetailDisplay" :taskDetail="selectedTask" @closeDetail="closeDetail"></taskDetail>
    <advanSearch v-if="isAdvanSearchlDisplay" @closeAdvanSearch="closeAdvanSearch"></advanSearch>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//现在的方式以下是vue-property-decorator + vuex-class写法：
import { Component, Prop, Watch } from "vue-property-decorator";
import { Action, Getter, State, Mutation } from "vuex-class";

import { insListQueryParamV3_ui_model } from "@/model/instructionInfo/instructionInfo_model";
import { instructionInfoService } from "@/bll/instructionInfo/instructionInfoService";
import { alarmService } from "@/bll/sysManage/alarmService";
import {
  positionInfo_ui_model,
  sensitiveWords_ui_model
} from "@/model/sysManage/alarm_result_model.ts";

import { time } from "@/utils/formatTime";
import {
  taskFavouriteParam_ui_model,
  taskSensitiveParam_ui_model
} from "@/model/instructionInfo/instructionInfo_model";
import taskDetail from "@/components/taskList/taskDetail.vue";
import advanSearch from "@/components/taskList/advanSearch.vue";
@Component({
  components: {
    taskDetail,
    advanSearch
  },
  filters: {
    transferAddress: (val: any) => {
      if (val) {
        return val;
      }
      return "暂无";
    },
    transferTime: (val: any) => {
      if (val) {
        return time.getDateTimeByStr(val, false, false);
      }
      return "暂无";
    }
  }
})
export default class BaseComponent extends Vue {
  @Prop() public isGetListFlag!: any; // 指令回退的标识
  @Getter("getUserinfo") userInfo: any; // 用户信息

  @Action("setCurrentInsInfo") setCurrentInsInfoCommand!: any;
  @Action("setTaskListInfo") setTaskListInfoCommand!: any;
  @Action("setPositionInfo") setPositionInfoCommand!: any;
  @Action("setSensitiveWords") setSensitiveWordsCommand!: any;
  @Action("setTaskInfo") setTaskInfoCommond!: any;
  @Action("setTaskId") setTaskIdCommond!: any;

  @Watch("isGetListFlag")
  onDefaultFileListChanged(val: boolean, oldVal: boolean) {
    if (val) {
      this.getList(); //指令回退后刷新左侧列表
    }
  }

  public status: number = 1; // 任务状态 0：全部；1：待处置；2：已处置
  public pageIndex: number = 1; // 页码
  public pageSize: number = 10; // 查询个数
  public totalNum: number = 1; // 总页码数
  public pageCount: number = 5; // 显示页码数
  /**
   * 待处理，已处理显示的个数
   * **/
  private doneNum: any = "";
  private waitNum: any = "";
  public activeName: string = "first"; // 当前显示tab name
  public filter: boolean = false; // 是否显示条件筛选
  /**任务列表中每条数据的不同状态，显示不同颜色**/
  private taskState: string = "list-number-state";
  public taskTypeArr: Array<object> = [
    { key: 4, value: "全部任务" },
    { key: 0, value: "重点人任务" },
    { key: 1, value: "警情任务" },
    { key: 66, value: "舆情任务" },
    { key: 9, value: "工作指令任务" },
    { key: 16, value: "情报任务" }
  ];
  public taskTypeKey: Array<number> = []; // 任务类型选择数组

  public taskList: any = []; // 任务列表
  private selectedTask: any = {}; //选中的某条任务
  public checkedLists: Array<string> = ["关注任务", "敏感任务", "条件筛选"]; // checkbox列表
  public checkedList: Array<string> = [];

  public businessFrom: number = 0; // 是否敏感 1:是 0：不是 (只有警情有此标签)

  public isSensitive: boolean = false; // 是否敏感
  public isFavourite: boolean = false; // 是否关注
  public sendTime: Array<string> = []; // 时间间隔
  public pickerOptions: any = {
    shortcuts: [
      {
        text: "最近一周",
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit("pick", [start, end]);
        }
      },
      {
        text: "最近一个月",
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          picker.$emit("pick", [start, end]);
        }
      },
      {
        text: "最近三个月",
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          picker.$emit("pick", [start, end]);
        }
      }
    ]
  };
  public keyWord: string = ""; // 关键字

  public menuVisible: boolean = false; // 右键菜单选项
  public contextMenuIndex: number = 0; // 右键菜单当前指令的index
  public contextMenuItem: any = ""; // 右键菜单当前指令信息
  public isDetailDisplay: boolean = false; //详情页面展示
  public isAdvanSearchlDisplay: boolean = false;

  //高级搜索框
  /** 右键菜单显示 */
  rightClick(MouseEvent: any, item: any, index: number) {
    this.selectedTask = this.taskList[index];

    this.menuVisible = false; // 先把模态框关死，目的是 第二次或者第n次右键鼠标的时候 它默认的是true
    this.menuVisible = true; // 显示模态窗口，跳出自定义菜单栏
    let menu: any = document.querySelector("#menu");
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    menu.style.left = MouseEvent.clientX + scrollTop + 20 + "px";
    menu.style.top = MouseEvent.clientY + scrollTop - 30 + "px";
    document.addEventListener("click", this.showMenu); // 给整个document添加监听鼠标事件
  }

  /** menuContext 右键事件 */
  showMenu() {
    this.menuVisible = false;
    document.removeEventListener("click", this.showMenu); // 要及时关掉监听
  }

  /** 查看详情 */
  showItemInfo() {
    this.menuVisible = false;
    /**详情页面展示**/
    for (var i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].selected) {
        this.selectedTask = this.taskList[i];
      }
    }
    this.isDetailDisplay = true;
  }

  /** 情况筛选条件 */
  clearCondition() {
    this.taskTypeKey = [];

    this.keyWord = "";

    this.filter = false;
    this.isFavourite = false;
    this.isSensitive = false;
    this.checkedList = [];
  }

  /** tab切换 */
  public async handleClick(tab: any) {
    if (tab.name === "first") {
      this.status = 1;
    } else {
      this.status = 2;
    }
    this.clearCondition();
    this.getList();
    /** 关闭所有弹窗 */
    this.$emit("closeAllBox", false);
  }

  /** checkbox选择 */
  public async changeCheck(value: Array<string>) {
    this.filter = false;
    this.isFavourite = false;
    this.isSensitive = false;
    for (var i = 0; i < value.length; i++) {
      if (value[i] == "关注任务") {
        this.isFavourite = true;
      }
      if (value[i] == "敏感任务") {
        this.isSensitive = true;
        this.businessFrom = 1;
      }
      if (value[i] == "条件筛选") {
        this.filter = true;
      }
    }
    this.getList();
    /** 关闭所有弹窗 */
    this.$emit("closeAllBox", false);
  }

  /** 选择时间 */
  selectTimeRange(val: any) {}

  /** 关键字搜索 */
  searchPolice() {
    this.getList();
    /** 关闭所有弹窗 */
    this.$emit("closeAllBox", false);
  }

  /** 任务列表选中 */
  selectTaskArr(val: any) {
    // 判断是否选中全部任务
    if (val.indexOf(4) > -1) {
      if (val.indexOf(4) === 0 && this.taskTypeKey.length > 1) {
        this.taskTypeKey.splice(0, 1);
      } else {
        this.taskTypeKey = [4];
      }
    }
    this.getList();
    /** 关闭所有弹窗 */
    this.$emit("closeAllBox", false);
  }

  /** 恢复默认*/
  public async backDefault() {
    this.keyWord = "";
    // this.sendTime = "";
    this.checkedList = [];
    this.sendTime = [];
  }

  mounted() {
    this.sendTime = time.getCurrentDataInterval(7);
    this.getList();
    this.allDealNum();
    this.getPositionInfo();
    this.getSensitiveWords();
  }

  // 获取部门列表信息
  public async getPositionInfo() {
    let param = new positionInfo_ui_model();
    let id = this.$store.state.userinfo.policeStationInfo.id;

    param.Id = id;
    let positionList = await new alarmService().jp_positionInfo_byId(param);
    if (positionList.code == 200 && positionList.msg == "ok") {
      this.setPositionInfoCommand(positionList.data);
    }
  }

  // 获取敏感词信息
  public async getSensitiveWords() {
    let param = new sensitiveWords_ui_model();

    param.type = "1";
    let SensitiveWords = await new alarmService().jp_sensitiveWords_byType(
      param
    );

    if (SensitiveWords.code == 200 && SensitiveWords.msg == "ok") {
      this.setSensitiveWordsCommand(SensitiveWords.data);
    }
  }

  /** 选中任务 */
  public async selectThisTask(item: any, index: number) {
    /**选中的某条任务***/
    this.setTaskIdCommond(
      this.taskList[index].taskId || this.taskList[index].id
    );
    this.$emit("isGetListFlagFn", false); //点击列表数据，让回退时列表和地图影藏的的标识符重置
    if (!(item as any).isRead) {
      this.selectedTask = this.taskList[index];
      let params = new taskSensitiveParam_ui_model();
      params.taskId = this.selectedTask.taskId
        ? this.selectedTask.taskId
        : this.selectedTask.id;
      params.userId = this.$store.state.userinfo.userId;
      let result = await new instructionInfoService().bus_instructions_read(
        params
      );
      if (result.code == 200 && result.msg == "ok") {
        this.getList();
        this.$message({
          message: "签收成功"
        });
      }
    }

    this.taskList.map((item: any) => {
      item.selected = false;
    });
    this.taskList[index].selected = true;
    this.selectedTask = this.taskList[index];
    /** 存储选中项信息 */
    this.setCurrentInsInfoCommand(item);
    //地图信息定位
    this.$emit("passTaskToMap", item);
    /** 关闭所有弹窗 */
    this.$emit("closeAllBox", false);
  }

  /** 获取列表 */
  public async getList() {
    let param = new insListQueryParamV3_ui_model();
    param.pageIndex = this.pageIndex - 1;
    param.pageSize = this.pageSize;
    param.status = this.status;
    param.userId = this.userInfo.userId;
    // 筛选条件
    (param.businessFroms as any) = this.taskTypeKey;
    param.isFavourite = this.isFavourite;
    param.isSensitive = this.isSensitive;
    if (this.isSensitive) {
      param.businessFrom = this.businessFrom;
    }
    param.startTime = this.sendTime[0];
    param.endTime = this.sendTime[1];
    // 条件筛选
    if (this.filter) {
      param.keyWord = this.keyWord;
      param.startTime = this.sendTime[0];
      param.endTime = this.sendTime[1];
    }

    let resultData = await new instructionInfoService().orderAggregation_listdata_v3_page(
      param
    );
    if (resultData.code == "200" && resultData.msg == "ok") {
      /**选中的某条任务***/
      if (resultData.data.num > 0) {
        this.setTaskIdCommond(
          resultData.data.list[0].taskId || resultData.data.list[0].id
        );
      } else {
        this.setTaskIdCommond("");
      }
      resultData.data.list.map((item: any) => {
        item.selected = false;
        if (item.status == 1) {
          item.taskState = "list-number-state";
        } else if (item.status == 2 && item.taskStateWord == "已结束") {
          item.taskState = "list-number-done";
        } else if (item.status == 2 && item.taskStateWord != "已结束") {
          item.taskState = "list-number-deal";
        }
      });

      this.taskList = resultData.data.list;

      this.totalNum = resultData.data.num;

      this.setTaskListInfoCommand(resultData.data);
      /** 刷新置空选中指令信息 */
      this.setCurrentInsInfoCommand("");
      /** 刷新列表，清空地图图标 */
      this.$emit("closeMapIcon");
    }
  }

  // 跳转
  handleCurrentChange(val: number) {
    this.pageIndex = val;
    this.getList();
    /** 关闭所有弹窗 */
    this.$emit("closeAllBox", false);
  }

  //高级搜索
  public async advanceSearch() {
    this.isAdvanSearchlDisplay = true;
  }
  /**
   * 关闭详情页面
   * */

  closeDetail(data: boolean) {
    this.isDetailDisplay = data;
  }

  /**
   * 关闭高级搜
   * */
  closeAdvanSearch(data: boolean) {
    this.isAdvanSearchlDisplay = data;
  }
  /**
   * 切换是否关注
   * */
  toggleFavourite() {
    let userId = this.$store.state.userinfo.userId;
    let insId = this.selectedTask.id;
    let status = this.selectedTask.isFavourite;
    this.changeItemFavourite(status, userId, insId);
  }

  /**
   * 切换是否敏感
   * */
  toggleSensitive() {
    this.changeSensitive();
  }

  public async changeSensitive() {
    let params = new taskSensitiveParam_ui_model();
    params.id = this.selectedTask.businessKey;
    params.taskId = this.selectedTask.taskId
      ? this.selectedTask.taskId
      : this.selectedTask.id;
    params.userId = this.$store.state.userinfo.userId;
    params.isSensitive = !this.selectedTask.isSensitive;

    let result = await new instructionInfoService().jp_bus_instructions_sensitive(
      params
    );
    if (result.code == 200 && result.msg == "ok") {
      this.showMenu();
      // 不用立即刷新
      // this.getList();
    }
  }

  /** 切换警情关注状态 */
  public async changeItemFavourite(
    status: boolean,
    userId: string,
    insId: string
  ) {
    let params = new taskFavouriteParam_ui_model();
    params.userId = userId;
    params.insId = insId;
    let result = null;
    if (!status) {
      result = await new instructionInfoService().bus_instructions_favourite(
        params
      );
    } else {
      result = await new instructionInfoService().bus_instructions_unfavourite(
        params
      );
    }

    if (result.code == 200 && result.msg == "ok") {
      this.showMenu();
      //  不用立即刷新,这里刷新没效
      // this.getList();
    }
  }
  /**待处置，已处置的总数**/
  public async allDealNum() {
    let param = new insListQueryParamV3_ui_model();
    param.pageIndex = this.pageIndex - 1;
    param.pageSize = this.pageSize;
    param.status = this.status;
    param.userId = this.userInfo.userId;
    /**筛选条件**/
    (param.businessFroms as any) = this.taskTypeKey;
    param.isFavourite = this.isFavourite;
    (param.alarmFilterParam as any) = {};
    param.startTime = this.sendTime[0];
    param.endTime = this.sendTime[1];
    /**条件筛选**/
    if (this.filter) {
      param.isSensitive = this.isSensitive;
      param.keyWord = this.keyWord;
      param.startTime = this.sendTime[0];
      param.endTime = this.sendTime[1];
    }
    let resultData = await new instructionInfoService().orderAggregation_listdata_v3_count(
      param
    );
    if (resultData.code == "200" && resultData.msg == "ok") {
      this.doneNum = resultData.data.doneNum;
      this.waitNum = resultData.data.waitNum;
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/css/components/taskList/taskList.scss";
@import "~@/assets/css/components/taskList/element-ui-tabs.scss";

//element-ui-reset.scss
// @import "~@/assets/css/element-ui-reset.scss";
</style>
