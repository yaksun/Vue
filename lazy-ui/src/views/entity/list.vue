<template xmlns="http://www.w3.org/1999/html">
  <div class="app-container">
      <div v-html="erdMsg">
      </div>
    <div class="filter-container">
      <el-select
        v-model="projectId"
        remote
        :remote-method="getProjectList"
        filterable
        placeholder="请选择要查看工程对应的实体"
      >
        <el-option
          v-for="item in projectList"
          :key="item.id"
          :label="item.projectName"
          :value="item.id"
        />
      </el-select>
      <el-button type="primary" icon="el-icon-search" @click="getList">搜索</el-button>
      <el-button type="primary" icon="el-icon-picture" @click="generateER">ER图</el-button>
      <el-button type="primary" icon="el-icon-delete" @click="deleteByIds">删除</el-button>
            <!-- `checked` 为 true 或 false -->
        <input type='checkbox' class='input-checkbox' v-model='checked' v-on:click='checkedAll'>全选/反选

        <el-input v-model="erTitle" placeholder="er标题，默认为空"></el-input>
    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column label="操作" width="250" align="center" fixed="left">
        <template scope="scope">
            <!-- v-model 双向数据绑定命令 -->
            <!--v-model='checkboxList' :value="checkb.id-->
            <!--<input type='checkbox' name='checkboxinput' class='input-checkbox' v-model='checkboxList' :value="checkb.id">-->
            <input class="checkItem" type="checkbox" v-model="checkboxList" :value="scope.row.id" />
          <el-button size="small" type="primary" @click="goEditor(scope.row)">编辑</el-button>
          <el-button size="small" type="primary" @click="deleteEntity(scope.row)">删除</el-button>
          <el-button size="small" type="primary" @click="generateEntity(scope.row)">生成</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="实体名">
        <template slot-scope="scope">
          <span>{{ scope.row.entityName }}</span>
        </template>
      </el-table-column>
      <el-table-column width="100px" label="表单名">
        <template slot-scope="scope">
          <span>{{ scope.row.entityUiName }}</span>
        </template>
      </el-table-column>
      <el-table-column width="100px" label="备注">
        <template slot-scope="scope">
          <span>{{ scope.row.comments }}</span>
        </template>
      </el-table-column>
      <el-table-column width="100px" label="类名">
        <template slot-scope="scope">
          <span>{{ scope.row.className }}</span>
        </template>
      </el-table-column>
      <el-table-column width="100px" label="表">
        <template slot-scope="scope">
          <span>{{ scope.row.table }}</span>
        </template>
      </el-table-column>
      <el-table-column width="100px" label="生成方案">
        <template slot-scope="scope">
          <span>{{ scope.row.solutions }}</span>
        </template>
      </el-table-column>

    </el-table>

    <el-dialog title="生成的文件" :visible.sync="dialogTableVisible" width="90%">
      <el-table :data="fileList" height="500" class="filelist">
        <el-table-column property="file" label="文件" />
      </el-table>
    </el-dialog>
  </div>

</template>

<script>
import { fetchList, apiDeleteEntity,apiDeleteByIds } from '@/api/entity'
import { apiGenerateEntity, fetchList as apiFetchList, apiGenerateER } from '@/api/project'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'EntityList',
  components: { Pagination },
  data() {
    return {
      erdMsg:'erd',
        erTitle:'',
      list: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 1000
      },
      fileList: [],
      projectId: null,
      projectList: [],
        checkboxList:[],
        checked: false,
      // checkData: [], // 双向绑定checkbox数据数组
      dialogTableVisible: false
    }
  },
    watch: { //深度 watcher
        checkboxList: {
            handler: function (val, oldVal) {
                if (this.checkboxList.length === this.list.length) {
                    this.checked=true;
                } else {
                    this.checked=false;
                }
            },
            deep: true
        }
    },
  created() {
    this.getList()
    this.getProjectList()
  },

  methods: {

      deleteByIds() {
          // console.log({ids:this.checkboxList.join(',')});
          // debugger;
          apiDeleteByIds(this.checkboxList.join(',')).then(response => {
              this.$notify({
                  title: '成功',
                  message: response.data.message,
                  type: 'success'
              })
              this.getList();
          })
      },
    generateER() {
        // console.log({projectId:this.projectId,esIds:this.checkboxList.join(','),erTitle:this.erTitle})
      apiGenerateER({projectId:this.projectId,esIds:this.checkboxList.join(','),erTitle:this.erTitle}).then(response => {
        this.$notify({
          title: '成功',
          message: response.data.message,
          type: 'success'
        })
        // setTimeout(window.open(response.data.object, '_blank'), 3000)

         // alert('open '+response.data.object);
          var fileName=response.data.object.replace(/<[^>]+>/g,"");
          var pos=fileName.lastIndexOf("/");
          fileName=fileName.substring(pos+1)
          window.open("http://"+window.location.host+"/project/getERD/"+fileName,"_blank");
          this.erdMsg=response.data.object;
      })
    },
      checkedAll: function() {
          if (this.checked) {//实现反选
              this.checkboxList = [];
          } else { //实现全选
              this.checkboxList = [];
              this.list.forEach( (item) => {
                  this.checkboxList.push(item.id);
              });
          }
          console.log(this.checkboxList);
      },
    getList() {
      this.listLoading = true
      fetchList({ ...this.listQuery, projectId: this.projectId }).then(response => {
        this.list = response.data.object.ArrayList
        this.total = response.data.object.ArrayList.length
        this.listLoading = false
      })
    },
    // 远程工程列表信息
    getProjectList(query) {
      const data = { query }
      apiFetchList(data).then(response => {
        this.projectList = response.data.object.ArrayList
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
    goEditor(entity) {
      console.log(entity)
      this.$router.push({ name: 'EditEntity', params: { id: entity.id }})
    },
    generateEntity(entity) {
      // console.log(entity)

      apiGenerateEntity(entity.id).then(response => {
        this.fileList = []
        for (var i = 0; i < response.data.object.length; i++) {
          this.fileList.push({ 'file': response.data.object[i] })
        }
        this.dialogTableVisible = true
      })
    },
    deleteEntity(entity) {
      apiDeleteEntity(entity.id).then(response => {
        // if(response.data.code==1)
        // {

        // }
        this.$notify({
          title: '成功',
          message: '删除实体成功！',
          type: 'success'
        })
        setTimeout(() => { this.getList() })
      })
    }
  }
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
