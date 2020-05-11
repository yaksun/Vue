import {
  orderTaskPush_par_model,
  orderTaskPush_result_model,
  orderTaskPush_result_model_detail,
  orderTaskPush_ui_model,
  orderTaskBack_par_model,
  orderTaskBack_result_model,
  orderTaskBack_result_model_detail,
  orderTaskBack_ui_model,
  orderTaskRePush_par_model,
  orderTaskRePush_result_model,
  orderTaskRePush_result_model_detail,
  orderTaskRePush_ui_model,
} from "@/model/instructionInfo/orderTask_model";
import { orderTaskNetwork } from "@/network/instructionInfo/orderTask_network";
import { jpConsole } from "@/utils/jpConsole";

/*** orderTask Controller*/
export class orderTaskService {
  /**
   * 推送民警
   */
  public async orderTaskPush(params: orderTaskPush_par_model) {
    let parameters = <orderTaskPush_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new orderTaskNetwork().orderTaskPush(parameters);
    var endDateTime = new Date().getTime();
    var data = new orderTaskPush_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【 orderTaskPush 】data", data);
    return data;
  }

  /**
   * 撤回民警
   */
  public async orderTaskBack(params: orderTaskBack_par_model) {
    let parameters = <orderTaskBack_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new orderTaskNetwork().orderTaskBack(parameters);
    var endDateTime = new Date().getTime();
    var data = new orderTaskBack_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【 orderTaskBack 】data", data);
    return data;
  }

  /**
   * 一键重推
   */
  public async orderTaskRePush(params: orderTaskRePush_par_model) {
    let parameters = <orderTaskRePush_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new orderTaskNetwork().orderTaskRePush(parameters);
    var endDateTime = new Date().getTime();
    var data = new orderTaskRePush_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【orderTaskRePush 】data", data);
    return data;
  }
}
