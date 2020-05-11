import { base_model } from '@/model/base_model';
import { common } from "@/utils/common";
import {tEventUpdate_par_model,tEventUpdate_ui_model  } from "@/model/eventUpdate/tEventUpdate_model";
import {tEventUpdateNetwork  } from "@/network/eventUpdate/tEventUpdateNetwork";


/***T Event Update Controller*/
 export class tEventUpdateService {
/**
*新增事件更新、二次定位、更新发案地址
*/
public async polsituinfo_addEventUpdate(model: tEventUpdate_ui_model): Promise <base_model> {
 let bodyParams = common.TConvertObj<tEventUpdate_ui_model, tEventUpdate_par_model >(model);
 
 let network = new tEventUpdateNetwork();

  let startDateTime = new Date().getTime();
  const data: any = await network.polsituinfo_addEventUpdate(bodyParams);
  let endDateTime = new Date().getTime();

  let Result =(<base_model>data);
  Result.expendTime = endDateTime - startDateTime;

 return Result;

 }

 }
