/**
*Instruction Info User Controller
*/
export const instructionInfoUserAPI = {
    /**
    *地图警员接口，获取警情周边警员位置以及状态
    */
    jp_instructionUser_map_policeLocation_api: {
        url: "/api/jp-CMD-OrderAggregation-business-ms/instructionUser/map/policeLocation",
        method: "post",
        baseUrl: "jpHttpUrl"
    },
    /**
    *智能推荐人
    */
    jp_instructionUser_recommendation_user_api: {
        url: "/api/jp-CMD-OrderAggregation-business-ms/instructionUser/recommendation/user",
        method: "get",
        baseUrl: "jpHttpUrl"
    },
    /**
    *指令人员状态查询-分页
    */
    jp_instructionUser_userStatus_page_api: {
        url: "/api/jp-CMD-OrderAggregation-business-ms/instructionUser/userStatus/page",
        method: "post",
        baseUrl: "jpHttpUrl"
    }
}
