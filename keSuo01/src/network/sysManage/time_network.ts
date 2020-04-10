import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";
/**
*Time Controller
*/
export class timeNetwork  {
  /**
  *getCurrentTime
  */
  public async schedule_getCurrentTime() {
    const resultData: any = await httpAsync(globalAPI.timeAPIs.jp_schedule_getCurrentTime_api.url,  globalAPI.timeAPIs.jp_schedule_getCurrentTime_api.method);
    return resultData;
  }
}
