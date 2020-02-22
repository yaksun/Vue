<template>
    <div>
       <el-button type="primary"  @click="dialogVisible = true">添加</el-button>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="40%"
                height="30%"
        >
            <avue-form ref="form" v-model="obj0" :option="option0">
                <template slot="menuForm">
                    <el-button type="primary" @click="handleSubmit">提 交</el-button>
                    <el-button  @click="handleEmpty">清 空</el-button>
                </template>
            </avue-form>

        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "AddTodo",
        data() {
            return {
                dialogVisible: false,
                obj0: {

                },
                option0: {
                    emptyBtn: false,
                    submitBtn: false,
                    column: [
                        {
                            label: "待办",
                            prop: "title",
                            rules: [{
                                required: true,
                                message: "请输入待办标题",
                                trigger: "blur"
                            }]
                        },

                        {
                            label: "日期",
                            prop: "date",
                            type: "date",
                            // 转换成时间戳
                            valueFormat:'timestamp',
                            pickerOptions: {
                                disabledDate(time) {
                                    // 禁止选择比当前日期小的时间
                                    return time.getTime() < Date.now();
                                },



                            }

                        }
                    ]
                }

            }
        },
        methods:{
            handleEmpty(){
                this.$refs.form.resetForm();
            },
            handleSubmit(){
                this.$refs.form.validate(vaild=>{
                   let {obj0} = this

                    obj0.computed = false
                    obj0.status = 1

                    if(vaild){
                        // this.$message.success(JSON.stringify(this.obj0));
                        let info = JSON.stringify(this.obj0)
                      this.$store.dispatch('addtodo',info)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>