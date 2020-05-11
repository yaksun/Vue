import {
  orderTaskPush_par_model,
  orderTaskBack_par_model,
  orderTaskRePush_par_model,
} from "@/model/instructionInfo/orderTask_model";
import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";

export class orderTaskNetwork {
  /**
   * 推送民警
   */
  public async orderTaskPush(params: orderTaskPush_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.orderTaskAPIs.jp_pushPolice_api.url +
        params.taskId +
        "/" +
        params.userId +
        "/forward",
      globalAPI.orderTaskAPIs.jp_pushPolice_api.method,
      params.receivePartParamObj
    );
    return resultData;
  }

  /**
   * 撤回
   */
  public async orderTaskBack(params: orderTaskBack_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.orderTaskAPIs.jp_backPolice_api.url +
        params.userId +
        "/withdraw/batch" + '?taskIdList=' + params.taskIdList,
      globalAPI.orderTaskAPIs.jp_backPolice_api.method,
      {}
    );
    return resultData;
  }

  /**
   * 一键重推
   */
  public async orderTaskRePush(params: orderTaskRePush_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.orderTaskAPIs.jp_rePushPolice_api.url + '?taskId=' + params.taskId,
      globalAPI.orderTaskAPIs.jp_rePushPolice_api.method,
    );
    return resultData;
  }
}
