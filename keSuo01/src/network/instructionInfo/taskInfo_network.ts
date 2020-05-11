import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";
import {
  receivePartParam_par_model,
  receivePartParam,
  batchParam_par_model,
  backParam_par_model,
  userPageParameter_par_model,
  liftingParam_par_model,
  applydelay_new_par_model
} from "@/model/instructionInfo/taskInfo_model.ts";
/**
 *Instruction Info Controller
 */
export class taskInfoNetwork {
  /**
   *指令任务转发
   */
  public async bus_instructions_forward(
    params: receivePartParam_par_model
  ): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.taskInfoAPIs.jp_bus_instructions_forward_api.url +
        "/" +
        params.taskId +
        "/" +
        params.userId +
        "/forward",
      globalAPI.taskInfoAPIs.jp_bus_instructions_forward_api.method,
      params
    );
    jpConsole.log(
      "put_instructions_forward -指令任务转发 resultData",
      resultData
    );

    return resultData;
  }
  /**
   *批量撤回指令任务
   */
  public async bus_instructions_batch(
    params: batchParam_par_model
  ): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.taskInfoAPIs.jp_bus_instructions_batch_api.url +
        "/" +
        params.userId +
        "/withdraw/batch",
      globalAPI.taskInfoAPIs.jp_bus_instructions_batch_api.method,
      params
    );
    jpConsole.log(
      "bus_instructions_batch -【批量撤回指令任务】 resultData",
      resultData
    );
    return resultData;
  }
  /**
   *指令任务回退
   */
  public async bus_instructions_back(
    params: backParam_par_model
  ): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.taskInfoAPIs.jp_bus_instructions_back_api.url +
        "/" +
        params.taskId +
        "/" +
        params.userId +
        "/back",
      globalAPI.taskInfoAPIs.jp_bus_instructions_back_api.method,
      params
    );
    jpConsole.log(
      "bus_instructions_back -【指令任务回退】 resultData",
      resultData
    );
    return resultData;
  }
  /**
   *指令人员状态查询-分页
   */
  public async bus_instructions_page(
    params: userPageParameter_par_model
  ): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.taskInfoAPIs.jp_bus_instructions_page_api.url,
      globalAPI.taskInfoAPIs.jp_bus_instructions_page_api.method,
      params
    );
    jpConsole.log(
      "bus_instructions_page -【指令人员状态查询-分页】 resultData",
      resultData
    );

    return resultData;
  }

  /**
   *指令升降级
   */
  public async bus_instructions_addlylevel(
    params: liftingParam_par_model
  ): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.taskInfoAPIs.jp_bus_instructions_addlylevel_api.url,
      globalAPI.taskInfoAPIs.jp_bus_instructions_addlylevel_api.method,
      params
    );
    jpConsole.log(
      "bus_instructions_addlylevel -【指令升降级】 resultData",
      resultData
    );

    return resultData;
  }
  /**
   *指令延时
   */
  public async bus_instructions_applydelay_new(
    params: applydelay_new_par_model
  ): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.taskInfoAPIs.jp_bus_instructions_applydelay_new_api.url,
      globalAPI.taskInfoAPIs.jp_bus_instructions_applydelay_new_api.method,
      params
    );
    jpConsole.log(
      "bus_instructions_applydelay_new -【指令延时】 resultData",
      resultData
    );

    return resultData;
  }
}
