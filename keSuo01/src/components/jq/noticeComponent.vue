<template>
  <div class="notice-box" v-drag>
    <div class="title-box drog-box">
      <div class="left-box">
        <img src="~@/assets/images/notice/notice-icon.png">
        <span>任务回告</span>
      </div>
      <img src="~@/assets/images/police-box/close.png" title="关闭" @click="closeNoticeBox">
    </div>
    <div class="content-box">
      <el-form ref="form" :model="form" :rules="noticeStatus ? replenishRules : rules" label-width="80px">
        <div class="detail-info-box" v-if="!showDetailFlag">
          <span>警情基本信息</span>
          <img src="~@/assets/images/notice/down.png" title="展开更多详细信息" @click="showMoreDetail">
        </div>
        <el-collapse-transition>
          <div class="top-form-box" v-if="showDetailFlag">
            <el-row :gutter="20">
              <el-col :span="8">
                <!-- prop 传入 Form 组件的 model 中的字段 使用validate、resetFields方法必填-->
                <el-form-item label="流水号" prop ="sn">
                  <el-input v-model="form.sn" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="案件来源" prop ="caseSource" style="width:100%;">
                  <el-select v-model="form.caseSource" :disabled="noticeStatus || jwzStatus" placeholder="请选择" style="width:100%;">
                    <el-option value=''>请选择</el-option>
                    <el-option v-for="item in caseSource" :key="item.id" :label="item.sourceName" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="调度时间">
                  <el-date-picker :disabled="noticeStatus || jwzStatus" popper-class="date-box" align='right' v-model="form.dispatchTime" type="datetime" placeholder="选择日期时间" size="small" :clearable="false" value-format="yyyy-MM-ddTHH:mm:ss.0000000+08:00">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="报警人" prop="aPerson">
                  <el-input :disabled="noticeStatus || jwzStatus" v-model="form.aPerson"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" class="two-box">
                <el-form-item label="性别" prop="genderId">
                    <el-select v-model="form.genderId" :disabled="noticeStatus || jwzStatus" placeholder="请选择">
                      <el-option value=''>请选择</el-option>
                    <el-option v-for="item in genderOption" :key="item.key" :label="item.value" :value="item.key"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="年龄">
                  <el-input v-model="form.age" :disabled="noticeStatus || jwzStatus" maxlength="3"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="身份证号">
                  <el-input v-model="form.idCardNo" :disabled="noticeStatus || jwzStatus"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="案件类型" prop="caseTypeId">
                  <el-select v-model="form.caseTypeId" :disabled="noticeStatus || jwzStatus" placeholder="请选择" @change="selectCaseType">
                    <el-option value=''>请选择</el-option>
                    <el-option v-for="item in caseDatas" :key="item.id" :label="item.typeName" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="案件性质">
                  <el-select v-model="form.casePropertyId" :disabled="noticeStatus || jwzStatus" placeholder="请选择" @change="selectCaseProperty">
                    <el-option value=''>请选择</el-option>
                    <el-option v-for="item in caseProperties" :key="item.id" :label="item.typeName" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="性质分类">
                  <el-select v-model="form.caseClassificationId" :disabled="noticeStatus || jwzStatus" placeholder="请选择">
                    <el-option value=''>请选择</el-option>
                    <el-option v-for="item in caseClassification" :key="item.id" :label="item.typeName" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="发案部门">
                  <el-select v-model="form.casePositionId" :disabled="noticeStatus || jwzStatus" placeholder="请选择" @change="selectPosition">
                    <el-option value=''>请选择</el-option>
                    <el-option v-for="item in casePositionDatas" :key="item.id" :label="item.positionName" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="部位分类">
                  <el-select v-model="form.casePositionTypeId" :disabled="noticeStatus || jwzStatus" placeholder="请选择">
                    <el-option value=''>请选择</el-option>
                    <el-option v-for="item in casePositionType" :key="item.id" :label="item.positionName" :value="item.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <div class="hide-detail" @click="hideMoreDetail">
                  <span>收起</span>
                  <img src="~@/assets/images/notice/top.png">
                </div>
              </el-col>
            </el-row>
          </div>
        </el-collapse-transition>
        <div class="other-box">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="处警单位" prop="dealStationName">
                <el-input v-model="form.dealStationName" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="处警人员" prop="dealPoliceIds">
                <el-select v-model="form.dealPoliceIds" :disabled="noticeStatus || jwzStatus" clearable multiple collapse-tags placeholder="请选择" >
                  <el-option value='0' label="全选" @click.native="selectAll">全选</el-option>
                  <el-option v-for="item in currentPoliceList" :key="item.userId" :label="item.policeName" :value="item.userId"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="责任区域">
                <el-select v-model="form.dutyZoneId" :disabled="noticeStatus || jwzStatus" placeholder="请选择">
                  <el-option value=''>请选择</el-option>
                  <el-option v-for="item in dutyZone" :key="item.id" :label="item.data" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- <el-row :gutter="20"> -->
            <!-- <el-col :span="8">
              <el-form-item label="受理单位">
                <el-select v-model="form.caseSource" placeholder="请选择">
                  <el-option value=''>请选择</el-option>
                  <el-option v-for="item in caseLists" :key="item.caseId" :label="item.caseName" :value="item.caseId"></el-option>
                </el-select>
              </el-form-item>
            </el-col> -->
            <!-- <el-col :span="8">
              <el-form-item label="受理人员">
                <el-select v-model="form.caseSource" placeholder="请选择">
                  <el-option value=''>请选择</el-option>
                  <el-option v-for="item in caseLists" :key="item.caseId" :label="item.caseName" :value="item.caseId"></el-option>
                </el-select>
              </el-form-item>
            </el-col> -->
          <!-- </el-row> -->
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="受理时间">
                <el-date-picker popper-class="date-box" v-model="form.caseTime" :disabled="noticeStatus || jwzStatus" type="datetime" placeholder="选择日期时间" size="small" :clearable="false" value-format="yyyy-MM-ddTHH:mm:ss.0000000+08:00">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="分派时间">
                <el-date-picker disabled popper-class="date-box" v-model="form.sendTime" type="datetime" placeholder="选择日期时间" size="small" :clearable="false" value-format="yyyy-MM-ddTHH:mm:ss.0000000+08:00">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出警时间">
                <el-date-picker disabled popper-class="date-box" v-model="form.replyTime" type="datetime" placeholder="暂无更新" size="small" :clearable="false" value-format="yyyy-MM-ddTHH:mm:ss.0000000+08:00">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="到场时间">
                <el-date-picker disabled popper-class="date-box" v-model="form.recvTime" type="datetime" placeholder="暂无更新" size="small" :clearable="false" @change="selectDataTime" value-format="yyyy-MM-ddTHH:mm:ss.0000000+08:00">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="值班领导" style="width:100%;" prop="dutyLeaderId">
                <el-select v-model="form.dutyLeaderId" :disabled="noticeStatus || jwzStatus" clearable placeholder="请选择">
                  <el-option v-for="item in currentPoliceList" :key="item.userId" :label="item.policeName" :value="item.userId"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="21">
              <el-form-item label="重复报警" >
                <p  @click="on_repeatEvent_command">
                  <el-input placeholder="请输入" v-model="form.repeatAlarm" readonly suffix-icon="el-icon-link"></el-input>
                </p>
              </el-form-item>
            </el-col>
            <el-col :span="3" v-if="!noticeStatus">
              <el-button v-if="form.repeatAlarm" @click="deleteRepeatAlarmConfirm">解除关联</el-button>
              <el-button v-else @click="on_repeatEvent_command">关联回告</el-button>
              
            </el-col>
          </el-row>
        </div>
        <div class="bottom-form-box">
          <el-row :gutter="20">
            <el-col :span="16">
              <el-form-item label="警情综述" prop ="content">
                <el-input type="textarea" :rows="3" placeholder="请输入内容" maxlength="100" v-model="form.content" :disabled="noticeStatus || jwzStatus">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="领导批示">
                <el-input type="textarea" :rows="3" placeholder="请输入内容" maxlength="50" v-model="form.leaderInsContent" :disabled="noticeStatus || jwzStatus">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="16">
              <el-form-item label="处警结果" prop="insContent">
                <el-input type="textarea" :rows="4" placeholder="请输入内容" maxlength="100" v-model="form.insContent" :disabled="noticeStatus || jwzStatus">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item class="notice-select-box" label="回告人员" prop="noticePoliceId">
               <el-select v-model="form.noticePoliceId" :disabled="noticeStatus || jwzStatus" clearable placeholder="请选择">
                  <el-option v-for="item in currentPoliceList" :key="item.userId" :label="item.policeName" :value="item.userId"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="回告时间" prop="noticeTime">
                <el-date-picker disabled popper-class="date-box" v-model="form.noticeTime" type="datetime" placeholder="系统时间" size="small" :clearable="false" value-format="yyyy-MM-ddTHH:mm:ss.0000000+08:00">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <template v-if="jwzStatus">
            <el-collapse v-model="activeNames" class="jwz-feedBack-box replenish-notice-box">
              <el-collapse-item title="警情反馈信息" name="1">
                <el-row :gutter="20" v-if="!jwzReplenishContent">
                  <el-col :span="24">
                    <el-form-item label="处置反馈">
                      <el-input type="textarea" :rows="4" placeholder="请输入内容" maxlength="100" v-model="jwzInsContent">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20" v-else>
                  <el-col :span="24">
                    <el-form-item label="补充反馈">
                      <el-input type="textarea" :rows="4" placeholder="请输入内容" maxlength="100" v-model="jwzInsContent">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </template>
          <el-row :gutter= "20" class='upload-content'>
            <el-col :span="16">
              <el-form-item label="添加附件">
                <uploadFile :noticeStatus="noticeStatus || jwzStatus" :defaultFileList="fileObject" @getFileList="getFileList" @deleteFile="deleteFile"></uploadFile>
              </el-form-item>
            </el-col>
          </el-row>
          <template v-if="noticeStatus">
            <el-row :gutter="20">
              <el-col :span="16">
                <el-form-item label="补充回告" prop="report.content">
                  <el-input :disabled="jwzStatus" type="textarea" :rows="4" placeholder="请输入内容" maxlength="100" v-model="form.report.content">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item class="notice-select-box" label="回告人员" prop="report.reportId">
                <el-select v-model="form.report.reportId" :disabled="jwzStatus" clearable placeholder="请选择">
                    <el-option v-for="item in currentPoliceList" :key="item.userId" :label="item.policeName" :value="item.userId"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="回告时间" prop="report.reportTime">
                  <el-date-picker disabled popper-class="date-box" v-model="form.report.reportTime" type="datetime" placeholder="系统时间" size="small" :clearable="false" value-format="yyyy-MM-ddTHH:mm:ss.0000000+08:00">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
          <template v-if="jwzReplenishContent && jwzReplenishContent.length > 0">
            <el-collapse accordion class="replenish-notice-box jwz-feedBack-box">
              <el-collapse-item>
                <template slot="title">补充反馈信息</template>
                <el-row :gutter="20" v-for="item in jwzReplenishContent" :key="item.id">
                  <el-col :span="24">
                    <el-form-item label="补充反馈">
                      <el-input type="textarea" disabled :rows="6" placeholder="请输入内容" maxlength="100" v-model="item.content">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </template>
          <template v-if="replenishNoticeDatas && replenishNoticeDatas.length > 0">
            <el-collapse accordion class="replenish-notice-box">
              <el-collapse-item>
                <template slot="title">补充回告信息</template>
                <el-row :gutter="20" v-for="item in replenishNoticeDatas" :key="item.id">
                  <el-col :span="16">
                    <el-form-item label="补充回告">
                      <el-input type="textarea" disabled :rows="6" placeholder="请输入内容" maxlength="100" v-model="item.content">
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="回告部门">
                      <el-input v-model="item.reportStationName" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="回告人员">
                      <el-input v-model="item.reportName" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="回告时间">
                      <el-input v-model="item.reportTime" disabled></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-collapse-item>
            </el-collapse>
          </template>
          <el-row :gutter= "20" class='footerBtn'>
            <el-col :span="21">
              <!-- <el-button>处警详情录入</el-button> -->
              <el-button @click="exportNoticeData">导出登记表</el-button>
            </el-col>
            <el-col :span="3">
              <template v-if="!jwzStatus">
                <el-button v-if="!noticeStatus" @click="handleSubmit('form')" class="submit-btn">提交回告</el-button>
                <el-button v-else @click="handleSubmit('form')" class="submit-btn">补充回告</el-button>
              </template>
              <template v-else>
                <el-button v-if="!jwzReplenishContent && jwzReplenishContent.length < 0" @click="handleFeedBack" class="submit-btn">提交反馈</el-button>
                <el-button v-else @click="handleFeedBack" class="submit-btn">补充反馈</el-button>
              </template>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </div>
  </div>   
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch, Prop, Emit } from "vue-property-decorator";
import { Action, Getter, State, Mutation } from "vuex-class";

