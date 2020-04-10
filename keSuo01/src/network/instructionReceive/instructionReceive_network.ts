import { instructionReceive_model } from "@/model/instructionReceive/instructionReceive_model";
import { httpAsync } from "@/network/axiosHelper.ts";
import { globalAPI } from "@/api/globalAPI";
import { jpConsole } from "@/utils/jpConsole";
/**
*Instruction Receive Controller
*/
export class instructionReceiveNetwork {
  /**
  *指令消息发送
  */
  public async instructions_tasks(params:instructionReceive_model):Promise<any>{
    const resultData: any = await httpAsync(
      globalAPI.instructionReceive.jp_instructions_tasks_api.url+ '/' + params.taskId + '/' + params.userId + '/send',
      globalAPI.instructionReceive.jp_instructions_tasks_api.method,
      params.sendMessageParam
    );
    return resultData;
  }
}
