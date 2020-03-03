<template>
    <div>
        <div style="display:flex;">
        <el-button type="primary" @click="handleGet" >下载模版</el-button>
        <div style="width:20px;"></div>
        <el-upload :show-file-list="false" action="action" :on-change="handleChange">
        <el-button type="primary">导入 excel</el-button>
        </el-upload>
        </div>
        <br />
        <avue-crud :option="option" :data="list"></avue-crud>
    </div>
</template>
<script>
export default {
      data(){
            return {
            list:[],
            option:{
                column:[{
                label:'id',
                prop:'id'
                },{
                label:'姓名',
                prop:'name'
                },{
                label:'年龄',
                prop:'sex'
                }]
            }
            }
        },
 
    methods: {
        handleGet(){
        window.open('/cdn/demo.xlsx')
        },
        handleChange(file, fileLis) {
        this.$export.xlsx(file.raw)
            .then(data => {
            this.list=data.results;
            })
        }
    }
}
</script>
<style lang="">
    
</style>