<template>
    <div>
      <el-container style="height: 100vh; border: 1px solid #eee">
        <el-aside width="200px" style="background-color:pink">
          <Aside />
        </el-aside>

        <el-container >
          <el-header style="text-align: right; font-size: 12px">

          </el-header>

          <el-main style="margin: 20px;background: #ccc">
            <router-view></router-view>
          </el-main>
          <el-footer style="height: 80px;background-color: blueviolet">

          </el-footer>
        </el-container>
      </el-container>
    </div>
</template>

<script>
  import Aside from './home/Aside'
    export default {
        name: "Main",
      components:{
          Aside
      }
    }
</script>

<style scoped>
  .el-header {
    background-color:#ccc ;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
