import { dicttag_par_model } from "@/model/sysManage/dictTag_model.ts";
import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";

/**
 *Dict Tag Controller
 */
export class dictTagNetwork {
  /**
   *查询标签树（type和key）
   */
  public async tag_tree_type(params: dicttag_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.dictTagAPIs.jp_tag_tree_type_api.url + '/type/' + params.type + '/key/' + params.key + '?depth=-1',
      globalAPI.dictTagAPIs.jp_tag_tree_type_api.method,
      {}
    );
    return resultData;
  }
}
