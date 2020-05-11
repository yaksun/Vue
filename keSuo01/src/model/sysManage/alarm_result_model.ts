import { base_model } from "@/model/base_model";
import { base_loading_model } from "@/model/base_loading_model";

/***【入参】请求入参jp_polices_byUserId_api **/
class alarmPolice_par_model extends base_loading_model {
  public constructor() {
    super();
  }

  /*** 用户ID ***/
  public userId!: string;

  /** 指令ID */
  public insId!: string;
}

/***【输出】输出结果modelOK**/
class alarmPolice_result_model extends base_model {
  public constructor() {
    super();
  }

  /*** 明细数据**/
  public data!: alarmPolice_result_model_detail;
}

class alarmPolice_result_model_detail {
  /**默认构造函数 */
  public constructor() { }

  /***生日***/
 public birthday!: string;

 /***单位部门ID***/
  public deptId!: string;

 /***性别***/
  public gender!: string;

 /***警员id，新增时不要为该字段赋值***/
  public policeId!: string;

 /***身份证号***/
  public idCardNo!: string;

 /******/
  public isDelete!: number;

 /***是否为测试警员***/
  public isTestPolice!: any;

 /***纬度***/
  public latitude!: any;

 /***经度***/
  public longitude!: any;

 /***姓名***/
  public policeName!: string;

 /***办公电话***/
  public officeTel!: string;

 /***照片***/
  public pictureUrl!: string;

 /***警员代码***/
  public policeCode!: string;

 /***岗位***/
  public policePosition!: string;

 /***岗位类型***/
  public policeType!: string;

 /***默认手台号***/
  public radioId!: string;

 /***顺序***/
  public sort!: any;

 /***部门***/
  public stationId!: string;

 /***状态***/
  public status!: any;

 /***电话***/
  public telephone!: string;
}

/***【输入】uiModel界面数据绑定OK**/
class alarmPolice_ui_model extends alarmPolice_par_model {
  public constructor() {
    super();
  }
}

/***【入参】请求入参 jp_ppolsituInfo_api **/
class ppolsituInfo_par_model extends base_loading_model {
  public constructor() {
    super();
  }

  /******/
  public userId!: string
}

/***【输出】输出结果modelOK**/
class ppolsituInfo_result_model extends base_model {
  public constructor() {
    super();
  }

  /*** 明细数据**/
  public data!: ppolsituInfo_result_model_detail;
}

class ppolsituInfo_result_model_detail {
  /**默认构造函数 */
  public constructor() { }

}

/***【输入】uiModel界面数据绑定OK**/
class ppolsituInfo_ui_model extends ppolsituInfo_par_model {
  public constructor() {
    super();
  }
}

/***【入参】请求入参model警情信息**/
class tEventTableModel_par_model extends base_loading_model {
  public constructor()  {super();}

 /***分派时间(例子:2009-06-15T13:45:30.0000000+08:00)***/
  public assignTime!: string;

 /***警情Id***/
  public bussinessKey!: string;

 /***文件Id集合***/
  public fileProxies!: [];

 /***指令id***/
  public insId!: string;

 /***是否提交   0:保存  1:提交***/
  public isCommit!: number;

 /***app处警时间***/
  public policeTime!: string;

 /***app到场时间***/
  public policedTime!: string;

 /***重复警情***/
  public repeateEventId!: string;

 /***回告人Id***/
  public reportId!: string;

 /***回告时间***/
  public reportTime!: string;

 /***用户id***/
  public userId!: string;

  public event!: event_par_model_detail;

  public eventInfo!: eventInfo_par_model_detail;

  public report!: report_par_model_detail;

  public caller!: caller_par_model_detail;

  public lostPeopleModel!: lostPeopleModel_par_model_detail;

  public lostPeoReport!: lostPeoReport_par_model_detail;
}

class lostPeoReport_par_model_detail {
  badHobby!: number;
  contradictoryDispute!: number;
  hurt!: number;
  illegalIndustry!: number;
  minor!: number;
  peoCarLost!: number;
  property!: number;
  specificOccupation!: number;
  stranger!: number;
  transaction!: number;
}

