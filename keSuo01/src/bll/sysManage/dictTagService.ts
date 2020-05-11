import {
  dicttag_par_model,
  dictTag_result_model,
  dictTag_result_model_detail,
  dictTag_ui_model
} from "@/model/sysManage/dictTag_model.ts";
import { dictTagNetwork } from "@/network/sysManage/dictTag_network";
import { jpConsole } from "@/utils/jpConsole";

/***Dict Tag Controller*/
export class dictTagService {
  /**
   *构造函数
   */
  public constructor() {}
  
  /**
   *查询标签树（type和key）
   */
  public async tag_tree_type(params: dictTag_ui_model) {
    let parameters = <dicttag_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new dictTagNetwork().tag_tree_type(parameters);
    var endDateTime = new Date().getTime();
    var data = new dictTag_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【tag_tree_type 】data", data);
    return data;
  }
}
