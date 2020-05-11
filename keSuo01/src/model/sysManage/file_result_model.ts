import { base_model } from "@/model/base_model";
import { base_loading_model } from "@/model/base_loading_model";

/***【入参】请求入参modelbaseFile**/
class baseFile_par_model extends base_loading_model { 
  public constructor()  {super();}
 
  /***fileName***/
  public fileName!: string;

  /** 文件格式 */
  public isBlob!: boolean;

  /** 文件ID 用于删除，查找 */
  public id!: string;

  /** 下载文件 参数名 */
  businessId!: string;
}

/***【输出】输出结果modelOK**/
class fileModel_result_model extends base_model  { 
  public constructor()  {super();}
  
  public status!: any;
  
 /*** 明细数据**/
  public data!: fileModel_result_model_detail;
}

class fileModel_result_model_detail {
  public constructor() {}
  
}

/***【输入】uiModel界面数据绑定OK**/
class fileModel_ui_model extends baseFile_par_model {
  public constructor() {
    super();
  }
}

export {
  baseFile_par_model,
  fileModel_result_model,
  fileModel_result_model_detail,
  fileModel_ui_model
};

