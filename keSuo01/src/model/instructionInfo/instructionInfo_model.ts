import { base_model } from "@/model/base_model";
import { base_loading_model } from '../base_loading_model';
import { base_page_model } from '../base_page_model';

/***【入参】请求入参modelinsQueryParam**/
class insQueryParam_par_model extends base_loading_model {
    public constructor() { super(); }

    /******/
    public alarmPageParam!: alarmPageParam_child_result_model_detail;

    /******/
    public instructionFilterParam!: instructionFilterParam_child_result_model_detail;

    /******/
    public useEs!: any;

}

/***【输出】输出结果modelOK**/
class insQueryParam_result_model extends base_model  {
    public constructor()  {super();}

    /*** 明细数据**/
    public data!: insQueryParam_result_model_detail;
}


/***【输出】明细数据model**/
class insQueryParam_result_model_detail {
    public constructor() {}
}

class insQueryParam_ui_model extends insQueryParam_par_model {
    public constructor() {
        super();
    }
}



/***【输出】明细数据model**/
class alarmPageParam_child_result_model_detail {
    public constructor() { }

    /***报警人***/
    public callerName!: string;

    /***报警人电话***/
    public callerPhone!: string;

    /***发案地址***/
    public caseAddr!: string;

    /***发案部位***/
    public casePosition!: string;

    /***发案部位***/
    public casePositions!: [];

    /***案件类型id***/
    public caseTypeId!: string;

    /***案件类型id***/
    public caseTypeIds!: [];

    /***案件性质id***/
    public caseTypePropertyId!: string;

    /***案件性质id***/
    public caseTypePropertyIds!: [];

    /******/
    public dealStationId!: string;

    /***受理单位***/
    public dealStationIds!: [];

    /***责任区***/
    public dutyAreaId!: string;

    /***责任区***/
    public dutyAreaIds!: [];

    /***报警的结束时间***/
    public endTime!: string;

    /***回吿表单的发案地址***/
    public eventAddr!: string;

    /***回吿表单中的案件类型id***/
    public eventCategories!: [];

    /***回吿表单中的案件类型id***/
    public eventCategory!: string;

    /***回吿表单中的案件性质id***/
    public eventProperties!: [];

    /***回吿表单中的案件性质id***/
    public eventProperty!: string;

    /***回吿表单中的性质分类id***/
    public eventPropertyType!: string;

    /***回吿表单中的性质分类id***/
    public eventPropertyTypes!: [];

    /***处警详细情况***/
    public eventResult!: string;

    /***处警结果***/
    public eventResultType!: string;

    /***反馈单位***/
    public feedBackStations!: [];

    /***处警人员***/
    public handlePolice!: string;

    /***处警人员***/
    public handlePolices!: [];

    /***处警单位***/
    public handleStation!: string;

    /***处警单位***/
    public handleStations!: [];

    /***是否关联重复警情***/
    public hasRepeatAlarm!: any;

    /***是否已填警综回吿人***/
    public hasReport!: any;

    /***忽略重复警情***/
    public ignoreRepeat!: any;

    /***历史受理***/
    public isDeal!: any;

    /***历史反馈***/
    public isFeedback!: any;

    /***历史超期***/
    public isPhone!: any;

    /***回吿超期***/
    public isReport!: any;

    /***是否敏感   1:是  0：不是***/
    public isSensitive!: number;

    /***是否更新发案地址***/
    public isUpdateAddr!: any;

    /***关键字***/
    public keyWord!: string;

    /***警情的级别***/
    public level!: number;

    /***警情的级别***/
    public levels!: [];

    /***警情的来源***/
    public oraginal!: string;

    /***警情的来源***/
    public origins!: [];

    /***app端超市状态***/
    public phoneStatus!: number;

    /***部位细类***/
    public positionTinyType!: string;

    /***部位细类***/
    public positionTinyTypes!: [];

    /***部位分类***/
    public positionType!: string;

    /***部位分类***/
    public positionTypes!: [];

    /***性质分类***/
    public propertyTypeId!: string;

    /***性质分类***/
    public propertyTypeIds!: [];

    /***接警人***/
    public recvName!: string;

    /***回吿结束时间***/
    public reportEndTime!: string;

    /***回吿开始时间***/
    public reportStartTime!: string;

    /***回吿单位***/
    public reportStation!: string;

    /***回吿单位***/
    public reportStations!: [];

    /***敏感词***/
    public sensitiveWord!: string;

    /***敏感词***/
    public sensitiveWords!: [];

    /***警情流水号***/
    public sn!: string;

    /***警情流水号集合，精确匹配***/
    public sns!: [];

    /***报警的开始时间***/
    public startTime!: string;

    /***单兵超时状态***/
    public stationStatus!: number;

    /***警情摘要***/
    public summary!: string;

    /***警情标签***/
    public tag!: string;

}/***【输出】明细数据model**/
class instructionFilterParam_child_result_model_detail {
    public constructor() { }

    /***业务来源	0：重点人   1：警情   2：舆情	4:全部  5:案件	8:情报预警	9:工作指令	10:重点对象	16:情报	66:舆情***/
    public businessFrom!: number;

    /***业务来源	0：重点人   1：警情   2：舆情	4:全部  5:案件	8:情报预警	9:工作指令	10:重点对象	16:情报	66:舆情***/
    public businessFroms!: [];

    /***警情主键的 对外使用***/
    public bussinessKeyList!: [];

    /***用来筛选受理单位的部门ID***/
    public dealStationId!: string;

    /***用来筛选受理单位的部门ID集合***/
    public dealStationIds!: [];

    /***忽略业务来源      0：重点人   1：警情   2：舆情   3：领导交办   5:案件 6:会议通知 8:情报预警***/
    public ignoreBusinessFrom!: number;

    /***忽略业务来源      0：重点人   1：警情   2：舆情   3：领导交办   5:案件 6:会议通知 8:情报预警***/
    public ignoreBusinessFroms!: [];

    /***指令创建结束时间***/
    public insEndTime!: string;

    /***指定指令id***/
    public insId!: string;

    /***指令关键字***/
    public insKeyWord!: string;

    /***指令创建开始时间***/
    public insStartTime!: string;

    /***指令状态类型	0:待办	1:处理中	2:已结束	4:全部	5:已撤回	6:已回退	默认为0***/
    public instructType!: number;

    /***指令状态类型	0:待办	1:处理中	2:已结束	4:全部	5:已撤回	6:已回退	默认为0***/
    public instructTypes!: [];

    /***是否只显示关注***/
    public isFavourite!: any;

    /***指令是否超时***/
    public isInsTimeOut!: any;

    /***是否只显示下级回退***/
    public isShowSuperiorTaskBack!: any;

    /***任务是否超时***/
    public isTaskTimeOut!: any;

    /***是否超时***/
    public isTimeOut!: any;

    /***当前页的页码   默认为0***/
    public pageIndex!: number;

    /***每页显示的条数  默认为10***/
    public pageSize!: number;

    /***任务结束时间***/
    public recEndTime!: string;

    /***任务开始时间***/
    public recStartTime!: string;

    /***是否按照指令的最后时间排序  0:否  1:是***/
    public sortReplyTime!: number;

