import { weather_par_model } from "@/model/sysManage/weather_model.ts";
import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";

/**
*Weather Controller
*/
export class weatherNetwork {
  /**
  *获取城市天气
  */
    public async getCityWeather(params: weather_par_model) {
    const resultData: any = await httpAsync(globalAPI.weatherAPIs.jp_getCityWeather_api.url, globalAPI.weatherAPIs.jp_getCityWeather_api.method, params);
    return resultData;
  }
}
