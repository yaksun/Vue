import {
  baseFile_par_model,
  fileModel_result_model,
  fileModel_result_model_detail,
  fileModel_ui_model
} from "@/model/sysManage/file_result_model";
import { fileNetwork } from "@/network/sysManage/fileNetwork";
import { jpConsole } from "@/utils/jpConsole";

/**
 * 文件服务类
 * 上传 下载 上传多个 删除
 * @export
 * @class fileService
 */
export class fileService {
  /**
  * download File
  */
  public async downloadFile(params: fileModel_ui_model){
    let parameters = <baseFile_par_model>params;
    const resultData = await new fileNetwork().downloadFile(parameters);
    console.log(resultData);
    var data = new fileModel_result_model();
    data = resultData;
    jpConsole.log("【 downloadFile 】data", data);
    return data;
  }

  /**
  * delete File
  */
  public async deleteFile(params: fileModel_ui_model){
    let parameters = <baseFile_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new fileNetwork().deleteFile(parameters);
    var endDateTime = new Date().getTime();
    var data = new fileModel_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【 deleteFile 】data", data);
    return data;
  }

  /**
  * upload File
  */
  public async uploadFile(params: fileModel_ui_model){
    let parameters = <baseFile_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new fileNetwork().uploadFile(parameters);
    var endDateTime = new Date().getTime();
    var data = new fileModel_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【 uploadFile 】data", data);
    return data;
  }

  /**
  * upload more File
  */
  public async multifile(params: fileModel_ui_model){
    let parameters = <baseFile_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new fileNetwork().multifile(parameters);
    var endDateTime = new Date().getTime();
    var data = new fileModel_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【 multifile 】data", data);
    return data;
  }
}