    /***特殊回退   0:不处置	 1：普通回退	2:管辖争议回退 ***/
    public specialBack!: number;

    /***是否使用status表***/
    public useStatus!: any;

    /***当前登录人的标识符***/
    public userId!: string;

}

/***【输出】输出结果modelOK**/
// class insListDataModel_result_model extends base_model {
//     public constructor() { super(); }

//     /*** 明细数据**/
//     public data!: Array<insListDataModel_result_model_detail>;
// }
// /***【输出】带分页的结果modelOK**/
// class insListDataModel_page_reult_model extends base_page_model<insListDataModel_result_model_detail> {
//     public constructor() { super(); }

// }
/***【入参】请求入参modelinstructionListQueryParam**/
class instructionListQueryParam_par_model extends base_loading_model {
    public constructor() { super(); }

    /******/
    public alarmBaseFilterParam!: alarmBaseFilterParam_child_result_model_detail;

    /******/
    public caseInfoFilterParam!: caseInfoFilterParam_child_result_model_detail;

    /******/
    public instructionFilterParam!: instructionFilterParam_child_result_model_detail;

    /******/
    public intellBaseFilterParam!: intellBaseFilterParam_child_result_model_detail;

    /******/
    public pubBaseFilterParam!: pubBaseFilterParam_child_result_model_detail;

    /******/
    public useEs!: any;

    /******/
    public workInsFilterParam!: workInsFilterParam_child_result_model_detail;

}

class instructionListQueryParam_ui_model extends instructionListQueryParam_par_model {
    public constructor() {
        super();
    }
}

/***【输出】明细数据model**/
class alarmBaseFilterParam_child_result_model_detail {
    public constructor() { }

    /***案件类型id***/
    public caseTypeId!: string;

    /***报警的结束时间***/
    public endTime!: string;

    /***是否敏感***/
    public isSensitive!: number;

    /***关键字***/
    public keyWord!: string;

    /***警情的级别***/
    public level!: number;

    /***警情的来源***/
    public oraginal!: string;

    /***报警的开始时间***/
    public startTime!: string;

    /***警情标签***/
    public tag!: string;

}/***【输出】明细数据model**/
class caseInfoFilterParam_child_result_model_detail {
    public constructor() { }

    /***发案的结束时间***/
    public caseEndTime!: string;

    /***专案标示***/
    public caseFlag!: string;

    /***发案的起始时间***/
    public caseStartTime!: string;

    /***案件状态***/
    public caseStatus!: string;

    /***案件类型***/
    public caseType!: string;

    /***受理单位***/
    public dealStation!: string;

    /***关键字***/
    public keyWord!: string;

    /***风险等级  全部  高  中  低***/
    public riskLevel!: any;

}/***【输出】明细数据model**/
class intellBaseFilterParam_child_result_model_detail {
    public constructor() { }

    /***情报的结束时间***/
    public endTime!: string;

    /***情报关键字***/
    public keyWord!: string;

    /***处置类型  0：全部 1：情指联动  2：情报自处***/
    public solutionType!: number;

    /***情报的开始时间***/
    public startTime!: string;

}/***【输出】明细数据model**/
class pubBaseFilterParam_child_result_model_detail {
    public constructor() { }

    /***舆情的结束时间***/
    public endTime!: string;

    /***舆情关键字***/
    public keyWord!: string;

    /***舆情级别***/
    public level!: [];

    /***舆情分类***/
    public pubsentimentClassification!: [];

    /***舆情的开始时间***/
    public startTime!: string;

}/***【输出】明细数据model**/
class workInsFilterParam_child_result_model_detail {
    public constructor() { }

    /***结束创建时间***/
    public endCreateTime!: string;

    /***忽略工作指令类型***/
    public ignoreWorkType!: [];

    /***开始创建时间***/
    public startCreateTime!: string;

    /***工作指令类型***/
    public workType!: number;

}

/***【输出】输出结果modelOK**/
// class insListCountModel_result_model extends base_model {
//     public constructor() { super(); }

//     /*** 明细数据**/
//     public data!: Array<insListCountModel_result_model_detail>;
// }
// /***【输出】带分页的结果modelOK**/
// class insListCountModel_page_reult_model extends base_page_model<insListCountModel_result_model_detail> {
//     public constructor() { super(); }

// }

/***【入参】请求入参modelinsListQueryParamV3**/
class insListQueryParamV3_par_model extends base_loading_model {
    public constructor() { super(); }

    /***警情筛选条件***/
    public alarmFilterParam!: alarmFilterParam_child_result_model_detail;

    /***业务来源	0：重点人   1：警情   2：舆情	4:全部  5:案件	8:情报预警	9:工作指令	10:重点对象	16:情报	66:舆情***/
    public businessFrom!: number;

    /***业务来源	0：重点人   1：警情   2：舆情	4:全部  5:案件	8:情报预警	9:工作指令	10:重点对象	16:情报	66:舆情***/
    public businessFroms!: [];

    /***用来筛选受理单位的部门ID***/
    public dealStationId!: string;

    /***用来筛选受理单位的部门ID集合***/
    public dealStationIds!: [];

    /***忽略业务来源	0：重点人   1：警情   2：舆情	4:全部  5:案件	8:情报预警	9:工作指令	10:重点对象	16:情报	66:舆情***/
    public ignoreBusinessFrom!: number;

    /***忽略业务来源	0：重点人   1：警情   2：舆情	4:全部  5:案件	8:情报预警	9:工作指令	10:重点对象	16:情报	66:舆情***/
    public ignoreBusinessFroms!: [];

    /***指令创建结束时间***/
    public insEndTime!: string;

    /***指定指令id***/
    public insId!: string;

    /***指令关键字***/
    public keyWord!: string;

    /***指令创建开始时间***/
    public insStartTime!: string;

    /***情报筛选条件***/
    public intellBaseFilterParam!: intellBaseFilterParam_child_result_model_detail;

    /***是否只显示关注***/
    public isFavourite!: any;

    /***是否只显示敏感***/
    public isSensitive!: any;

    /***指令是否超时***/
    public isInsTimeOut!: any;

    /***是否只显示下级回退***/
    public isShowSuperiorTaskBack!: any;

    /***任务是否超时***/
    public isTaskTimeOut!: any;

    /***是否超时***/
    public isTimeOut!: any;

    /***当前页的页码   默认为0***/
    public pageIndex!: number;

    /***每页显示的条数  默认为10***/
    public pageSize!: number;

    /***舆情筛选条件***/
    public pubBaseFilterParam!: pubBaseFilterParam_child_result_model_detail;

    /***任务结束时间***/
    public endTime!: string;

    /***任务开始时间***/
    public startTime!: string;

    /***是否按照指令的最后时间排序  0:否  1:是***/
    public sortReplyTime!: number;

    /***特殊回退   0:不处置	 1：普通回退	2:管辖争议回退 ***/
    public specialBack!: number;

    /***任务状态 0：全部；1：待处置；2：已处置***/
    public status!: number;

    /***用户ID***/
    public userId!: string;

    /***工作指令筛选条件***/
    public workInsFilterParam!: workInsFilterParam_child_result_model_detail;

}

/***【输出】输出结果modelOK**/
class insListQueryParamV3_result_model extends base_model  {
    public constructor()  {super();}

