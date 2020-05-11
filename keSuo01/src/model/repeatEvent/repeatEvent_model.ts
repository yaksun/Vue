import { base_model } from "../base_model";
import { base_loading_model } from '../base_loading_model';
import { base_page_model } from '../base_page_model';
import { Loading } from 'element-ui';

/**
 * 【入参】获取关联的警情流水号 请求入参model
 */
class RepeatEvent_relation_num_par_model extends base_loading_model {
    /**
     * 默认构造函数
     */
    public constructor() { super(); }

    /**
     * 警情sn
     */
    public eventSn!: string;
}

/**
 * 获取关联的警情流水号输出结果model
 */
class RepeatEvent_relation_num_result_model extends base_model {
    /**
     * 默认构造函数 
     */
    public constructor() { super(); }

    /**
     * 明细数据列表数据
     */
    public data!: Array<string>;

    //说明：如果还存在其他返回的list数据或者字段，可以在里面单独增加字段进行对应
}
/**
 * uiModel 获取关联的警情流水号
 */
class RepeatEvent_relation_num_ui_model extends RepeatEvent_relation_num_par_model {
    /**
     * 默认构造函数 
     */
    public constructor() { super(); }
}
/**
 * 查询大数据提供的重复警情 
 */
class RepeatEvent_bigData_par_model extends base_loading_model {
    /**
     * 默认构造函数
     */
    public constructor() { super(); }

    /**
     * 	结束时间
     */
    public endDate!: string;
    /**
     * 警情sn
     */
    public eventSn!: string;
    /**
    * 相似度
    */
    public similarity!: number;
    /**
     * 开始时间
     */
    public startDate!: string;
    /**
     * 用户id
     */
    public userId!: string;
}

/**
 * 查询大数据提供的重复警情 输出结果base_model
 */
class RepeatEvent_bigData_result_model extends base_model {
    /**
     * 默认构造函数 
     */
    public constructor() { super(); }

    /**
     * 明细数据列表数据
     */
    public data!: RepeatEvent_bigData_result_detail_model;
    public errCode?:number;
    public errorMsg?:number;
}

/**
 * 查询大数据提供的重复警情 分页
 */
class RepeatEvent_bigData_page_reult_model extends base_page_model<RepeatEvent_bigData_result_detail_model>{
    /**
    * 默认构造函数 
    */
    public constructor() { super(); }
}
/**
 * 指令模型的集合
 */
class RepeatEvent_bigData_result_detail_model {
    public instructInfoList!: Array<RepeatEvent_bigData_result_detail_detail_model>
    public instructNum!: number
}
class RepeatEvent_bigData_result_detail_detail_model {
    public alarmInfo!: AlarmInfo_detail;
}
/**
 * 警情详细信息 
 */
interface AlarmInfo_detail {
    /**
     * 报警地址 
     */
    aAddress: string;

    /**
     * 警情摘要
     */
    summary: string;

    /**
     * 报警时间
     */
    alarmTime: string;

    /**
     * 报警人
     */
    aPerson: string;
    /**
     * 		报警电话
     */
    aPhone: string;

    /**
     * 	重复警情流水号集合
     */
    repeatSn: Array<string>;
}
/**
 *  查询大数据提供的重复警情  uiModel
 */
class RepeatEvent_bigData_ui_model extends RepeatEvent_bigData_par_model {
    /**
     * 默认构造函数 
     */
    public constructor() { super(); }
}
/**
 * 重复警情-警情列表 请求入参
 */
class RepeatEvent_list_par_model extends base_loading_model {
    public constructor() { super(); }
    /**用户id 当前登录人的标识符*/
    public userId!: string;

