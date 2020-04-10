import {
  menus_ui_model,
  menus_par_model,
  menus_result_model,
  menus_result_model_detail
} from "@/model/sysManage/menus_result_model.ts";
import { menusNetwork } from "@/network/sysManage/menusNetwork";
import { jpConsole } from "@/utils/jpConsole";

export class menusService {
  /**
   *构造函数
   */
  public constructor() {}

  /**
   * 获取菜单
   * @param prarms 入参
   */
  public async getMeuns() {
    var startDateTime = new Date().getTime();
    const resultData = await new menusNetwork().menus();
    var endDateTime = new Date().getTime();

    var data = new menus_result_model();
    data.code = resultData.code;
    data.data = <menus_result_model_detail[]>resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("getMeuns", data);

    return data;
  }
}