class lostPeopleModel_par_model_detail {
  age!: number;
  caseTime!: string;
  driving!: boolean;
  fortunate!: boolean;
  height!: number;
  lostTimeOut!: boolean;
  lunacy!: boolean;
  maxAge!: number;
  maxHeight!: number;
  status!: boolean;
  backTime!: string;
}

class caller_par_model_detail {
  callerName!: string;
  gender!: string;
  idCard!: string;
  age!: string;
}

class report_par_model_detail {
  public content!: string;
  public reportTime!: string;
}

class event_par_model_detail {
  caseTypeId!: string;
  caseTypePropertyId!: string;
  propertyTypeId!: string;
  casePartTypeId!: string;
  partTypeId!: string;
  eventContent!: string;
}

class eventInfo_par_model_detail {
  public dealTime!: string;
  public eventResult!: string;
  public leaderContent!: string;
  public leaderId!: string;
  public stationId!: string;
  public policeId!: Array<string>;
}

/***【输出】输出结果modelOK**/
class tEventTableModel_result_model extends base_model  {
public constructor()  {super();}

/*** 明细数据**/
public data!: tEventTableModel_result_model_detail;
}

class tEventTableModel_result_model_detail {
  /**默认构造函数 */
  public constructor() { }
}

/***【输出】带分页的结果modelOK**/
class  tEventTableModel_page_reult_model  extends tEventTableModel_result_model_detail {
  public constructor()  {super();}

}

/***【输入】uiModel界面数据绑定OK**/
class tEventTableModel_ui_model  extends tEventTableModel_par_model {
  public constructor()  {super();}

}


/***【入参】请求入参model申请信息**/
class tEventApplyUpDownParams_par_model extends base_loading_model {
  public constructor()  {super();}

  public tEventApplyUpDownParams!: [];

}

/***【输出】输出结果modelOK**/
class tEventApplyupdown_result_model extends base_model  {
  public constructor()  {super();}

  /*** 明细数据**/
  public data!: tEventApplyupdown_result_model_detail;
}

class tEventApplyupdown_result_model_detail {
  /**默认构造函数 */
  public constructor() { }

}

/***【输出】带分页的结果modelOK**/
class tEventApplyupdown_page_reult_model  extends tEventApplyupdown_result_model_detail {
  public constructor()  {super();}
}

/***【输入】uiModel界面数据绑定OK**/
class tEventApplyUpDownParams_ui_model  extends tEventApplyUpDownParams_par_model {
  public constructor()  {super();}

}

/***【入参】请求入参modeldelayParams**/
class delayParams_par_model extends base_loading_model {
  public constructor()  {super();}

  public delayParams!: [];

}

/***【输出】输出结果modelOK**/
class delayParams_result_model extends base_model  {
  public constructor()  {super();}

  /*** 明细数据**/
  public data!: delayParams_result_model_detail;
}

class delayParams_result_model_detail {
  /**默认构造函数 */
  public constructor() { }

}

/***【输入】uiModel界面数据绑定OK**/
class delayParams_ui_model extends delayParams_par_model {
  public constructor()  {super();}

}

/***【入参】请求入参model反馈信息**/
class feedBack_par_model extends base_loading_model {
  public constructor()  {super();}

 /***部门ID***/
  public addStationId!: string;

 /***添加时间***/
  public addtime!: string;

 /******/
  public businessFrom!: number;

 /******/
  public businessRelation!: any;

 /***警情ID***/
  public bussinesskey!: string;

 /***反馈内容***/
  public content!: string;

 /***标识符***/
  public id!: string;

 /***指令ID***/
  public insId!: string;

 /***任务ID***/
  public taskId!: string;

 /***反馈类型***/
  public type!: string;

 /***反馈用户ID***/
  public userId!: string;

}

/***【输出】输出结果modelOK**/
class feedBack_result_model extends base_model  {
  public constructor()  {super();}

  /*** 明细数据**/
  public data!: feedBack_result_model_detail;
}

class feedBack_result_model_detail {
  /**默认构造函数 */
  public constructor() { }

}

/***【输入】uiModel界面数据绑定OK**/
class feedBack_ui_model extends feedBack_par_model {
  public constructor()  {super();}

}

/***【入参】请求入参model反馈信息**/
class getNoticeInfo_par_model extends base_loading_model {
  public constructor()  {super();}

 /***警情ID***/
  public bussinesskey!: string;

