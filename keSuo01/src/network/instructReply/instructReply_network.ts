import {instructReply_model} from "@/model/instructReply/instructReply_model";
import { httpAsync } from "@/network/axiosHelper.ts";
import { globalAPI } from "@/api/globalAPI";
import { jpConsole } from "@/utils/jpConsole";
/**
*Instruct Reply Controller
*/
export class instructReplyNetwork {

  /**
  *指令回复分页列表
  */
  public async instructions(params:instructReply_model):Promise<any> {
    const resultData: any = await httpAsync(
      globalAPI.instructReply.jp_instructions_api.url + '/' + params.insId + '/' + params.userId + '/messages/page',
      globalAPI.instructReply.jp_instructions_api.method,
      params
    );
    return resultData;
  }
}
