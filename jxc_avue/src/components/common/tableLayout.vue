<template>
    <avue-crud
            ref="crud"
            :data="data2"
            :option="option"
            v-model="obj"
            @row-dblclick="handleRowDBLClick"
            @selection-change="selectionChange"
            @row-save="addItem"
            @row-update="updateItem"


    >

        <template slot="menuLeft">
            <el-button type="primary" @click.stop="handleEdit()" icon="el-icon-edit" size="small">修改</el-button>
        </template>
        <template slot="menuLeft">
            <el-button type="primary" icon="el-icon-delete" @click.stop="handelDelete()"  size="small">删除</el-button>
        </template>

        <template slot="menuLeft">
            <el-input  icon="el-icon-delete"  v-model="searchForm.solt" size="small"></el-input>
            <el-button type="primary" size="small" id="searchBtn" icon="el-icon-search" @click.stop="searchChange">搜索</el-button>
        </template>

        <template slot-scope="scope" slot="goods_typeForm">
            <CategoryForm :row="rowData" />
        </template>

    </avue-crud>
</template>

<script>
    import CategoryForm from '../goods-category/form'
    import PubSub from 'pubsub-js'
    export default {
        name: "tableLayout",
        props:{
            data2:Array,
            column_info:Array
        },
        components:{
            CategoryForm,
        },
        created(){
            const {data2,column_info} = this
            this.data = data2
            this.option.column = column_info

        },
        mounted(){
            PubSub.subscribe('storeType',(msg,info)=>{
                this.temp = info
                console.log(this.temp)
            })
        },

        data() {
            return {
                searchForm:{},
                obj:{},
                temp:'',
                data: [

                ],
                rowData:[],
                option:{
                    title:'',
                    // 显示复选框
                    selection: true,

                    // 取消行操作
                    menu:false,
                    //隐藏表格上面的提示
                    tip:false,
                    searchBtn:false,
                    page:false,
                    align:'center',
                    menuAlign:'center',
                    column:[

                    ]
                },

            }
        },


        methods:{
            handleRowDBLClick (row, event) {
                // console.log(row)
                // 商品分类插槽要单独处理
                PubSub.publish('select_tree',row)
                this.$refs.crud.rowEdit(row,row.$index);
            },
            selectionChange(list){
                // 将选取的数据保存到rowData中

                this.rowData=list
                // this.$message.success('选中的数据'+ JSON.stringify(list));
            },



            addItem(row,done){
              this.$emit('add',row,done)
            },
            //供应商更新操作
            updateItem(row,index,done){
             const {temp} = this
                row.goods_type = temp
               this.$emit('upd',row,index,done)
            },

            // 编辑按钮触发
            handleEdit(){
                // console.log(this.rowData)
                let i = this.rowData.length
                if(i==0){
                    this.$message({
                        showClose: true,
                        message: "请选择一行再操作",
                        type: "warning"
                    });
                    return
                }else if(i>1){
                    this.$message({
                        showClose: true,
                        message: "一次不能选择多行",
                        type: "warning"
                    });
                    return
                }else{

                    // 商品分类插槽要单独处理
                    PubSub.publish('select_tree',this.rowData[0])

                    // 需要两个参数 当前行和下标
                    // 弹出编辑窗口
                    this.$refs.crud.rowEdit(this.rowData[0],this.rowData[0].$index);

                }


            },
            // 删除按钮触发
            handelDelete(){
                let i = this.rowData.length
                if(i==0){
                    this.$message({
                        showClose: true,
                        message: "请选择一行再操作",
                        type: "warning"
                    });
                    return
                }else if(i>1){
                    this.$message({
                        showClose: true,
                        message: "一次不能选择多行",
                        type: "warning"
                    });
                    return
                }else{

                    // 需要两个参数 当前行和下标
                    this.handelDel( this.rowData[0],this.rowData[0].$index)


                }

            },
            // 执行删除
            handelDel(row,index){

              this.$emit('del',row,index)


            },

            searchChange(){
                const {searchForm} = this

                    this.$emit('search',searchForm.solt)
                    // 清空搜索输入框
                    this.searchForm = {}

            }


        }
    }
</script>

<style lang="scss">
    .avue-crud__left{
        width:25%;
        #searchBtn{
            position: absolute;
        }
    }


</style>