    /*** 明细数据**/
    public data!: insListQueryParamV3_result_model_detail;
}


/***【输出】明细数据model**/
class insListQueryParamV3_result_model_detail {
    public constructor() { }

    public list!: Array<object>;
}

class insListQueryParamV3_ui_model extends insListQueryParamV3_par_model{
    public constructor() {
        super();
      }
}

/***【输出】明细数据model警情筛选条件**/
class alarmFilterParam_child_result_model_detail {
    public constructor() { }

    /***报警人***/
    public callerName!: string;

    /***报警人电话***/
    public callerPhone!: string;

    /***发案地址***/
    public caseAddr!: string;

    /***发案部位***/
    public casePosition!: string;

    /***发案部位***/
    public casePositions!: [];

    /***案件类型id***/
    public caseTypeId!: string;

    /***案件类型id***/
    public caseTypeIds!: [];

    /***案件性质id***/
    public caseTypePropertyId!: string;

    /***案件性质id***/
    public caseTypePropertyIds!: [];

    /******/
    public dealStationId!: string;

    /***受理单位***/
    public dealStationIds!: [];

    /***责任区***/
    public dutyAreaId!: string;

    /***责任区***/
    public dutyAreaIds!: [];

    /***报警的结束时间***/
    public endTime!: string;

    /***回吿表单的发案地址***/
    public eventAddr!: string;

    /***回吿表单中的案件类型id***/
    public eventCategories!: [];

    /***回吿表单中的案件类型id***/
    public eventCategory!: string;

    /***回吿表单中的案件性质id***/
    public eventProperties!: [];

    /***回吿表单中的案件性质id***/
    public eventProperty!: string;

    /***回吿表单中的性质分类id***/
    public eventPropertyType!: string;

    /***回吿表单中的性质分类id***/
    public eventPropertyTypes!: [];

    /***处警详细情况***/
    public eventResult!: string;

    /***处警结果***/
    public eventResultType!: string;

    /***反馈单位***/
    public feedBackStations!: [];

    /***处警人员***/
    public handlePolice!: string;

    /***处警人员***/
    public handlePolices!: [];

    /***处警单位***/
    public handleStation!: string;

    /***处警单位***/
    public handleStations!: [];

    /***是否关联重复警情***/
    public hasRepeatAlarm!: any;

    /***是否已填警综回吿人***/
    public hasReport!: any;

    /***忽略重复警情***/
    public ignoreRepeat!: any;

    /***历史受理***/
    public isDeal!: any;

    /***历史反馈***/
    public isFeedback!: any;

    /***历史超期***/
    public isPhone!: any;

    /***回吿超期***/
    public isReport!: any;

    /***是否敏感   1:是  0：不是***/
    public isSensitive!: number;

    /***是否更新发案地址***/
    public isUpdateAddr!: any;

    /***关键字***/
    public keyWord!: string;

    /***警情的级别***/
    public level!: number;

    /***警情的级别***/
    public levels!: [];

    /***警情的来源***/
    public oraginal!: string;

    /***警情的来源***/
    public origins!: [];

    /***app端超市状态***/
    public phoneStatus!: number;

    /***部位细类***/
    public positionTinyType!: string;

    /***部位细类***/
    public positionTinyTypes!: [];

    /***部位分类***/
    public positionType!: string;

    /***部位分类***/
    public positionTypes!: [];

    /***性质分类***/
    public propertyTypeId!: string;

    /***性质分类***/
    public propertyTypeIds!: [];

    /***接警人***/
    public recvName!: string;

    /***回吿结束时间***/
    public reportEndTime!: string;

    /***回吿开始时间***/
    public reportStartTime!: string;

    /***回吿单位***/
    public reportStation!: string;

    /***回吿单位***/
    public reportStations!: [];

    /***敏感词***/
    public sensitiveWord!: string;

    /***敏感词***/
    public sensitiveWords!: [];

    /***警情流水号***/
    public sn!: string;

    /***警情流水号集合，精确匹配***/
    public sns!: [];

    /***报警的开始时间***/
    public startTime!: string;

    /***单兵超时状态***/
    public stationStatus!: number;

    /***警情摘要***/
    public summary!: string;

    /***警情标签***/
    public tag!: string;

}

/***【输出】输出结果modelOK**/
class insListCountModelV3_result_model extends base_model {
    public constructor() { super(); }

    /*** 明细数据**/
    public data!: insListCountModelV3_result_model_detail;
}
/***【输出】带分页的结果modelOK**/
class insListCountModelV3_page_reult_model extends base_page_model<insListCountModelV3_result_model_detail> {
    public constructor() { super(); }

}
/***【输出】明细数据modelOK**/
class insListCountModelV3_result_model_detail {
    public constructor() { }

    /***已处置任务指令总条数  STATUS=2***/
    public doneNum!: number;

    /***待处置任务指令总条数  STATUS=1***/
    public waitNum!: number;

}


/***【输出】输出结果modelOK**/
class instructionListModel_result_model extends base_model {
    public constructor() { super(); }

    /*** 明细数据**/
    public data!: instructionListModel_result_model_detail;
}

class instructionListModel_result_model_detailinstructionListModel_result_model_detail {

}
/***【输出】带分页的结果modelOK**/
class instructionListModel_page_reult_model extends instructionListModel_result_model_detailinstructionListModel_result_model_detail {
    public constructor() { super(); }

}


/***【输出】明细数据modelOK**/
class instructionListModel_result_model_detail {
    public constructor() { }

    /***指令模型的集合***/
    public list!: list_child_result_model_detail[];

    /***指令总条数***/
    public num!: number;

}



/***【输出】明细数据model指令模型的集合**/
class list_child_result_model_detail {
    public constructor() { }

    /***业务地址***/
    public address!: string;

    /***指令关联类型	0：重点人 1：警情 66：武汉舆情 8：情报预警 9：工作指令 16：情报***/
    public businessFrom!: number;

    /***业务ID标识符***/
    public businessKey!: string;

    /***指令类型  1:文本text 2:文件file 3:音频audio***/
    public catalog!: number;

    /***受理部门Ids***/
    public dealStationIds!: [];

    /***受理部门名称列表***/
    public dealStationNames!: [];

    /***指令标识符***/
    public id!: string;

    /***指令内容***/
    public insContent!: string;

    /***业务类型标识***/
    public insTypeID!: string;

    /***是否关注***/
    public isFavourite!: any;

    /***当前任务是否已完成***/
    public isFinished!: any;

    /***是否已受理***/
    public isHanding!: any;

    /***是否知会***/
    public isNotified!: any;

    /***是否已读***/
    public isRead!: any;

    /***是否上报***/
    public isReport!: any;

    /***是否敏感***/
    public isSensitive!: any;

    /***是否超时***/
    public isTimeout!: any;

    /***关键词（包含警情类型、是否关注、是否敏感等）***/
    public keyWords!: [];

    /***纬度***/
    public latitude!: any;

    /***业务等级（包含警情等级、舆情等级、重点人等级等）***/
    public levels!: number;

    /***经度***/
    public longitude!: any;

    /***全业务模型***/
    public model!: model_child_result_model_detail;

    /***业务流水号***/
    public no!: string;

    /***真实创建人Id***/
    public realPersonId!: string;

