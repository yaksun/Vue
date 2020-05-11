/**
*Gps Controller
*/
export const gpsAPI = {
    /**
    *Gps Controller
    */

    /**
    *根据经纬度信息查询地址
    */
    jp_getReverseGeocodingInfo_api: {
        url: "/api/jp-ESB-HumanInfo-ms/getReverseGeocodingInfo",
        method: "get",
        baseUrl: "jpHttpUrl"
    },
    /**
    *根据地址查询经纬度信息
    */
    jp_getgpsinfo_api: {
        url:  "/api/jp-ESB-HumanInfo-ms/getgpsinfo",
        method: "get",
        baseUrl: "jpHttpUrl"
    },
    /**
    *根据地址查询经纬度信息（新）
    */
    jp_getgpsinfoV2_api: {
        url:  "/api/jp-ESB-HumanInfo-ms/getgpsinfoV2",
        method: "get",
        baseUrl: "jpHttpUrl"
    },

}
