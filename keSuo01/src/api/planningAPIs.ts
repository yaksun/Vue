/**
*Planning Controller
*/
export const planningAPI = {
    /**
    *Planning Controller
    */

    /**
    *geoCode
    */
    jp_planning_geoCode_filter_api: {
        url:   "/api/jp-BSM-MAP-ms/planning/geoCode/filter",
        method: "post",
        baseUrl: "jpHttpUrl"
    },
    /**
    *根据案发地获取到达预估信息预演算
    */
    jp_planning_getPathPlanning_api: {
        url:   "/api/jp-BSM-MAP-ms/planning/getPathPlanning",
        method: "post",
        baseUrl: "jpHttpUrl"
    },
    /**
    *inputTips
    */
    jp_planning_inputTips_api: {
        url:   "/api/jp-BSM-MAP-ms/planning/inputTips",
        method: "post",
        baseUrl: "jpHttpUrl"
    },
    /**
    *getPoiSearch
    */
    jp_planning_poi_api: {
        url:   "/api/jp-BSM-MAP-ms/planning/poi",
        method: "get",
        baseUrl: "jpHttpUrl"
    },
    /**
    *regeoCode
    */
    jp_planning_regeoCode_filter_api: {
        url:   "/api/jp-BSM-MAP-ms/planning/regeoCode/filter",
        method: "post",
        baseUrl: "jpHttpUrl"
    },

}
