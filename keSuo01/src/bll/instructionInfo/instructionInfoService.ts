import { base_model } from "@/model/base_model";
import { common } from "@/utils/common";
import {
  alarmPageParam_child_result_model_detail,
  instructionFilterParam_child_result_model_detail,
  insQueryParam_par_model,
  // insListDataModel_result_model,
  // insListDataModel_page_reult_model ,
  alarmBaseFilterParam_child_result_model_detail,
  caseInfoFilterParam_child_result_model_detail,
  intellBaseFilterParam_child_result_model_detail,
  pubBaseFilterParam_child_result_model_detail,
  workInsFilterParam_child_result_model_detail,
  instructionListQueryParam_par_model,
  // insListCountModel_result_model,
  // insListCountModel_page_reult_model ,
  alarmFilterParam_child_result_model_detail,
  insListQueryParamV3_par_model,
  insListCountModelV3_result_model,
  insListCountModelV3_page_reult_model,
  insListCountModelV3_result_model_detail,
  instructionListModel_result_model,
  instructionListModel_page_reult_model,
  cargateEvent_child_result_model_detail,
  circles_child_result_model_detail,
  controlRegion_child_result_model_detail,
  dealModelList_child_result_model_detail,
  eventUpdateList_child_result_model_detail,
  faceRect_child_result_model_detail,
  faceAlarmEvent_child_result_model_detail,
  historicalLocation_child_result_model_detail,
  hotelEvent_child_result_model_detail,
  importCrimalImgs_child_result_model_detail,
  importDNAs_child_result_model_detail,
  importFingerprints_child_result_model_detail,
  importPersonImages_child_result_model_detail,
  importPersonInfo_child_result_model_detail,
  importPersonTypes_child_result_model_detail,
  importSocials_child_result_model_detail,
  importVechiles_child_result_model_detail,
  importAllInfo_child_result_model_detail,
  intelligenceFile_child_result_model_detail,
  intelligenceInsRelation_child_result_model_detail,
  intelligencePerson_child_result_model_detail,
  lbsEvent_child_result_model_detail,
  lostPeople_child_result_model_detail,
  lostPeopleList_child_result_model_detail,
  netbarEvent_child_result_model_detail,
  pubsentimentFile_child_result_model_detail,
  pubsentimentPublishInfo_child_result_model_detail,
  pubsentimentStudy_child_result_model_detail,
  sensitiveWordList_child_result_model_detail,
  subObjList_child_result_model_detail,
  ticketAirEvent_child_result_model_detail,
  ticketBusEvent_child_result_model_detail,
  ticketRailWayEvent_child_result_model_detail,
  tpaAlarmType_child_result_model_detail,
  wirelessppEvent_child_result_model_detail,
  model_child_result_model_detail,
  list_child_result_model_detail,
  instructionListModel_result_model_detail,
  insQueryParam_ui_model,
  instructionListQueryParam_ui_model,
  insListQueryParamV3_ui_model,
  taskFavouriteParam_par_model,
  taskFavouriteParam_ui_model,
  taskUnFavouriteParam_par_model,
  taskUnFavouriteParam_ui_model,
  taskSensitiveParam_par_model,
  taskSensitiveParam_ui_model
  // instructionListDetailsModel_result_model,
  // instructionListDetailsModel_page_reult_model
} from "@/model/instructionInfo/instructionInfo_model";

import { instructionInfoNetwork } from "@/network/instructionInfo/instructionInfo_network";

/***Instruction Info Controller*/
export class instructionInfoService {
  /**
   *警情详情列表的高级查询
   */
  public async orderAggregation_alarm_search(
    model: insQueryParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      insQueryParam_ui_model,
      insQueryParam_par_model
    >(model);

    let network = new instructionInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.orderAggregation_alarm_search(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *新版指令列表的count查询
   */
  public async orderAggregation_listdata_count(
    model: instructionListQueryParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      instructionListQueryParam_ui_model,
      instructionListQueryParam_par_model
    >(model);

    let network = new instructionInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.orderAggregation_listdata_count(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *新版指令详情列表的分页查询
   */
  public async orderAggregation_listdata_page(
    model: instructionListQueryParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      instructionListQueryParam_ui_model,
      instructionListQueryParam_par_model
    >(model);

    let network = new instructionInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.orderAggregation_listdata_page(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *指令列表count查询V3版，仅有待办、已办
   */
  public async orderAggregation_listdata_v3_count(
    model: insListQueryParamV3_ui_model
  ): Promise<insListCountModelV3_result_model> {
    let bodyParams = common.TConvertObj<
      insListQueryParamV3_ui_model,
      insListQueryParamV3_par_model
    >(model);

    let network = new instructionInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.orderAggregation_listdata_v3_count(
      bodyParams
    );
    let endDateTime = new Date().getTime();

    let Result = <insListCountModelV3_result_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *指令列表分页查询V3版，仅有待办、已办
   */
  public async orderAggregation_listdata_v3_page(
    model: insListQueryParamV3_ui_model
  ): Promise<instructionListModel_result_model> {
    let bodyParams = common.TConvertObj<
      insListQueryParamV3_ui_model,
      insListQueryParamV3_par_model
    >(model);

    let network = new instructionInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.orderAggregation_listdata_v3_page(
      bodyParams
    );
    let endDateTime = new Date().getTime();

    let Result = <instructionListModel_result_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *管辖争议警情详情列表的分页查询，警情过滤暂不起效
   */
  public async orderAggregation_listdisputedetails_page(
    model: instructionListQueryParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      instructionListQueryParam_ui_model,
      instructionListQueryParam_par_model
    >(model);

    let network = new instructionInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.orderAggregation_listdisputedetails_page(
      bodyParams
    );
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *关注警情
   */
  public async bus_instructions_favourite(
    model: taskFavouriteParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      taskFavouriteParam_ui_model,
      taskFavouriteParam_par_model
    >(model);

    let network = new instructionInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.bus_instructions_favourite(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *取消关注警情
   */
  public async bus_instructions_unfavourite(
    model: taskUnFavouriteParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      taskUnFavouriteParam_ui_model,
      taskUnFavouriteParam_par_model
    >(model);

    let network = new instructionInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.bus_instructions_unfavourite(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *标记或取消敏感警情
   */
  public async jp_bus_instructions_sensitive(
    model: taskSensitiveParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      taskSensitiveParam_ui_model,
      taskSensitiveParam_par_model
    >(model);

    let network = new instructionInfoNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.jp_bus_instructions_sensitive(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }

  /**
   *警情列表的指令签收
   */
  public async bus_instructions_read(
    model: taskSensitiveParam_ui_model
  ): Promise<base_model> {
    let bodyParams = common.TConvertObj<
      taskSensitiveParam_ui_model,
      taskSensitiveParam_par_model
    >(model);
    let network = new instructionInfoNetwork();

    let startDateTime = new Date().getTime();

    const data: any = await network.jp_bus_instructions_read(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = <base_model>data;

    Result.expendTime = endDateTime - startDateTime;

    return Result;
  }
}
