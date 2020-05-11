import {
  alarmPolice_par_model,
  alarmPolice_result_model,
  alarmPolice_result_model_detail,
  alarmPolice_ui_model,
  ppolsituInfo_par_model,
  ppolsituInfo_result_model,
  ppolsituInfo_result_model_detail,
  ppolsituInfo_ui_model,
  tEventTableModel_par_model,
  tEventTableModel_result_model,
  tEventTableModel_result_model_detail,
  tEventTableModel_ui_model,
  tEventApplyUpDownParams_par_model,
  tEventApplyupdown_result_model,
  tEventApplyupdown_result_model_detail,
  tEventApplyUpDownParams_ui_model,
  delayParams_par_model,
  delayParams_result_model,
  delayParams_result_model_detail,
  delayParams_ui_model,
  feedBack_par_model,
  feedBack_result_model,
  feedBack_result_model_detail,
  feedBack_ui_model,
  getNoticeInfo_par_model,
  getNoticeInfo_result_model,
  getNoticeInfo_result_model_detail,
  getNoticeInfo_ui_model,
  businessModel_par_model,
  businessModel_result_model,
  businessModel_result_model_detail,
  businessModel_ui_model,
    positionInfo_par_model,
    positionInfo_result_model,
    positionInfo_result_model_detail,
    positionInfo_ui_model,

        dutyAreaInfo_par_model,
    dutyAreaInfo_result_model,
    dutyAreaInfo_result_model_detail,
    dutyAreaInfo_ui_model,

    sensitiveWords_par_model,
    sensitiveWords_result_model,
    sensitiveWords_result_model_detail,
    sensitiveWords_ui_model,


    /** 通过id联动处警人员 */
        policeList_par_model,
    policeList_result_model,
    policeList_result_model_detail,
    policeList_ui_model,
} from "@/model/sysManage/alarm_result_model.ts";
import { alarmNetwork } from "@/network/sysManage/alarmNetwork";
import { jpConsole } from "@/utils/jpConsole";

/**
 * 警情服务类
 * @export
 * @class alarmService
 */
export class alarmService {
  /**
   *构造函数
   */
  public constructor() {}

  /**
   * 回告后，调用指令结束接口
   * 通过userId insID来结束指令
   */
  public async finishedIns(params: alarmPolice_par_model) {
    let parameters = <alarmPolice_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().finishedIns(parameters);
    var endDateTime = new Date().getTime();
    var data = new alarmPolice_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("结束指令", data);
    return data;
  }

  /**
   * 通过警情snid导出回告表单
   */
  public async downLoadReportFrom(params: tEventTableModel_par_model) {
    let parameters = <tEventTableModel_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().downLoadReportFrom(parameters);
    var endDateTime = new Date().getTime();
    var data = new tEventTableModel_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【导出回告表单】data", data);
    return data;
  }

  /**
   * 获取业务模型详情
   */
  public async orderAggregation_business_detail(
    params: businessModel_ui_model
  ) {
    let parameters = <businessModel_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().orderAggregation_business_detail(
      parameters
    );
    var endDateTime = new Date().getTime();
    var data = new businessModel_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【业务模型】data", data);
    return data;
  }

  /**
   * 通过bussinessKey取对应的反馈数据
   */
  public async feedBack_getFeedBackByBussinessKey(params: feedBack_ui_model) {
    let parameters = <feedBack_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().feedBack_getFeedBackByBussinessKey(
      parameters
    );
    var endDateTime = new Date().getTime();
    var data = new feedBack_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【获取警情反馈】data", data);
    return data;
  }

  /**
   * 增加反馈
   */
  public async feedBack_addFeedBack(params: feedBack_ui_model) {
    let parameters = <feedBack_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().feedBack_addFeedBack(
      parameters
    );
    var endDateTime = new Date().getTime();
    var data = new feedBack_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【警情反馈】data", data);
    return data;
  }

  /**
   * 向上级部门申请的延时 新审批流程
   */
  public async instructions_applydelay_new(params: delayParams_ui_model) {
    let parameters = <delayParams_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().instructions_applydelay_new(
      parameters
    );
    var endDateTime = new Date().getTime();
    var data = new delayParams_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【申请的延时】data", data);
    return data;
  }

  /**
   * 向上级部门申请的升降级
   */
  public async polsituinfo_addlylevel(
    params: tEventApplyUpDownParams_ui_model
  ) {
    let parameters = <tEventApplyUpDownParams_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().polsituinfo_addlylevel(
      parameters
    );
    var endDateTime = new Date().getTime();
    var data = new tEventApplyupdown_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【申请升降级】data", data);
    return data;
  }

