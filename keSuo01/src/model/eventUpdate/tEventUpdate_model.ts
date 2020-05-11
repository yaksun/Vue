
import { base_model } from "@/model/base_model";
import { base_loading_model } from '../base_loading_model';
import { base_page_model } from '../base_page_model';

/***【入参】请求入参modeltEventUpdate**/
class tEventUpdate_par_model extends base_loading_model { 
 public constructor()  {super();}

/***警情地址***/
 public address!: string;

/***警情ID***/
 public alarmId!: string;

/***指令id***/
 public insId!: string;

/***维度***/
 public latitude!: any;

/***经度***/
 public longitude!: any;

/***警情摘要***/
 public summary!: string;

/***更新时间***/
 public updateTime!: string;

/***更新类型1：摘要  0：地址***/
 public updateType!: number;

/***用户ID***/
 public userId!: string;

 }
 class tEventUpdate_ui_model extends tEventUpdate_par_model{
       /**默认构造函数 */
  public constructor() {
    super();
  }
 }

 export {
    tEventUpdate_par_model,
    tEventUpdate_ui_model
 };
