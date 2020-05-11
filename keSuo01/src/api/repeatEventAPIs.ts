/**
*重复警情关联
*/
export const repeatEventAPI = {
    /**
    *根据sn查询所有与他关联的警情流水号
    */
    jp_repeatEvent_search_num_api: {
        url: "/api/jp-BSPA-PolSituInfo-ms/alarmRepeat/findRepeatEventSn",
        method: "get",
        baseUrl: "jpHttpUrl"
    },
    /**
    *列表高级查询
    */
   jp_repeatEvent_search_list_api: {
    url: "/api/jp-CMD-OrderAggregation-business-ms/orderAggregation/listdata/search",
    method: "post",
    baseUrl: "jpHttpUrl"
},
    /**
    *通过警情sn查询重复警情列表接口,获取大数据提供的相似警情
    */
    jp_repeatEvent_search_big_data_list_api: {
        url: "/api/jp-BSPA-PolSituInfo-ms/alarmRepeat/searchByAlarmSn",
        method: "post",
        baseUrl: "jpHttpUrl"
    },
    /**
    *根据sn查询所有与他关联的警情详情，有权限
    */
    jp_repeatEvent_search_repeat_detail_api: {
        url: "/api/jp-BSPA-PolSituInfo-ms/alarmRepeat/findRepeatEventDetail",
        method: "get",
        baseUrl: "jpHttpUrl"
    },
    /**
    *删除关联关系
    */
    jp_repeatEvent_delete_relations_api: {
        url: "/api/jp-BSPA-PolSituInfo-ms/alarmRepeat/delete",
        method: "delete",
        baseUrl: "jpHttpUrl"
    },
    /**
    *新增重复报警关联关系
    */
    jp_repeatEvent_add_relations_api: {
        url: "/api/jp-BSPA-PolSituInfo-ms/alarmRepeat/save",
        method: "post",
        baseUrl: "jpHttpUrl"
    },
}
