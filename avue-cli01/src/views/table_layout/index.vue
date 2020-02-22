<template>
    <div>
       <el-row  style="height: 100%">
           <el-col :span="2" style="border-right:1px solid black;height: 100%">
               行:<input type="text" v-model="container_info.row" style="width: 100%"> <br>
               列: <input type="text" v-model="container_info.col" style="width: 100%">
               <row_item :col_num="container_info.col"></row_item>
           </el-col>
           <el-col :span="20" style="height: 100%">
               <table_layout></table_layout>
           </el-col>
       </el-row>
    </div>
</template>

<script>
    import table_layout from './table_layout'
    import row_item from './row_item'
    export default {
        name: "index",
        data(){
            return{
                container_info:{
                    col:'',
                    row:''
                }
            }
        },
        components:{
            table_layout,
            row_item
        }
    }
</script>

<style lang="">

</style>