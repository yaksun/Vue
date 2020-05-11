import { base_model } from "@/model/base_model";
import { base_loading_model } from "@/model/base_loading_model";
import { base_page_model } from "@/model/base_page_model";

/***【入参】请求入参modeldicttag**/
class dicttag_par_model extends base_loading_model {
  public constructor() {
    super();
  }

  /******/
  public configType!: string;

  /******/
  public hierarchy!: number;

  /******/
  public id!: string;

  /******/
  public key!: string;

  /******/
  public name!: string;

  /******/
  public parentId!: string;

  /******/
  public type!: string;

  public depth!: Number;
}

/***【输出】输出结果modelOK**/
class dictTag_result_model extends base_model {
  public constructor() {
    super();
  }

  /*** 明细数据**/
  public data!: dictTag_result_model_detail;
}

class dictTag_result_model_detail {
  /**默认构造函数 */
  public constructor() { }

  public tag!: any;
}

/***【输入】uiModel界面数据绑定OK**/
class dictTag_ui_model extends dicttag_par_model {
  public constructor() {
    super();
  }
}

export {
  dicttag_par_model,
  dictTag_result_model,
  dictTag_result_model_detail,
  dictTag_ui_model
};
