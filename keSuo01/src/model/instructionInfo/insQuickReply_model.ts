import { base_model } from "@/model/base_model";
import { base_loading_model } from "../base_loading_model";
import { base_page_model } from "../base_page_model";
/***快速回复基本模型***/
interface quickReply_model {
  businessFrom?: number;          //业务类型0：重点人 1：警情 等
  content	?:string;                   //回复内容
  id	?:string;                       //主键id
  shortcuts	?:string;               //快捷键
  signDefault	?: number;              //是否为默认模版：0：非默认 1：默认
  sort	?: number;                  //排序字段
  userId  ?:string;                   //用户id
}
/***常用语新增参数模型***/
interface batchParam_add_model {
  businessFrom: number;
  list   :Array<quickReply_model>
  userId: string;
}
/***常用语list查询响应模型***/
class batchParam_list_result_model extends base_model{
  public constructor()  {super();}
  public data !:Array<any>;
}
/***常用语基本操作响应模型***/
class operation_result_model extends base_model{
  public constructor()  {super();}
  public data !:object;
}

/***聊天消息发送**/
class instructions_send_par_model extends base_loading_model {
  //   public constructor() {};

  /***	内容类型(1:文本 2:文件 3:语音)***/
  public catalog!: number;
  /***文件ID集合	***/
  public fileKey!: Array<string>;
  /***是否强提醒 true 强提醒 false 不强提醒		***/
  public forceRemind!: boolean;
  /***	内容(如果传入的为非文本 则为空或者空串)	***/
  public payload!: string;
  /***消息接收者ID集合，为人。在Visible = 1可用***/
  public receivePartList!: Array<string>;
  /***客户端会话标记***/
  public sessionId!: string;
  /***	消息来源	***/
  public source!: string;
  /******/
  public type!: string;
  public taskId!: string;
  public userId!: string;
  /***	预案结果	***/
  public specificDataParams!: Array<object>;
}
class specificDataParams_model_detail {
  public constructor() {}
  /***反馈民警ID***/
  public feedPersonId!: string;
  /***	反馈时间,例如：2009-06-15T13:45:30.0000000+08:00***/
  public feedTime!: string;
  /***预案ID***/
  public planId!: string;
  /***	值来源(0:民警反馈,1:手工补录)***/
  public source!: number;
  /***	步骤代码***/
  public stepcode!: string;
  /***字段代码***/
  public stepfield!: string;
  /***	任务标ID***/
  public taskId!: string;
}
export {
  quickReply_model,
  batchParam_add_model,
  operation_result_model,
  batchParam_list_result_model,
  instructions_send_par_model,
  specificDataParams_model_detail
};
