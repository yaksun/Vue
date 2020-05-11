import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";
/**
*Planning Controller
*/
export class planningNetwork {
  /**
  *geoCode
  */
  public async planning_geoCode_filter(bodyParams: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.planningAPI.jp_planning_geoCode_filter_api.url,
      globalAPI.planningAPI.jp_planning_geoCode_filter_api.method, 
       bodyParams);
    jpConsole.log("jp_planning_geoCode_filter_api -【geoCode】 resultData", resultData);

    return resultData;
  }
  /**
  *根据案发地获取到达预估信息预演算
  */
  public async planning_getPathPlanning( bodyParams: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.planningAPI.jp_planning_getPathPlanning_api.url,
       globalAPI.planningAPI.jp_planning_getPathPlanning_api.method, 
       bodyParams);
    jpConsole.log("jp_planning_getPathPlanning_api -【根据案发地获取到达预估信息预演算】 resultData", resultData);

    return resultData;
  }
  /**
  *inputTips
  */
  public async planning_inputTips(bodyParams: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.planningAPI.jp_planning_inputTips_api.url,
      globalAPI.planningAPI.jp_planning_inputTips_api.method,
      bodyParams);
    jpConsole.log("jp_planning_inputTips_api -【inputTips】 resultData", resultData);

    return resultData;
  }
  /**
  *getPoiSearch
  */
  public async planning_poi(bodyParams: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.planningAPI.jp_planning_poi_api.url, 
      globalAPI.planningAPI.jp_planning_poi_api.method, 
      bodyParams);
    jpConsole.log("jp_planning_poi_api -【getPoiSearch】 resultData", resultData);

    return resultData;
  }
  /**
  *regeoCode
  */
  public async planning_regeoCode_filter(bodyParams: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.planningAPI.jp_planning_regeoCode_filter_api.url, 
      globalAPI.planningAPI.jp_planning_regeoCode_filter_api.method, 
      bodyParams);
    jpConsole.log("jp_planning_regeoCode_filter_api -【regeoCode】 resultData", resultData);

    return resultData;
  }
}
