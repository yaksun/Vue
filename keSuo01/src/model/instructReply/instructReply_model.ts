import { base_model } from "@/model/base_model";
import { base_loading_model } from '../base_loading_model';
import { base_page_model } from '../base_page_model';



/***【入参】请求入参jp_instructions_api **/
export class instructReply_model extends base_loading_model {
  /***insId*/
  public insId!: any;
  /***当前页*/
  public pageIndex!:any;
  /**每页条数**/
  public pageSize!:any;

  public sort!:Array<instructReply_child_model>;
  
  /***非必填*/
  public springBootDataJpaSort!:instructReply_child_two_model;
  /***非必填*/
  public workKey!:any;
  /***用户Id***/
  public userId!: string
}
class instructReply_child_model{
  public constructor() { }
  /**排序类型 正序：asc 倒序：desc**/
  public direction!:any;
  /**排序字段**/
  public field!:any;
}
class instructReply_child_two_model{
  public constructor() { }
  /***非必填*/
  public sorted!:any;
  /***非必填*/
  public unsorted!:any;
}