import { JPConfig } from "@/config/JPConfig";
import { verify } from "@/utils/verify"
import { time } from '@/utils/formatTime'

import uploadFile from "@/components/uploadFile.vue";

import { getNoticeInfo_ui_model, tEventTableModel_par_model, businessModel_ui_model, feedBack_ui_model, alarmPolice_par_model} from "@/model/sysManage/alarm_result_model";
import { alarmService } from "@/bll/sysManage/alarmService";
import { fileModel_ui_model } from "@/model/sysManage/file_result_model";
import { fileService } from "@/bll/sysManage/fileService";
import { RepeatEvent_relation_num_ui_model, RepeatEvent_relation_num_par_model, RepeatEvent_delete_ui_model} from "@/model/repeatEvent/repeatEvent_model";
import { RepeatEventService } from "@/bll/repeatEvent/repeatEvent";
import { ticketBusEvent_child_result_model_detail } from '../../model/instructionInfo/instructionInfo_model';

@Component({
  components: {
    uploadFile,
  }
})
export default class Notice extends Vue {
  @Getter('getCaseSource') caseSource!: any; // 案件来源
  @Getter('getCaseDatas') caseDatas!: any; // 案件类型
  @Getter('getCasePositionDatas') casePositionDatas!: any; // 发案部位
  @Getter('getDutyZone') dutyZone: any; // 责任区域
  @Getter('getCurrentPoliceList') currentPoliceList: any; // 值班领导 回告人员 处警人员 当前人所在的警察列表（userId)
  @Getter('getUserinfo') userInfo: any; // 用户信息

