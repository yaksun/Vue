<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" highlight-current-row style="width: 100%;">
      <el-table-column prop="name" label="框架" />
      <el-table-column prop="folder" label="路径" />
      <el-table-column prop="description" label="说明" />
      <el-table-column label="操作" width="120" align="center">
        <template scope="scope">

          <router-link :to="'/example/edit/'+scope.row.id" class="link-type">
            <span>{{ scope.row.title }}</span>
          </router-link>
          <el-button size="small" type="primary" @click="goEditor(scope.row)">创建</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/framework'

export default {
  name: 'Framework',
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        console.log('---------->')
        console.log(response)
        this.list = response.data.object.list
        this.total = response.data.object.total
        this.listLoading = false
      })
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    goEditor(framework) {
      console.log(framework)
      this.$router.push('/project/createFromFramework/' + framework.name)
    }
  }
}
</script>
