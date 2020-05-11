import { base_model } from '@/model/base_model';
import { common } from "@/utils/common";
import {
  queryModel_ui_model,
  queryModel_par_model,
  facilityAndLocation_result_model,
  facilityAndLocation_page_reult_model,
  polices_child_result_model_detail,
  facilityAndLocation_result_model_detail,
  facilityAndLocation_ui_model,
  userStatusResultModel_result_model,
  userStatusResultModel_page_reult_model,
  userStatusResultModel_result_model_detail,
  userStatusResultModel_ui_model,
  userPageParameter_par_model,
  userPageParameter_ui_model
} from "@/model/instructionInfoUser/instructionInfoUser_model"


import { instructionInfoUserNetwork } from "@/network/instructionInfoUser/instructionInfoUser_network";


/***Instruction Info User Controller*/
export class instructionInfoUserService {
  /**
  *地图警员接口，获取警情周边警员位置以及状态
  */
  public async instructionUser_map_policeLocation(model: queryModel_ui_model): Promise<base_model> {
    let bodyParams = common.TConvertObj<queryModel_ui_model, queryModel_par_model>(model);

    let network = new instructionInfoUserNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.instructionUser_map_policeLocation(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

  /**
  *智能推荐人
  */
  public async instructionUser_recommendation_user(model: queryModel_ui_model): Promise<base_model> {
    let network = new instructionInfoUserNetwork();
    //如果没有query参数，就不用定义
    let queryParams = <queryModel_ui_model>model;
    let startDateTime = new Date().getTime();
    const data: any = await network.instructionUser_recommendation_user(queryParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

  /**
  *指令人员状态查询-分页
  */
  public async instructionUser_userStatus_page(model: userPageParameter_ui_model): Promise<base_model> {
    let bodyParams = common.TConvertObj<userPageParameter_ui_model, userPageParameter_par_model>(model);

    let network = new instructionInfoUserNetwork();
    let startDateTime = new Date().getTime();
    const data: any = await network.instructionUser_userStatus_page(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

}
