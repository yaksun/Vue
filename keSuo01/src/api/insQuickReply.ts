/**
 *Instruction Info Controller
 */
const insQuickReply = {
    /**
     *根据业务类型获取用户所在部门的默认快捷回复模板
     */
    jp_insQuickReply_defaultList_api: {
        url: "/api/jp-BIO-Order-ms/insQuickReply/getDefaultQuickReplay",
        method: "get",
    },
    /**
     *根据业务类型查询用户快捷回复模版数据
     */
    jp_insQuickReply_list_api: {
        url: "/api/jp-BIO-Order-ms/insQuickReply/getQuickReplay",
        method: "get",
    },
    /**
     *单个新增、编辑
     */
    jp_insQuickReply_add_api: {
        url: "/api/jp-BIO-Order-ms/insQuickReply/add",
        method: "post",
    },
    /**
     *批量新增
     */
    jp_insQuickReply_batchAdd_api: {
        url: "/api/jp-BIO-Order-ms/insQuickReply/batchChange",
        method: "post",
    },
    /**
     *删除
     */
    jp_insQuickReply_delete_api: {
        url: "/api/jp-BIO-Order-ms/insQuickReply/delete",
        method: "delete"
    },
}

export { insQuickReply };