    /***真实创建人名称***/
    public realPersonName!: string;

    /***真实创建部门Id***/
    public realStationId!: string;

    /***真实创建部门名称***/
    public realStationName!: string;

    /***指令的最后回复时间***/
    public replyTime!: string;

    /***发送人Id***/
    public sendPersonId!: string;

    /***发送人名称***/
    public sendPersonName!: string;

    /***发送部门Id***/
    public sendStationId!: string;

    /***发送部门名称***/
    public sendStationName!: string;

    /***指令的发送时间***/
    public sendTime!: string;

    /***1:待处理  2:已处理***/
    public status!: number;

    /***业务内容描述***/
    public summary!: string;

    /***任务内容***/
    public taskContent!: string;

    /***任务标识符***/
    public taskId!: string;

    /***任务状态***/
    public taskState!: string;

    /***任务状态中文***/
    public taskStateWord!: string;

    /***时长限制***/
    public timeSpan!: number;

    /***时长限制单位***/
    public timeUnit!: string;

    /***指令未阅读条数***/
    public unReadMsgCount!: number;

}



/***【输出】明细数据model全业务模型**/
class model_child_result_model_detail {
    public constructor() { }

    /******/
    public aaddress!: string;

    /***行为类型，类型18***/
    public actionType!: string;

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
    public cargateEvent!: cargateEvent_child_result_model_detail;

    /***发案部位***/
    public casePosition!: string;

    /***发案部位名称***/
    public casePositionName!: string;

    /***事件原因***/
    public caseReason!: string;

    /***事件原因word***/
    public caseReasonWords!: string;

    /***事件类型***/
    public caseType!: string;

    /***事件类型word***/
    public caseTypeWords!: [];

    /***案发时间***/
    public casetime!: string;

    /***伤亡数量，类型21***/
    public casualtyCount!: string;

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

    /***重点部位与布控区域***/
    public controlRegion!: controlRegion_child_result_model_detail[];

    /***警情创建人id***/
    public createPersonId!: string;

    /***舆情数据来源，对应T_PUBSENTIMENT_DIC的type为2***/
    public dataSource!: number;

    /***舆情数据来源word***/
    public dataSourceWords!: string;

    /***警情处理集合***/
    public dealModelList!: dealModelList_child_result_model_detail[];

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
    public eventUpdateList!: eventUpdateList_child_result_model_detail[];

    /***人脸预警，类型4***/
    public faceAlarmEvent!: faceAlarmEvent_child_result_model_detail;

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

    /***是否拥有回告表单***/
    public hasReport!: any;

    /***地理位置***/
    public historicalLocation!: historicalLocation_child_result_model_detail[];

    /***酒店预警，类型2***/
    public hotelEvent!: hotelEvent_child_result_model_detail;

    /***业务信息id***/
    public id!: string;

    /***身份证号码***/
    public idCard!: string;

    /***重点人详细信息***/
    public importAllInfo!: importAllInfo_child_result_model_detail;

    /***重点部位***/
    public importantpartId!: string;

    /***重点路段***/
    public importantroadId!: string;

    /***指令id集合***/
    public instructionIds!: [];

    /******/
    public intelligenceFile!: intelligenceFile_child_result_model_detail[];

    /******/
    public intelligenceInsRelation!: intelligenceInsRelation_child_result_model_detail[];

    /******/
    public intelligencePerson!: intelligencePerson_child_result_model_detail[];

    /***是否有效(0：无效 1：有效)***/
    public isValid!: number;

    /***纬度***/
    public latitude!: any;

    /***二次定位纬度***/
    public latitude2!: any;

    /***LBS预警，类型5***/
    public lbsEvent!: lbsEvent_child_result_model_detail;

    /***等级***/
    public levels!: number;

    /***经度***/
    public longitude!: any;

    /***二次定位经度***/
    public longitude2!: any;

    /***迷失人员记录集合***/
    public lostPeopleList!: lostPeopleList_child_result_model_detail[];

    /***厂家来源***/
    public manufacturer!: string;

    /***采集来源，对应T_PUBSENTIMENT_DIC的type为1***/
    public netSource!: string;

    /***采集来源word***/
    public netSourceWords!: [];

    /***采集来源小类，类型1***/
    public netTinySource!: string;

    /***采集来源小类***/
    public netTinySourceWords!: [];

    /***网吧预警，类型3***/
    public netbarEvent!: netbarEvent_child_result_model_detail;

    /***流水号***/
    public no!: string;

    /***事件发生时间***/
    public occurrentDateTime!: string;

    /***警情来源***/
    public origin!: string;

    /***重点人标识***/
    public personId!: string;

    /***对象状态，类型19***/
    public personStatus!: string;

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
    public pubsentimentClassification!: string;

    /***舆情分类word***/
    public pubsentimentClassificationWords!: [];

    /***文件***/
    public pubsentimentFile!: pubsentimentFile_child_result_model_detail[];

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
    public pubsentimentPublishInfo!: pubsentimentPublishInfo_child_result_model_detail[];

    /***研判信息***/
    public pubsentimentStudy!: pubsentimentStudy_child_result_model_detail[];

    /***舆情类型，小类***/
    public pubsentimentType!: string;

    /***舆情类型，小类***/
    public pubsentimentTypeWords!: [];

    /***接警员***/
    public recvPerson!: string;

    /***接警时间***/
    public recvTime!: string;

    /***关联警情***/
    public relateId!: string;

    /***涉事地点，类型12***/
    public relationAddress!: string;

    /***涉事地点***/
    public relationAddressWords!: [];

    /***涉事物品，类型17***/
    public relationGood!: string;

    /***涉事物品***/
    public relationGoodWords!: [];

    /***涉事节点，类型15***/
    public relationNode!: string;

    /***涉事节点***/
    public relationNodeWords!: [];

    /***涉事对象，类型16***/
    public relationPerson!: string;

    /***涉事对象***/
    public relationPersonWords!: [];

    /***备注***/
    public remark!: string;

    /***关联的重复警情流水号列表***/
    public repeatSn!: [];

    /***上报时间***/
    public reportDateTime!: string;

    /***舆情回告字段信息***/
    public reportFields!: string;

    /***舆情回告字段中文信息***/
    public reportFieldsWords!: [];

    /***回告部门ID***/
    public reportStationId!: string;

    /***回告部门名称***/
    public reportStationName!: string;

    /***上报用户id***/
    public reportUserId!: string;

    /***上报用户名称***/
    public reportUserName!: string;

    /******/
    public sensitive!: any;

    /***敏感词集合***/
    public sensitiveWordList!: sensitiveWordList_child_result_model_detail[];

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
    public subObjList!: subObjList_child_result_model_detail[];

    /***接警摘要***/
    public summary!: string;

    /***警情标签***/
    public tag!: string;

    /***指令内容***/
    public taskPayload!: string;

    /***飞机票务预警，类型8***/
    public ticketAirEvent!: ticketAirEvent_child_result_model_detail;

    /***汽车票务预警，类型9***/
    public ticketBusEvent!: ticketBusEvent_child_result_model_detail;

    /***铁路票务预警，类型7***/
    public ticketRailWayEvent!: ticketRailWayEvent_child_result_model_detail;

    /***标题***/
    public title!: string;

