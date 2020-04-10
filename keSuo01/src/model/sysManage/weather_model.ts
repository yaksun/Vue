import { base_model } from "@/model/base_model";
import { base_loading_model } from "@/model/base_loading_model";
import { base_page_model } from "@/model/base_page_model";

/***【入参】请求入参modeldicttag**/
class weather_par_model extends base_loading_model {
  public constructor() {
    super();
  }

  public cityName!: string
}

/***【输出】输出结果modelOK**/
class weather_result_model extends base_model {
  public constructor() {
    super();
  }

  /*** 明细数据**/
  public data!: weather_result_model_detail;
}

class weather_result_model_detail {
  /**默认构造函数 */
  public constructor() { }

  public results!: any;
}

/***【输入】uiModel界面数据绑定OK**/
class weather_ui_model extends weather_par_model {
  public constructor() {
    super();
  }
}

export {
  weather_par_model,
  weather_result_model,
  weather_result_model_detail,
  weather_ui_model
};
