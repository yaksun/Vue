import { base_model } from "@/model/base_model";
import { base_loading_model } from '../base_loading_model';
import { base_page_model } from '../base_page_model';

/***【入参】请求入参modelorderTaskPush**/
class orderTaskPush_par_model extends base_loading_model {
  public constructor() { super(); }

  /** 指令任务标识符 */
  public taskId!: string;

  /** 转发用户标识符 */
  public userId!:string;
  
  public receivePartParamObj!: receivePartParam_model_detail;

  // /** 推送对象 */
  // public receivePartParam!: Array<receivePartParam_model_detail>;
}

class receivePartParam_model_detail {
  public receivePartParam!: Array<receivePartParam_model_detail2>;
}

class receivePartParam_model_detail2 {
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

/***【输出】输出结果modelOK**/
class orderTaskPush_result_model extends base_model  { 
  public constructor()  {super();}

  /*** 明细数据**/
  public data!: orderTaskPush_result_model_detail;
}


/***【输出】明细数据model**/
class orderTaskPush_result_model_detail {
  public constructor() { }

}

class orderTaskPush_ui_model extends orderTaskPush_par_model{
  public constructor() {
      super();
    }
}

/***【入参】请求入参modelorderTaskPush**/
class orderTaskBack_par_model extends base_loading_model {
  public constructor() { super(); }

  /***指令任务标识符的集合***/
  public taskIdList!: any[];
  
  /***	撤回用户标识符***/
  public userId!: string;
}

/***【输出】输出结果modelOK**/
class orderTaskBack_result_model extends base_model  { 
  public constructor()  {super();}

  /*** 明细数据**/
  public data!: orderTaskBack_result_model_detail;
}


/***【输出】明细数据model**/
class orderTaskBack_result_model_detail {
  public constructor() { }

}

class orderTaskBack_ui_model extends orderTaskBack_par_model{
  public constructor() {
      super();
    }
}

/***【入参】请求入参modelorderTaskPush**/
class orderTaskRePush_par_model extends base_loading_model {
  public constructor() { super(); }

  /***	撤回用户标识符***/
  public taskId!: string;
}

/***【输出】输出结果modelOK**/
class orderTaskRePush_result_model extends base_model  { 
  public constructor()  {super();}

  /*** 明细数据**/
  public data!: orderTaskRePush_result_model_detail;
}


/***【输出】明细数据model**/
class orderTaskRePush_result_model_detail {
  public constructor() { }

}

class orderTaskRePush_ui_model extends orderTaskRePush_par_model{
  public constructor() {
      super();
    }
}

export {
  /** 推送民警 */
  orderTaskPush_par_model,
  orderTaskPush_result_model,
  orderTaskPush_result_model_detail,
  orderTaskPush_ui_model,

  /** 撤回 */
  orderTaskBack_par_model,
  orderTaskBack_result_model,
  orderTaskBack_result_model_detail,
  orderTaskBack_ui_model,

  /** 一键重推 */
  orderTaskRePush_par_model,
  orderTaskRePush_result_model,
  orderTaskRePush_result_model_detail,
  orderTaskRePush_ui_model,
}