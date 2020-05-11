/**
 * 文件上传，下载，删除
 */
const fileCenterAPIs = {
  /**
   * upload file (array file)
   */
  jp_upload_file_api:{
    url: "/api/jp-TIFS-FileCenter-ms/file",
    method:"post"
  },

  /**
  * upload more file
  */
  jp_multifile_api:{
    url: "/api/jp-TIFS-FileCenter-ms/multifile",
    method:"post"
  },

  /**
  * download File (?businessId)
  */
  jp_download_file_api:{
    url: "/api/jp-TIFS-FileCenter-ms/file",
    method:"get"
  },

  /**
   * delete file (fileId)
   */
  jp_delete_file_api:{
    url: "/api/jp-TIFS-FileCenter-ms/file/delete",
    method:"delete"
  },
}

export { fileCenterAPIs }