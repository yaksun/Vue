<template>
    <tableLayout
        :data2="data"
        :column_info="optionColumn"
        @search="searchChange"
        @add="addSupplier"
        @upd="updateSupplier"
        @del="handelDel"
    ></tableLayout>
</template>

<script>
    import {mapGetters} from 'vuex'
    import tableLayout from '../common/tableLayout'
    export default {
        name: "supplier",
        created(){

            this.data = this.supplierInfo
            this.optionColumn = this.supplierColumn
            console.log('---------'+this.supplierColumn)


        },
        components:{
            tableLayout
        },
        data(){
            return {
                data:[],
                optionColumn:[]
            }
        },


        computed:{
            ...mapGetters(['supplierInfo','supplierColumn']),

        },
        methods:{

            // 添加供应商
            addSupplier(row,done){

                var arr = Object.keys(row)
                if(arr.length>0){
                    this.$store.dispatch('AddSupplier',row).then(
                        ()=>{
                            this.$message({
                                showClose: true,
                                message: "添加成功",
                                type: "success"
                            });
                            //  关闭弹框
                            done()
                        }
                    )

                }
                // console.log(this.obj)
            },


            //供应商更新操作
            updateSupplier(row,index,done){
                this.$store.dispatch('UpdateSupplier',{row,index}).then(
                    ()=>{
                        this.$message({
                            showClose: true,
                            message: "更新成功",
                            type: "success"
                        });
                        //  关闭弹框
                        done()
                    }
                )
            },
            // 执行删除
            handelDel(row,index){

                this.$confirm(`是否确认删除货商${row.supplier_name}`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {

                    this.$store.dispatch('DelSupplier',index)
                    this.$message({
                        showClose: true,
                        message: "删除成功",
                        type: "success"
                    });


                }).catch(() => { });


            },

            // 点击搜索按钮触发
            searchChange(params) {
                if(params){
                    // 过滤函数filter
                    this.data= this.data.filter(p=>p.supplier_name.indexOf(params) !== -1 )
                }else{
                    // 当搜索框为空时，把原始数据给他
                    this.data = this.supplierInfo
                }


            },
        }
    }
</script>

<style lang="scss">



</style>