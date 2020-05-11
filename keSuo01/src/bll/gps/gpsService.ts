import { base_model } from '@/model/base_model';

import { common } from "@/utils/common";
import {
  reverseGeocodingInfoModel_result_model,
  reverseGeocodingInfoModel_page_reult_model,
  reverseGeocodingInfoModel_result_model_detail,
  reverseGeocodingInfoModel_ui_model,
  resultBean_result_model,
  resultBean_page_reult_model,
  resultBean_result_model_detail,
  resultBean_ui_model,
  gps_ui_model
} from "@/model/gps/gps_model"


import { gpsNetwork } from "@/network/gps/gps_network";


/***Gps Controller*/
export class gpsService {
  /**
  *根据经纬度信息查询地址
  */
  public async getReverseGeocodingInfo(model: any): Promise<base_model> {

    let network = new gpsNetwork();

    //如果没有query参数，就不用定义
    let queryParams = new Map<string, string>();
    queryParams.set('longitude', model.longitude);
    queryParams.set('latitude', model.latitude);
    queryParams.set('thresholdValue', model.thresholdValue);
    let startDateTime = new Date().getTime();
    const data: any = await network.getReverseGeocodingInfo(queryParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

  /**
  *根据地址查询经纬度信息
  */
  public async getgpsinfo(model: gps_ui_model): Promise<base_model> {
    let bodyParams = new Map<string, string>();

    let network = new gpsNetwork();
    //如果有path参数就存，没有就不处理
    let pathParams = new Array<any>();
    //如果没有query参数，就不用定义
    let queryParams = new Map<string, string>();
    queryParams.set('KeyWords', model.KeyWords);
    queryParams.set('CurrentPageNum', model.CurrentPageNum);
    queryParams.set('PageSize', model.PageSize);
    let startDateTime = new Date().getTime();
    const data: any = await network.getgpsinfo(pathParams, queryParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

  /**
  *根据地址查询经纬度信息（新）
  */
  public async getgpsinfoV2(model: gps_ui_model): Promise<base_model> {

    let network = new gpsNetwork();

    let startDateTime = new Date().getTime();
    const data: any = await network.getgpsinfoV2(model);
    let endDateTime = new Date().getTime();
    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

}
