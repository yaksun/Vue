import {
  businessModel_par_model,
  alarmPolice_par_model,
    positionInfo_par_model,
    dutyAreaInfo_par_model,
  ppolsituInfo_par_model,
  tEventTableModel_par_model,
  tEventApplyUpDownParams_par_model,
  delayParams_par_model,
  feedBack_par_model,
  getNoticeInfo_par_model,
    sensitiveWords_par_model,
    policeList_par_model,

} from "@/model/sysManage/alarm_result_model.ts";
import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";

export class alarmNetwork {
  /**
   * 回告后，调指令结束接口
   */
  public async finishedIns(params: alarmPolice_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_insFinished_api.url + '/' + params.userId + '/' + params.insId + '/finished',
      globalAPI.alarmAPIs.jp_insFinished_api.method,
      {}
    );
    return resultData;
  }

  /**
   * 通过警情snid导出回告表单
   */
  public async downLoadReportFrom(params: tEventTableModel_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_downLoadReportFrom_api.url + '/' + params.bussinessKey + '/' + params.insId + '/downLoadReportFrom',
      globalAPI.alarmAPIs.jp_downLoadReportFrom_api.method,
      {
        userId: params.userId
      }
    );
    return resultData;
  }

  /**
   * 获取业务模型详情
   */
  public async orderAggregation_business_detail(
    params: businessModel_par_model
  ) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_orderAggregation_business_detail_api.url,
      globalAPI.alarmAPIs.jp_orderAggregation_business_detail_api.method,
      params
    );
    return resultData;
  }

  /**
   * 通过bussinessKey取对应的反馈数据
   */
  public async feedBack_getFeedBackByBussinessKey(params: feedBack_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_feedBack_getFeedBackByBussinessKey_api.url +
        "/" +
        params.bussinesskey,
      globalAPI.alarmAPIs.jp_feedBack_getFeedBackByBussinessKey_api.method,
      {}
    );

    return resultData;
  }

  /**
   *增加反馈
   */
  public async feedBack_addFeedBack(params: feedBack_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_feedBack_addFeedBack_api.url,
      globalAPI.alarmAPIs.jp_feedBack_addFeedBack_api.method,
      params
    );
    return resultData;
  }

  /**
   * 向上级部门申请的延时
   */
  public async instructions_applydelay_new(params: delayParams_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_instructions_applydelay_new_api.url,
      globalAPI.alarmAPIs.jp_instructions_applydelay_new_api.method,
      params
    );
    return resultData;
  }

  /**
   * 向上级部门申请的升降级
   */
  public async polsituinfo_addlylevel(
    params: tEventApplyUpDownParams_par_model
  ) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_polsituinfo_addlylevel_api.url,
      globalAPI.alarmAPIs.jp_polsituinfo_addlylevel_api.method,
      params
    );
    return resultData;
  }

  /**
   * 添加指令关联的警情回告表单信息 补充回告
   */
  public async ppolsituInfo_eventtable(params: tEventTableModel_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_ppolsituInfo_eventtable_api.url,
      globalAPI.alarmAPIs.jp_ppolsituInfo_eventtable_api.method,
      params
    );
    return resultData;
  }

  /**
   * 获取回告信息
   */
  public async getNoticeInfo(params: getNoticeInfo_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_getNoticeInfo_api.url +
        "/" +
        params.bussinesskey +
        "/" +
        params.insId +
        "/eventtable",
      globalAPI.alarmAPIs.jp_getNoticeInfo_api.method,
      {
        userId: params.userId
      }
    );
    return resultData;
  }

  /**
   * 分局自处理回告
   */
  public async ppolsituInfo_partStationDealEventtable(
    params: tEventTableModel_par_model
  ) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_ppolsituInfo_partStationDealEventtable_api.url,
      globalAPI.alarmAPIs.jp_ppolsituInfo_partStationDealEventtable_api.method,
      params
    );
    resultData;
  }

  /**
   * 查询案件来源列表
   */
  public async polsituinfos_source_queryAll() {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_polsituinfos_source_queryAll_api.url,
      globalAPI.alarmAPIs.jp_polsituinfos_source_queryAll_api.method
    );
    return resultData;
  }
  /**
   * 获取警情下拉信息
   */
  public async ppolsituInfo_caseDatas() {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_ppolsituInfo_caseDatas_api.url,
      globalAPI.alarmAPIs.jp_ppolsituInfo_caseDatas_api.method
    );
    return resultData;
  }
  /**
   * 获取发案部位下拉信息
   */
  public async ppolsituInfo_positionDatas() {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_ppolsituInfo_positionDatas_api.url,
      globalAPI.alarmAPIs.jp_ppolsituInfo_positionDatas_api.method
    );
    return resultData;
  }

    /**
     * 根据单位id查找当前部门列表
     */
    public async jp_positionInfo_byId(params:positionInfo_par_model) {
        const resultData: any = await httpAsync(
            globalAPI.alarmAPIs.jp_positionInfo_byId_api.url + "/" + params.Id,
            globalAPI.alarmAPIs.jp_positionInfo_byId_api.method,
            {}
        );
        return resultData;
    }

  /**
   * 根据用户id查找当前部门下的所有警员的大模型
   */
  public async polices_byUserId(params: alarmPolice_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_polices_byUserId_api.url + "/" + params.userId,
      globalAPI.alarmAPIs.jp_polices_byUserId_api.method,
      {}
    );
    return resultData;
  }
  /**
   *获取责任区下拉信息 登录时联动
   */
  public async ppolsituInfo(params: ppolsituInfo_par_model) {
    const resultData: any = await httpAsync(
      globalAPI.alarmAPIs.jp_ppolsituInfo_api.url +
        "/" +
        params.userId +
        "/eventcomboxdatas",
      globalAPI.alarmAPIs.jp_ppolsituInfo_api.method,
      {}
    );
    return resultData;
  }

    /**
     *联动获取责任区下拉信息
     */

    public async jp_dutyAreaInfo_byStationId(params: dutyAreaInfo_par_model) {
        const resultData: any = await httpAsync(
            globalAPI.alarmAPIs.jp_dutyAreaInfo_byStationId_api.url +
            "/" +
            params.StationId +
            "/dutyAreaInfo",
            globalAPI.alarmAPIs.jp_dutyAreaInfo_byStationId_api.method,
            {}
        );
        return resultData;
    }

    /**
     *联动获取处警人员下拉信息
     */

    public async jp_policeList(params:any) {
        const resultData: any = await httpAsync(
            globalAPI.alarmAPIs.jp_policeList_api.url,
            globalAPI.alarmAPIs.jp_policeList_api.method,
            params
        );
        return resultData;
    }

    /**
     *敏感词信息
     */

    public async jp_sensitiveWords_byType(params: sensitiveWords_par_model) {
        const resultData: any = await httpAsync(
            globalAPI.alarmAPIs.jp_sensitiveWords__byType_api.url +
            "/" +
            params.type,
            globalAPI.alarmAPIs.jp_sensitiveWords__byType_api.method,
            {}
        );
        return resultData;
    }
}
