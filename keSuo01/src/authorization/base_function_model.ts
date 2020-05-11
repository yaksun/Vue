/**
 * 功能按钮-基础列表
 */
export class base_button_model {
    /**
     * 带参构造函数
     * @param buttonName 按钮名称，建议功能简写+功能类型名称，如：user_btn_add
     * @param defaultText 默认按钮显示文字
     * @param displayIndex 按钮顺序
     * @param permission 是否有权限，默认无权限
     * @param customerText 用户自定义按钮名称，默认defaultText显示文字
     * @param visible 是否可见，默认可见，扩展用
     * @param enabled 是否启用，默认启用，扩展用
     */
    public constructor(
        buttonName: string,
        defaultText: string,
        displayIndex: number,
        permission: boolean = false,
        customerText: string = defaultText,
        visible: boolean = true,
        enabled: boolean = true
    ) {
        this.buttonName = buttonName;
        this.buttonText = defaultText;
        this.buttonCustomerText = customerText;
        this.displayIndex = displayIndex;
        this.isEnabled = enabled;
        this.isVisible = visible;
        this.isPermission = permission;
    }

    /**
     * 按钮唯一名称
     */
    public buttonName!: string;

    /**
     * 按钮显示文本 
     */
    public buttonText!: string;

    /**
     * 用户自定义显示文本
     */
    public buttonCustomerText!: string;

    /**
     * 是否可见,默认可见【扩展用】
     */
    public isVisible: boolean = true;

    /**
     * 是否启用，默认启用【扩展用】 
     */
    public isEnabled: boolean = true;

    /**
     * 是否有权限，默认无权限 
     */
    public isPermission: boolean = false;

    /**
     * 源数据，用于关联绑定后台数据
     */
    public metaData!: object;

    /**
     * 按钮显示顺序
     */
    public displayIndex!: number;
}

/**
 * 功能按钮权限基类
 * 所有功能按钮都在此处进行配置
 */
export class base_function_button {
    /**
     * 【1】查询按钮
     */
    public Query?: base_button_model;

    /**
     * 【2】重置按钮 
     */
    public Reset?: base_button_model;

    /**
     * 【3】增加按钮  
     */
    public Add?: base_button_model;

    /**
     * 【4】编辑按钮 
     */
    public Edit?: base_button_model;

    /**
     * 【5】删除按钮 
     */
    public Delete?: base_button_model;
}

/**
 * 功能配置基类
 */
export class base_function_model extends base_function_button {
    /**
     * 功能名称【唯一】 
     */
    public functionName!: string;

    /**
     * 功能描述 
     */
    public functionDesc!: string;

    /**
     * 功能版本号，预留，后续产品扩展 
     */
    public functionVersion?: string = "1.0";

    /**
     * 备注信息
     */
    public remark?: string;

    /**
     * 索引 
     */
    [key: string]: any;
}
