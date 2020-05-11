import { base_model } from '@/model/base_model';
import { common } from "@/utils/common";
import {
  addresses_ui_model, addresses_par_model,
  resultBean_result_model,
  resultBean_page_reult_model,
  resultBean_result_model_detail,
  resultBean_ui_model,
  destination_child_result_model_detail,
  requestArriveInfo_ui_model,
  requestArriveInfo_par_model,
  pathPlan_result_model_detail,
  pathPlan_page_reult_model,
  pathPlan_ui_model,
  origin_child_result_model_detail,
  condition_ui_model,
  condition_par_model,
  poiSearchResult_result_model,
  poiSearchResult_page_reult_model,
  records_child_result_model_detail,
  poiSearchResult_result_model_detail,
  poiSearchResult_ui_model,
  pts_par_model,
  pts_ui_model
} from "@/model/planning/planning_model"


import { planningNetwork } from "@/network/planning/planning_network";


/***Planning Controller*/
export class planningService {
  /**
  *geoCode
  */
  public async planning_geoCode_filter(model: addresses_ui_model): Promise<base_model> {
    let bodyParams = common.TConvertObj<addresses_ui_model, addresses_par_model>(model);
    let network = new planningNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.planning_geoCode_filter(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

  /**
  *根据案发地获取到达预估信息预演算
  */
  public async planning_getPathPlanning(model: requestArriveInfo_ui_model): Promise<base_model> {
    let bodyParams = common.TConvertObj<requestArriveInfo_ui_model, requestArriveInfo_par_model>(model);

    let network = new planningNetwork();
    let startDateTime = new Date().getTime();
    const data: any = await network.planning_getPathPlanning(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

  /**
  *inputTips
  */
  public async planning_inputTips(model: condition_ui_model): Promise<base_model> {
    let bodyParams = common.TConvertObj<condition_ui_model, condition_par_model>(model);

    let network = new planningNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.planning_inputTips(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

  /**
  *getPoiSearch
  */
  public async planning_poi(model: any): Promise<base_model> {

    let network = new planningNetwork();
    //如果有path参数就存，没有就不处理
    let pathParams = new Array<any>();
    //如果没有query参数，就不用定义
    let queryParams = new Map<string, string>();
    queryParams.set('KeyWords', model.KeyWords);
    queryParams.set('CurrentPageNum', model.CurrentPageNum);
    queryParams.set('PageSize', model.PageSize);
    let startDateTime = new Date().getTime();
    const data: any = await network.planning_poi(queryParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

  /**
  *regeoCode
  */
  public async planning_regeoCode_filter(model: pts_ui_model): Promise<base_model> {
    let bodyParams = common.TConvertObj<pts_ui_model, pts_par_model>(model);

    let network = new planningNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.planning_regeoCode_filter(bodyParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

}