 /***指令ID***/
  public insId!: string;

 /***反馈用户ID***/
  public userId!: string;

}

/***【输出】输出结果modelOK**/
class getNoticeInfo_result_model extends base_model  {
  public constructor()  {super();}

  /*** 明细数据**/
  public data!: getNoticeInfo_result_model_detail;
}

class getNoticeInfo_result_model_detail {
  /**默认构造函数 */
  public constructor() { }

}

/***【输入】uiModel界面数据绑定OK**/
class getNoticeInfo_ui_model extends getNoticeInfo_par_model {
  public constructor()  {super();}

}



/***【入参】请求入参model反馈信息**/
class businessModel_par_model extends base_loading_model {
  public constructor()  {super();}

 /***警情ID***/
  public id!: string;

 /***类型***/
  public type!: number;

}

/***【输出】输出结果modelOK**/
class businessModel_result_model extends base_model  {
  public constructor()  {super();}

  /*** 明细数据**/
  public data!:Array<businessModel_result_model_detail>;
}

 /***【输出】明细数据modelOK**/
class  businessModel_result_model_detail  {
  public constructor() {}

 /******/
  public aaddress!: string;

 /***行为类型，类型18***/
  public actionType!: [];

 /***行为类型***/
  public actionTypeWords!: [];

 /******/
  public addDateTime!: string;

 /***地址***/
  public address!: string;

 /***报警类别---1***/
  public alarmCategory!: string;

 /***报警类别名称***/
  public alarmCategoryName!: string;

 /***历史报警次数，通过联系电话查询***/
  public alarmCount!: number;

 /***数据来源***/
  public alarmDataSource!: string;

 /***重点人预警标识***/
  public alarmEventMark!: string;

 /***重点人预警时间***/
  public alarmEventTime!: string;

 /***重点人预警来源  预警感知设备类型：1:wifi预警，2:酒店住宿，3:网吧上网，4:人脸识别，5:LBS手机预警，6:车辆卡口，7:铁路，8:民航，9:汽车***/
  public alarmEventType!: string;

 /***设备预警id***/
  public alarmId!: string;

 /***预警感知设备地址***/
  public alarmSensorAddress!: string;

 /***预警感知设备id***/
  public alarmSensorNum!: string;

 /***报警时间***/
  public alarmTime!: string;

 /***报警细类---3***/
  public alarmTinyType!: string;

 /***报警细类名称***/
  public alarmTinyTypeName!: string;

 /***报警类型---2***/
  public alarmType!: string;

 /***报警类型名称***/
  public alarmTypeName!: string;

 /******/
  public alatitude!: any;

 /******/
  public alongitude!: any;

 /******/
  public aperson!: string;

 /******/
  public apersonGender!: string;

 /******/
  public apersonPhone!: string;

 /******/
  public aphone!: string;

 /******/
  public aphoneOwner!: string;

 /***区域***/
  public area!: string;

 /***工作指令业务id***/
  public businessKey!: string;

 /***车辆卡口预警，类型6***/
  public cargateEvent!: cargateEvent_child_result_model_detail ;

 /***发案部位***/
  public casePosition!: string;

 /***发案部位名称***/
  public casePositionName!: string;

 /***事件原因***/
  public caseReason!: string;

 /***事件原因word***/
  public caseReasonWords!: string;

 /***事件类型***/
  public caseType!: [];

 /***事件类型word***/
  public caseTypeWords!: [];

 /***案发时间***/
  public casetime!: string;

 /***伤亡数量，类型21***/
  public casualtyCount!: [];

 /***伤亡数量***/
  public casualtyCountWords!: [];

 /***线索ID（外部系统）***/
  public clueId!: string;

 /***线索来源***/
  public clueSource!: string;

 /***线索来源word***/
  public clueSourceWords!: string;

 /***采集时间***/
  public collectDateTime!: string;

 /***采集部门ID***/
  public collectStationId!: string;

 /***采集部门名称***/
  public collectStationName!: string;

 /***采集用户ID***/
  public collectUserId!: string;

 /***采集用户名称***/
  public collectUserName!: string;

 /***内容***/
  public content!: string;

 /***接警内容***/
  public contents!: string;

 /***警情创建人id***/
  public createPersonId!: string;