  @Prop() public currentInsDatas!: any; // 当前指令的数据

  // 数据来源
  public caseProperties: Array<object> = []; // 案件性质
  public caseClassification: Array<object> = []; // 性质分类
  public casePositionType: Array<object> = []; // 部位分类
  public genderOption: Array<object> = [{key: '0', value: '男'}, {key: '1', value: '女'}, {key: '2', value: '不详'}]; // 性别

  // 自定义数据
  public showDetailFlag: boolean = true; // 是否显示详情信息
  public fileBaseUrl: string = ''; // 文件上传地址
  public fileList: Array<object> = []; // 上传文件ID列表
  public fileObject: Array<object> = []; // 上传文件，默认传递过去的为空，修改时，用于回显

  public noticeDatas: any = []; // 回告信息
  public noticeStatus: boolean = false; // 当前指令消息是否回告
  public replenishNoticeDatas: any = []; // 补充回告信息
  public replenishNoticeStatus: boolean = false; // 是否展示补充回告信息

  public jwzStatus: boolean = false; // 警务站JWZ  派出所PCS
  public jwzInsContent: string = ''; // 警务站反馈内容
  public jwzReplenishContent: any = []; // 警务站补充反馈内容
  public activeNames: Array<string> = ['1'];

  // form表单数据初始化
  public form: any = {
    sn: '', // 流水号
    caseSource: '', // 110报警
    dispatchTime: '', // 调度时间
    sendTime: '', // 分派时间
    replyTime: '', // 出警时间
    caseTime: '', // 受理时间
    recvTime: '', // 到场时间 传入时间格式 new Date()
    aPerson: '', // 报警人
    age: '', 
    genderId: '', // 性别
    idCardNo: '',
    dealStationName: '', // 处警单位 默认当前人部门
    noticeTime: '',

    repeatAlarm: '', // 重复报警
    content: "", // 警情综述 最大长度100
		insContent: "", // 处置结果 最大长度100
    leaderInsContent: '', // 领导批示 最大长度50

    caseTypeId: '', // 案件类型
    casePropertyId: '', // 案件性质
    caseClassificationId: '', // 性质分类
    casePositionId: '', // 发案部门
    casePositionTypeId: '', // 部位分类
    
    dutyZoneId: '', // 责任区域ID
    dealPoliceIds: [], // 处警人员数组 多选
    dutyLeaderId: '', // 值班领导Id
    noticePoliceId: '', // 回告民警Id
    /** 补充回告 */
    report: {
      content: '',
      reportId: '',
      reportTime: '',
    }
  };

