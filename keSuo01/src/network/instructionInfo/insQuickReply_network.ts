import {
    batchParam_add_model,
    quickReply_model
} from "@/model/instructionInfo/insQuickReply_model";
import { globalAPI } from "@/api/globalAPI";
import { httpAsync } from "@/network/axiosHelper.ts";
import { jpConsole } from "@/utils/jpConsole";

export class insQuickReplyNetwork {
    /**
     *获取部门默认常用回复语模板-list
     */
    public async getDepDefaultQuickReplyList(params: quickReply_model) {
        const resultData: any = await httpAsync(
            `${globalAPI.insQuickReply.jp_insQuickReply_defaultList_api.url}/${params.userId}/${params.businessFrom}`,
            globalAPI.insQuickReply.jp_insQuickReply_defaultList_api.method,
        );
        return resultData;
    }
    /**
     *获取个人常用回复语模板-list
     */
    public async getPersonQuickReplyList(params: quickReply_model) {
        const resultData: any = await httpAsync(
            `${globalAPI.insQuickReply.jp_insQuickReply_list_api.url}/${params.userId}/${params.businessFrom}`,
            globalAPI.insQuickReply.jp_insQuickReply_list_api.method,
        );
        return resultData;
    }
    /**
     *单个删除常用模板
     */
    public async deleteInsQuickReply(id: string) {
        const resultData: any = await httpAsync(
            `${globalAPI.insQuickReply.jp_insQuickReply_delete_api.url}/${id}`,
            globalAPI.insQuickReply.jp_insQuickReply_delete_api.method,
        );
        return resultData;
    }
    /**
     *单个新增、编辑常用回复模板
     */
    public async addOrEditInsQuickReply(params: quickReply_model) {
        const resultData: any = await httpAsync(
            globalAPI.insQuickReply.jp_insQuickReply_add_api.url,
            globalAPI.insQuickReply.jp_insQuickReply_add_api.method,
            params
        );
        return resultData;
    }
    /**
     *批量新增常用回复模板
     */
    public async batchAddInsQuickReply(params: batchParam_add_model) {
        const resultData: any = await httpAsync(
            `${globalAPI.insQuickReply.jp_insQuickReply_batchAdd_api.url}/${params.userId}/${params.businessFrom}`,
            globalAPI.insQuickReply.jp_insQuickReply_add_api.method,
            params.list
        );
        return resultData;
    }

}
