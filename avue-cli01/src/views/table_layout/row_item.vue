<template>
    <div>
        <el-row style="margin-top:30px" >
            <el-col :span="col_num" style="border:1px dashed #ccc">13244</el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "row_item",
        props:{
            col_num:String
        }
    }
</script>

<style lang="">

</style>