import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";

import {
  taskFavouriteParam_par_model,
  taskUnFavouriteParam_par_model,
  taskSensitiveParam_par_model
} from "@/model/instructionInfo/instructionInfo_model.ts";
/**
 *Instruction Info Controller
 */
export class instructionInfoNetwork {
  /**
   *警情详情列表的高级查询
   */
  public async orderAggregation_alarm_search(params: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.instructionInfoAPIs.jp_orderAggregation_alarm_search_api.url,
      globalAPI.instructionInfoAPIs.jp_orderAggregation_alarm_search_api.method,
      params
    );
    jpConsole.log(
      "jp_orderAggregation_alarm_search_api -【警情详情列表的高级查询】 resultData",
      resultData
    );

    return resultData;
  }
  /**
   *新版指令列表的count查询
   */
  public async orderAggregation_listdata_count(params: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.instructionInfoAPIs.jp_orderAggregation_listdata_count_api.url,
      globalAPI.instructionInfoAPIs.jp_orderAggregation_listdata_count_api
        .method,
      params
    );
    jpConsole.log(
      "jp_orderAggregation_listdata_count_api -【新版指令列表的count查询】 resultData",
      resultData
    );

    return resultData;
  }
  /**
   *新版指令详情列表的分页查询
   */
  public async orderAggregation_listdata_page(params: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.instructionInfoAPIs.jp_orderAggregation_listdata_page_api.url,
      globalAPI.instructionInfoAPIs.jp_orderAggregation_listdata_page_api
        .method,
      params
    );
    jpConsole.log(
      "jp_orderAggregation_listdata_page_api -【新版指令详情列表的分页查询】 resultData",
      resultData
    );

    return resultData;
  }
  /**
   *指令列表count查询V3版，仅有待办、已办
   */
  public async orderAggregation_listdata_v3_count(params: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.instructionInfoAPIs.jp_orderAggregation_listdata_v3_count_api
        .url,
      globalAPI.instructionInfoAPIs.jp_orderAggregation_listdata_v3_count_api
        .method,
      params
    );
    jpConsole.log(
      "jp_orderAggregation_listdata_page_api -【新版指令详情列表的分页查询】 resultData",
      resultData
    );

    return resultData;
  }
  /**
   *指令列表分页查询V3版，仅有待办、已办
   */
  public async orderAggregation_listdata_v3_page(params: any): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.instructionInfoAPIs.jp_orderAggregation_listdata_v3_page_api
        .url,
      globalAPI.instructionInfoAPIs.jp_orderAggregation_listdata_v3_page_api
        .method,
      params
    );
    jpConsole.log(
      "jp_orderAggregation_listdata_v3_page_api -【指令列表分页查询V3版，仅有待办、已办】 resultData",
      resultData
    );

    return resultData;
  }
  /**
   *管辖争议警情详情列表的分页查询，警情过滤暂不起效
   */
  public async orderAggregation_listdisputedetails_page(
    params: any
  ): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.instructionInfoAPIs
        .jp_orderAggregation_listdisputedetails_page_api.url,
      globalAPI.instructionInfoAPIs
        .jp_orderAggregation_listdisputedetails_page_api.method,
      params
    );
    jpConsole.log(
      "jp_orderAggregation_listdisputedetails_page_api -【管辖争议警情详情列表的分页查询，警情过滤暂不起效】 resultData",
      resultData
    );

    return resultData;
  }

  /**
   *警情关注
   */
  public async bus_instructions_favourite(
    params: taskFavouriteParam_par_model
  ): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.instructionInfoAPIs.jp_bus_instructions_favourite_api.url,
      globalAPI.instructionInfoAPIs.jp_bus_instructions_favourite_api.method,
      params
    );
    jpConsole.log(
      "bus_instructions_favourite -【指令关注状态改变】 resultData",
      resultData
    );

    return resultData;
  }

  /**
   *取消警情关注
   */
  public async bus_instructions_unfavourite(
    params: taskUnFavouriteParam_par_model
  ): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.instructionInfoAPIs.jp_bus_instructions_unfavourite_api.url,
      globalAPI.instructionInfoAPIs.jp_bus_instructions_unfavourite_api.method,
      params
    );
    jpConsole.log(
      "bus_instructions_unfavourite -【指令关注状态改变】 resultData",
      resultData
    );

    return resultData;
  }

  /**
   *警情关注
   */
  public async jp_bus_instructions_sensitive(
    params: taskSensitiveParam_par_model
  ): Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.instructionInfoAPIs.jp_bus_instructions_sensitive_api.url,
      globalAPI.instructionInfoAPIs.jp_bus_instructions_sensitive_api.method,
      params
    );
    jpConsole.log(
      "jp_bus_instructions_sensitive -【指令关注状态改变】 resultData",
      resultData
    );

    return resultData;
  }

  /**
   *指令签收
   */
  public async jp_bus_instructions_read(
    params: taskSensitiveParam_par_model
  ): Promise<any> {
    let url =
      globalAPI.instructionInfoAPIs.jp_bus_instructions_read_api.url +
      "/" +
      params.taskId +
      "/" +
      params.userId +
      "/" +
      "read";
    const resultData: any = await httpAsync(
      url,
      globalAPI.instructionInfoAPIs.jp_bus_instructions_read_api.method
    );
    jpConsole.log(
      "jp_bus_instructions_read -【指令签收】 resultData",
      resultData
    );

    return resultData;
  }
}
