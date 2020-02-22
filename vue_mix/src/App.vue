<template>
  <div id="app">
    <el-row>
      <el-col :span="3">
        <div class="header">
          <ul>
            <li>
              <router-link to="vxe-table">vxe-table</router-link>
            </li>
            <li>
              <router-link to="vxe-table2">反转表格</router-link>

            </li>
            <li>
              <router-link to="vxe-crud">表格基础</router-link>

            </li>
            <li>
              <router-link to="vxe-concat">树形合并</router-link>

            </li>
            <li>
              <router-link to="vxe-concat2">普通合并</router-link>

            </li>
            <li>
              <router-link to="table_form">表格表单</router-link>

            </li>
            <li>
              <router-link to="table_column">添加列</router-link>
            </li>
            <li>
              <router-link to="data_update">获取变动数据</router-link>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="21">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style lang="css">
.el-col{
  height: 100vh;
}
</style>