    /******/
    public tpaAlarmType!: tpaAlarmType_child_result_model_detail;

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
    public weather!: string;

    /***天气情况***/
    public weatherWords!: [];

    /***WIFI预警，类型1***/
    public wirelessppEvent!: wirelessppEvent_child_result_model_detail;

    /***工作内容***/
    public workContent!: string;

    /***工作指令id***/
    public workOrderId!: string;

    /***工作指令类型***/
    public workType!: number;

}



/***【输出】明细数据model车辆卡口预警，类型6**/
class cargateEvent_child_result_model_detail {
    public constructor() { }

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

}/***【输出】明细数据model重点部位与布控区域**/
class controlRegion_child_result_model_detail {
    public constructor() { }

    /***重点部位地址***/
    public address!: string;

    /***防空圈***/
    public circles!: circles_child_result_model_detail[];

    /***重点部位辖区简称***/
    public district!: string;

    /******/
    public gategory!: string;

    /***重点部位id***/
    public importId!: string;

    /***重点部位name***/
    public importName!: string;

    /***重点部位纬度***/
    public latitude!: any;

    /******/
    public level!: string;

    /***重点部位经度***/
    public longitude!: any;

    /******/
    public mapCode!: string;

    /***重点部位辖区***/
    public stationId!: string;

    /***表***/
    public tableMark!: string;

}



/***【输出】明细数据model防空圈**/
class circles_child_result_model_detail {
    public constructor() { }

    /******/
    public flow!: string;

    /******/
    public level!: string;

    /******/
    public mapCode!: string;

    /******/
    public name!: string;

    /******/
    public ringNum!: number;

    /******/
    public uid!: string;

}/***【输出】明细数据model警情处理集合**/
class dealModelList_child_result_model_detail {
    public constructor() { }

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
class eventUpdateList_child_result_model_detail {
    public constructor() { }

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
class faceAlarmEvent_child_result_model_detail {
    public constructor() { }

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
    public faceRect!: faceRect_child_result_model_detail;

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
class faceRect_child_result_model_detail {
    public constructor() { }

    /******/
    public h!: number;

    /******/
    public w!: number;

    /******/
    public x!: number;

    /******/
    public y!: number;

}/***【输出】明细数据model地理位置**/
class historicalLocation_child_result_model_detail {
    public constructor() { }

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
class hotelEvent_child_result_model_detail {
    public constructor() { }

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

}/***【输出】明细数据model重点人详细信息**/
class importAllInfo_child_result_model_detail {
    public constructor() { }

    /***主要诉求***/
    public appeal!: string;

    /***籍贯***/
    public birthPlace!: string;

    /***数据来源***/
    public datasource!: string;

    /***关注单位标签***/
    public followStation!: string;

    /***关注单位标签***/
    public followStations!: [];

    /***根节点id***/
    public groupRootId!: string;

    /***根节点名***/
    public groupRootName!: string;

    /***户籍单位***/
    public householdid!: string;

    /******/
    public id!: string;

    /***身份证号码***/
    public idCardNo!: string;

    /******/
    public importCrimalImgs!: importCrimalImgs_child_result_model_detail[];

    /******/
    public importDNAs!: importDNAs_child_result_model_detail[];

    /******/
    public importFingerprints!: importFingerprints_child_result_model_detail[];

    /******/
    public importPersonImages!: importPersonImages_child_result_model_detail[];

    /******/
    public importPersonInfo!: importPersonInfo_child_result_model_detail;

    /******/
    public importPersonTypes!: importPersonTypes_child_result_model_detail[];

    /******/
    public importSocials!: importSocials_child_result_model_detail[];

    /******/
    public importVechiles!: importVechiles_child_result_model_detail[];

    /***手机号码***/
    public mobile!: string;

    /***姓名***/
    public name!: string;

    /***所属群体***/
    public ownerGroup!: string;

    /***上报时间***/
    public reportTime!: string;

    /***上报单位***/
    public reportunit!: string;

    /***根节点类型键值***/
    public rootTypeKey!: string;

    /***性别***/
    public sex!: string;

    /***所属辖区部门***/
    public stationid!: string;

}



/***【输出】明细数据model**/
class importCrimalImgs_child_result_model_detail {
    public constructor() { }

    /***采集单位***/
    public cjdw!: string;

    /***采集时间***/
    public cjsj!: string;

    /***入库时间***/
    public createTime!: string;

    /***照片方向0:center 1:left 2:right***/
    public direction!: number;

    /******/
    public id!: string;

    /***重点人ID***/
    public personId!: string;

    /***备注***/
    public remark!: string;

    /***照片url***/
    public url!: string;

}/***【输出】明细数据model**/
class importDNAs_child_result_model_detail {
    public constructor() { }

    /***采集单位***/
    public cjdw!: string;

    /***采集时间***/
    public cjsj!: string;

    /***入库时间***/
    public createTime!: string;

    /***DNA***/
    public dna!: string;

    /******/
    public id!: string;

    /***重点人ID***/
    public personId!: string;

    /***备注***/
    public remark!: string;

}/***【输出】明细数据model**/
class importFingerprints_child_result_model_detail {
    public constructor() { }

    /***采集单位***/
    public cjdw!: string;

    /***采集时间***/
    public cjsj!: string;

    /***入库时间***/
    public createTime!: string;

    /******/
    public id!: string;

    /***重点人ID***/
    public personId!: string;

    /***备注***/
    public remark!: string;

    /***指纹编号***/
    public zwbh!: string;

}/***【输出】明细数据model**/
class importPersonImages_child_result_model_detail {
    public constructor() { }

    /******/
    public id!: string;

    /***是否为默认图片***/
    public isDefault!: number;

    /***重点人ID***/
    public personId!: string;

    /***备注***/
    public remake!: string;

    /***性别***/
    public url!: string;

}/***【输出】明细数据model**/
class importPersonInfo_child_result_model_detail {
    public constructor() { }

    /***户籍所在地***/
    public birthPlace!: string;

    /***出生日期***/
    public birthday!: string;

    /***创建时间***/
    public createTime!: string;

    /***犯罪记录简述***/
    public criminalRecordDescribe!: string;

    /***现住址***/
    public currentAddress!: string;

    /***行驶证号码***/
    public drivingLicenseNumber!: string;

    /***文化程度***/
    public educationalLevel!: string;

    /***港澳通行证***/
    public exitPermit!: string;

    /***曾用名***/
    public formerName!: string;

    /***标识符***/
    public id!: string;

    /***身份证号码***/
    public idCardNo!: string;

    /***外键id***/
    public infoId!: string;

    /***是否有犯罪记录***/
    public isCriminalRecord!: number;

    /***是否有吸毒史***/
    public isDrugUse!: number;

    /***是否有暴力倾向***/
    public isViolent!: number;

    /***是否武汉户口***/
    public isWuhanIdcard!: number;

    /***婚姻状况***/
    public maritalStatus!: string;

    /***姓名***/
    public name!: string;

    /***民族***/
    public nation!: string;

    /***籍贯***/
    public nativePlace!: string;

    /***绰号***/
    public nickname!: string;

    /***护照号***/
    public passportNumber!: string;

    /***常住人口***/
    public permanentPopulation!: any;

    /***人员等级***/
    public personLevel!: string;