  // 验证规则
  public rules: any = {
    // caseSource: [{ required: true, message: '请选择案件来源', trigger: 'change' }],
    aPerson: [{required: true, message: '请输入报警人姓名', trigger: 'blur'}],
    genderId: [{ required: true, message: '请选择性别', trigger: 'change' }],
    caseTypeId: [{ required: true, message: '请选择案件类型', trigger: 'change' }],
    dealStationName: [{required: true, message: '请输入处警单位', trigger: 'blur'}],
    dealPoliceIds: [{ required: true, message: '请选择处警人员', trigger: 'change' }],
    dutyLeaderId: [{ required: true, message: '请选择值班领导', trigger: 'change' }],
    noticePoliceId: [{ required: true, message: '请选择回告人员', trigger: 'change' }],
    // noticeTime: [{ required: true, message: '请选择回告时间', trigger: 'change'}],
    content: [{required: true, message: '请输入警情综述', trigger: 'blur'}],
    insContent: [{required: true, message: '请输入处置结果', trigger: 'blur'}],
    // 'report.content': [{required: true, message: '请输入补充回告', trigger: 'blur'}],
    // 'report.reportId': [{ required: true, message: '请选择补充回告人员', trigger: 'change' }],
  }
  /** 补充回告rules */
  public replenishRules: any = {
    // caseSource: [{ required: true, message: '请选择案件来源', trigger: 'change' }],
    aPerson: [{required: true, message: '请输入报警人姓名', trigger: 'blur'}],
    genderId: [{ required: true, message: '请选择性别', trigger: 'change' }],
    caseTypeId: [{ required: true, message: '请选择案件类型', trigger: 'change' }],
    dealStationName: [{required: true, message: '请输入处警单位', trigger: 'blur'}],
    dealPoliceIds: [{ required: true, message: '请选择处警人员', trigger: 'change' }],
    dutyLeaderId: [{ required: true, message: '请选择值班领导', trigger: 'change' }],
    noticePoliceId: [{ required: true, message: '请选择回告人员', trigger: 'change' }],
    // noticeTime: [{ required: true, message: '请选择回告时间', trigger: 'change'}],
    content: [{required: true, message: '请输入警情综述', trigger: 'blur'}],
    insContent: [{required: true, message: '请输入处置结果', trigger: 'blur'}],
    'report.content': [{required: true, message: '请输入补充回告', trigger: 'blur'}],
    'report.reportId': [{ required: true, message: '请选择补充回告人员', trigger: 'change' }],
  }

