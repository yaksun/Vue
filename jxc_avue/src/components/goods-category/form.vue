<template>
    <div>
        <!-- append-to-body  嵌套弹框顶级显示 -->
        <el-form-item >
            <el-input placeholder="选择商品类别" style="width:50%;float:left" v-model="goods_type"></el-input>
            <el-button type="primary" style="float:left" @click="dialogTableVisible = true">选择</el-button>

            <el-dialog

                    append-to-body
                    title="商品类别"
                    :visible.sync="dialogTableVisible"
                    width="20%"
                    height="60%"
            >
                <ListForm

                        @closeDialog="dialogTableVisible=false"

                />
            </el-dialog>
        </el-form-item>

    </div>
</template>

<script>
    import ListForm from './list'
    import PubSub from 'pubsub-js'
    export default {
        name: "form",

        mounted(){
            // 接收关闭信息
            PubSub.subscribe('change_tree',(msg,val)=>{
                this.dialogTableVisible = val
            })

            PubSub.subscribe('select_tree',(msg,node)=>{
                    this.goods_type = node.label || node.goods_type
            })
        },
        props:{
            row:Array,

        },
        data(){
            return{
                goods_type:"",
                dialogTableVisible:false,
                temp:[]
            }
        },
        components:{
            ListForm
        },
        watch:{
            goods_type:function(val,oldVal){
                    console.log('----'+val)
                console.log(oldVal)
                PubSub.publish('storeType',val)
            }
        }


    }
</script>

<style scoped>

</style>