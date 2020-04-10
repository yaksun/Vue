import { base_model } from '@/model/base_model';
import { common } from "@/utils/common";
import { instructionReceive_model} from "@/model/instructionReceive/instructionReceive_model"
import { instructionReceiveNetwork } from "@/network/instructionReceive/instructionReceive_network";


/***Instruction Receive Controller*/
export class instructionReceiveService {

  /**
  *指令消息发送
  */
  public async instructions_tasks(model:instructionReceive_model): Promise<base_model> {
    
    let network = new instructionReceiveNetwork();
    //如果有path参数就存，没有就不处理
    let pathParams = new Array<any>();
    pathParams.push(model.taskId);
    pathParams.push(model.userId);
    //如果没有query参数，就不用定义
    let queryParams = common.TConvertObj<instructionReceive_model, instructionReceive_model>(model);
    let startDateTime = new Date().getTime();
    const data: any = await network.instructions_tasks( queryParams);
    let endDateTime = new Date().getTime();

    let Result = (<base_model>data);

    Result.expendTime = endDateTime - startDateTime;

    return Result;

  }
}