    /***人员状态***/
    public personnelStatus!: string;

    /***管辖派出所id***/
    public policestationid!: string;

    /***管辖分局id***/
    public secondpolicestationid!: string;

    /***性别***/
    public sex!: string;

    /***姓名拼音***/
    public spellName!: string;

    /***详细住址***/
    public streetAddress!: string;

    /***暂住人口***/
    public temporaryPopulation!: any;

    /***更新时间***/
    public updateTime!: string;

}/***【输出】明细数据model**/
class importPersonTypes_child_result_model_detail {
    public constructor() { }

    /***创建人的部门ID***/
    public createStationId!: string;

    /***层级***/
    public hierarchy!: number;

    /******/
    public id!: string;

    /***逻辑删除***/
    public isDelete!: number;

    /***父类名称***/
    public parentName!: string;

    /***父类Typekey***/
    public parentTypeKey!: string;

    /***父级***/
    public parentid!: string;

    /***重点人类型***/
    public type!: number;

    /***完整的重点人类型描述***/
    public typePath!: string;

    /***类型键值***/
    public typekey!: string;

    /***类型名称***/
    public typename!: string;

}/***【输出】明细数据model**/
class importSocials_child_result_model_detail {
    public constructor() { }

    /******/
    public id!: string;

    /***社交账号***/
    public socialAccount!: string;

    /***账号类型***/
    public type!: string;

}/***【输出】明细数据model**/
class importVechiles_child_result_model_detail {
    public constructor() { }

    /******/
    public id!: string;

    /***车辆品牌***/
    public vechileBrand!: string;

    /***车辆颜色***/
    public vechileColor!: string;

    /***车牌号***/
    public vechileNo!: string;

    /***车辆类型***/
    public vechileType!: string;

}/***【输出】明细数据model**/
class intelligenceFile_child_result_model_detail {
    public constructor() { }

    /******/
    public fileId!: string;

    /***文件名称***/
    public fileName!: string;

    /***文件来源 1:情报线索新增 2:情报指令新增  3:反馈   ***/
    public fileSource!: number;

    /***文件类型   1:图片  2:视频 3:音频  4:其他文件 ***/
    public fileType!: number;

    /******/
    public id!: string;

    /***情报主键ID***/
    public intelligenceId!: string;

}/***【输出】明细数据model**/
class intelligenceInsRelation_child_result_model_detail {
    public constructor() { }

    /******/
    public id!: string;

    /***内部指令ID（jp）***/
    public inInstructionId!: string;

    /***情报主键ID***/
    public intelligenceId!: string;

    /***外部指令ID***/
    public outInstructionId!: string;

}/***【输出】明细数据model**/
class intelligencePerson_child_result_model_detail {
    public constructor() { }

    /******/
    public id!: string;

    /***身份证号码***/
    public idCard!: string;

    /***情报主键ID***/
    public intelligenceId!: string;

    /***现住地址***/
    public presentAddress!: string;

    /***户籍地址***/
    public registedResidence!: string;

    /***排序序号***/
    public sortNo!: number;

    /***姓名***/
    public userName!: string;

}/***【输出】明细数据modelLBS预警，类型5**/
class lbsEvent_child_result_model_detail {
    public constructor() { }

    /***报警时间***/
    public captureTime!: string;

    /***数据来源***/
    public datasource!: string;

    /***部门来源***/
    public dep!: string;

    /***预警事件主表id***/
    public eventId!: string;

    /***标识符***/
    public id!: string;

    /***身份证号***/
    public idCardNo!: string;

    /***纬度***/
    public latitude!: any;

    /***经度***/
    public longitude!: any;

    /***厂家来源***/
    public manufacturer!: string;

    /***手机号***/
    public mobile!: string;

    /***更新时间***/
    public updateTime!: string;

}/***【输出】明细数据model迷失人员记录集合**/
class lostPeopleList_child_result_model_detail {
    public constructor() { }

    /***年龄***/
    public age!: number;

    /***警情id***/
    public alarmId!: string;

    /***找回时间***/
    public backTime!: string;

    /***车牌号***/
    public carNo!: string;

    /***迷失时间***/
    public caseTime!: string;

    /***迷失名称***/
    public categoryName!: string;

    /***衣着***/
    public clothing!: string;

    /***创建人id***/
    public createPersonId!: string;

    /***创建人***/
    public createPersonName!: string;

    /***创建单位***/
    public createStationId!: string;

    /***创建单位名称***/
    public createStationName!: string;

    /***创建时间***/
    public createTime!: string;

    /******/
    public driving!: any;

    /***特征***/
    public feature!: string;

    /******/
    public fortunate!: any;

    /***身高***/
    public height!: number;

    /******/
    public id!: string;

    /***迷失类型0丢失1发现 ***/
    public lostCategory!: string;

    /***迷失人员基本信息***/
    public lostPeople!: lostPeople_child_result_model_detail;

    /***迷失人员编号***/
    public lostPeopleNo!: string;

    /***失联48小时以上***/
    public lostTimeOut!: any;

    /******/
    public lunacy!: any;

    /***年龄最大值***/
    public maxAge!: number;

    /***身高最大值***/
    public maxHeight!: number;

    /***手机号***/
    public phoneNo!: string;

    /***体态代码***/
    public posture!: string;

    /***体态***/
    public postureName!: string;

    /***职业***/
    public profession!: string;

    /***其他***/
    public remark!: string;

    /***警情sn***/
    public sn!: string;

    /***状态0迷失,1已找到***/
    public status!: any;

    /***近期动向***/
    public trend!: string;

}



/***【输出】明细数据model迷失人员基本信息**/
class lostPeople_child_result_model_detail {
    public constructor() { }

    /***创建人id***/
    public createPersonId!: string;

    /***创建人***/
    public createPersonName!: string;

    /***创建单位***/
    public createStationId!: string;

    /***创建单位***/
    public createStationName!: string;

    /***创建时间***/
    public createTime!: string;

    /***性别***/
    public gender!: string;

    /***性别代码***/
    public genderCode!: string;

    /******/
    public id!: string;

    /***身份证号***/
    public idCard!: string;

    /***证件类型***/
    public idcardName!: string;

    /***证件类型***/
    public idcardType!: string;

    /***姓名***/
    public name!: string;

}/***【输出】明细数据model网吧预警，类型3**/
class netbarEvent_child_result_model_detail {
    public constructor() { }

    /******/
    public baseFaceUrl!: string;

    /***更新时间***/
    public cjsj!: string;

    /***出生日期***/
    public csrq!: string;

    /***数据来源***/
    public datasource!: string;

    /***部门来源***/
    public dep!: string;

    /***预警事件主表id***/
    public eventId!: string;

    /***标识符***/
    public id!: string;

    /***厂家来源***/
    public manufacturer!: string;

    /***民族***/
    public mz!: string;

    /***入库时间***/
    public sjc!: string;

    /***网吧所属派出所编码***/
    public sspcsbm!: string;

    /***网吧所属派出所名称***/
    public sspcsmc!: string;

    /***上网开始时间***/
    public swkssj!: string;

    /***上网人员姓名***/
    public swryxm!: string;

    /***上网终端号***/
    public swzdh!: string;

    /***营业场所代码***/
    public wbcsdm!: string;

