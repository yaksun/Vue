/**
 *Instruction Info Controller
 */
const taskInfoAPIs = {
  /**
   *指令任务转发
   */
  jp_bus_instructions_forward_api: {
    url: "/api/jp-BSO-Order-ms/bus_instructions/tasks",
    method: "put",
    baseUrl: "jpHttpUrl"
  },
  /**
   *批量撤回指令任务
   */
  jp_bus_instructions_batch_api: {
    url: "/api/jp-BSO-Order-ms/bus_instructions/tasks",
    method: "put",
    baseUrl: "jpHttpUrl"
  },
  /**
   *指令任务回退
   */
  jp_bus_instructions_back_api: {
    url: "/api/jp-BSO-Order-ms/bus_instructions/tasks",
    method: "put",
    baseUrl: "jpHttpUrl"
  },
  /**
   *指令人员状态查询-分页
   */
  jp_bus_instructions_page_api: {
    url:
      "/api/jp-CMD-OrderAggregation-business-ms/instructionUser/userStatus/page",
    method: "post",
    baseUrl: "jpHttpUrl"
  },
  /**
   *指令升降级
   */
  jp_bus_instructions_addlylevel_api: {
    url: "/api/jp-BSPA-PolSituInfo-ms/polsituinfo/addlylevel",
    method: "post",
    baseUrl: "jpHttpUrl"
  },
  /**
   *指令延时
   */
  jp_bus_instructions_applydelay_new_api: {
    url: "/api/jp-BIO-Order-ms/instructions/applydelay/new",
    method: "post",
    baseUrl: "jpHttpUrl"
  }
};

export { taskInfoAPIs };