  /**
   * 添加指令关联的警情回告表单信息
   */
  public async ppolsituInfo_eventtable(params: tEventTableModel_ui_model) {
    let parameters = <tEventTableModel_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().ppolsituInfo_eventtable(
      parameters
    );
    var endDateTime = new Date().getTime();
    var data = new tEventTableModel_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【 警情回告 】data", data);
    return data;
  }

  /** 获取回告信息 */
  public async getNoticeInfo(params: getNoticeInfo_ui_model) {
    let parameters = <getNoticeInfo_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().getNoticeInfo(parameters);
    var endDateTime = new Date().getTime();
    var data = new getNoticeInfo_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【 回告信息 】data", data);
    return data;
  }

  /**
   *分局自处理回告
   */
  public async ppolsituInfo_partStationDealEventtable(
    params: tEventTableModel_ui_model
  ) {
    let parameters = <tEventTableModel_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().ppolsituInfo_partStationDealEventtable(
      parameters
    );
    var endDateTime = new Date().getTime();
    var data = new tEventTableModel_result_model();
    // data.code = resultData.code;
    // data.data = resultData.data;
    // data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【警情分局自处理回告】data", data);
    return data;
  }

  /**
   * 查询来源列表
   */
  public async polsituinfos_source_queryAll() {
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().polsituinfos_source_queryAll();
    var endDateTime = new Date().getTime();
    resultData.expendTime = endDateTime - startDateTime;
    return resultData;
  }

  /**
   * 获取警情下拉信息
   */
  public async ppolsituInfo_caseDatas() {
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().ppolsituInfo_caseDatas();
    var endDateTime = new Date().getTime();
    resultData.expendTime = endDateTime - startDateTime;
    return resultData;
  }

  /**
   * 获取发案部位下拉信息
   */
  public async ppolsituInfo_positionDatas() {
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().ppolsituInfo_positionDatas();
    var endDateTime = new Date().getTime();
    resultData.expendTime = endDateTime - startDateTime;
    return resultData;
  }

  /**
   * 根据用户id查找当前部门下的所有警员的大模型
   */
  public async polices_byUserId(params: alarmPolice_ui_model) {
    let parameters = <alarmPolice_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().polices_byUserId(parameters);
    var endDateTime = new Date().getTime();
    var data = new alarmPolice_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【 alarmPolice 】data", data);
    return data;
  }


    /**
     * 根据部门id查找部门列表
     */
    public async jp_positionInfo_byId(params: positionInfo_ui_model) {
        let parameters = <positionInfo_par_model>params;
        var startDateTime = new Date().getTime();
        const resultData = await new alarmNetwork().jp_positionInfo_byId(parameters);
        var endDateTime = new Date().getTime();
        var data = new positionInfo_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;
        jpConsole.log("【 alarmPolice 】data", data);
        return data;
    }


    /**
     * 联动获取责任区下拉信息
     */
    public async jp_dutyAreaInfo_byStationId(params:dutyAreaInfo_ui_model) {
        let parameters = <dutyAreaInfo_par_model>params;
        var startDateTime = new Date().getTime();
        const resultData = await new alarmNetwork().jp_dutyAreaInfo_byStationId(parameters);
        var endDateTime = new Date().getTime();
        var data = new dutyAreaInfo_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;
        jpConsole.log("【 dutyAreaInfo 】data", data);
        return data;
    }



    /**
     * 联动获取处警人员下拉信息
     */
    public async jp_policeList(params:any) {
        let parameters = <any>params;
        var startDateTime = new Date().getTime();
        const resultData = await new alarmNetwork().jp_policeList(parameters);
        var endDateTime = new Date().getTime();
        var data = new policeList_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;
        jpConsole.log("【 dutyAreaInfo 】data", data);
        return data;
    }

    /**
   * 获取责任区下拉信息
   */
  public async ppolsituInfo(params: ppolsituInfo_ui_model) {
    let parameters = <ppolsituInfo_par_model>params;
    var startDateTime = new Date().getTime();
    const resultData = await new alarmNetwork().ppolsituInfo(parameters);
    var endDateTime = new Date().getTime();
    var data = new ppolsituInfo_result_model();
    data.code = resultData.code;
    data.data = resultData.data;
    data.msg = resultData.msg;
    data.expendTime = endDateTime - startDateTime;
    jpConsole.log("【 ppolsituInfo 】data", data);
    return data;
  }

    /**
     * 获取敏感词信息
     */
    public async jp_sensitiveWords_byType(params: sensitiveWords_ui_model) {
        let parameters = <sensitiveWords_par_model>params;
        var startDateTime = new Date().getTime();
        const resultData = await new alarmNetwork().jp_sensitiveWords_byType(parameters);
        var endDateTime = new Date().getTime();
        var data = new sensitiveWords_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;
        jpConsole.log("【 sensitiveWords】data", data);
        return data;
    }
}
