import { base_model } from "@/model/base_model";
import { common } from "@/utils/common";
import {
  receivePartParam_par_model,
  receivePartParam_ui_model,
  receivePartParam,
  batchParam_par_model,
  batchParam_ui_model,
  backParam_par_model,
  backParam_ui_model,
  userPageParameter_ui_model,
  userPageParameter_par_model,
  userPageParameter_result_model,
  liftingParam_par_model,
  liftingParam_ui_model,
  applydelay_new_ui_model,
  applydelay_new_par_model
} from "@/model/instructionInfo/taskInfo_model.ts";

import { taskInfoNetwork } from "@/network/instructionInfo/taskInfo_network";

/***Instruction Info Controller*/
export class instructionInfoService {
  /**
   *指令任务转发
   */
  public async bus_instructions_forward(
    model: receivePartParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      receivePartParam_ui_model,
      receivePartParam_par_model
    >(model);

    let network = new taskInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.bus_instructions_forward(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *批量撤回指令任务
   */
  public async bus_instructions_batch(
    model: batchParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      batchParam_ui_model,
      batchParam_par_model
    >(model);

    let network = new taskInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.bus_instructions_batch(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *指令任务回退
   */
  public async bus_instructions_back(
    model: backParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      backParam_ui_model,
      backParam_par_model
    >(model);

    let network = new taskInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.bus_instructions_back(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *指令人员状态查询-分页
   */
  public async bus_instructions_page(
    model: userPageParameter_ui_model
  ): Promise<userPageParameter_result_model> {
    let bodyParams = common.TConvertObj<
      userPageParameter_ui_model,
      userPageParameter_par_model
    >(model);

    let network = new taskInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.bus_instructions_page(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <userPageParameter_result_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *警情指令升降级
   */
  public async polsituinfo_addlylevel(
    model: liftingParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      liftingParam_ui_model,
      liftingParam_par_model
    >(model);
    let network = new taskInfoNetwork();

    let startDateTime = new Date().getTime();

    const data: any = await network.bus_instructions_addlylevel(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *警情指令延时
   */
  public async bus_instructions_applydelay_new(
    model: applydelay_new_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      applydelay_new_ui_model,
      applydelay_new_par_model
    >(model);
    let network = new taskInfoNetwork();

    let startDateTime = new Date().getTime();

    const data: any = await network.bus_instructions_applydelay_new(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }
}
