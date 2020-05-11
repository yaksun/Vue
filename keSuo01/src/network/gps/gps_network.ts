import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";
/**
*Gps Controller
*/
export class gpsNetwork {
  /**
  *根据经纬度信息查询地址
  */
  public async getReverseGeocodingInfo(bodyParams: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.gpsAPI.jp_getReverseGeocodingInfo_api.url,
      globalAPI.gpsAPI.jp_getReverseGeocodingInfo_api.method,
      bodyParams);
    jpConsole.log("jp_getReverseGeocodingInfo_api -【根据经纬度信息查询地址】 resultData", resultData);

    return resultData;
  }
  /**
  *根据地址查询经纬度信息
  */
  public async getgpsinfo(pathParams: any, queryParams: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.gpsAPI.jp_getgpsinfo_api.url,
      globalAPI.gpsAPI.jp_getgpsinfo_api.method,
      pathParams,
      queryParams);
    jpConsole.log("jp_getgpsinfo_api -【根据地址查询经纬度信息】 resultData", resultData);

    return resultData;
  }
  /**
  *根据地址查询经纬度信息（新）
  */
  public async getgpsinfoV2(queryParams: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.gpsAPI.jp_getgpsinfoV2_api.url,
      globalAPI.gpsAPI.jp_getgpsinfoV2_api.method,
      queryParams);
    jpConsole.log("jp_getgpsinfoV2_api -【根据地址查询经纬度信息（新）】 resultData", resultData);

    return resultData;
  }
}