  // 关闭弹框
  public closeNoticeBox() {
    this.fileList = []; // 置空上传文件ID
    this.$emit('closeNoticeBox', false);
  }

  public showMoreDetail() {
    this.showDetailFlag = true;
  }

  public hideMoreDetail() {
    this.showDetailFlag = false;
  }

  public handleChange() {
    
  }
  /**
   * 打开关联警情
   */
  @Emit("on_repeatEvent_command")
  on_repeatEvent_command(){
    this.currentInsDatas.noticeStatus = this.noticeStatus;
    return this.currentInsDatas;
  }
  /** 获取上传文件ID */
  @Emit()
  getFileList(file: any) {
    // 上传文件ID 存入fileList数组
    console.log(file);
    this.fileList.push(file.fileID)
    console.log(this.fileList);
  }

  /** 删除文件 */
  @Emit()
  deleteFile(fileList: any) {
    this.fileList = [];
    fileList.map((item: any) => {
      this.fileList.push(item.response.fileID);
    })
    console.log(this.fileList);
  }

  /** 回告信息 */
  public handleSubmit(form: any) {
    (this.$refs[form] as any).validate((valid: boolean) => {
      if(valid) {
        // 判断是否输入了身份证
        if((this.form.idCardNo && verify.idCode(this.form.idCardNo)) || !this.form.idCardNo) {
          if (this.form.dealPoliceIds.length >= 2) {
            this.submitNoticeInfo();
          } else {
            this.$message.warning('处置民警至少选择2个！');
          }
        } else {
          this.$message.warning('身份证号输入有误！');
        }
      }
    })
  }

  /** 导出登记表 */
  public async exportNoticeData() {
    let params = new tEventTableModel_par_model();
    params.userId = this.userInfo.userId; // 用户ID
    params.insId = this.currentInsDatas.id; // 指令ID
    params.bussinessKey = this.currentInsDatas.businessKey;

    let resultData = await new alarmService().downLoadReportFrom(params);
    if(resultData.code == '200' && resultData.msg == 'ok') {
      let businessId = resultData.data; // 文件ID
      let url = this.fileBaseUrl + '?businessId=' + businessId;
      window.location.href = url;
    }
  }

  /** 指令结束接口 回告后调用 */
  public async finishedIns(userId: string, insId: string) {
    let params = new alarmPolice_par_model();
    params.userId = userId;
    params.insId = insId;
    let result = await new alarmService().finishedIns(params);
    if(result.code == '200' && result.msg == 'ok') {
      
    }
  }

