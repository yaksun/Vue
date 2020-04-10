import { baseFile_par_model } from "@/model/sysManage/file_result_model";
import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";

export class fileNetwork {
  /**
   * delete File
   */
  public async deleteFile(params: baseFile_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.fileCenterAPIs.jp_delete_file_api.url + '/' + params.id,
      globalAPI.fileCenterAPIs.jp_delete_file_api.method,
      {}
    );
    return resultData;
  }

  /**
   * download File
   */
  public async downloadFile(params: baseFile_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.fileCenterAPIs.jp_download_file_api.url,
      globalAPI.fileCenterAPIs.jp_download_file_api.method,
      params
    );
    return resultData;
  }

  /**
   * upload File
   */
  public async uploadFile(params: baseFile_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.fileCenterAPIs.jp_upload_file_api.url,
      globalAPI.fileCenterAPIs.jp_upload_file_api.method,
      params
    );
    return resultData;
  }

  /**
   * upload more file
   */
  public async multifile(params: baseFile_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.fileCenterAPIs.jp_multifile_api.url,
      globalAPI.fileCenterAPIs.jp_multifile_api.method,
      params
    );
    return resultData;
  }
}
