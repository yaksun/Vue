import { weather_par_model, weather_result_model } from "@/model/sysManage/weather_model.ts";
import { weatherNetwork } from "@/network/sysManage/weather_network";
import { jpConsole } from "@/utils/jpConsole";


/***Weather Controller*/
 export class weatherService {
/**
*获取城市天气
*/
public async getCityWeather(params: weather_par_model) {
  let parameters = <weather_par_model>params;
  var startDateTime = new Date().getTime();
  const resultData = await new weatherNetwork().getCityWeather(parameters);
  var endDateTime = new Date().getTime();
  var data = new weather_result_model();
  data.code = resultData.code;
  data.data = resultData.data;
  data.msg = resultData.msg;
  data.expendTime = endDateTime - startDateTime;
  jpConsole.log("【 weather 】data", data);
  return data;
 }
}
