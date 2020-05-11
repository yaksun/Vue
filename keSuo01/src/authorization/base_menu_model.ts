/**
 * 功能菜单基类
 */
export class base_menu_model {
    /**
     * 路由名称【唯一，与router路由配置保持一致】
     */
    public routerName!: string;

    /**
     * 功能名称【唯一，与功能.vue文件中的name一致】 
     */
    public functionName!: string;

    /**
     * 功能菜单名称，初始命名名称（开发时根据原型定义的名称） 
     */
    public functionMenuName!: string;

    /**
     * 自定义功能菜单名称
     * （1）.用户自定义名称，初始化时与初始命名名称一致
     * （2）.用户通过菜单配置时，该值可以覆盖
     * （3）.前端展示时，优先使用该名称，如果该名称为空则显示功能菜单名称
     */
    public customerMenuName?: string;

    /**
     * 该功能 父级菜单路由名称，唯一
     * 且与router路由配置一致
     * 以此 查找该父级 相关信息
     */
    public parentRouterName?: string;

    /**
     * 菜单图标
     */
    public icon?: string;

    /**
     * 菜单版本号，预留 
     */
    public menuVersion?: string = "1.0";

    /**
     * 备注信息 
     */
    public remark?: string;
}