/**
 *Instruction Info Controller
 */
const instructionInfoAPIs = {
  /**
   *警情详情列表的高级查询
   */
  jp_orderAggregation_alarm_search_api: {
    url:
      "/api/jp-CMD-OrderAggregation-business-ms/orderAggregation/alarm/search",
    method: "post",
    baseUrl: "jpHttpUrl"
  },
  /**
   *新版指令列表的count查询
   */
  jp_orderAggregation_listdata_count_api: {
    url:
      "/api/jp-CMD-OrderAggregation-business-ms/orderAggregation/listdata/count",
    method: "post",
    baseUrl: "jpHttpUrl"
  },
  /**
   *新版指令详情列表的分页查询
   */
  jp_orderAggregation_listdata_page_api: {
    url:
      "/api/jp-CMD-OrderAggregation-business-ms/orderAggregation/listdata/page",
    method: "post",
    baseUrl: "jpHttpUrl"
  },
  /**
   *指令列表count查询V3版，仅有待办、已办
   */
  jp_orderAggregation_listdata_v3_count_api: {
    url:
      "/api/jp-CMD-OrderAggregation-business-ms/orderAggregation/listdata/v3/count",
    method: "post",
    baseUrl: "jpHttpUrl"
  },
  /**
   *指令列表分页查询V3版，仅有待办、已办
   */
  jp_orderAggregation_listdata_v3_page_api: {
    url:
      "/api/jp-CMD-OrderAggregation-business-ms/orderAggregation/listdata/v3/page",
    method: "post",
    baseUrl: "jpHttpUrl"
  },
  /**
   *管辖争议警情详情列表的分页查询，警情过滤暂不起效
   */
  jp_orderAggregation_listdisputedetails_page_api: {
    url:
      "/api/jp-CMD-OrderAggregation-business-ms/orderAggregation/listdisputedetails/page",
    method: "post",
    baseUrl: "jpHttpUrl"
  },
  /**
   *警情关注
   */
  jp_bus_instructions_favourite_api: {
    url: "/api/jp-BIO-Order-ms/instructions/favourite",
    method: "post",
    baseUrl: "jpHttpUrl"
  },
  /**
   *取消警情关注
   */
  jp_bus_instructions_unfavourite_api: {
    url: "/api/jp-BIO-Order-ms/instructions/unfavourite",
    method: "post",
    baseUrl: "jpHttpUrl"
  },

  /**
   *标记或取消敏感警情
   */
  jp_bus_instructions_sensitive_api: {
    url: "/api/jp-BSPA-PolSituInfo-ms/polsituinfos/sensitive/flag",
    method: "post",
    baseUrl: "jpHttpUrl"
  },

  /**
   *指令签收
   */
  jp_bus_instructions_read_api: {
    url: "/api/jp-BIO-Order-ms/instructions/tasks",
    method: "put"
  }
};

export { instructionInfoAPIs };
