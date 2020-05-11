<template >
  <div class="advance-search"  >
    <div class="search-title flex-between">
      <div class="flex" >
        <img class="title-left-img" src="~@/assets/images/taskList/advan-search.png" />
        <div>高级搜索</div>
      </div>
      <div class="title-right-img">
        <img src="~@/assets/images/calledStation/close-1.png"  @click="closeAdvanSearch"/>
      </div>
    </div>
    <div class="flex"  style=" height: calc( 100% - 40px )">
      <div class="search-content" >
        <div class="content-title flex" style="display: flex">
          <el-select
                  class="el-select-task"
                  v-model="keyWordValue"
                  collapse-tags
                  style="margin-left: 10px;"
                  placeholder="请选择"
          >
            <el-option
                    v-for="item in keyWordList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
            ></el-option>
          </el-select>
          <!-- 搜索框 -->
          <div class="search-box">
            <el-input v-model="searchValue" class="content-search" placeholder="流水号、警情摘要、报警电话等"></el-input>
            <img class="search-img" src="~@/assets/images/police-box/search-icon.png" />
          </div>
          <el-checkbox v-model="checked" class="el-checkList">关注指令</el-checkbox>
        </div>
        <!-- 标签页 -->
        <el-tabs class="taskList-tabs" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="警情指令" name="first">
            <!-- 基础条件 -->
            <div class="base-case flex">
              <div style="flex:1">
                <div class="flex">
                  <div class="flex">
                    <div class="base-case-title">基础条件:</div>
                    <el-checkbox v-model="ignChecked" class="el-checkList">忽略重复</el-checkbox>
                    <el-checkbox v-model="ignChecked" class="el-checkList">敏感警情</el-checkbox>
                  </div>
                  <div class="flex">
                    <div class="case-level">敏感词</div>
                    <el-select
                            class="el-select-task"
                            v-model="selectValue.sensitiveWord"

                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                    >

                      <el-option
                              v-for="(item,index) in sensitiveWords"
                              :key="index"
                              :label="item.word"
                              :value="item.word"
                      ></el-option>
                    </el-select>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex">
                    <div class="case-level">警情等级</div>
                    <el-select
                            class="el-select-task"
                            v-model="selectValue.jqTypeValue"
                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                    >
                      <el-option
                              v-for="item in jqType"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="flex">
                    <div class="case-level">警情来源</div>
                    <el-select
                            class="el-select-task"
                            v-model="selectValue.caseSourceId"
                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                    >
                      <el-option
                              v-for="item in caseSource"
                              :key="item.id"
                              :label="item.sourceName"
                              :value="item.id"
                      ></el-option>
                    </el-select>
                  </div>
                </div>
                <div class="flex" style="width:50%">
                    <div class="case-level">警情状态</div>
                    <el-select
                            class="el-select-task"
                            v-model="selectValue.jQstatusValue"
                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                    >
                      <el-option

                              v-for="item in jQstatus"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                </div>
              </div>
            </div>
            <!--接警条件-->
            <div class="base-case flex">

              <div style="flex:1">
                <div class="flex">

                    <div class="base-case-title">接警条件:</div>

                    <div class="case-level">报警时间</div>
                    <el-date-picker
                            style="margin-left:10px"
                            v-model="selectValue.acceptAlarmStartTime"
                            type="datetime"
                            placeholder="选择日期时间">
                    </el-date-picker>
                    <span>---</span>
                    <el-date-picker
                            v-model="selectValue.acceptAlarmEndTime"
                            type="datetime"
                            placeholder="选择日期时间">
                    </el-date-picker>


                </div>
                <div class="flex">
                  <!-- <el-checkbox v-model="ignChecked" class="el-checkList">忽略重复</el-checkbox> -->
                  <div class="flex">
                    <div class="case-level">案件类型</div>
                    <el-select
                            class="el-select-task"
                            v-model="selectValue.caseDatasId"
                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                            @change="handleChangeCaseData"
                    >
                      <el-option
                              v-for="item in caseDatas"
                              :key="item.id"
                              :label="item.typeName"
                              :value="item.id"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="flex">
                    <div class="case-level">案件性质</div>
                    <el-select
                            class="el-select-task"
                            v-model="selectValue.tEventTypePropertyModelsId"
                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                            @change="handleChangetEventType"
                    >
                      <el-option
                              v-for="item in tEventTypePropertyModels"
                              :key="item.id"
                              :label="item.typeName"
                              :value="item.id"
                      ></el-option>
                    </el-select>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex">
                    <div class="case-level">性质细分</div>
                    <el-select
                            class="el-select-task"
                            v-model="selectValue.propertyTypeModelsId"
                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                    >
                      <el-option
                              v-for="item in propertyTypeModels"
                              :key="item.id"
                              :label="item.typeName"
                              :value="item.id"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="flex">
                    <div class="case-level">发案部位</div>
                    <el-select
                            class="el-select-task"
                            v-model="selectValue.casePositionDatasId"
                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                            @change="handleChangePosition"
                    >
                      <el-option
                              v-for="item in casePositionDatas"
                              :key="item.id"
                              :label="item.positionName"
                              :value="item.id"
                      ></el-option>
                    </el-select>
                  </div>

                </div>
                <div class="flex">
                  <div class="flex">
                    <div class="case-level">部位分类</div>
                    <el-select
                            class="el-select-task"
                            v-model="selectValue.teventPositionsId"
                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                    >
                      <el-option
                              v-for="item in teventPositions"
                              :key="item.id"
                              :label="item.positionName"
                              :value="item.id"
                      ></el-option>
                    </el-select>
                  </div>
                  <div class="flex">
                    <div class="case-level">部位细分</div>
                    <el-select
                            class="el-select-task"
                            v-model="keyWordValue"
                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                    >
                      <el-option
                              v-for="item in keyWordList"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                </div>

              </div>
            </div>

            <!--处警条件-->
            <div class="base-case flex">

              <div style="flex:1">
                <div class="flex" >
                    <div class="base-case-title">处警条件:</div>
                   <div class="case-level">回告时间</div>
                   <el-date-picker
                           style="margin-left:10px"
                           v-model="selectValue.handleAlarmStartTime"
                           type="datetime"
                           placeholder="选择日期时间">
                   </el-date-picker>
                   <span>---</span>
                   <el-date-picker
                           v-model="selectValue.handleAlarmEndTime"
                           type="datetime"
                           placeholder="选择日期时间">
                   </el-date-picker>

                </div>
                <div class="flex">
                  <div class="flex" >
                    <div class="case-level">受理单位</div>
                  <treeSelect 
                  :options="$store.state.positionInfo.childrenPoliceStation"
                  :props="showTreePorps"
                  @getValue="handleReceiveInfo"
                  ></treeSelect>  
                  </div>
              

                  <div class="flex">
                    <div class="case-level">责任区</div>
                    <el-select
                            class="el-select-task"
                            v-model="selectValue.dutyZoneId"
                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                    >
                      <el-option
                              v-for="item in $store.state.dutyArea"
                              :key="item.id"
                              :label="item.data"
                              :value="item.id"
                      ></el-option>
                    </el-select>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex" >
                    <div class="case-level">处警单位</div>
                        <treeSelect 
                  :options="$store.state.positionInfo.childrenPoliceStation"
                  :props="showTreePorps"
                  @getValue="handleAlarmInfo"
                  ></treeSelect>  

                  </div>
                  <div class="flex">
                    <div class="case-level">处警人员</div>
                    <el-select
                            class="el-select-task"
                            v-model="selectValue.PoliceId"
                            collapse-tags
                            style="margin-left: 10px;"
                            placeholder="请选择"
                    >
                      <el-option
                              v-for="item in policeList.data"
                              :key="item.policeId"
                              :label="item.policeName"
                              :value="item.policeId"
                      ></el-option>
                    </el-select>
                  </div>

                </div>
                <div class="flex">
                  <div class="flex" >
                    <div class="case-level">反馈单位</div>
                        <treeSelect 
                  :options="$store.state.positionInfo.childrenPoliceStation"
                  :props="showTreePorps"
                  ></treeSelect>  
                  </div>
                  <div class="flex">
                    <div class="case-level">回告单位</div>
                       <treeSelect 
                  :options="$store.state.positionInfo.childrenPoliceStation"
                  :props="showTreePorps"
                  ></treeSelect>  
                  </div>
                </div>
                <div class="flex">
                  <div class="flex">
                    <div class="case-level">处警结果</div>
                    <div class="el-select-task" style="margin-left: 10px;">
                      <el-input type="textarea"/>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="flex btnClass">
              <el-button type="default" @click="handleReset">重置</el-button><el-button type="primary">确定</el-button>
            </div>
          </el-tab-pane>
          <!--<el-tab-pane label="重点人指令" name="second">重点人指令</el-tab-pane>-->
          <!--<el-tab-pane label="舆情指令"  name="third">舆情指令</el-tab-pane>-->
          <!--<el-tab-pane label="情报指令"  name="fourth">情报指令</el-tab-pane>-->
          <!--<el-tab-pane label="工作指令"  name="fourth">工作指令</el-tab-pane>-->
        </el-tabs>
      </div>
      <div class="flex allList">
        <div class="top" >

          <img src="~@/assets/images/taskList/list.png" class="imgChange" @click="handleShow(0)" alt="列表">
          <img src="~@/assets/images/taskList/card.png" class="imgChange" @click="handleShow(1)" alt="卡片">
          <el-tag style="float: right">导出</el-tag>
        </div>
        <div class="container flex">
          <div class="leftlist" style="width: 50%">


            <!--列表有数据或者没有数据--->
            <div v-if="cardShow" class="taskList-box-grand">
              <div v-if="totalNum > 0" class="taskList-box-father">
                <!-- 列表 -->
                <div :class="[filter ? 'tablist-tips' : '', 'taskList-box']" style="height: 480px">
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
                    <div
                            :class="[
                      'task-list-content flex',
                      item.status == 1 ? 'task-list-un-shaow' : ''
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
                          <div class="list-number-no" :title="item.no">
                            {{ item.no }}
                          </div>
                          <div :class="item.taskState">
                            {{ item.taskStateWord }}
                          </div>
                        </div>

                        <div class="list-content" :title="item.summary">
                          {{ item.summary }}
                        </div>
                        <div class="list-keyword flex">
                          <!-- <div v-if="item.isFavourite" class="key-word attention">关注</div>
                          <div v-if="item.isSensitive" class="key-word sensitive">敏感</div> -->
                          <div
                                  class="key-word"
                                  v-for="(val, index) in item.keyWords"
                                  :key="index"
                          >
                            {{ val }}
                          </div>
                        </div>
                        <div class="list-bottom flex">
                          <div class="flex">
                            <img
                                    class="list-img"
                                    src="~@/assets/images/taskList/time-1.png"
                            />
                            <div
                                    class="list-time"
                                    :title="item.sendTime | transferTime"
                            >
                              {{ item.sendTime | transferTime }}
                            </div>
                          </div>
                          <div class="list-bottom-content flex">
                            <img
                                    class="list-img"
                                    src="~@/assets/images/taskList/addr-1.png"
                            />
                            <div
                                    class="list-addr"
                                    :title="item.address | transferAddress"
                            >
                              {{ item.address | transferAddress }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div v-else class="list-no-date">---暂无数据---</div>
            </div>
            <div v-else></div>

          </div>
          <div class="rightlist" style="flex:1">


            <!--列表有数据，或者没有数据-->
            <div v-if="cardShow" class="taskList-box-grand">
              <div v-if="totalNum > 0" class="taskList-box-father">
                <!-- 列表 -->
                <div :class="[filter ? 'tablist-tips' : '', 'taskList-box']" style="height: 480px;">
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
                          <div class="list-number-no" :title="item.no">
                            {{ item.no }}
                          </div>
                          <div :class="item.taskState">
                            {{ item.taskStateWord }}
                          </div>
                        </div>
                        <div class="list-content" :title="item.summary">
                          {{ item.summary }}
                        </div>
                        <div class="list-keyword flex">
                          <!-- <div v-if="item.isFavourite" class="key-word attention">关注</div>
                          <div v-if="item.isSensitive" class="key-word sensitive">敏感</div> -->
                          <div
                                  class="key-word"
                                  v-for="(val, index) in item.keyWords"
                                  :key="index"
                          >
                            {{ val }}
                          </div>
                        </div>
                        <div class="list-bottom flex">
                          <div class="flex">
                            <img
                                    class="list-img"
                                    src="~@/assets/images/taskList/time-1.png"
                            />
                            <div
                                    class="list-time"
                                    :title="item.sendTime | transferTime"
                            >
                              {{ item.sendTime | transferTime }}
                            </div>
                          </div>
                          <div class="list-bottom-content flex">
                            <img
                                    class="list-img"
                                    src="~@/assets/images/taskList/addr-1.png"
                            />
                            <div
                                    class="list-addr"
                                    :title="item.address | transferAddress"
                            >
                              {{ item.address | transferAddress }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div v-else class="list-no-date">---暂无数据---</div>
            </div>
            <div v-else></div>

          </div>
        </div>
      </div>
    </div>
    <div class="treeDisplay" v-show="receiveShow" style=" top: 240px;" >
      <div class="content">
        <el-tree
                check-on-click-node
                accordion
                check-strictly
                highlight-current
                show-checkbox
                ref="tree2"
                @check="handleSelect"
                :data="$store.state.positionInfo.childrenPoliceStation"
                node-key="id"
                :props="defaultProps">
        </el-tree>
      </div>
    </div>

    <div class="treeDisplay" v-show="alarmShow" style="top: 280px" >
      <div class="content">
        <el-tree
                check-on-click-node
                accordion
                check-strictly
                highlight-current
                show-checkbox
                ref="tree"
                @check="handleAlarmSelect"
                :data="$store.state.positionInfo.childrenPoliceStation"
                node-key="id"
                :props="defaultProps">
        </el-tree>
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
import { alarmService } from "@/bll/sysManage/alarmService";
import { dutyAreaInfo_ui_model,policeList_ui_model } from "@/model/sysManage/alarm_result_model.ts";
import { time } from "@/utils/formatTime";
import {Action }from "vuex-class";

import treeSelect from "@/components/taskList/treeSelect.vue";


//现在的方式以下是vue-property-decorator + vuex-class写法：
import { Component } from "vue-property-decorator";
@Component({
    components:{
      treeSelect
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
    @Action("setResponsePosition") setResponsePositionCommand!: any;
    @Action("setDutyArea") setDutyAreaCommand!: any;
    @Action("setPoliceList") setPoliceListCommand!: any;
  /**关键字**/
  private keyWordValue:string=""
  private searchValue:string=""

  // 表单搜索信息
    private selectValue: object= {
        //警情来源
        caseSourceId:"",
        // 责任区
        dutyZoneId:"",
        // 发案部位
        casePositionDatasId:"",
        // 部位分类
        teventPositionsId:"",
        //案件类型
        caseDatasId:"",
        // 案件性质
        tEventTypePropertyModelsId:"",
        // 性质细分
        propertyTypeModelsId:"",
        //处警人员
        policeId:"",
        // 警情类型
        jqTypeValue:"",
        // 警情状态
        jQstatusValue:"",
        // 受理部门Id
        positionId:"",
        // 处警部门ID
        handlePositionId:"",
        // 反馈部门ID
        feedbackPositionId:"",
        // 回告人员
        replyPositionId:"",
        // 敏感词
        sensitiveWord:"",
        // 接警开始时间
        acceptAlarmStartTime:"",
        // 接警结束时间
        acceptAlarmEndTime:"",
        // 处警开始时间
       handleAlarmStartTime:"",
        // 处警结束时间
        handleAlarmEndTime:"",



    };

   private  defaultProps:object= {
        children: 'childrenPoliceStation',
        label: 'stationName'
    }



private showTreePorps:object={
      value:'id',        
    children: 'childrenPoliceStation',
        label: 'stationName'
}


  // 警情来源数据
  private caseSource:Array<any>=[];
  // 责任区数据
   private dutyZone:Array<any>=[];
   // 发案部位
  private  casePositionDatas:Array<any>=[];
  // 部位分类
  private  teventPositions:Array<any>=[]
  // 案件类型
  private  caseDatas:Array<any>=[]
  // 案件性质
  private tEventTypePropertyModels:Array<any>=[]
    //性质细分
    private propertyTypeModels:Array<any>=[]
  //警员列表
  private policeList:object={}

 //选中的受理单位信息
  private responsePosition:object={}

  // 下拉切换部门时联动责任区信息
  // private dutyArea:Array<any>=[]

  private sensitiveWords:Array<any>=[]

  // 受理单位树形是否显示
  private receiveShow:boolean=false;

    // 处警单位树形是否显示
  private alarmShow:boolean=false

  //受理单位名称
  private receiveStationName:string=""

  // 处警单位名称
  private handleStationName:string=""

  // 反馈单位名称
  private responseStationName:string=""

  //回告单位名称
  private reportStationName:string=""

  /**关注指令**/
  private checked: boolean = false;
  /**忽略重复**/
  private ignChecked: boolean = false;
  private activeName: string = "first";

  private showType:string="first";
  // 警情类型
  private jqType:Array<object> = [
      {
          value:'1',
          label:'一级'
      },
      {
          value:'2',
          label:'二级'
      },
      {
          value:'3',
          label:'三级'
      }
  ]

  // 警情状态
  private jQstatus:Array<object>=[
      {
          value:'0',
          label:'待处置'
      },
      {
          value:'1',
          label:'处理中'
      },
      {
          value:'2',
          label:'已结束'
      },
      {
          value:'6',
          label:'已回退'
      }
  ]

  /**关键字搜索下拉列表**/
  private keyWordList: Array<object> = [
    {
      value: "选项1",
      label: "关键字搜索"
    },
    {
      value: "选项2",
      label: "流水号搜索"
    },
    {
      value: "选项3",
      label: "指令摘要搜索"
    },
    {
      value: "选项4",
      label: "电话搜索"
    },
    {
      value: "选项5",
      label: "地址搜索"
    }
  ];

  private handleClick(tab: any, event: any) {
    // console.log(tab, event);
  }

  private cardShow:Boolean=true

    public totalNum:number= 1;
    public taskList: any = []; // 任务列表
    public checkedList: Array<string> = [];

    public businessFrom: number = 0; // 是否敏感 1:是 0：不是 (只有警情有此标签)

    public isSensitive: boolean = false; // 是否敏感
    public isFavourite: boolean = false; // 是否关注


  created(){
      let {
          caseSource,
          dutyZone,
          casePositionDatas,
          caseDatas,
          taskListInfo,

          sensitiveWords
      } = this.$store.state
      this.caseSource = caseSource
      this.dutyZone = dutyZone
      this.casePositionDatas = casePositionDatas
      this.caseDatas = caseDatas
      this.taskList = taskListInfo.list
      this.totalNum = taskListInfo.num

      this.sensitiveWords = sensitiveWords

      this.setResponsePositionCommand({});
  }

    // 展示受理单位树形
    handleShowReceive(){
      this.receiveShow = ! this.receiveShow
        this.alarmShow = false
    }

    // 展示处警单位树形
    handleShowAlarm(){
        this.alarmShow = !this.alarmShow
        this.receiveShow = false
    }

  // 展示反馈单位树形
    handleResponse(){

    }

    // 切换列表和卡片
    handleShow(type:Number){
      const {cardShow} = this
      if(type){
          this.cardShow = false
      }else{
          this.cardShow = true
      }
    }

  // 切换发案部位
    handleChangePosition(val:any){
      let temp =  this.casePositionDatas.find((item)=> item.id == val)
        this.teventPositions = temp.teventPositions

    }
    // 切换案件类型
    handleChangeCaseData(val:any){
        let temp =  this.caseDatas.find((item)=> item.id == val)
        this.tEventTypePropertyModels = temp.tEventTypePropertyModels
    }
    // 切换案件性质
    handleChangetEventType(val:string){
        let temp =  this.tEventTypePropertyModels.find((item)=> item.id == val)
        this.propertyTypeModels = temp.propertyTypeModels
    }


    // 切换部门获取对应的责任区
    public async  handleChangePositionInfo(val:string){
        let param = new dutyAreaInfo_ui_model();

        // param.StationId = '1225088C-9EED-4581-B742-D1181F2C7E88'
        param.StationId = val
        let dutyAreaInfo = await new alarmService().jp_dutyAreaInfo_byStationId(param);
        if(dutyAreaInfo.code == 200 && dutyAreaInfo.msg=='ok'){
          this.setDutyAreaCommand(dutyAreaInfo.data)
        }

    }


    // 切换部门获取对应的处警人员
    public async  handleChangePoliceList(val:string){
        // let param = new policeList_ui_model();

        let param  = [val]
        let policeList = await new alarmService().jp_policeList(param);

        if(policeList.code == 200 && policeList.msg=='ok'){
          // this.setPoliceListCommand(policeList.data)
            this.policeList = policeList
        }

    }

    /***
     * 重置
     */
    handleReset(){
        this.$emit('closeAdvanSearch',false)
    }

    /***
     * 关闭高级搜索页面
     */
    closeAdvanSearch(){
        this.$emit('closeAdvanSearch',false)
        // this.isVisibale = !this.isVisibale
    }

    // 点击受理单位选框时触发
    handleSelect( node:any ,data:any){
        let checkedKeys = data.checkedKeys;
        let currKey = node.id;
        (this.$refs.tree2 as any).setCheckedKeys([currKey]);

        this.receiveStationName = node.stationName;
        this.handleChangePositionInfo(currKey)

    }
    // 点击处警单位选框时触发
    handleAlarmSelect(node:any ,data:any){
        let checkedKeys = data.checkedKeys;
        let currKey = node.id;
        (this.$refs.tree as any).setCheckedKeys([currKey]);

       this.handleStationName = node.stationName;

        this.handleChangePoliceList(currKey)
    }


  //新加的
  handleReceiveInfo(val:string){
      (this.selectValue as any).positionId = val
      this.handleChangePositionInfo(val)
  }


handleAlarmInfo(val:string){
      (this.selectValue as any).handlePositionId = val
        this.handleChangePoliceList(val)
}

}
</script>

<style lang="scss">
// @import "~@/assets/css/components/taskList/taskList.scss";
@import "~@/assets/css/components/taskList/advan-search.scss";
@import "~@/assets/css/components/taskList/element-ui-tabs.scss";
.search-content{
  .taskList-tabs{
    height: calc( 100% - 48px );
  }
}

  .imgChange{
    width: 30px;
  }

</style>