 /***舆情数据来源，对应T_PUBSENTIMENT_DIC的type为2***/
  public dataSource!: number;

 /***舆情数据来源word***/
  public dataSourceWords!: string;

 /***警情处理集合***/
  public dealModelList!: dealModelList_child_result_model_detail [];

 /***部门来源***/
  public dep!: string;

 /***台号***/
  public departNumber!: string;

 /***市***/
  public district!: string;

 /***案发行政区域ID***/
  public districtId!: any;

 /***责任区***/
  public dutyAreaId!: string;

 /***处警结果***/
  public eventResult!: string;

 /***警情更新列表***/
  public eventUpdateList!: eventUpdateList_child_result_model_detail [];

 /***人脸预警，类型4***/
  public faceAlarmEvent!: faceAlarmEvent_child_result_model_detail ;

 /***群体规模***/
  public groupScale!: string;

 /***群体规模word***/
  public groupScaleWords!: string;

 /***群体类型***/
  public groupType!: string;

 /***群体类型word***/
  public groupTypeWords!: string;

 /***处警部门ID***/
  public handleStationId!: string;

 /***处警部门名称***/
  public handleStationName!: string;

 /***处警用户ID组***/
  public handleUserIds!: [];

 /***处警用户名称组***/
  public handleUserNames!: [];

 /***是否拥有回告表单***/
  public hasReport!: any;

 /***地理位置***/
  // public historicalLocation!: historicalLocation_child_result_model_detail [];

 /***酒店预警，类型2***/
  public hotelEvent!: hotelEvent_child_result_model_detail ;

 /***业务信息id***/
  public id!: string;

 /***身份证号码***/
  public idCard!: string;

 /***重点人详细信息***/
  // public importAllInfo!: importAllInfo_child_result_model_detail ;

 /***重点部位***/
  public importantpartId!: string;

 /***重点路段***/
  public importantroadId!: string;

 /***指令id集合***/
  public instructionIds!: [];

 /******/
  // public intelligenceFile!: intelligenceFile_child_result_model_detail [];

 /******/
  // public intelligenceInsRelation!: intelligenceInsRelation_child_result_model_detail [];

 /******/
  // public intelligencePerson!: intelligencePerson_child_result_model_detail [];

 /***是否有效(0：无效 1：有效)***/
  public isValid!: number;

 /***纬度***/
  public latitude!: any;

 /***二次定位纬度***/
  public latitude2!: any;

 /***LBS预警，类型5***/
  // public lbsEvent!: lbsEvent_child_result_model_detail ;

 /***等级***/
  public levels!: number;

 /***经度***/
  public longitude!: any;

 /***二次定位经度***/
  public longitude2!: any;

 /***迷失人员记录集合***/
  // public lostPeopleList!: lostPeopleList_child_result_model_detail [];

 /***厂家来源***/
  public manufacturer!: string;

 /***采集来源，对应T_PUBSENTIMENT_DIC的type为1***/
  public netSource!: [];

 /***采集来源word***/
  public netSourceWords!: [];

 /***采集来源小类，类型1***/
  public netTinySource!: [];

 /***采集来源小类***/
  public netTinySourceWords!: [];

 /***网吧预警，类型3***/
  // public netbarEvent!: netbarEvent_child_result_model_detail ;

 /***流水号***/
  public no!: string;

 /***事件发生时间***/
  public occurrentDateTime!: string;

 /***警情来源***/
  public origin!: string;

 /***重点人标识***/
  public personId!: string;

 /***对象状态，类型19***/
  public personStatus!: [];

 /***对象状态***/
  public personStatusWords!: [];

 /***联系电话***/
  public phoneNumber!: string;

 /***预案ID***/
  public planId!: string;

 /***部位细类***/
  public positionTinyType!: string;

 /***部位细类名称***/
  public positionTinyTypeName!: string;

 /***部位分类***/
  public positionType!: string;

 /***部位分类名称***/
  public positionTypeName!: string;

 /***省***/
  public province!: string;

 /***舆情分类，对应T_PUBSENTIMENT_DIC的type为4***/
  public pubsentimentClassification!: [];

 /***舆情分类word***/
  public pubsentimentClassificationWords!: [];

 /***文件***/
  // public pubsentimentFile!: pubsentimentFile_child_result_model_detail [];