    /**	业务来源 0：重点人 1：警情 9:工作指令 16:情报 66:舆情 */
    public businessFroms: Array<number> = [];
    /**结束时间  */
    public endTime!: string;
    /**是否只显示关注 */
    public isFavourite: boolean = false;
    /**	是否只显示敏感 */
    public isSensitive: boolean = false;
    /**是否超时 */
    public isTimeOut: boolean = false;
    /**是否显示业务模型详情 */
    public isShowDetails: boolean = true;
    /**	关键字 */
    public keyWord: string = "";
    /**当前页的页码 默认为0 */
    public pageIndex: number = 0;
    /**每页显示的条数 默认为10 */
    public pageSize: number = 10;
    /**开始时间 */
    public startTime!: string;
    /**任务状态 0：全部；1：待处置；2：已处置 */
    public status: number = 0;
    /**警情信息 */
    public alarmPageParam: AlarmPageParam_detail = {
        casePositions: [],
        caseTypeIds: [],
        caseTypePropertyIds: [],
        dealStationIds: [],
        dutyAreaIds: [],
        eventCategories: [],
        eventProperties: [],
        eventPropertyTypes: [],
        feedBackStations: [],
        handlePolices: [],
        handleStations: [],
        hasRepeatAlarm: false,
        ignoreRepeat: false,
        isSensitive: 0,
        keyWord: '',
        level: 0,
        levels: [],
        origins: [],
        positionTinyTypes: [],
        positionTypes: [],
        propertyTypeIds: [],
        reportStations: [],
        sensitiveWords: [],
        sns: []
    };
}
/** alarmPageParam  */
class AlarmPageParam_detail {
    constructor() { }
    /**发案部位 */
    public casePositions!: Array<number>;
    /**	案件类型id */
    public caseTypeIds!: Array<number>;
    /**案件性质id */
    public caseTypePropertyIds!: Array<number>;
    /**受理部门Ids */
    public dealStationIds!: Array<number>;
    /**责任区 */
    public dutyAreaIds!: Array<number>;
    /**	回吿表单中的案件类型id */
    public eventCategories!: Array<number>;
    /**	回吿表单中的案件性质id */
    public eventProperties!: Array<string>;
    /**回吿表单中的性质分类id */
    public eventPropertyTypes!: Array<string>;
    /**反馈单位 */
    public feedBackStations!: Array<string>;
    /**处警人员 */
    public handlePolices!: Array<string>;
    /**处警单位 */
    public handleStations!: Array<string>;
    /**是否关联重复警情 */
    public hasRepeatAlarm!: boolean;
    /**忽略重复警情 */
    public ignoreRepeat!: boolean;
    /**是否敏感 1:是 0：不是 */
    public isSensitive!: number;
    /**	关键字 */
    public keyWord!: string;
    /**	警情的级别 */
    public level!: number;
    /**警情的级别 */
    public levels!: Array<number>;
    /**	警情的来源 */
    public origins!: Array<string>;
    /**	部位细类 */
    public positionTinyTypes!: Array<string>;
    /**部位分类 */
    public positionTypes!: Array<string>;
    /**性质分类 */
    public propertyTypeIds!: Array<string>;
    /**回吿单位 */
    public reportStations!: Array<string>;
    /**敏感词 */
    public sensitiveWords!: Array<string>;
    /**警情流水号集合，精确匹配 */
    public sns!: Array<string>;
}
/**
 * 重复警情-警情列表
 */
class RepeatEvent_list_ui_model extends RepeatEvent_list_par_model {
    public constructor() {
        super();
    }
}
/**
 * 重复警情-警情列表
 */
class RepeatEvent_list_result_model extends base_model {
    public constructor() {
        super();
    }
    /**
     * 警情详细信息
     */
    data!: RepeatEvent_list_result_detail_model


}
class RepeatEvent_list_result_detail_model {
    constructor() { }
    public list!: Array<RepeatEvent_list_result_detail_list_model>;
    public num!: number
}

interface RepeatEvent_list_result_detail_list_model {
    /**
     * 报警地址 
     */
    aAddress: string;

    /**
     * 警情摘要
     */
    summary: string;

    /**
     * 报警时间
     */
    alarmTime: string;

    /**
     * 报警人
     */
    aPerson: string;
    /**
     * 		报警电话
     */
    aPhone: string;

