import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";
/**
*T Event Update Controller
*/
export class tEventUpdateNetwork {
  /**
  *新增事件更新、二次定位、更新发案地址
  */
  public async polsituinfo_addEventUpdate(params: any): Promise<any> {
    const resultData: any = await httpAsync(globalAPI.tEventUpdateAPI.jp_update_api.url,
      globalAPI.tEventUpdateAPI.jp_update_api.method,
      params);
    console.log("jp_polsituinfo_addEventUpdate_api -【新增事件更新、二次定位、更新发案地址】 resultData", resultData);
    return resultData;
  }
}