 /***舆情级别***/
  public pubsentimentLevel!: number;

 /***舆情级别***/
  public pubsentimentLevelWords!: string;

 /***舆情性质，对应T_PUBSENTIMENT_DIC的type为3***/
  public pubsentimentNature!: number;

 /***舆情性质word***/
  public pubsentimentNatureWord!: string;

 /***舆情性质word***/
  public pubsentimentNatureWords!: [];

 /***发帖信息***/
  // public pubsentimentPublishInfo!: pubsentimentPublishInfo_child_result_model_detail [];

 /***研判信息***/
  // public pubsentimentStudy!: pubsentimentStudy_child_result_model_detail [];

 /***舆情类型，小类***/
  public pubsentimentType!: [];

 /***舆情类型，小类***/
  public pubsentimentTypeWords!: [];

 /***接警员***/
  public recvPerson!: string;

 /***接警时间***/
  public recvTime!: string;

 /***关联警情***/
  public relateId!: string;

 /***涉事地点，类型12***/
  public relationAddress!: [];

 /***涉事地点***/
  public relationAddressWords!: [];

 /***涉事物品，类型17***/
  public relationGood!: [];

 /***涉事物品***/
  public relationGoodWords!: [];

 /***涉事节点，类型15***/
  public relationNode!: [];

 /***涉事节点***/
  public relationNodeWords!: [];

 /***涉事对象，类型16***/
  public relationPerson!: [];

 /***涉事对象***/
  public relationPersonWords!: [];

 /***备注***/
  public remark!: string;

 /***关联的重复警情流水号列表***/
  public repeatSn!: [];

 /***上报时间***/
  public reportDateTime!: string;

 /***舆情回告字段信息***/
  public reportFields!: [];

 /***舆情回告字段中文信息***/
  public reportFieldsWords!: [];

 /***回告用户ID***/
  public reportPoliceUserId!: string;

 /***回告用户名称***/
  public reportPoliceUserName!: string;

 /***回告部门ID***/
  public reportStationId!: string;

 /***回告部门名称***/
  public reportStationName!: string;

 /***回告时间***/
  public reportTime!: string;

 /***上报用户id***/
  public reportUserId!: string;

 /***上报用户名称***/
  public reportUserName!: string;

 /******/
  public sensitive!: any;

 /***敏感词集合***/
  // public sensitiveWordList!: sensitiveWordList_child_result_model_detail [];

 /***签收时间***/
  public signDateTime!: string;

 /***签收部门id***/
  public signStationId!: string;

 /***签收部门名称***/
  public signStationName!: string;

 /***签收用户id***/
  public signUserId!: string;

 /***签收用户名称***/
  public signUserName!: string;

 /***警情编号***/
  public sn!: string;

 /***处置类型  1：情指联动  2：情报自处***/
  public solutionType!: number;

 /***接收部门***/
  // public subObjList!: subObjList_child_result_model_detail [];

 /***接警摘要***/
  public summary!: string;

 /***警情标签***/
  public tag!: string;

 /***指令内容***/
  public taskPayload!: string;

 /***飞机票务预警，类型8***/
  // public ticketAirEvent!: ticketAirEvent_child_result_model_detail ;

 /***汽车票务预警，类型9***/
  // public ticketBusEvent!: ticketBusEvent_child_result_model_detail ;

 /***铁路票务预警，类型7***/
  // public ticketRailWayEvent!: ticketRailWayEvent_child_result_model_detail ;

 /***标题***/
  public title!: string;

 /******/
  // public tpaAlarmType!: tpaAlarmType_child_result_model_detail ;

 /***转发时间***/
  public transferDateTime!: string;

 /***转发部门id***/
  public transferStationId!: string;

 /***转发部门名称***/
  public transferStationName!: string;

 /***转发用户id***/
  public transferUserId!: string;

 /***转发用户名称***/
  public transferUserName!: string;

 /***网址***/
  public url!: string;

 /***天气情况，类型20***/
  public weather!: [];

 /***天气情况***/
  public weatherWords!: [];

 /***WIFI预警，类型1***/
  // public wirelessppEvent!: wirelessppEvent_child_result_model_detail ;

 /***工作内容***/
  public workContent!: string;

