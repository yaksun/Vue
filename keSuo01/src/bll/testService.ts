import { test_ui_model, test_par_model, test_result_model, test_result_model_detail } from '@/model/test_model';
import { testNetwrok } from '@/network/testNetwrok';
import { jpConsole } from '@/utils/jpConsole';

/**
 * 测试服务类
 */
export class testService {
    /**
   *构造函数
   */
    public constructor() { }

    /**
     * 登录接口
     * @param prarms 入参
     */
    public async getRelation(params: test_ui_model) {
        let parameters = <test_par_model>params;

        var startDateTime = new Date().getTime();
        const resultData = await new testNetwrok().getRelation(parameters);
        var endDateTime = new Date().getTime();

        var data = new test_result_model();

        // let data2  = resultData as test_result_model;
        // data2.expendTime = endDateTime - startDateTime;

        data.code = resultData.code;
        data.data = resultData.data as test_result_model_detail[];
        data.msg = resultData.msg;
        data.expendTime = endDateTime - startDateTime;

        jpConsole.log("【login】data", data);

        return data;
    }
}