    /***营业场所名称***/
    public wbcsmc!: string;

    /***性别***/
    public xb!: string;

    /***下网时间***/
    public xwsj!: string;

    /***营业场所地址***/
    public xxdz!: string;

    /***营业场所行政区划***/
    public xzqh!: string;

    /***证件号码***/
    public zjhm!: string;

    /***证件类型***/
    public zjlx!: string;

}/***【输出】明细数据model文件**/
class pubsentimentFile_child_result_model_detail {
    public constructor() { }

    /***文件ID***/
    public fileId!: string;

    /***文件名称***/
    public fileName!: string;

    /***文件来源 1:舆情新增 2:回告 ***/
    public fileSource!: number;

    /***文件类型    1:图片  2:视频  3:其他文件***/
    public fileType!: number;

    /******/
    public id!: string;

    /***舆情主键ID***/
    public pubsentimentId!: string;

}/***【输出】明细数据model发帖信息**/
class pubsentimentPublishInfo_child_result_model_detail {
    public constructor() { }

    /******/
    public id!: string;

    /***发帖原文***/
    public publishContent!: string;

    /***发帖时间***/
    public publishDateTime!: string;

    /***发帖人IP***/
    public publishIp!: string;

    /***发帖人账号ID***/
    public publishLoginId!: string;

    /***发帖人昵称***/
    public publishNickname!: string;

    /***发帖人账号注册地址***/
    public publishRegUrl!: string;

    /***发帖地址***/
    public publishWebsite!: string;

    /***舆情主键ID***/
    public pubsentimentId!: string;

}/***【输出】明细数据model研判信息**/
class pubsentimentStudy_child_result_model_detail {
    public constructor() { }

    /***行为类型，类型18***/
    public actionType!: [];

    /***伤亡数量，类型21***/
    public casualtyCount!: [];

    /******/
    public id!: string;

    /***采集来源大类，类型1***/
    public netSource!: [];

    /***采集来源小类，类型1***/
    public netTinySource!: [];

    /***对象状态，类型19***/
    public personStatus!: [];

    /***舆情分类，大类***/
    public pubsentimentClassification!: [];

    /***舆情主键ID***/
    public pubsentimentId!: string;

    /******/
    public pubsentimentLevel!: number;

    /******/
    public pubsentimentNature!: number;

    /***舆情类型，小类***/
    public pubsentimentType!: [];

    /***涉事地点，类型12***/
    public relationAddress!: [];

    /***涉事物品，类型17***/
    public relationGood!: [];

    /***涉事节点，类型15***/
    public relationNode!: [];

    /***涉事对象，类型16***/
    public relationPerson!: [];

    /***天气情况，类型20***/
    public weather!: [];

}/***【输出】明细数据model敏感词集合**/
class sensitiveWordList_child_result_model_detail {
    public constructor() { }

    /***添加时间***/
    public addtime!: string;

    /***警情主键***/
    public bussinesskey!: string;

    /***敏感词主键***/
    public id!: string;

    /***敏感词***/
    public sensitiveword!: string;

    /***敏感词ID***/
    public sensitivewordid!: string;

}/***【输出】明细数据model接收部门**/
class subObjList_child_result_model_detail {
    public constructor() { }

    /******/
    public addDateTime!: string;

    /***警员时为警号;部门时为部门ID;第三方为第三方code***/
    public code!: string;

    /***预警事件主表id***/
    public eventId!: string;

    /***标识符***/
    public id!: string;

    /***是否有效(0：无效 1：有效)***/
    public isValid!: number;

    /***订阅对象名称***/
    public name!: string;

    /******/
    public recStationId!: string;

    /******/
    public recUserId!: string;

    /***备注信息***/
    public remark!: string;

    /***订阅对象类型,MANUFACTORY:厂商，POLICE:警员，ORG:部门***/
    public type!: string;

}/***【输出】明细数据model飞机票务预警，类型8**/
class ticketAirEvent_child_result_model_detail {
    public constructor() { }

    /***编号***/
    public bh!: string;

    /***出发地***/
    public cfd!: string;

    /***数据来源***/
    public datasource!: string;

    /***部门来源***/
    public dep!: string;

    /***预警事件主表id***/
    public eventId!: string;

    /***航班号***/
    public hbh!: string;

    /***活动地址(武汉-荆门)***/
    public hddz!: string;

    /***预警类型***/
    public hdlx!: string;

    /***活动时间***/
    public hdsj!: string;

    /***活动信息（详细信息）***/
    public hdxx!: string;

    /***标识符***/
    public id!: string;

    /***进港时间***/
    public jgsj!: string;

    /***纬度***/
    public latitude!: any;

    /***离港时间***/
    public lgsj!: string;

    /***进出类型：0 进 1 出***/
    public lkdxlx!: string;

    /***经度***/
    public longitude!: any;

    /***厂家来源***/
    public manufacturer!: string;

    /***姓名***/
    public mc!: string;

    /***目的地***/
    public mdd!: string;

    /***入库时间***/
    public rksj!: string;

    /***1.市重点人2.部级重点人3.在逃人员***/
    public rylb!: string;

    /***预警地址***/
    public yjdz!: string;

    /***预警时间***/
    public yjsj!: string;

    /***证件号码***/
    public zjhm!: string;

    /***座位号***/
    public zwh!: string;

}/***【输出】明细数据model汽车票务预警，类型9**/
class ticketBusEvent_child_result_model_detail {
    public constructor() { }

    /***编号***/
    public bh!: string;

    /***出发地***/
    public cfd!: string;

    /***车辆号码***/
    public clhm!: string;

    /***数据来源***/
    public datasource!: string;

    /***部门来源***/
    public dep!: string;

    /***预警事件主表id***/
    public eventId!: string;

    /***发车时间***/
    public fcsj!: string;

    /***购票时间***/
    public gpsj!: string;

    /***活动地址(武汉-荆门)***/
    public hddz!: string;

    /***预警类型***/
    public hdlx!: string;

    /***活动时间***/
    public hdsj!: string;

    /***活动信息（详细信息）***/
    public hdxx!: string;

    /***标识符***/
    public id!: string;

    /***检票口***/
    public jpk!: string;

    /***纬度***/
    public latitude!: any;

    /***进出类型：0 进 1 出***/
    public lkdxlx!: string;

    /***经度***/
    public longitude!: any;

    /***厂家来源***/
    public manufacturer!: string;

    /***姓名***/
    public mc!: string;

    /***目的地***/
    public mdd!: string;

    /***入库时间***/
    public rksj!: string;

    /***1.市重点人2.部级重点人3.在逃人员***/
    public rylb!: string;

    /***预警地址***/
    public yjdz!: string;

    /***预警时间***/
    public yjsj!: string;

    /***证件号码***/
    public zjhm!: string;

    /***座位号***/
    public zwh!: string;

}/***【输出】明细数据model铁路票务预警，类型7**/
class ticketRailWayEvent_child_result_model_detail {
    public constructor() { }

    /***编号***/
    public bh!: string;

    /***车次***/
    public cc!: string;

    /***出发地***/
    public cfd!: string;

    /***车厢号***/
    public cxh!: string;

    /***数据来源***/
    public datasource!: string;

    /***部门来源***/
    public dep!: string;