 /***工作指令id***/
  public workOrderId!: string;

 /***工作指令类型***/
  public workType!: number;

}

/***【输入】uiModel界面数据绑定OK**/
class businessModel_ui_model extends businessModel_par_model {
  public constructor()  {super();}

}

/***【输出】明细数据model车辆卡口预警，类型6**/
class  cargateEvent_child_result_model_detail  {
  public constructor() {}

 /***经过时间***/
  public captureTime!: string;

 /***车辆颜色***/
  public carCol!: string;

 /***车辆卡口状态***/
  public carGateStates!: string;

 /***车身长度***/
  public carLength!: string;

 /***车道编号***/
  public carRoadNum!: string;

 /***车道类型***/
  public carRoadType!: string;

 /***车辆速度***/
  public carShud!: string;

 /***车辆种类***/
  public carType!: string;

 /***入库时间***/
  public createTime!: string;

 /***数据来源***/
  public datasource!: string;

 /***部门来源***/
  public dep!: string;

 /***预警事件主表id***/
  public eventId!: string;

 /***方向编号***/
  public fxNum!: string;

 /***标识符***/
  public id!: string;

 /***车辆卡口抓拍图片Url***/
  public imageUrl!: string;

 /***局部特写照片***/
  public keyCarUrl!: string;

 /***纬度***/
  public latitude!: any;

 /***交管车辆卡口编码***/
  public locationId!: string;

 /***经度***/
  public longitude!: any;

 /***厂家来源***/
  public manufacturer!: string;

 /***车牌颜色***/
  public plateCol!: string;

 /***车辆车牌号码***/
  public plateNumber!: string;

 /***车辆号牌种类***/
  public plateType!: string;

 /***交管车辆卡口名称***/
  public pointName!: string;

  }/***【输出】明细数据model警情处理集合**/
 class  dealModelList_child_result_model_detail  {
  public constructor() {}

 /***受理人***/
  public dealPerson!: string;

 /***受理单位***/
  public dealStation!: string;

 /***受理时间***/
  public dealTime!: string;

 /***处警结果详细情况***/
  public eventResult!: string;

 /***处警结果***/
  public eventResultType!: string;

 /***处警人***/
  public policeNames!: [];

 /***app出警时间***/
  public policeTime!: string;

 /***app到场时间***/
  public policedTime!: string;

 /***回告时间***/
  public reportTime!: string;

 /***处警单位***/
  public staionName!: string;

  }/***【输出】明细数据model警情更新列表**/
 class  eventUpdateList_child_result_model_detail  {
  public constructor() {}

 /***警情地址***/
  public address!: string;

 /***警情ID***/
  public alarmId!: string;

 /***标识符***/
  public id!: string;

 /***指令id***/
  public insId!: string;

 /***纬度***/
  public latitude!: any;

 /***经度***/
  public longitude!: any;

 /***警情摘要***/
  public summary!: string;

 /***更新时间***/
  public updateTime!: string;

 /***更新类型***/
  public updateType!: number;

 /***用户ID***/
  public userId!: string;

  }/***【输出】明细数据model人脸预警，类型4**/
 class  faceAlarmEvent_child_result_model_detail  {
  public constructor() {}

 /***报警内容***/
  public alarmContent!: string;

 /***报警位置***/
  public alarmPosition!: string;

 /***报警时间***/
  public alarmTime!: string;

 /***报警类型***/
  public alarmType!: string;

 /***布控中的人脸Url***/
  public baseFaceUrl!: string;

 /***数据来源***/
  public datasource!: string;

 /***部门来源***/
  public dep!: string;

 /***设备号***/
  public deviceNum!: string;

 /***预警事件主表id***/
  public eventId!: string;

 /***人脸在场景图里的坐标和范围***/
  public faceRect!: faceRect_child_result_model_detail ;

 /***比中的人脸Url***/
  public hitFaceUrl!: string;

 /***标识符***/
  public id!: string;

 /***局部特写照片***/
  public keyFaceUrl!: string;

 /***厂家来源***/
  public manufacturer!: string;

 /***身份证号码***/
  public personCardid!: string;

 /***人员姓名***/
  public personName!: string;

 /***抓拍人脸仓库id***/
  public repositoryId!: string;

 /***抓拍人脸仓库名***/
  public repositoryName!: string;

 /***相似度***/
  public similar!: any;

 /***预警状态***/
  public status!: number;

 /***外貌标签集合***/
  public tags!: [];

  }
  /***【输出】明细数据model人脸在场景图里的坐标和范围**/
