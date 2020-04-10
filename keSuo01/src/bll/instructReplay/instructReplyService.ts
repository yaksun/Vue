import { base_model } from '@/model/base_model';
import { common } from "@/utils/common";
import { instructReply_model } from "@/model/instructReply/instructReply_model";
import { instructReplyNetwork } from "@/network/instructReply/instructReply_network";
import { jpConsole } from '@/utils/jpConsole';
/***Instruct Reply Controller*/
export class instructReplyService {

  /**
  *指令回复分页列表
  */
  public async instructions(model: instructReply_model): Promise<base_model> {
    //let bodyParams = new Map<string, string>();

    let network = new instructReplyNetwork();
    //如果有path参数就存，没有就不处理
    //let pathParams = new Array<any>();
    //pathParams.push(model.insId);
    //pathParams.push(model.userId);
    //如果没有query参数，就不用定义
    let queryParams = common.TConvertObj<instructReply_model,instructReply_model>(model);
    let startDateTime = new Date().getTime();
    const data: any = await network.instructions( queryParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }

}
