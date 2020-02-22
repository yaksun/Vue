<template>
    <div>
      <el-row class="container" :gutter="20">
        <el-col class="left" :span="3">
          <Setting />
        </el-col>
        <el-col class="right" :span="21"></el-col>
      </el-row>
    </div>
</template>

<script>
  import Setting from './config/Setting'
    export default {
        name: "SetChart",
      components:{
          Setting
      }
    }
</script>

<style scoped >
  .container{
    height: 100vh;

  }

  .left{
    height: 100vh;
    background: brown;
  }
  .right{
    height: 100vh;
    background:darkgrey;
  }
</style>
