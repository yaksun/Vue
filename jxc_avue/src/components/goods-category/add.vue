<template>
    <div>
        <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true"  size="small">添加</el-button>
        <el-dialog
                title="添加分类"
                :visible.sync="dialogVisible"
                width="30%"

        >
                    <span class="describe">分类名称:</span>
                    <el-input
                            v-model="category_name"
                            placeholder="请输入商品分类名称"
                            class="selectInfo pintcharname"
                    ></el-input>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click.stop="addItem"
                        >确 定</el-button
                        >
                      </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "add",

        data(){
            return  {
                dialogVisible: false,
                category_name:"",
                node:{}
            }
        },
        methods:{
            async addItem(){
                // 把输入框的值传到父组件
                const {category_name,node} = this
                if(category_name === ""  ){
                    this.$message.error("请检查是否有填入分类标题");
                    return;
                }

               let res =  await this.$store.dispatch('AddGoodsCategory',{node,category_name})
                if(res){

                    this.dialogVisible = false;
                    this.category_name=''
                    this.$message({
                        message: "添加成功",
                        type: "success"
                    });
                }

            },
            changeNode(val){
                this.node = val
            }

        }
    }
</script>

<style scoped>

</style>