  /** pcs 提交回告 */
  public async submitNoticeInfo() {
    let paramsObj = {
      assignTime: time.getDateTimeByStr(this.form.sendTime, true, true),
      bussinessKey: this.currentInsDatas.businessKey,
      insId: this.currentInsDatas.id,
      event: {
        caseTypeId: this.form.caseTypeId,
        caseTypePropertyId: this.form.casePropertyId,
        propertyTypeId: this.form.caseClassificationId,
        casePartTypeId: this.form.casePositionId,
        partTypeId: this.form.casePositionTypeId,
        eventContent: this.form.content,
      },
      eventInfo: {
        dealTime: time.getDateTimeByStr(this.form.caseTime, true, true),
        eventResult: this.form.insContent,
        leaderContent: this.form.leaderInsContent,
        leaderId: this.form.dutyLeaderId,
        stationId: this.userInfo.policeStationInfo.id,
        policeId: this.form.dealPoliceIds
      },
      fileProxies: this.fileList,
      report: {
        content: this.form.report.content,
        reportId: this.form.report.reportId,
        reportTime: time.getDateTimeByStr(this.form.report.reportTime, true, true),
      },
      policedTime: null,
      policeTime: null,
      repeateEventId: "",
      reportId: this.form.noticePoliceId,
      reportTime: time.getDateTimeByStr(this.form.noticeTime, true, true),
      userId: this.userInfo.userId,
      caller: {
        callerName: this.form.aPerson,
        gender: this.form.genderId,
        idCard: this.form.idCardNo,
        age: this.form.age
      },
      isCommit: 1,
      lostPeopleModel: {
        age: 0,
        caseTime: null,
        driving: false,
        fortunate: false,
        height: 0,
        lostTimeOut: false,
        lunacy: false,
        maxAge: 0,
        maxHeight: 0,
        status: false,
        backTime: null
      },
      lostPeoReport: {
        badHobby: 0,
        contradictoryDispute: 0,
        hurt: 0,
        illegalIndustry: 0,
        minor: 0,
        peoCarLost: 0,
        property: 0,
        specificOccupation: 0,
        stranger: 0,
        transaction: 0
      }
    }

    let params = new tEventTableModel_par_model();
    params = Object.assign(params, paramsObj);
    let resultData = await new alarmService().ppolsituInfo_eventtable(params);
    console.log(resultData);
    if(resultData.code == '200' && resultData.msg == 'ok') {
      /** 指令结束 */
      this.finishedIns(this.userInfo.userId, this.currentInsDatas.id);
      this.$emit('closeNoticeBox', false);
      this.$message.success('回告成功！');
    }
  }

  /** jwz 提交反馈 */
  public async handleFeedBack() {
    if (!this.jwzInsContent.trim()) {
      this.$message({
        type: 'warning',
        message: '反馈内容不能为空！'
      });
      return;
    }
    let params = new feedBack_ui_model();
    params.userId = this.userInfo.userId; // 用户ID
    params.insId = this.currentInsDatas.id; // 指令ID
    params.taskId = this.currentInsDatas.taskId; // 任务ID
    params.bussinesskey = this.currentInsDatas.businessKey; // 警情ID
    params.content = this.jwzInsContent;
    params.addtime = time.getDateTimeByStr(new Date(), true, true);
    params.addStationId = this.userInfo.policeStationInfo.stationName;
    params.businessFrom = this.currentInsDatas.businessFrom;

    let resultData = await new alarmService().feedBack_addFeedBack(params);
    if(resultData.code == '200' && resultData.msg == 'ok') {
      this.$emit('closeNoticeBox', false);
      this.$message({
        type: 'success',
        message: '反馈成功！'
      })
    }
  }

  /** 获取反馈信息 */
  public async getFeedBackData() {
    let params = new feedBack_ui_model();
    params.bussinesskey = this.currentInsDatas.businessKey; // 警情ID

    let resultData = await new alarmService().feedBack_getFeedBackByBussinessKey(params);
    if(resultData.code == '200' && resultData.msg == 'ok') {
      this.jwzReplenishContent = resultData.data;
      console.log(resultData);
    }
  }

  // 时间选择工具
  public selectDataTime(val: any) {
    console.log(val)
  }         

  created () {
    this.fileBaseUrl = JPConfig.Instance()['jpHttpUrl'] + '/api/jp-TIFS-FileCenter-ms/file';
    /** 判断是警务站还是派出所 */
    if (this.userInfo.policeStationInfo.stationNum === 'JWZ') {
      this.jwzStatus = true;
    } else {
      this.jwzStatus = false;
    }
  }

  mounted () {
    console.log(this.currentInsDatas);
    /** 判断是否回告 通过获取回告信息是否有userId来判断是否回告了 */
    /** 获取回告信息 
     * businessFrom 1 警情
    */
    this.getNoticeInfo();

    /** 获取反馈信息 */
    this.getFeedBackData();
  }

