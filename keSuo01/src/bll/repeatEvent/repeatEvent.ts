import { 
    /**
     * 警情流水号
     */
    RepeatEvent_relation_num_ui_model, 
    RepeatEvent_relation_num_par_model, 
    RepeatEvent_relation_num_result_model,
    /**
     * 查询大数据推荐的重复警情
     */
    RepeatEvent_bigData_par_model,
    RepeatEvent_bigData_ui_model,
    RepeatEvent_bigData_result_model,
    /**
     * 重复警情-警情列表高级查询
     */
    RepeatEvent_list_par_model,
    RepeatEvent_list_ui_model,
    RepeatEvent_list_result_model,
    /**
     * 重复警情-关联接口
     */
    RepeatEvent_add_par_model,
    RepeatEvent_add_ui_model,
    RepeatEvent_add_result_model,
    /**
     * 重复警情-根据sn查询所有与他关联的警情详情，有权限
     */
    RepeatEvent_relationed_par_model,
    RepeatEvent_relationed_ui_model,
    RepeatEvent_relationed_result_model,
    RepeatEvent_delete_ui_model,
    RepeatEvent_delete_par_model,
 } from '@/model/repeatEvent/repeatEvent_model';
import { RepeatEvent } from '@/network/repeatEvent/repeatEvent';
import { jpConsole } from '@/utils/jpConsole';

/**
 * 重复警情关联
 */
export class RepeatEventService {
    /**
   *构造函数
   */
    public constructor() { }

    /**
     * 获取关联警情的流水号接口
     * @param prarms 入参
     */
    public async getRelationNum(params: RepeatEvent_relation_num_ui_model) {
        let parameters = <RepeatEvent_relation_num_par_model>params;

        var startDateTime = new Date().getTime();
        const resultData = await new RepeatEvent().getRelationNum(parameters);
        var endDateTime = new Date().getTime();
        var data = new RepeatEvent_relation_num_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;

        jpConsole.log("【login】data", data);

        return data;
    }
    /**
     * 查询大数据推荐的重复警情
     */
    public async getBigDataRecomend(params: RepeatEvent_bigData_ui_model) {
        let parameters = <RepeatEvent_bigData_par_model>params;

        var startDateTime = new Date().getTime();
        const resultData = await new RepeatEvent().getBigDataRecomend(parameters);
        var endDateTime = new Date().getTime();
        var data = new RepeatEvent_bigData_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;

        jpConsole.log("【login】data", data);

        return data;
    }
    /**
     * 重复警情-警情列表高级查询
     */
    public async getRepeatEventList(params: RepeatEvent_list_ui_model){
        let parameters = <RepeatEvent_list_par_model>params;

        var startDateTime = new Date().getTime();
        const resultData = await new RepeatEvent().getRepeatEventList(parameters);
        var endDateTime = new Date().getTime();
        var data = new RepeatEvent_list_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;

        jpConsole.log("【login】data", data);

        return data;
    }
    /**
     * 重复警情-警关联接口
     */
    public async addRepeatEvent(params:RepeatEvent_add_ui_model){
        let parameters = <RepeatEvent_add_par_model>params;

        var startDateTime = new Date().getTime();
        const resultData = await new RepeatEvent().addRepeatEvent(parameters);
        var endDateTime = new Date().getTime();
        var data = new RepeatEvent_add_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;

        jpConsole.log("【login】data", data);

        return data;
    }
    /**
     * 重复警情-根据sn查询所有与他关联的警情详情，有权限
     */
    public async getRepeatEventRelationedList(params:RepeatEvent_relationed_ui_model){
        let parameters = <RepeatEvent_relationed_par_model>params;

        var startDateTime = new Date().getTime();
        const resultData = await new RepeatEvent().getRepeatEventRelationedList(parameters);
        var endDateTime = new Date().getTime();
        var data = new RepeatEvent_relationed_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;

        jpConsole.log("【login】data", data);

        return data;
    }
    
    /**
     * 解除重复警情
     */
    public async deleteRepeatEvent(params:RepeatEvent_delete_ui_model){
        let parameters = <RepeatEvent_delete_par_model>params;

        var startDateTime = new Date().getTime();
        const resultData = await new RepeatEvent().deleteRepeatEvent(parameters);
        var endDateTime = new Date().getTime();
        var data = new RepeatEvent_relationed_result_model();
        data.code = resultData.code;
        data.data = resultData.data;
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;

        jpConsole.log("【login】data", data);

        return data;
    }
}