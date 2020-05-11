import { httpAsync } from './axiosHelper';
import { test_par_model } from '@/model/test_model';
import { globalAPI } from '@/api/globalAPI';

/**
 * 测试讲解通讯类
 */
export class testNetwrok {
    /**
      * 构造函数
      */
    public constructor() {

    }

    /**
     * 获取关联关系接口入参
     * @param params 入参
     */
    public async getRelation(params: test_par_model) {
        const resultData: any = await httpAsync(
            globalAPI.adminAPIs.adminLogin_modules.jp_adminLogin_getAdminData_api.url,
            globalAPI.adminAPIs.adminLogin_modules.jp_adminLogin_getAdminData_api.method,
            params
        );
        return resultData;
    }
}