  /** 获取回告信息 */
  public async getNoticeInfo() {
    let params = new getNoticeInfo_ui_model();
    params.userId = this.userInfo.userId;
    params.insId = this.currentInsDatas.id;
    params.bussinesskey = this.currentInsDatas.businessKey;

    let resultData = await new alarmService().getNoticeInfo(params);
    if(resultData.code == '200' && resultData.msg == 'ok') {
      this.noticeDatas = resultData.data;
      /** 判断当前指令是否回告 */
      if (this.noticeDatas.userId) {
        this.noticeStatus = true;
        let dealPoliceArr: any = [];
        this.noticeDatas.eventDeal.polices.map((item: any) => {
          dealPoliceArr.push(item.policeId);
        });
        this.replenishNoticeDatas = this.noticeDatas.reports; // 补充回告数组
        if (this.replenishNoticeDatas && this.replenishNoticeDatas.length > 0) {
          this.replenishNoticeDatas.map((item: any) => {
            item.reportTime = time.getDateTimeByStr(item.reportTime, false, true)
          });
        }
        /** 文件列表 */
        if (this.noticeDatas.fileProxies) {
          this.noticeDatas.fileProxies.map((item: any) => {
            let fileObj = {
              name: '',
              fileID: '',
            }
            fileObj.name = item.fileName + '.' + item.fileType;
            fileObj.fileID = item.fileID;
            this.fileObject.push(fileObj);
          })
        }
        this.form = {
          sn: this.currentInsDatas.no, // 流水号
          caseSource: '', // 110报警
          dispatchTime: '', // 调度时间
          sendTime: new Date(this.noticeDatas.assignTime), // 分派时间 传入时间格式 new Date()
          replyTime: '', // 出警时间
          caseTime: new Date(this.noticeDatas.eventDeal.dealTime), // 受理时间
          recvTime: '', // 到场时间 
          aPerson: this.noticeDatas.caller.callerName, // 报警人
          age: this.noticeDatas.caller.age, 
          genderId: this.noticeDatas.caller.gender, // 性别
          idCardNo: this.noticeDatas.caller.idCard,
          dealStationName: this.noticeDatas.eventDeal.stationName, // 处警单位 默认当前人部门
          noticeTime: new Date(this.noticeDatas.reportTime), // 回告时间

          caseTypeId: this.noticeDatas.event.caseTypeId, // 案件类型
          casePropertyId: this.noticeDatas.event.caseTypePropertyId, // 案件性质
          caseClassificationId: this.noticeDatas.event.propertyTypeId, // 性质分类

          casePositionId: this.noticeDatas.event.casePartTypeId, // 发案部门
          casePositionTypeId: this.noticeDatas.event.partTypeId, // 部位分类
          
          repeatAlarm: "", // 重复报警
          content: this.noticeDatas.event.eventContent, // 警情综述 最大长度100
          insContent: this.noticeDatas.eventDeal.eventResult, // 处置结果 最大长度100
          leaderInsContent: this.noticeDatas.eventDeal.leaderContent, // 领导批示 最大长度50

          dutyZoneId: this.noticeDatas.eventDeal.dutyAreaId, // 责任区域ID
          dealPoliceIds: dealPoliceArr, // 处警人员数组 多选
          dutyLeaderId: this.noticeDatas.eventDeal.leaderId, // 值班领导Id
          noticePoliceId: this.noticeDatas.reportId, // 回告民警Id
          /** 补充回告 */
          report: {
            content: this.form.report.content,
            reportId: this.userInfo.userId,
            reportTime: this.form.report.reportTime,
          }
        }
        this.getCaseData(); // 初始化数据
        this.getRelationsData() //获取已关联的警情流水号
      } else {
        /** 获取警情业务模型 */
        let paramsModel = new businessModel_ui_model();
        paramsModel.id = this.currentInsDatas.businessKey;
        paramsModel.type = 1; // 警情类型 1
        let businessModelData:any = await new alarmService().orderAggregation_business_detail(paramsModel);
        if (businessModelData.code == '200' && businessModelData.msg == 'ok') {
          console.log(businessModelData)
          // 默认信息
          this.form = {
            sn: businessModelData.data.sn, // 流水号
            caseSource: '', // 110报警
            dispatchTime: '', // 调度时间
            sendTime: new Date(businessModelData.data.alarmTime), // 分派时间 传入时间格式 new Date()
            replyTime: '', // 出警时间
            caseTime: new Date(), // 受理时间
            recvTime: '', // 到场时间 
            aPerson: businessModelData.data.aperson, // 报警人
            age: '', 
            genderId: businessModelData.data.apersonGender, // 性别
            idCardNo: '',
            dealStationName: this.userInfo.policeStationInfo.stationName, // 处警单位 默认当前人部门
            noticeTime: '',

            caseTypeId: businessModelData.data.alarmCategory, // 案件类型
            casePropertyId: businessModelData.data.alarmType, // 案件性质
            caseClassificationId: businessModelData.data.alarmTinyType, // 性质分类

            casePositionId: businessModelData.data.casePosition, // 发案部门
            casePositionTypeId: businessModelData.data.positionType, // 部位分类
            
            repeatAlarm: businessModelData.data.repeatSn ? businessModelData.data.repeatSn.join():'', // 重复报警
            content: "", // 警情综述 最大长度100
            insContent: "", // 处置结果 最大长度100
            leaderInsContent: '', // 领导批示 最大长度50

            dutyZoneId: '', // 责任区域ID
            dealPoliceIds: [], // 处警人员数组 多选
            dutyLeaderId: '', // 值班领导Id
            noticePoliceId: this.userInfo.userId, // 回告民警Id
            /** 补充回告 */
            report: {
              content: '',
              reportId: '',
              reportTime: '',
            }
          }
          this.getCaseData(); // 初始化数据
        }
      }  
    }
  }
   /**获取已关联的警情流水号 */
  public async getRelationsData(){
    let params = new RepeatEvent_relation_num_ui_model();
    params.eventSn = this.currentInsDatas.no;
    let resultData = await new RepeatEventService().getRelationNum(params);
    if(resultData.code == "200" && resultData.msg == "ok"){
      this.form.repeatAlarm = resultData.data.join();
    } else{
      this.form.repeatAlarm = "";
    }
  }
  /**解除关联弹框 */
  deleteRepeatAlarmConfirm(){
    let confirmStr:string = "确定要解除所有已关联的警情吗"
    this.$confirm(confirmStr, '提示', {
      cancelButtonClass: 'el-button--info',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.deleteRepeatAlarm();
    }).catch(() => {

    });
  }
   /**解除关联请求 */
  async deleteRepeatAlarm(){
    let _this:any = this;
    let params = new RepeatEvent_delete_ui_model();
    params.eventSn = this.currentInsDatas.no;
    params.userId = this.userInfo.userId;
    let resultData = await new RepeatEventService().deleteRepeatEvent(params);
    if(resultData.code == '200'&& resultData.msg == 'ok'){
      _this.$message({
        type: 'success',
        message: '解除成功！'
      })
      _this.form.repeatAlarm = ""
    }
  }
  // 获取默认下拉数据 初始化数据 可在此处加初始化loading
  public async getCaseData() {
    console.log(this.caseDatas);
    this.caseDatas.map((item: any) => {
      if (item.id === this.form.caseTypeId) {
        this.caseProperties = item.tEventTypePropertyModels;
      }
    })
    this.caseProperties.map((item: any) => {
      if (item.id === this.form.casePropertyId) {
        this.caseClassification = item.propertyTypeModels
      }
    })
    this.casePositionDatas.map((item: any) => {
      if (item.id === this.form.casePositionId) {
        this.casePositionType = item.teventPositions;
      }
    })
  }

