import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";
/**
*Instruction Info User Controller
*/
export class instructionInfoUserNetwork {
  /**
  *地图警员接口，获取警情周边警员位置以及状态
  */
  public async instructionUser_map_policeLocation(params: any): Promise<any> {
    const resultData: any = await httpAsync(globalAPI.instructionInfoUserAPI.jp_instructionUser_map_policeLocation_api.url,
      globalAPI.instructionInfoUserAPI.jp_instructionUser_map_policeLocation_api.method,
      params);
    jpConsole.log("jp_instructionUser_map_policeLocation_api -【地图警员接口，获取警情周边警员位置以及状态】 resultData", resultData);

    return resultData;
  }
  /**
  *智能推荐人
  */
  public async instructionUser_recommendation_user(params: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.instructionInfoUserAPI.jp_instructionUser_recommendation_user_api.url,
      globalAPI.instructionInfoUserAPI.jp_instructionUser_recommendation_user_api.method,
      params);
    jpConsole.log("jp_instructionUser_recommendation_user_api -【智能推荐人】 resultData", resultData);

    return resultData;
  }
  /**
  *指令人员状态查询-分页
  */
  public async instructionUser_userStatus_page(params: any): Promise<any> {
    const resultData: any = await httpAsync(globalAPI.instructionInfoUserAPI.jp_instructionUser_userStatus_page_api.url,
      globalAPI.instructionInfoUserAPI.jp_instructionUser_userStatus_page_api.method,
      params);
    jpConsole.log("jp_instructionUser_userStatus_page_api -【指令人员状态查询-分页】 resultData", resultData);

    return resultData;
  }
}
