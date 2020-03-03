<template>
  <div class="app-container">

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="操作" width="350">
        <template slot-scope="scope">
          <!-- <router-link :to="'/project/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">Edit</el-button>
          </router-link> -->
          <el-button size="small" type="primary" @click="goEditor(scope.row)">编辑</el-button>
          <el-button size="small" type="primary" @click="deleteProject(scope.row)">删除</el-button>
          <el-button size="small" type="primary" @click="goNewObject(scope.row)">创建对象</el-button>
          <el-button size="small" type="primary" @click="generateProject(scope.row)">生成工程</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="ID" width="60">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="工程名">
        <template slot-scope="scope">
          <span>{{ scope.row.projectName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="工程描述" width="300">
        <template slot-scope="scope">
          <span>{{ scope.row.projectDesc }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="框架" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.framework }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="创建时间">
        <template slot-scope="scope">
          <span>{{ scope.row.createDate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="代码生成路径" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.codePath }}</span>
        </template>
      </el-table-column>

      <!-- <el-table-column min-width="300px" label="Title">
        <template slot-scope="scope">

          <router-link :to="'/example/edit/'+scope.row.id" class="link-type">
            <span>{{ scope.row.title }}</span>
          </router-link>
        </template>
      </el-table-column> -->

    </el-table>

    <el-dialog title="生成的文件" :visible.sync="dialogTableVisible" width="90%">
      <el-table :data="fileList" height="500" class="filelist">
        <el-table-column property="file" label="文件" />
      </el-table>
    </el-dialog>

  </div>
</template>

<script>
import { fetchList, deleteProject, apiGenerateProject } from '@/api/project'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'ProjectList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 1000
      },
      fileList: [],
      dialogTableVisible: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        // this.list = response.data.object.list
        // this.total = response.data.object.total
        this.list = response.data.object.ArrayList
        this.total = response.data.object.ArrayList.length
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
    goEditor(project) {
      // console.log(project)
      this.$router.push('/project/edit/' + project.id)
    },
    deleteProject(project) {
      deleteProject(project.id).then(response => {
        this.getList()
      }) // async await 变成同步
    },
    goNewObject(project) {
      this.$router.push('/entity/createFromProject/' + project.id)
    },
    generateProject(project) {
      console.log(project)

      apiGenerateProject(project.id).then(response => {
        this.fileList = []
        for (var i = 0; i < response.data.object.length; i++) {
          this.fileList.push({ 'file': response.data.object[i] })
        }
        this.dialogTableVisible = true
      }) // async await 变成同步
    }
  },

}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