  // 选中案件类型
  public selectCaseType() {
    this.form.casePropertyId = '';
    this.form.caseClassificationId = '';
    this.caseDatas.map((item: any) => {
      if (item.id === this.form.caseTypeId) {
        this.caseProperties = item.tEventTypePropertyModels;
      }
    })
  }
  // 选中案件性质
  public selectCaseProperty() {
    this.form.caseClassificationId = '';
    this.caseProperties.map((item: any) => {
      if (item.id === this.form.casePropertyId) {
        this.caseClassification = item.propertyTypeModels
      }
    })
  }
  // 选中法案部位
  public selectPosition() {
    this.form.casePositionTypeId = '';
    this.casePositionDatas.map((item: any) => {
      if (item.id === this.form.casePositionId) {
        this.casePositionType = item.teventPositions;
      }
    })
  }
  // 全选处警人员
  public selectAll() {
    console.log(this.form.dealPoliceIds);
    if (this.form.dealPoliceIds.length < this.currentPoliceList.length) {
      this.form.dealPoliceIds = []; // 置空，重新插入
      this.currentPoliceList.map((item: any) => {
        this.form.dealPoliceIds.push(item.userId);
      })
    } else {
      // 取消全选
      this.form.dealPoliceIds = [];
    }
  }

  /** 展示补充回告信息 */
  showReplenishNotice() {
    this.replenishNoticeStatus = !this.replenishNoticeStatus;
  }
}

</script>

<style lang="scss" scoped>
@import "~@/assets/css/components/noticeComponent/notice.scss";
</style>