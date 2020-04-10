<template>
<!--用户数据-->
<el-col :xs="15" :sm="18" :md="20" :lg="20" :xl="20">
    <!--工具栏-->
    <div class="head-container">

        <div v-for='(item, index) in inputControlList' :key="index + '-ControlList'" :v-permission="item.vpermission" style="display: inline-block;margin: 0px 2px;">
            <el-select v-model="item.value" v-if="item.type=='select'" style="width: 200px" placeholder="请选择" class="filter-item" clearable>
                <el-option v-for="(elitem, elindex) in item.optionMap" :key="elitem.id + elindex" :label="elitem.label" :value="elitem.value" />
            </el-select>
            <el-input v-model="item.value" v-else clearable :placeholder="item.placeholder" style="width: 200px;" class="filter-item" />
        </div>
        <div v-for='(item, index) in buttonControlList' :key="index + '-only'" :v-permission="item.vpermission" style="display: inline-block;margin: 0px 2px;">
            <el-button class="filter-item" size="mini" :type="item.type" :icon="item.icon" @click="clickHandle(item.funcName,'')">{{item.name}}</el-button>
        </div>

    </div>
    <!--表格渲染-->
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>列表</span>
        </div>
        <el-table :data="data" size="small" style="width: 100%;">
            <el-table-column type="index" label="编号" width="55"></el-table-column>
            <el-table-column v-for="(column, index) in tableHeader" :prop="column.prop" :key="index" :label="column.label" show-overflow-tooltip>
                <template slot-scope="scope">
                    {{scope.row[column.prop]}}
</template>
            </el-table-column>
            <el-table-column v-if="checkPermission(optPermission)" label="操作" width="180" align="center" fixed="right">
<template slot-scope="scope">
<el-button v-if="tableButton.detailShow" :v-permission="tableButton.detailpermission" size="mini" type="primary" icon="el-icon-document" @click="clickHandle('detail',scope.row)" />
<el-button v-if="tableButton.editShow" :v-permission="tableButton.editpermission" size="mini" type="primary" icon="el-icon-edit" @click="clickHandle('edit', scope.row)" />
<el-popover v-if="tableButton.deleteShow" v-permission="['admin', 'user:del']" :ref="scope.row.id" placement="top" width="180">
    <p>确定删除本条数据吗？</p>
    <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="$refs[scope.row.id].doClose()">取消</el-button>
        <el-button :loading="delLoading" type="primary" size="mini" @click="subDelete(scope.row.id)">确定</el-button>
    </div>
    <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini" />
</el-popover>
</template>
            </el-table-column>
        </el-table>
        <!--分页组件-->
        <el-pagination :total="total" :current-page="page" style="margin-top: 8px;" layout="total, prev, pager, next, sizes" @size-change="sizeChange" @current-change="pageChange" />
    </el-card>
</el-col>
</template>

<script lang="ts">
import Vue from "vue";
import {
    jpConsole
} from "@/utils/jpConsole";
import {
    Component,
    Prop,
    Emit
} from "vue-property-decorator";
import {
    Getter,
    Action
} from "vuex-class";

//注册组件
@Component({})
export default class Query extends Vue {

    @Prop({
        default: (): any => []
    }) inputControlList!: any[]; //查询条件框
    @Prop({
        default: (): any => []
    }) buttonControlList!: any[]; //查询按钮等数组
    @Prop({
        default: (): any => []
    }) tableHeader!: any[]; //表格名称
    @Prop({
        default: (): any => []
    }) tableButton!: any[]; //表格中详情，修改等

    @Prop({
        default: (): any =>{return {}}
    }) Objfuc!: Object; // 

    public delLoading: boolean = false;
    private params: any = {};
    private page: Number = 0;
    private size: Number = 0;
    //private  height: document.documentElement.clientHeight - 180 + "px;",
    //private  optPermission: [], //表格操作列是否显示
    // private        deptId: null //组织ID

    created() {
        //操作列表权限
        //this.optPermission.push(...this.tableButton.editpermission);
        //this.optPermission.push(...this.tableButton.deletepermission);
        // this.optPermission = [...new Set(this.optPermission)];

        //  this.url = this.urlobj.queryPath;
        //   this.method = this.urlobj.queryPathmethod;

        this.$nextTick(() => {
            //   this.init();
        });
    }

    mounted() {

    }
    //点击按钮
    private clickHandle(val: any, data: any) {
        //进行封装处理
        switch (val) {
            case "search":
                { //搜索
                    (this.Objfuc as any).toQuery();
                    break;
                }
            case "clear":
                { //清空
                    //传输字段数据
                    for (let a of this.inputControlList) {
                        a.value = "";
                    }
                    //   this.toQuery();
                    break;
                }
            case "detail":
            case "edit":
                {
                    this.$emit("clickHandle", val, data);
                    break;
                }
            case "export":
                { //导出
                    this.$emit("clickHandle", val, this.params);
                    break;
                }
            default:
                this.$emit("clickHandle", val, this.params);
                break;

        }
    }

    private toQuery() {

    }
    //设置表格数据
    // 导出
    // download() {
    //     this.beforeInit();
    //     this.$emit("download", this.params);
    // },


    private subDelete(id: any) {
        this.delLoading = true;
        let para = {
            "id": id
        };
        // this.del(para, this.urlobj.deletePath, this.urlobj.deletePathmethod)
        //     .then(res => {
        //         this.delLoading = false;
        //         this.$refs[id].doClose();
        //         this.dleChangePage();
        //         this.init();
        //         this.$notify({
        //             title: "删除成功",
        //             type: "success",
        //             duration: 2500
        //         });
        //     })
        //     .catch(err => {
        //         this.delLoading = false;
        //         this.$refs[id].doClose();
        //         console.log(err.response.data.message);
        //     });
    }
    //设置组织ID
    //查询数据
    private beforeInit() {
        this.params = {
            pageNum: this.page,
            pageSize: this.size,
            // orgId: this.deptId,
            // type: this.type
        };
        //传输字段数据
        for (let a of this.inputControlList) {
            if (!!a.value)
                this.params[a.field] = a.value;
        }
        return true;
    }
}
</script>

<style scoped>

</style>
