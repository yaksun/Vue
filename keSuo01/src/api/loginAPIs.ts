import { JPConfig } from '@/config/JPConfig';
/**
 * 登录模块
 */
const loginAPIs = {
    /**
     * 登录
     */
    jp_login_api: {
        url:   "/api/jp-BIRM-UserProfile-ms/users/login/V2",
        method: "post",
        baseUrl:"jpHttpUrl"
    },
    /**
    * token
    */
    jp_token_api: {
        url:   "/api/jp-HCZZ-AdminWeb-app-ms/client",
        method: "post",
        baseUrl:"jpHttpUrl"
    },
    /**
    * 用户信息
    */
    jp_userinfo_api: {
        url:   "/api/jp-BIRM-UserProfile-ms/users/bigUserBigModelByloginName",
        method: "get",
        baseUrl:"jpHttpUrl"
    },
    /**
    * 根据用户的Id获取用户大模型
    */
    jp_userinfoByuserId_api:{
        url:"/api/jp-BIRM-UserProfile-ms//users/bigUserBigModelByuserId",
        method:"get"
    },
    /**
     * 心跳接口
     */
    jp_healthCheck_api: {
        url:   "/api/jp-HCZZ-AdminWeb-app-ms/client/healthCheck",
        method: "post",
        baseUrl:"jpHttpUrl"
    },
    /**
     * 获取验证码
     */
    jp_getCodeImg_api: {
        url: `jp-community-userauth-ms/auth/code`,
        method: "get",
        baseUrl:"jpHttpUrl"
    }

}

export { loginAPIs };