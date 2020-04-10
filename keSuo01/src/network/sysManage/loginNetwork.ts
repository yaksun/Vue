import { login_par_model, token_par_model, userinfo_par_model} from "@/model/sysManage/login_result_model.ts";
import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";

export class loginNetwork {
  /**
   * 构造函数
   */
  public constructor() {}

  /**
   * 登录接口入参
   * @param params 入参
   */
  public async login(params: login_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.loginAPIs.jp_login_api.url,
      globalAPI.loginAPIs.jp_login_api.method,
      params
    );
    console.log('loginloginlogin====>>>', resultData);
    return resultData;
  }
 /**
   * toren接口入参
   * @param params 入参
   */
  public async getToken(params:token_par_model){
    const resultData: any = await httpAsync(
      globalAPI.loginAPIs.jp_token_api.url,
      globalAPI.loginAPIs.jp_token_api.method,
      params
    );
    console.log('TokenTokenToken====>>>', resultData);
    return resultData;

  }
 /**
   * 用户信息接口入参
   * @param params 入参
   */
  public async getUserInfo(params:userinfo_par_model){
    const resultData: any = await httpAsync(
      globalAPI.loginAPIs.jp_userinfo_api.url+"/"+params.loginName,
      globalAPI.loginAPIs.jp_userinfo_api.method,
      {}
    );
    console.log('jp_userinfo_api====>>>', resultData);
    return resultData;

  }
  
  /**
   * 用户心跳检测
   * @param params 入参
   */
  public async gethealthCheck(params:token_par_model){
    const resultData: any = await httpAsync(
      globalAPI.loginAPIs.jp_healthCheck_api.url,
      globalAPI.loginAPIs.jp_healthCheck_api.method,
      params
    );
    console.log('jp_gethealthCheck===心跳检测=>>>', resultData);
    return resultData;
  }

  /**
   * 获取验证码
   * @param params 入参
   */
  public async getCodeImg() {
    const resultData: any = await httpAsync(
      globalAPI.loginAPIs.jp_getCodeImg_api.url,
      globalAPI.loginAPIs.jp_getCodeImg_api.method
    );
    return resultData;
  }
}