class  faceRect_child_result_model_detail  {
  public constructor() {}

 /******/
  public h!: number;

 /******/
  public w!: number;

 /******/
  public x!: number;

 /******/
  public y!: number;

  }/***【输出】明细数据model地理位置**/
 class  historicalLocation_child_result_model_detail  {
  public constructor() {}

 /***地址***/
  public address!: string;

 /******/
  public id!: string;

 /***经度***/
  public latitude!: any;

 /***纬度***/
  public longitude!: any;

 /***舆情主键ID***/
  public pubsentimentId!: string;

  }/***【输出】明细数据model酒店预警，类型2**/
 class  hotelEvent_child_result_model_detail  {
  public constructor() {}

 /******/
  public baseFaceUrl!: string;

 /***创建时间***/
  public cjsj!: string;

 /***出生日期***/
  public csrq!: string;

 /***数据来源***/
  public datasource!: string;

 /***部门来源***/
  public dep!: string;

 /***登记时间***/
  public djsj!: string;

 /***预警事件主表id***/
  public eventId!: string;

 /***标识符***/
  public id!: string;

 /***旅馆编码***/
  public lgbm!: string;

 /***旅馆名称***/
  public lgmc!: string;

 /***旅客编号***/
  public lkbh!: string;

 /***旅客id***/
  public lkid!: string;

 /***厂家来源***/
  public manufacturer!: string;

 /***民族***/
  public mz!: string;

 /***入库时间***/
  public rksj!: string;

 /***入住房号***/
  public rzfh!: string;

 /***入住时间***/
  public rzsj!: string;

 /***所属分局编号***/
  public ssfjbm!: string;

 /***所属分局名称***/
  public ssfjmc!: string;

 /***所属派出所编码***/
  public sspcsbm!: string;

 /***所属派出所名称***/
  public sspcsmc!: string;

 /***退房时间***/
  public tfsj!: string;

 /***更新时间***/
  public updatedate!: string;

 /***性别***/
  public xb!: string;

 /***姓名***/
  public xm!: string;

 /***旅馆详细地址***/
  public xxdz!: string;

 /***行政区号***/
  public xzqh!: string;

 /***证件号码***/
  public zjhm!: string;

 /***证件类型***/
  public zjlx!: string;

  }




/***【入参】请求入参jp_positionInfo_byId_api **/
class positionInfo_par_model extends base_loading_model {
    public constructor() {
        super();
    }

    /******/
    public Id!: string
}

/***【输出】输出结果modelOK**/
class positionInfo_result_model extends base_model {
    public constructor() {
        super();
    }

    /*** 明细数据**/
    public data!: positionInfo_result_model_detail;
}

class positionInfo_result_model_detail {
    /**默认构造函数 */
    public constructor() { }

    /***部门Id***/
    public id!: string;

    /***地址***/
    public address!: string;

    /***数字***/
    public baseNum!: string;

    /***汽车辆数***/
    public carCount!: number;

    /***总面积***/
    public coverRange!: string;

    /***简介***/
    public glxq!: string;

   public  ifUse!: number;
   public  ipAddress!: string;
   public  isZsjg!: string;
   public  jlqk!: object;
   public  latitude!: number;
   public  longitude!: number;
   public  orgcode!: string;
   public  pictureUrl!: string;
   public  rkqk!: string;
   public  sort!: number;
   public  sqzrq!: string;
   public  stationName!: string;
   public  stationNum!: string;
   public  tel!: string;
   public  unitNumber!: string;
   public  zdbw!: string;
   public  zdjq!: string;
   public  radioId!: object;
   public  unitShort!: object;
   public  stationGroup!: string;
   public  leaderInfo!: string;
   public  zindex!: object;
   public childrenPoliceStation!:Array<object>;
}

/***【输入】uiModel界面数据绑定OK**/
class positionInfo_ui_model extends positionInfo_par_model {
    public constructor() {
        super();
    }
}


