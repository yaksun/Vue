import {
  login_ui_model,
  login_par_model,
  login_result_model,
  login_result_model_detail,
  token_ui_model,
  token_par_model,
  token_result_model,
  token_result_model_detail,
  userinfo_ui_model,
  userinfo_par_model,
  userinfo_result_model,
  userinfo_result_model_detail

} from "@/model/sysManage/login_result_model.ts";
import { loginNetwork } from "@/network/sysManage/loginNetwork";
import { jpConsole } from "@/utils/jpConsole";

export class loginService {
  /**
   *构造函数
   */
  public constructor() {}

  /**
   * 登录接口
   * @param prarms 入参
   */
  public async login(params: login_ui_model) {

    let parameters = <login_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new loginNetwork().login(parameters);
    var endDateTime = new Date().getTime();
    var data = new login_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【login】data", data);

    return data;
  }

  public async getToken(params: token_ui_model) {

    let parameters = <token_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new loginNetwork().getToken(parameters);
    var endDateTime = new Date().getTime();
    var data = new token_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【login】tokentoken", data);
  
    return data;
  }

  public async getUserInfo(params: userinfo_ui_model) {

    let parameters = <userinfo_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new loginNetwork().getUserInfo(parameters);
    var endDateTime = new Date().getTime();
    var data = new userinfo_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    
    jpConsole.log("【login】userinfouserinfouserinfo--->>>", data);
    return data;
  }

  
  public async gethealthCheck(params: token_ui_model) {

    let parameters = <token_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new loginNetwork().gethealthCheck(parameters);
    var endDateTime = new Date().getTime();
    var data = new token_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
 
    jpConsole.log("【login】gethealthCheck心跳监测--->>>", data);
    return data;
  }
  
  /**
   * 验证码接口
   * @param prarms 入参
   */
  public async getCodeImg() {
    var startDateTime = new Date().getTime();
    const resultData = await new loginNetwork().getCodeImg();
    var endDateTime = new Date().getTime();

    var data = new login_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("getCodeImg", data);

    return data;
  }
}
