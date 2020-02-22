<template>
    <div  class="all">
      <el-row :gutter="20">
        <el-col :span="3">
          <LeftSetting />
        </el-col>
        <el-col :span="21">
          <TableContainer />
        </el-col >
      </el-row>
    </div>
</template>

<script>
  import LeftSetting from '../../components/LeftSetting'
  import TableContainer from '../../components/TableContainer'
    export default {
        name: "DragLayout",
      components:{
          LeftSetting,
        TableContainer
      }
    }
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.all
  width 100%
  overflow hidden
</style>
