import { httpAsync } from '../axiosHelper';
import { 
    RepeatEvent_relation_num_par_model,
    RepeatEvent_add_par_model, 
    RepeatEvent_bigData_par_model,
    RepeatEvent_list_par_model, 
    RepeatEvent_relationed_par_model, 
    RepeatEvent_delete_par_model
} from '@/model/repeatEvent/repeatEvent_model';
import { repeatEventAPI } from '@/api/repeatEventAPIs';

/**
 * 测试讲解通讯类
 */
export class RepeatEvent {
    /**
      * 构造函数
      */
    public constructor() {

    }

    /**
     * 获取关联流水号接口入参
     * @param params 入参
     */
    public async getRelationNum(params: RepeatEvent_relation_num_par_model) {
        const resultData: any = await httpAsync(
            `${repeatEventAPI.jp_repeatEvent_search_num_api.url}/${params.eventSn}`,
            repeatEventAPI.jp_repeatEvent_search_num_api.method,
            params
        );
        return resultData;
    }
    /**
     * 查询大数据推荐的重复警情
     */
    public async getBigDataRecomend(params: RepeatEvent_bigData_par_model) {
        const resultData: any = await httpAsync(
            repeatEventAPI.jp_repeatEvent_search_big_data_list_api.url,
            repeatEventAPI.jp_repeatEvent_search_big_data_list_api.method,
            params
        );
        return resultData;
    }
    /**
     * 重复警情-警情列表高级查询
     */
    public async getRepeatEventList(params: RepeatEvent_list_par_model) {
        const resultData: any = await httpAsync(
            repeatEventAPI.jp_repeatEvent_search_list_api.url ,
            repeatEventAPI.jp_repeatEvent_search_list_api.method,
            params
        );
        return resultData;
    }
    /**
     * 重复警情-关联接口
     */
    public async addRepeatEvent(params: RepeatEvent_add_par_model) {
        const resultData: any = await httpAsync(
            repeatEventAPI.jp_repeatEvent_add_relations_api.url ,
            repeatEventAPI.jp_repeatEvent_add_relations_api.method,
            params
        );
        return resultData;
    }
    /**
     * 重复警情-根据sn查询所有与他关联的警情详情，有权限
     */
    public async getRepeatEventRelationedList(params: RepeatEvent_relationed_par_model) {
        const resultData: any = await httpAsync(
            `${repeatEventAPI.jp_repeatEvent_search_repeat_detail_api.url}/${params.eventSn}/${params.userId}` ,
            repeatEventAPI.jp_repeatEvent_search_repeat_detail_api.method,
            params
        );
        return resultData;
    }
    /**
     * 解除重复警情
     */
    public async deleteRepeatEvent(params: RepeatEvent_delete_par_model) {
        const resultData: any = await httpAsync(
            `${repeatEventAPI.jp_repeatEvent_delete_relations_api.url}/${params.eventSn}/${params.userId}` ,
            repeatEventAPI.jp_repeatEvent_delete_relations_api.method,
            params
        );
        return resultData;
    }
}