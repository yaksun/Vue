import {
    batchParam_add_model,
    operation_result_model,
    quickReply_model,
    batchParam_list_result_model
} from "@/model/instructionInfo/insQuickReply_model";
import { insQuickReplyNetwork } from "@/network/instructionInfo/insQuickReply_network";
import { jpConsole } from "@/utils/jpConsole";

export class insQuickReplyService {
    private insQuickNetwork: insQuickReplyNetwork = new insQuickReplyNetwork();
    /**
     *获取部门默认常用回复语模板-list
     */
    public async getDepDefaultQuickReplyList(params: quickReply_model) {
        let parameters = <quickReply_model>params;
        var startDateTime = new Date().getTime();
        const resultData = await this.insQuickNetwork.getDepDefaultQuickReplyList(parameters);
        var endDateTime = new Date().getTime();
        var data = new operation_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;
        jpConsole.log("【 getDepDefaultQuickReplyList 】data", data);
        return data;
    }
    /**
     *获取个人常用回复语模板-list
     */
    public async getPersonQuickReplyList(params: quickReply_model){
        let parameters = <quickReply_model>params;
        var startDateTime = new Date().getTime();
        const resultData = await this.insQuickNetwork.getPersonQuickReplyList(parameters);
        var endDateTime = new Date().getTime();
        var data = new batchParam_list_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;
        jpConsole.log("【 getPensonQuickReplyList 】data", data);
        return data;
    }
    /**
     *单个删除常用模板
     */
    public async deleteInsQuickReply(id: string) {
        var startDateTime = new Date().getTime();
        const resultData = await this.insQuickNetwork.deleteInsQuickReply(id);
        var endDateTime = new Date().getTime();
        var data = new operation_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;
        jpConsole.log("【 deleteInsQuickReply 】data", data);
        return data;
    }
    /**
     *单个新增、编辑常用回复模板
     */
    public async addOrEditInsQuickReply(params: quickReply_model) {
        let parameters = <quickReply_model>params;
        var startDateTime = new Date().getTime();
        const resultData = await this.insQuickNetwork.addOrEditInsQuickReply(parameters);
        var endDateTime = new Date().getTime();
        var data = new operation_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;
        jpConsole.log("【 addInsQuickReply 】data", data);
        return data;
    }
    /**
     *批量新增常用回复模板
     */
    public async batchAddInsQuickReply(params: batchParam_add_model) {
        let parameters = <batchParam_add_model>params;
        var startDateTime = new Date().getTime();
        const resultData = await this.insQuickNetwork.batchAddInsQuickReply(parameters);
        var endDateTime = new Date().getTime();
        var data = new operation_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;
        jpConsole.log("【 batchAddInsQuickReply 】data", data);
        return data;
    }
}