    /***预警事件主表id***/
    public eventId!: string;

    /***发车时间***/
    public fcsj!: string;

    /***活动地址(武汉-荆门)***/
    public hddz!: string;

    /***预警类型***/
    public hdlx!: string;

    /***活动时间***/
    public hdsj!: string;

    /***活动信息（详细信息）***/
    public hdxx!: string;

    /***标识符***/
    public id!: string;

    /***纬度***/
    public latitude!: any;

    /***进出类型：0 进 1 出***/
    public lkdxlx!: string;

    /***经度***/
    public longitude!: any;

    /***厂家来源***/
    public manufacturer!: string;

    /***姓名***/
    public mc!: string;

    /***目的地***/
    public mdd!: string;

    /***取票时间***/
    public qpsj!: string;

    /***入库时间***/
    public rksj!: string;

    /***1.市重点人2.部级重点人3.在逃人员***/
    public rylb!: string;

    /***预警地址***/
    public yjdz!: string;

    /***预警时间***/
    public yjsj!: string;

    /***证件号码***/
    public zjhm!: string;

    /***座位号***/
    public zwh!: string;

}/***【输出】明细数据model**/
class tpaAlarmType_child_result_model_detail {
    public constructor() { }

    /***警情分类id***/
    public id!: string;

    /***警情分类父id***/
    public parentId!: string;

    /***类型名称***/
    public typeName!: string;

}/***【输出】明细数据modelWIFI预警，类型1**/
class wirelessppEvent_child_result_model_detail {
    public constructor() { }

    /***详细地址***/
    public address!: string;

    /******/
    public baseFaceUrl!: string;

    /***采集时间***/
    public cjsj!: string;

    /***数据更新时间***/
    public createDate!: string;

    /***数据来源***/
    public datasource!: string;

    /***部门来源***/
    public dep!: string;

    /***设备编号***/
    public devicesNo!: string;

    /***预警事件主表id***/
    public eventId!: string;

    /***标识符***/
    public id!: string;

    /***纬度***/
    public latitude!: any;

    /***经度***/
    public longitude!: any;

    /***终端MAC地址***/
    public macNo!: string;

    /***厂家来源***/
    public manufacturer!: string;

    /***终端手机号码***/
    public phoneNo!: string;

    /***所在区域***/
    public regionare!: string;

    /***备注***/
    public remarks!: string;

    /***人员名称***/
    public ryxm!: string;

    /***身份证编号***/
    public sfzbh!: string;

    /***虚拟身份信息***/
    public xnsfxx!: string;

}



//警情关注
class taskFavouriteParam_par_model extends base_loading_model{
    // 指令id
      public insId !:string
           /***用户id	***/
    public userId!: string;
  }

  class taskFavouriteParam_ui_model extends taskFavouriteParam_par_model {
    public constructor() { super(); }
  }

  //取消警情关注
class taskUnFavouriteParam_par_model extends base_loading_model{
    // 指令id
      public insId !:string
           /***用户id	***/
    public userId!: string;
  }

  class taskUnFavouriteParam_ui_model extends taskUnFavouriteParam_par_model {
    public constructor() { super(); }
  }



//取消或标记敏感警情
class taskSensitiveParam_par_model extends base_loading_model{
    // 指令id
    public id !:string;
    // 敏感状态
    public isSensitive!:boolean;
    // 警情id
    public taskId!:string;
    /***用户id	***/
    public userId!: string;

}

class taskSensitiveParam_ui_model extends taskSensitiveParam_par_model {
    public constructor() { super(); }
}

// /***【输出】输出结果modelOK**/
// class instructionListDetailsModel_result_model extends base_model {
//     public constructor() { super(); }

//     /*** 明细数据**/
//     public data!: Array<instructionListDetailsModel_result_model_detail>;
// }
// /***【输出】带分页的结果modelOK**/
// class instructionListDetailsModel_page_reult_model extends base_page_model<instructionListDetailsModel_result_model_detail> {
//     public constructor() { super(); }

// }
export {
    insQueryParam_par_model,
    insQueryParam_result_model,
    insQueryParam_result_model_detail,
    insQueryParam_ui_model,

    /** 指令列表 */
    insListQueryParamV3_par_model,
    insListQueryParamV3_result_model,
    insListQueryParamV3_result_model_detail,
    insListQueryParamV3_ui_model,

    alarmPageParam_child_result_model_detail,
    instructionFilterParam_child_result_model_detail,
    // insListDataModel_result_model,
    // insListDataModel_page_reult_model,
    alarmBaseFilterParam_child_result_model_detail,
    caseInfoFilterParam_child_result_model_detail,
    intellBaseFilterParam_child_result_model_detail,
    pubBaseFilterParam_child_result_model_detail,
    workInsFilterParam_child_result_model_detail,
    instructionListQueryParam_par_model,
    // insListCountModel_result_model,
    // insListCountModel_page_reult_model,
    alarmFilterParam_child_result_model_detail,

    insListCountModelV3_result_model,
    insListCountModelV3_page_reult_model,
    insListCountModelV3_result_model_detail,
    instructionListModel_result_model,
    instructionListModel_page_reult_model,
    cargateEvent_child_result_model_detail,
    circles_child_result_model_detail,
    controlRegion_child_result_model_detail,
    dealModelList_child_result_model_detail,
    eventUpdateList_child_result_model_detail,
    faceRect_child_result_model_detail,
    faceAlarmEvent_child_result_model_detail,
    historicalLocation_child_result_model_detail,
    hotelEvent_child_result_model_detail,
    importCrimalImgs_child_result_model_detail,
    importDNAs_child_result_model_detail,
    importFingerprints_child_result_model_detail,
    importPersonImages_child_result_model_detail,
    importPersonInfo_child_result_model_detail,
    importPersonTypes_child_result_model_detail,
    importSocials_child_result_model_detail,
    importVechiles_child_result_model_detail,
    importAllInfo_child_result_model_detail,
    intelligenceFile_child_result_model_detail,
    intelligenceInsRelation_child_result_model_detail,
    intelligencePerson_child_result_model_detail,
    lbsEvent_child_result_model_detail,
    lostPeople_child_result_model_detail,
    lostPeopleList_child_result_model_detail,
    netbarEvent_child_result_model_detail,
    pubsentimentFile_child_result_model_detail,
    pubsentimentPublishInfo_child_result_model_detail,
    pubsentimentStudy_child_result_model_detail,
    sensitiveWordList_child_result_model_detail,
    subObjList_child_result_model_detail,
    ticketAirEvent_child_result_model_detail,
    ticketBusEvent_child_result_model_detail,
    ticketRailWayEvent_child_result_model_detail,
    tpaAlarmType_child_result_model_detail,
    wirelessppEvent_child_result_model_detail,
    model_child_result_model_detail,
    list_child_result_model_detail,
    instructionListModel_result_model_detail,
    instructionListQueryParam_ui_model,
    taskFavouriteParam_par_model,
    taskFavouriteParam_ui_model,
    taskUnFavouriteParam_par_model,
    taskUnFavouriteParam_ui_model,
    taskSensitiveParam_par_model,
    taskSensitiveParam_ui_model

    // instructionListDetailsModel_result_model,
    // instructionListDetailsModel_page_reult_model,
};