/***【入参】请求入参jp_positionInfo_byId_api **/
class dutyAreaInfo_par_model extends base_loading_model {
    public constructor() {
        super();
    }

    /******/
    public StationId!: string
}

/***【输出】输出结果modelOK**/
class dutyAreaInfo_result_model extends base_model {
    public constructor() {
        super();
    }

    /*** 明细数据**/
    public data!: dutyAreaInfo_result_model_detail;
}

class dutyAreaInfo_result_model_detail {
    /**默认构造函数 */
    public constructor() { }

    public dutyArea!: string
    public dutyAreaNum!: string
    public id!:string
    public pcsId!:string

}

/***【输入】uiModel界面数据绑定OK**/
class dutyAreaInfo_ui_model extends dutyAreaInfo_par_model {
    public constructor() {
        super();
    }
}

/***【入参】请求入参jp_positionInfo_byId_api **/
class sensitiveWords_par_model extends base_loading_model {
    public constructor() {
        super();
    }

    /******/
    public type!: string
}

/***【输出】输出结果modelOK**/
class sensitiveWords_result_model extends base_model {
    public constructor() {
        super();
    }

    /*** 明细数据**/
    public data!: dutyAreaInfo_result_model_detail;
}

class sensitiveWords_result_model_detail {
    /**默认构造函数 */
    public constructor() { }



}

/***【输入】uiModel界面数据绑定OK**/
class sensitiveWords_ui_model extends sensitiveWords_par_model {
    public constructor() {
        super();
    }
}



/***【入参】请求入参model处警人员**/
class policeList_par_model extends base_loading_model {
    public constructor()  {super();}

}

/***【输出】输出结果modelOK**/
class policeList_result_model extends base_model  {
    public constructor()  {super();}

    /*** 明细数据**/
    public data!: policeList_result_model_detail;
}

class policeList_result_model_detail {
    /**默认构造函数 */
    public constructor() { }
}

/***【输出】带分页的结果modelOK**/
class  policeList_page_reult_model  extends policeList_result_model_detail {
    public constructor()  {super();}

}

/***【输入】uiModel界面数据绑定OK**/
class policeList_ui_model  extends policeList_par_model {
    public constructor()  {super();}

}



export {
  /** 业务模型 */
  businessModel_par_model,
  businessModel_result_model,
  businessModel_result_model_detail,
  businessModel_ui_model,

  /** 警情字典 */
  alarmPolice_par_model,
  alarmPolice_result_model,
  alarmPolice_result_model_detail,
  alarmPolice_ui_model,

  ppolsituInfo_par_model,
  ppolsituInfo_result_model,
  ppolsituInfo_result_model_detail,
  ppolsituInfo_ui_model,

  /** 警情回告 */
  tEventTableModel_par_model,
  tEventTableModel_result_model,
  tEventTableModel_result_model_detail,
  tEventTableModel_ui_model,

  /** 通过id获取回告信息 */
  getNoticeInfo_par_model,
  getNoticeInfo_result_model,
  getNoticeInfo_result_model_detail,
  getNoticeInfo_ui_model,

  /** 升降级申请 */
  tEventApplyUpDownParams_par_model,
  tEventApplyupdown_result_model,
  tEventApplyupdown_result_model_detail,
  tEventApplyUpDownParams_ui_model,

  /** 延时申请 */
  delayParams_par_model,
  delayParams_result_model,
  delayParams_result_model_detail,
  delayParams_ui_model,

  /** 警情反馈 */
  feedBack_par_model,
  feedBack_result_model,
  feedBack_result_model_detail,
  feedBack_ui_model,

    /**部门列表信息**/
    positionInfo_par_model,
    positionInfo_result_model,
    positionInfo_result_model_detail,
    positionInfo_ui_model,

    /**联动责任区信息**/
        dutyAreaInfo_par_model,
    dutyAreaInfo_result_model,
    dutyAreaInfo_result_model_detail,
    dutyAreaInfo_ui_model,

    /**敏感词信息**/
        sensitiveWords_par_model,
    sensitiveWords_result_model,
    sensitiveWords_result_model_detail,
    sensitiveWords_ui_model,


    /** 通过id联动处警人员 */
        policeList_par_model,
    policeList_result_model,
    policeList_result_model_detail,
    policeList_ui_model,
};
