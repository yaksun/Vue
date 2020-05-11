import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";

export class menusNetwork {
  /**
   * 构造函数
   */
  public constructor() {}

  /**
   * 登录接口入参
   * @param params 入参
   */
  public async menus() {
    const resultData: any = await httpAsync(
      globalAPI.adminAPIs.jp_community_menus_api.url,
      globalAPI.adminAPIs.jp_community_menus_api.method
    );
    return resultData;
  }
}
