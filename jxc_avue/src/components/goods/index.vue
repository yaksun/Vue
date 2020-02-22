<template>
    <tableLayout
            :data2="data"
            :column_info="optionColumn"
            @search="searchChange"
            @add="addGoods"
            @upd="updateGoods"
            @del="delGoods"
    >



    </tableLayout>
</template>

<script>
    import {mapGetters} from 'vuex'
    import PubSub from 'pubsub-js'
    import tableLayout from '../common/tableLayout'
    export default {
        name: "goods",
        created(){

            this.data = this.GoodsInfo
            this.optionColumn = this.GoodsColumn
            console.log('---------'+this.GoodsColumn)


        },
        mounted(){
            // 订阅选择行的消息
            PubSub.subscribe('select_tree',(msg,node)=>{
                this.item = node
            })
        },
        components:{

            tableLayout
        },
        data(){
            return {
                data:[],
                optionColumn:[],
                item:{}
            }
        },


        computed:{
            ...mapGetters(['GoodsInfo','GoodsColumn']),

        },
        methods:{

            // 添加供应商
            addGoods(row,done){
                let {item} = this
                var arr = Object.keys(row)
                if(arr.length>0){

                    // 下拉选择的项需要单独处理 重新赋值
                    row.goods_type = item.label
                    this.$store.dispatch('AddGoods',row).then(
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
            updateGoods(row,index,done){

                this.$store.dispatch('UpdateGoods',{row,index}).then(
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
            delGoods(row,index){

                this.$confirm(`是否确认删除货商${row.supplier_name}`, "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(() => {

                    this.$store.dispatch('DelGoods',index)
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
                    this.data= this.data.filter(p=>p.goods_name.indexOf(params) !== -1 )
                }else{
                    // 当搜索框为空时，把原始数据给他
                    this.data = this.GoodsInfo
                }


            },
        }
    }
</script>

<style scoped>

</style>