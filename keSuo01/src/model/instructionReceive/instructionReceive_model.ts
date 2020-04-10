import { base_model } from "@/model/base_model";
import { base_loading_model } from '../base_loading_model';
import { base_page_model } from '../base_page_model';


/***【入参】请求入参modelparam**/
class instructionReceive_model extends base_loading_model {
  public constructor() { super(); }

  /**body参数**/
  public sendMessageParam!: param_par_two_model;
  /**路径参数:指令id**/
  public taskId!: string;
  /**路径参数:用户id***/
  public userId!: string;

}
class param_par_two_model {
  public constructor() { }
  /**内容类型(1:文本 2:文件 3:语音)**/
  public catalog!:any;
  /**文件ID集合**/
  public fileKey!:[];

  /**是否强提醒 true 强提醒 false 不强提醒**/
  public forceRemind!:boolean;
  /**内容(如果传入的为非文本 则为空或者空串)***/
  public payload!:string;
  /**消息接收者ID集合，为人。在Visible = 1可用**/
  public receivePartList!:[];
  /**客户端会话标记**/
  public sessionId!:string;
  /**消息来源**/
  public source!:string;
  /****/
  public specificDataParams!:Array<param_par_three_model>;

  public type!:string;
  /**可见性：0.公开群可见;1.特检@人可见**/
  public visible!:any
}
class param_par_three_model{
  /**反馈民警ID**/
  public feedPersonId!:string;
  /**反馈时间,例如：2009-06-15T13:45:30.0000000+08:00**/
  public feedTime!:string;
  /**预案ID**/
  public planId!:string;
  /**字段值(0:指令回复,1:指挥员补录)**/
  public result!:string;
  /**值来源(0:民警反馈,1:手工补录)**/
  public source!:any;
  /**步骤代码*/
  public stepcode!:string;
  /**字段代码**/
  public stepfield!:string;
  /**任务标ID**/
  public taskId!:string;
}
export {
  instructionReceive_model,
  param_par_two_model 
};
