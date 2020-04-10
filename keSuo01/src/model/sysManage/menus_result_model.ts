import { base_model } from "@/model/base_model";
import { base_loading_model } from "@/model/base_loading_model";

/**
 * 【入参】测试请求入参model
 */
class menus_par_model extends base_loading_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }
}

/**
 * 【输出】测试输出结果model
 */
class menus_result_model extends base_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }

  /**明细数据 */
  public data!: menus_result_model_detail[];
}

/**
 * 【明细数据】
 */
class menus_result_model_detail {
  /**默认构造函数 */
  public constructor() {}

  /**名称 */
  public name!: string;

  /**路径 */
  public path!: string;

  /**是否显示 */
  public hidden!: boolean;

  /**重定向 */
  public redirect!: string;

  /**组件 */
  public component!: string;

  /**是否一直显示 */
  public alwaysShow!: boolean;

  /**元数据 */
  public meta!: meta_result_model_detail;

  /**子菜单 */
  public children!: menus_result_model_detail[];
}

class meta_result_model_detail {
  /**默认构造函数 */
  public constructor() {}

  /**名称 */
  public title!: string;

  /**图标 */
  public icon!: string;

  /**是否缓存 */
  public noCache!: boolean;
}

/**
 * uiModel界面数据绑定
 */
class menus_ui_model extends menus_par_model {
  /**默认构造函数 */
  public constructor() {
    super();
  }
}

export {
  /**model部分 */
  menus_par_model,
  menus_result_model,
  menus_result_model_detail,
  /**uimodel部分 */
  menus_ui_model
};
