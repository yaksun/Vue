import { base_model } from "./base_model";
import { base_loading_model } from './base_loading_model';
import { base_page_model } from './base_page_model';

/**
 * 3.【入参】测试请求入参model
 */
class test_par_model extends base_loading_model {
    /**
     * 默认构造函数
     */
    public constructor() { super(); }

    /**
     * 名称
     */
    public name!: string;

    /**
     * 指令ID
     */
    public insId!: string;
}

/**
 * 2.【输出】测试输出结果model
 */
class test_result_model extends base_model {
    /**
     * 默认构造函数 
     */
    public constructor() { super(); }

    /**
     * 明细数据列表数据
     */
    public data!: Array<test_result_model_detail>;

    //说明：如果还存在其他返回的list数据或者字段，可以在里面单独增加字段进行对应
}

/**
 * 5.【输出】测试带分页的结果Model
 */
class test_page_reult_model extends base_page_model<test_result_model_detail>{
    /**
     * 默认构造函数 
     */
    public constructor() { super(); }
}

/**
 * 【1.明细数据】
 *  可以理解为一个实体对象，对应数据库表中的一行记录
 */
class test_result_model_detail {
    /**
     * 默认构造函数 
     */
    public constructor() { }

    /**
     * 性别 
     */
    public gender!: number;

    /**
     * 创建指令用户ID
     */
    public createUser	!: string;

    /**
     * 标识符
     */
    public id	!: string;

    /**
     * 指令ID
     */
    public insId!: string;

    /**
     * 发起创建指令用户部门ID
     */
    public realStationId !: string;

    /**
     * 发起创建指令用户ID
     */
    public realUser!: string;
}


/**
 * 4.uiModel界面数据绑定
 */
class test_ui_model extends test_par_model {
    /**
     * 默认构造函数 
     */
    public constructor() { super(); }

    /**
     * 指令名称
     */
    public insName!: string;
}


export {
    /**
     * model部分 
     */
    test_par_model,
    test_result_model,
    test_result_model_detail,

    /**
     * uimodel部分
     */
    test_ui_model
}