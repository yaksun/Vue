import { base_model } from "@/model/base_model";
import { base_loading_model } from "../base_loading_model";
import { base_page_model } from "../base_page_model";

//////////指令任务转发/////////////////////////////

/***【入参】请求入参receivePartParam_par_model**/
class receivePartParam_par_model extends base_loading_model {
  public constructor() {
    super();
  }
  public data!: Array<receivePartParam>;
  /***	指令任务标识符***/
  public taskId!: string;
  /***	***/
  public userId!: string;
}

class receivePartParam_ui_model extends receivePartParam_par_model {
  public constructor() {
    super();
  }
}

class receivePartParam {
  /***内容类型(1:文本 2:文件 3:语音)***/
  public catalog!: number;
  /***文件ID集合***/
  public fileKey!: any[];
  /***	是否知会(0:不知会 1:知会)***/
  public isNotified!: number;
  /***用户或者部门标识符***/
  public partId!: string;
  /***	参与者类型(0:人 1:部门 2:警务通 3:车小丫 4:手台)***/
  public partType!: number;
  /***内容***/
  public payload!: string;
  /***推送设备类型，默认全部ALL***/
  public pushDevice!: string;
  /***限制时长***/
  public timeSpan!: number;
  /***限制时长单位***/
  public timeUnit!: string;
}

/***批量撤回指令任务**/
class batchParam_par_model extends base_loading_model {
  /***指令任务标识符的集合***/
  public taskIdList!: any[];
  /***	撤回用户标识符***/
  public userId!: string;
}
class batchParam_ui_model extends batchParam_par_model {
  public constructor() {
    super();
  }
}

/***指令任务回退**/
class backParam_par_model extends base_loading_model {
  /***回退原因***/
  public reason!: string;
  /***	回退标签***/
  public tag!: string;
  /***	指令任务标识符***/
  public taskId!: string;
  /***	***/
  public userId!: string;
}

class backParam_ui_model extends backParam_par_model {
  public constructor() {
    super();
  }
}

/***指令任务升降级**/
class liftingParam_par_model extends base_loading_model {
  /***申请时间***/
  public addedDate!: string;
  /***	升级 1,降级0***/
  public applyLevel!: number;
  /***	申请理由***/
  public content!: string;
  /***	指令Id	***/
  public insId!: string;
  /***		申请部门	***/
  public stationId!: string;
  /***		任务Id	***/
  public taskId!: string;
  /***	用户Id	***/
  public userId!: string;
}
class liftingParam_ui_model extends liftingParam_par_model {
  public constructor() {
    super();
  }
}

/***指令任务延时**/
class applydelay_new_par_model extends base_loading_model {
  /***申请时间***/
  public addedDate!: string;
  /***	实际申请的时长***/
  public applyTime!: number;
  /***	实际申请的时长类型(M-分 H-时 D-天)***/
  public applyTimeType!: string;
  /***	申请理由***/
  public content!: string;
  /***	指令Id	***/
  public insId!: string;
  /***	业务流水号	***/
  public sn!: string;
  /***		申请部门	***/
  public stationId!: string;
  /***		任务Id	***/
  public taskId!: string;
  /***	用户Id	***/
  public userId!: string;
}
class applydelay_new_ui_model extends applydelay_new_par_model {
  public constructor() {
    super();
  }
}

/***指令任务回退**/
class userPageParameter_par_model extends base_loading_model {
  /***指令id***/
  public insId!: string;
  /***	模糊匹配警员名称、警号***/
  public keyWord!: string;
  /***	分页参数，当前页，***/
  public pageIndex!: number;
  /***	分页参数，每页条数***/
  public pageSize!: number;
  /***	部门id***/
  public stationId!: string;
  /***	警员状态 1在线、2离线、3报备、4未报备***/
  public status!: [];
  /*** 是否选中 */
  public selected!: boolean;
}

class userPageParameter_ui_model extends userPageParameter_par_model {
  public constructor() {
    super();
  }
}

///指令人员状态查询-分页 结果数据
class userPageParameter_result_model extends base_model {
  public data!: userPageParameter_result_model_detail;
  public elementsSum!: number;
  public empty!: boolean;
}

class userPageParameter_result_model_detail {
  public constructor() {}

  public elementsSum!: number;
  public empty!: boolean;
  public data!: Array<object>;

  /***	登录账号***/
  public loginName!: string;
  /***在线状态 0不在线 1在线	***/
  public onlineStatus!: number;
  /***所属部门code	***/
  public orgCode!: string;
  /***上级部门id	***/
  public parentId!: string;
  /***	照片***/
  public pictureUrl!: string;
  /***	警号***/
  public policeCode!: string;
  /***警员姓名	***/
  public policeName!: string;
  /***报备状态 0未报备 1已报备	***/
  public reportStatus!: number;
  /***推送状态 0未推送 1已推送	***/
  public sendStatus!: number;
  /***	所属部门id***/
  public stationId!: string;
  /***所属部门名称	***/
  public stationName!: string;
  /***	所属部门类型***/
  public stationNum!: string;
  /***用户id	***/
  public userId!: string;
  /***用户名	***/
  public userName!: string;
}

export {
  receivePartParam_par_model,
  receivePartParam_ui_model,
  receivePartParam,
  batchParam_par_model,
  batchParam_ui_model,
  backParam_par_model,
  backParam_ui_model,
  liftingParam_par_model,
  liftingParam_ui_model,
  applydelay_new_par_model,
  applydelay_new_ui_model,
  /** 获取列表 */
  userPageParameter_par_model,
  userPageParameter_result_model,
  userPageParameter_result_model_detail,
  userPageParameter_ui_model
};
