/**
*Weather Controller
*/
const orderTaskAPIs = {
  /**
  * 推送民警
  */
  jp_pushPolice_api:{
    url: "/api/jp-BSO-Order-ms/bus_instructions/tasks/",
    method:"put"
  },

  /**
  * 撤回民警
  */
  jp_backPolice_api:{
    url: "/api/jp-BSO-Order-ms/bus_instructions/tasks/",
    method:"put"
  },

  /** 一键重推 */
  jp_rePushPolice_api: {
    url: "/api/jp-BIO-Order-ms/instructions/tasks/resendTask",
    method: 'post'
  }
}

export { orderTaskAPIs }