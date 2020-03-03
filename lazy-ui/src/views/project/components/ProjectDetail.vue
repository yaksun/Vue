<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">

      <sticky :class-name="'sub-navbar '+postForm.status">

        <el-switch
        v-model="autoStatus"
        active-color="#ff4949"
        inactive-color="#13ce66"
        @change="changeStatus"
        active-value="100"
        inactive-value="0"
        title="默认自动填充"

        >

      </el-switch>


        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          确认
        </el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>

          <el-col :span="24">
            <div class="postInfo-container">
              <el-row>
                <el-col :span="8">
                  <el-form-item label-width="60px" label="工程名:" class="postInfo-container-item">
                    <el-input v-model="postForm.projectName" :rows="1" type="textarea" class="article-textarea" autosize placeholder="请输入工程名" @blur="inputProjectName" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="60px" label="作者:" class="postInfo-container-item">
                    <el-input v-model="postForm.author" :rows="1" type="textarea" class="article-textarea" autosize placeholder="请输入内容" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="60px" label="公司:" class="postInfo-container-item">
                    <el-input v-model="postForm.company" :rows="1" type="textarea" class="article-textarea" autosize placeholder="请输入公司名" @input="inputCompanyName" />
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label-width="60px" label="包名:" class="postInfo-container-item">

                    <el-input v-model="postForm.basePackage" :rows="1" type="textarea" class="article-textarea" autosize placeholder="请输入内容"   />

                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label-width="60px" label="框架:" class="postInfo-container-item">
                    <el-select v-model="postForm.framework" placeholder="请选择框架">
                      <el-option v-for="dictItem in frameworks" :key="dictItem.name" :label="dictItem.description" :value="dictItem.name" />
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label-width="60px" label="库类型" prop="dbType">
                    <el-select v-model="postForm.dbType" placeholder="请选择类型">
                      <el-option label="mysql" value="mysql" />
                      <el-option label="oracle" value="oracle" />
                      <el-option label="h2" value="h2" />
                      <el-option label="mongo" value="mongo" />
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label-width="60px" label="读取库" prop="dbIndex">
                    <el-select v-model="postForm.dbIndex" placeholder="请选择数据库">
                      <el-option v-for="dictItem in dbList" :key="dictItem.name" :label="dictItem.dbName" :value="dictItem.dbValue" />
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label-width="60px" label="字段" prop="fieldCapital">
                    <el-radio v-model="postForm.fieldCapital" class="radio" label="0">小写</el-radio>
                    <el-radio v-model="postForm.fieldCapital" class="radio" label="1">大写</el-radio>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label-width="60px" label="路径" prop="codePath">
                    <el-input v-model="postForm.codePath" placeholder="生成路径" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="字段风格" prop="fieldSplitType">
                    <el-radio v-model="postForm.fieldSplitType" class="radio" label="0">单词间下划线</el-radio>
                    <el-radio v-model="postForm.fieldSplitType" class="radio" label="1">单词后缀下划线</el-radio>
                    <el-radio v-model="postForm.fieldSplitType" class="radio" label="2">驼峰命名法</el-radio>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label-width="80px" label="工程描述" prop="projectDesc">
                    <el-input v-model="postForm.projectDesc" placeholder="工程描述" />
                  </el-form-item>
                </el-col>

              </el-row>
            </div>
          </el-col>
        </el-row>

      </div>
    </el-form>

  </div>
</template>

<script>
import Sticky from '@/components/Sticky' // 粘性header组件
import { fetchProject, createProject, listDb, getPathByOsType } from '@/api/project'

const defaultForm = {
  id: -1,
  projectName: '',
  projectDesc: '',
  author: '',
  createDate: '',
  basePackage: 'com.',
  framework: '',
  fieldCapital: '0',
  fieldSplitType: '0',
  dbType: 'mysql',
  dbUrl: '',
  dbUser: '',
  dbPwd: '',
  codePath: ''
}

export default {
  name: 'ProjectDetail',
  components: { Sticky },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必传项',
          type: 'error'
        })
        callback(new Error(rule.field + '为必传项'))
      } else {
        callback()
      }
    }
    return {
      postForm: Object.assign({}, defaultForm),
      loading: false,
      userListOptions: [],
      rules: {
        projectName: [
          // { pattern : /^1(3|4|5|7|8)\d{9}$/ , required: true, message: '请输入活动名称', trigger: 'blur' }
          { required: true, message: '请输入工程名称', trigger: 'blur' }
        ]
      },
      baseCodePath: '',
      basePackage: '',
      frameworks: [],
      dbList: [],
      tempRoute: {},
      autoStatus:100,
      flag:true
    }
  },
  computed: {

  },
  created() {
    this.frameworks = JSON.parse(localStorage.getItem('frameworks'))
    listDb().then(response => {
      this.dbList = response.data.object
    })
    console.log(this.$route.params)
    // alert(1)
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    } else {
      this.postForm = Object.assign({}, defaultForm)
      const frameworkname = this.$route.params && this.$route.params.framework
      if (frameworkname != undefined) {
        this.postForm.framework = frameworkname
      }
      getPathByOsType().then(response => {
        this.postForm.codePath = response.data
      })
    }
    // axios.post('/api/project/listDb').then( (res) => {
    //                 self.dbList=res.data;
    //             });

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {

    changeStatus(){
        const {autoStatus} = this
        // console.log(99999,autoStatus)
    },

    fetchData(id) {
      fetchProject(id).then(response => {
        this.postForm = response.data.object
        // debugger;
        setTagsViewTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    inputProjectName() {
                const {autoStatus}  = this
                if(autoStatus == 0){
                    this.postForm.codePath =  this.postForm.codePath + '/' + this.postForm.projectName + '/'
                    if (!!this.postForm.company && this.postForm.company != '') {
                        this.postForm.basePackage =  this.basePackage + this.postForm.company + '.' + this.postForm.projectName
                    } else {
                        this.postForm.basePackage =this.basePackage + this.postForm.projectName
                    }
                }

    },
    inputCompanyName() {
        const {autoStatus}  = this
        if(autoStatus == 0) {
            if (!!this.postForm.company && this.postForm.company != '') {
                this.postForm.basePackage = this.basePackage + this.postForm.company + '.' + this.postForm.projectName
            }
        }
    },

    setTagsViewTitle() {
      const title = '编辑工程'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.postForm.id}` })
      this.$store.dispatch('updateVisitedView', route)
    },
    submitForm() {
      console.log(this.postForm)
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          createProject(this.postForm).then(() => {
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          })
          this.loading = false
        } else {
          console.log('请校验必填项!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/mixin.scss";
.createPost-container {
  position: relative;
  .createPost-main-container {
    padding: 40px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
}
</style>