    /**
     * 	重复警情流水号集合
     */
    repeatSn: Array<string>;
}
class RepeatEvent_list_page_model extends base_page_model<RepeatEvent_list_result_model>{
    public constructor() { super(); }
}

/**
 * 重复警情-关联接口 请求参数
 */
class RepeatEvent_add_par_model extends base_loading_model {
    public constructor() {
        super();
    }
    /**创建单位id */
    public addStationId!: string;
    /**创建时间 */
    public addTime!: string;
    /**创建人 */
    public addUserId!: string;
    /**被关联sn */
    public endSn!: string;
    /**	标识符 */
    public id!: string;
    /**是否使用 */
    public isDelete!: number;
    /**关联sn */
    public startSn!: string;
}
/**
 * 重复警情-关联接口
 */
class RepeatEvent_add_ui_model extends RepeatEvent_add_par_model {
    public constructor() {
        super();
    }
}
/**
 * 重复警情-关联接口
 */
class RepeatEvent_add_result_model extends base_model {
    public constructor() {
        super();
    }
}
/**
 * 重复警情-根据sn查询所有与他关联的警情详情，有权限 请求参数
 */
class RepeatEvent_relationed_par_model extends base_loading_model {
    public constructor() {
        super();
    }
    /**警情sn */
    public eventSn!: string
    /**用户id */
    public userId!: string
}
/**
 * 重复警情-根据sn查询所有与他关联的警情详情，有权限
 */
class RepeatEvent_relationed_ui_model extends RepeatEvent_relationed_par_model {
    public constructor() {
        super();
    }
}
/**
 * 重复警情-根据sn查询所有与他关联的警情详情，有权限
 */
class RepeatEvent_relationed_result_model extends base_model {
    public constructor() {
        super();
    }
    public data!: RepeatEvent_relationed_result_detail_model;
    public errCode?:number;
    public errorMsg?:number;
}
class RepeatEvent_relationed_result_detail_model {
    constructor() { }
    public instructInfoList!: Array<Relationed_instructInfoList_detail>
}
interface Relationed_instructInfoList_detail {

}
class RepeatEvent_relationed_result_page_model extends base_page_model<RepeatEvent_relationed_result_detail_model> {
    public constructor() {
        super();
    }
}
/**
 * 解除关联
 */
class RepeatEvent_delete_par_model extends base_loading_model { 
    constructor(){
        super();
    }
    eventSn!: string;
    userId!:string;
}
/**
 * 解除关联
 */
class RepeatEvent_delete_ui_model extends RepeatEvent_delete_par_model { 
    constructor(){
        super();
    }
    
}
/**
 * 解除关联 
 */
class RepeatEvent_delete_result_model extends base_model { 
    constructor(){
        super();
    }
}
export {
    /**
     * 警情流水号
     */
    RepeatEvent_relation_num_par_model,
    RepeatEvent_relation_num_result_model,
    RepeatEvent_relation_num_ui_model,
    /**
     * 查询大数据推荐的重复警情
     */
    RepeatEvent_bigData_par_model,
    RepeatEvent_bigData_ui_model,
    RepeatEvent_bigData_result_model,
    /**
     * 重复警情-警情列表高级查询
     */
    RepeatEvent_list_par_model,
    RepeatEvent_list_ui_model,
    RepeatEvent_list_result_model,
    /**
     * 重复警情-关联接口
     */
    RepeatEvent_add_par_model,
    RepeatEvent_add_ui_model,
    RepeatEvent_add_result_model,
    /**
     * 重复警情-根据sn查询所有与他关联的警情详情，有权限
     */
    RepeatEvent_relationed_par_model,
    RepeatEvent_relationed_ui_model,
    RepeatEvent_relationed_result_model,
    /**
     * 解除关联
     */
    RepeatEvent_delete_par_model,
    RepeatEvent_delete_ui_model,
    RepeatEvent_delete_result_model,
}