import { base_function_model } from './base_function_model';
import { base_menu_model } from './base_menu_model';
import { jpConsole } from '@/utils/jpConsole';

/**
 * 功能权限帮助类
 */
export class functionPermissionHelper {
    /**
     * 初始化功能权限列表，加载权限数据后，对应Permisson与当前登录用户授权进行关联 
     */
    private static InitFuncList: Array<base_function_model>;

    /**
     * 初始化路由功能列表 ：routerName->functionName
     */
    private static InitRouterList: Array<base_menu_model>;

    /**
     * 构造函数 
     */
    public constructor() {
        jpConsole.log("123");
    }
}