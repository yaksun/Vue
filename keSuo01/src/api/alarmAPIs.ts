import { JPConfig } from '@/config/JPConfig';

/**
 * admin接口
 */
const alarmAPIs = {
  /** 回告后，调用指令结束 */
  jp_insFinished_api: {
    url: '/api/jp-BIO-Order-ms/instructions',
    method: 'put'
  },

  /**
  * 通过警情snid导出回告表单
  */
  jp_downLoadReportFrom_api:{
    url: "/api/jp-BSPA-PolSituInfo-ms/ppolsituInfo",
    method:"get"
  },

  /**
  * 获取业务模型详情
  */
  jp_orderAggregation_business_detail_api: {
    url: "/api/jp-CMD-OrderAggregation-business-ms/orderAggregation/business/detail",
    method:"get"
  },

  /**
  * 查询来源列表 案件来源
  */
  jp_polsituinfos_source_queryAll_api: {
    url: "/api/jp-BSPA-PolSituInfo-ms/polsituinfos/source/queryAll",
    method:"get",
  },
  /**
  * 获取警情下拉信息
  * 案件类型 案件性质 性质分类
  */
  jp_ppolsituInfo_caseDatas_api: {
    url: "/api/jp-BSPA-PolSituInfo-ms/ppolsituInfo/caseDatas",
    method: "get"
  },
  /**
  * 获取发案部位下拉信息
  */
  jp_ppolsituInfo_positionDatas_api: {
    url: "/api/jp-BSPA-PolSituInfo-ms/ppolsituInfo/positionDatas",
    method:"get"
  },
    /**
     * 根据用户所处部门Id查找所有部门信息
     */
    jp_positionInfo_byId_api: {
        url:   "/api/jp-BIRM-UserProfile-ms/layer-policestations",
        method: "get",
        baseUrl:"jpHttpUrl"
    },

    /**
    * 根据部门id获取辖区责任区
    * */

    jp_dutyAreaInfo_byStationId_api: {
        url:   "/api/jp-BSPA-PolSituInfo-ms/ppolsituInfo",
        method: "get",
        baseUrl:"jpHttpUrl"
    },
    /**
     * 敏感词
     * */
    jp_sensitiveWords__byType_api: {
        url:   "/api/jp-TI-Rule-technology-ms/criticalWord/findWordByType",
        method: "get",
        baseUrl:"jpHttpUrl"
    },

    /**
  * 根据用户id查找当前部门下的所有警员的大模型
  * 回告 处警人员 值班领导
  */
  jp_polices_byUserId_api:{
    url: "/api/jp-BIRM-UserProfile-ms/polices/byUserId",
    method:"get"
  },
  /**
  * 获取责任区下拉信息 通过用户ID
  */
  jp_ppolsituInfo_api:{
    url: "/api/jp-BSPA-PolSituInfo-ms/ppolsituInfo",
    method:"get"
  },


/**
 * 联动获取处警人员
 */
jp_policeList_api:{
    url: "/api/jp-BIRM-UserProfile-ms/users/fetchByStationIdList",
        method:"post"
},

  /**
  *添加指令关联的警情回告表单信息
  */
  jp_ppolsituInfo_eventtable_api:{
    url: "/api/jp-BSPA-PolSituInfo-ms/ppolsituInfo/eventtable",
    method: "post"
  },

  /**
  *分局自处理回告
  */
  jp_ppolsituInfo_partStationDealEventtable_api:{
    url: "/api/jp-BSPA-PolSituInfo-ms/ppolsituInfo/partStationDealEventtable",
    method:"post"
  },

  /**
  *通过警情snid获取指令关联的警情回告表单信息
  */
  jp_getNoticeInfo_api:{
    url: "/api/jp-BSPA-PolSituInfo-ms/ppolsituInfo",
    method:"get"
  },

  /**
  * 向上级部门申请的升降级
  */
  jp_polsituinfo_addlylevel_api: {
    url: "/api/jp-BSPA-PolSituInfo-ms/polsituinfo/addlylevel",
    method:"post"
  },

  /**
  * 向上级部门申请的延时 新审批流程
  */
  jp_instructions_applydelay_new_api:{
    url: "/api/jp-BIO-Order-ms/instructions/applydelay/new",
    method:"post"
  },

  /**
  * 增加反馈
  */
  jp_feedBack_addFeedBack_api:{
    url: "/api/jp-BSPA-PolSituInfo-ms/feedBack/addFeedBack",
    method:"post"
  },

  /**
  * 通过bussinessKey取对应的反馈数据
  */
  jp_feedBack_getFeedBackByBussinessKey_api:{
    url: "/api/jp-BSPA-PolSituInfo-ms/feedBack/getFeedBackByBussinessKey",
    method:"get"
  },
}

export { alarmAPIs };
