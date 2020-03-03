<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">
      <sticky :class-name="'sub-navbar '+postForm.status">

        <el-switch
                v-model="autoStatus"
                active-color="#ff4949"
                inactive-color="#13ce66"
                active-value="100"
                inactive-value="0"
                title="默认自动填充"

        >
        </el-switch>

        <el-button type="success" @click="createNew">new</el-button>
        <el-button type="success" @click="generateCode">generate Code</el-button>
        <el-button type="success" @click="goBackEntities">goback List</el-button>
        <el-button type="success" @click="generateFromSql">from Sql</el-button>
        <el-button type="success" @click="addRelation">add R</el-button>
        <!-- <el-button type="success" @click="goGenerateEntity" >save & gen code</el-button> -->
        <el-button type="success" @click="goGenerateEntitiesFromDB">from Table</el-button>
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          save
        </el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <div class="postInfo-container">
              <input id="postForm.projectId" v-model="postForm.projectId" hidden name="projectId">
              <el-row>
                <el-col :span="8">
                  <el-form-item label-width="80px" label="对象名:" class="postInfo-container-item">
                    <el-input v-model="postForm.entityName" placeholder="小写打头" @input="inputEnity" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="80px" label="表单名:" class="postInfo-container-item">
                    <el-input v-model="postForm.entityUiName" placeholder="表单显示名"  />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="80px" label="表名:" class="postInfo-container-item">
                    <el-input v-model="postForm.table" placeholder="表名" @input="inputTable" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="80px" label="模块:" class="postInfo-container-item">
                    <el-input v-model="postForm.module" placeholder="模块" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="80px" label="类名:" class="postInfo-container-item">
                    <el-input v-model="postForm.className" placeholder="类名"  />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="80px" label="备注:" class="postInfo-container-item">
                    <el-input v-model="postForm.comments" placeholder="备注" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="80px" label="包名:" class="postInfo-container-item">
                    <el-input v-model="postForm.packageName" placeholder="包名" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="80px" label="作者:" class="postInfo-container-item">
                    <el-input v-model="postForm.author" placeholder="作者" />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label-width="80px" label="生成方案:" class="postInfo-container-item">
                    <el-select v-model="postForm.solutionArr" multiple placeholder="生成方案">
                      <el-option v-for="dictItem in solutionList" :key="dictItem.id" :label="dictItem.name" :value="dictItem.id" />
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label-width="80px" label="所属工程:" class="postInfo-container-item">
                    <el-select v-model="postForm.projectId" placeholder="所属工程" @change="changeProject(postForm.projectId)">
                      <el-option v-for="dictItem in projectList" :key="dictItem.id" :label="dictItem.projectName" :value="dictItem.id" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <template v-if="!!postForm">
                    <div>
                      <ul id="relation-list">
                        <li v-for="item in postForm.rs" ref="rs" :key="item.id">
                          <a href="javascript:;" :r-id="item.id" @click="editR(item)"> {{ item.relationName+"("+item.relationType+")" }}</a>
                        </li>
                      </ul>
                    </div>
                  </template>

                </el-col>
                <el-col :span="24">
                  <el-form-item label="读取文件" prop="file">
                    <el-upload
                      action="/api/project/readFields"
                      :on-success="uploadOk"
                      :before-upload="beforeUpload"
                      :show-file-list="false"
                      :multiple="false"
                      :file-list="file"
                    >
                      <el-button size="small" type="primary">从excel,txt等读取字段信息</el-button>

                    </el-upload>
                  </el-form-item>
                  <a class="el-upload-list__item-name" href="/数据字典格式.xlsx"><i class="el-icon-document" />数据字典格式模板.xlsx
                  </a>
                  <el-button type="primary" @click="deleteAllFields">删除所有字段</el-button>
                  <span>共{{ postForm.fields.length }}个</span>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="字段">
                    <el-table :data="postForm.fields" border style="width: 100%">
                      <el-table-column label="字段名" prop="fieldName" width="120">
                        <template slot-scope="scope" class="cell-edit-input">
                          <el-form-item :prop="'fieldName_' + scope.$index">
                            <el-input :id="'fieldName_' + scope.$index" v-model="scope.row.fieldName" placeholder="字段名" @blur="leaveEdit(scope.$index)" @focus="inEdit(scope.$index)" @change="inputFieldName(scope.$index)" />
                          </el-form-item>
                        </template>
                      </el-table-column>

                      <el-table-column label="标签名" prop="fieldUiLabel" width="120">
                        <template slot-scope="scope">
                          <el-form-item :prop="'fieldUiLabel_' + scope.$index">
                            <el-input v-model="scope.row.fieldUiLabel" placeholder="标签名" />
                          </el-form-item>
                        </template>
                      </el-table-column>

                      <el-table-column label="编程类型" prop="uiType" width="120">
                        <template slot-scope="scope">
                          <el-form-item :prop="'uiType_' + scope.$index">
                            <el-select v-model="scope.row.uiType" placeholder="编程类型" @change="setMappingType(scope.$index)">
                              <el-option v-for="dictItem in mappingTypeDict" :key="dictItem.uiType" :label="dictItem.uiType" :value="dictItem.uiType" />
                            </el-select>
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="数据库类型" prop="jdbcType" width="120">
                        <!--jdbcType：NARCHAR，DATETIME，TIMESTAMP 先不考虑fmt,后续肯定是要改进的-->
                        <template slot-scope="scope">
                          <el-form-item :prop="'jdbcType_' + scope.$index">
                            <el-select v-model="scope.row.jdbcType" filterable allow-create placeholder="数据库类型">
                              <el-option v-for="dictItem in jdbcTypeDict" :key="dictItem.value" :label="dictItem.label" :value="dictItem.value" />
                            </el-select>
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="数据库格式" prop="typeFmt" width="100">
                        <!--jdbcType：NARCHAR，DATETIME，TIMESTAMP 先不考虑fmt,后续肯定是要改进的-->
                        <template slot-scope="scope">
                          <el-form-item :prop="'typeFmt_' + scope.$index">
                            <el-select v-model="scope.row.typeFmt" filterable allow-create placeholder="数据库类型">
                              <el-option v-for="dictItem in typeFmtDict" :key="dictItem.value" :label="dictItem.label" :value="dictItem.value" />
                            </el-select>
                          </el-form-item>
                        </template>
                      </el-table-column>

                      <el-table-column label="主键" prop="isPk" width="40">
                        <template slot-scope="scope">
                          <el-form-item :prop="'isPk_' + scope.$index">
                            <el-checkbox v-model="scope.row.isPk" true-label="1" false-label="0" />
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="SQL字段名" prop="columnName" width="120">
                        <template slot-scope="scope">
                          <el-form-item :prop="'columnName_' + scope.$index">
                            <el-input v-model="scope.row.columnName" placeholder="SQL字段名" />
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="排序" prop="sort" width="60">
                        <template slot-scope="scope">
                          <el-form-item :prop="'sort_' + scope.$index">
                            <el-input v-model="scope.row.sort" placeholder="排序" />
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="为空" prop="isNull" width="40">
                        <template slot-scope="scope">
                          <el-form-item :prop="'isNull_' + scope.$index">
                            <el-checkbox v-model="scope.row.isNull" true-label="1" false-label="0" />
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="表单类型" prop="formType" width="120">
                        <!--formType 字段生成方案（文本框、文本域、下拉框、复选框、单选框、字典选择、人员选择、部门选择、区域选择）-->
                        <template slot-scope="scope">
                          <el-form-item :prop="'formType_' + scope.$index">
                            <el-select v-model="scope.row.formType" filterable allow-create placeholder="表单类型">
                              <el-option v-for="dictItem in formTypeDict" :key="dictItem.value" :label="dictItem.label" :value="dictItem.value" />
                            </el-select>
                          </el-form-item>

                        </template>
                      </el-table-column><el-table-column label="自增长" prop="isIncrement" width="50">
                        <template slot-scope="scope">
                          <el-form-item :prop="'isIncrement_' + scope.$index">
                            <el-checkbox v-model="scope.row.isIncrement" true-label="1" false-label="0" />
                          </el-form-item>
                        </template>
                      </el-table-column><el-table-column label="可插入" prop="isInsert" width="50">
                        <template slot-scope="scope">
                          <el-form-item :prop="'isInsert_' + scope.$index">
                            <el-checkbox v-model="scope.row.isInsert" true-label="1" false-label="0" />
                          </el-form-item>
                        </template>
                      </el-table-column><el-table-column label="可编辑" prop="isEdit" width="50">
                        <template slot-scope="scope">
                          <el-form-item :prop="'isEdit_' + scope.$index">
                            <el-checkbox v-model="scope.row.isEdit" true-label="1" false-label="0" />
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="需查询" prop="isQuery" width="50">
                        <template slot-scope="scope">
                          <el-form-item :prop="'isQuery_' + scope.$index">
                            <el-checkbox v-model="scope.row.isQuery" true-label="1" false-label="0" />
                          </el-form-item>
                        </template>
                      </el-table-column><el-table-column label="列表展示" prop="isList" width="60">
                        <template slot-scope="scope">
                          <el-form-item :prop="'isList_' + scope.$index">
                            <el-checkbox v-model="scope.row.isQuery" true-label="1" false-label="0" />
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="最小值" prop="minValue" width="70">
                        <template slot-scope="scope">
                          <el-form-item :prop="'minValue_' + scope.$index">
                            <el-input v-model="scope.row.minValue" placeholder="最小值" />
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="最大值" prop="minValue" width="70">
                        <template slot-scope="scope">
                          <el-form-item :prop="'minValue_' + scope.$index">
                            <el-input v-model="scope.row.minValue" placeholder="最大值" />
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="字典名" prop="dictType" width="120">
                        <template slot-scope="scope">
                          <el-form-item :prop="'dictType_' + scope.$index">
                            <el-input v-model="scope.row.dictType" placeholder="字典名" />
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="查询类型" prop="queryType" width="100">
                        <!--queryType;	// 查询方式（等于、不等于、大于、小于、范围、左LIKE、右LIKE、左右LIKE）-->
                        <template slot-scope="scope">
                          <el-select v-model="scope.row.queryType" filterable allow-create placeholder="查询类型">
                            <el-option v-for="dictItem in queryTypeDict" :key="dictItem.value" :label="dictItem.label" :value="dictItem.value" />
                          </el-select>
                        </template>
                      </el-table-column>

                      <el-table-column label="字段说明" prop="comments" width="120">
                        <template slot-scope="scope">
                          <el-form-item :prop="'comments_' + scope.$index">
                            <el-input v-model="scope.row.comments" placeholder="字段说明" />
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="外键" prop="isFk" width="40">
                        <template slot-scope="scope">
                          <el-form-item :prop="'isFk_' + scope.$index">
                            <el-checkbox v-model="scope.row.isFk" true-label="1" false-label="0" />
                          </el-form-item>
                        </template>
                      </el-table-column>
                      <el-table-column label="操作" class="mycell" width="80" fixed="left">
                        <template slot-scope="scope">

                          <el-button v-if="scope.$index != 0 || postForm.fields.length != 1" class="mycell" size="small" :plain="true" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
                          <el-button v-if="postForm.fields.length == 1 || postForm.fields.length == (scope.$index+1)" size="small" type="success" @click="handleAdd">添加</el-button>

                        </template>
                      </el-table-column>
                    </el-table>
                  </el-form-item>
                </el-col>

                <el-col :span="24">
                  <el-form-item label="sqlStr    excluded tables" prop="sqlStr" style="width: 100%;">
                    <el-input v-model="sqlStr" type="textarea" placeholder="1.sql语句 2.格式:t:xx,xxx,xxxx noprefix:yl_,pjt_,pdt_ exc:yyy,zzz" style="width: 1024px;" />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

      </div>
    </el-form>
    <el-dialog title="关联编辑" :visible.sync="relationshipsDialogTableVisible" size="large" width="90%" center>
      <el-row>
        <el-col>
          <el-form ref="relationships" :inline="true" :model="tempRelation" label-width="80px">

            <el-col :span="12" style="border-color: #1f2f3d;border-style: solid;border-width: 1px;padding: 5px;">
              <el-col :span="24">
                <el-form-item label="左边实体1" prop="entityId1">
                  <el-select
                    id="entityId1Sel"
                    v-model="tempRelation.entityId1"
                    remote
                    :remote-method="getEntity1"
                    filterable
                    placeholder="请选择关联类型"
                    @change="chooseEntity1()"
                  >
                    <el-option
                      v-for="item in entityList1"
                      :key="item.id"
                      :label="item.entityName"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="实体1类型" prop="entity1SideType">
                  <el-radio v-model="tempRelation.entity1SideType" class="radio" label="1">1</el-radio>
                  <el-radio v-model="tempRelation.entity1SideType" class="radio" label="n">n</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="关联字段1" prop="entityFieldId1">
                  <el-select
                    v-model="tempRelation.entityFieldId1"
                    remote
                    :remote-method="getEntityFieldId1"
                    filterable
                    placeholder="请选择要关联的字段1"
                  >
                    <el-option
                      v-for="item in entityFieldsList1"
                      :key="item.id"
                      :label="item.fieldName"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>

              </el-col>
              <el-col :span="24">
                <el-form-item label="显示字段1" prop="entityDisplayFieldId1">
                  <el-select
                    v-model="tempRelation.entityDisplayFieldId1"
                    remote
                    :remote-method="getEntityDisplayFieldId1"
                    filterable
                    placeholder="请输入请选择显示字段1"
                  >
                    <el-option
                      v-for="item in entityDisplayFieldsList1"
                      :key="item.id"
                      :label="item.fieldName"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>

            <el-col :span="12" style="border-color: #1f2f3d;border-style: solid;border-width: 1px;padding: 5px;">
              <el-col :span="24">
                <el-form-item label="右边实体2" prop="entityId2">
                  <el-select
                    v-model="tempRelation.entityId2"
                    remote
                    :remote-method="getEntity2"
                    filterable
                    placeholder="请选择关联类型"
                    @change="chooseEntity2()"
                  >
                    <el-option
                      v-for="item in entityList2"
                      :key="item.id"
                      :label="item.entityName"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="实体2类型" prop="entity2SideType">
                  <el-radio v-model="tempRelation.entity2SideType" class="radio" label="1">1</el-radio>
                  <el-radio v-model="tempRelation.entity2SideType" class="radio" label="n">n</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="关联字段2" prop="entityFieldId2">
                  <el-select
                    v-model="tempRelation.entityFieldId2"
                    remote
                    :remote-method="getEntityFieldId2"
                    filterable
                    placeholder="请选择要关联的字段2"
                  >
                    <el-option
                      v-for="item in entityFieldsList2"
                      :key="item.id"
                      :label="item.fieldName"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>

              </el-col>
              <el-col :span="24">
                <el-form-item label="显示字段2" prop="entityDisplayFieldId2">
                  <el-select
                    v-model="tempRelation.entityDisplayFieldId2"
                    remote
                    :remote-method="getEntityDisplayFieldId2"
                    filterable
                    placeholder="请输入请选择显示字段2"
                  >
                    <el-option
                      v-for="item in entityDisplayFieldsList2"
                      :key="item.id"
                      :label="item.fieldName"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>

            <el-col :span="24" style="margin-top: 10px;height: 10px;" />
            <el-col :span="12">
              <el-form-item label="n-n主控方" prop="ownerEntityId">
                <el-select
                  v-model="tempRelation.ownerEntityId"
                  filterable
                  placeholder="n-n主控方"
                >
                  <el-option
                    v-for="item in ownerEntityIdList"
                    :key="item.id"
                    :label="item.entityName"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>

            </el-col>

            <el-col :span="12">
              <el-form-item label="级联操作" prop="cascade">
                <el-select v-model="tempRelation.cascade" placeholder="请选择关联类型">
                  <el-option label="级联删除" value="1_n" />
                  <!-- <el-option label="级联更新" value="n_1" /> -->
                  <el-option label="无任何操作" value="n_n" />
                </el-select>
              </el-form-item>
            </el-col>

          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="relationshipsDialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveR()">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="生成的文件" :visible.sync="dialogTableVisible" width="90%">
      <el-table :data="fileList" height="500" class="filelist">
        <el-table-column property="file" label="文件" />
      </el-table>
    </el-dialog>

  </div>
</template>

<script>
import Sticky from '@/components/Sticky' // 粘性header组件
import { fetchEntity, apiGetEntitySelect } from '@/api/entity'
import { apiGenerateEntity, fetchProject, fetchList as apiFetchList } from '@/api/project'
import { isUpperCase, isLowerCase, entity2Class, entity2Column, formatDate } from '@/utils'
import { getRemoteSolution, getRemoteMappingTypeDict, getRemoteJdbcTypeDict, getRemoteTypeFmtDict, getRemoteFormTypeDict, getRemoteQueryTypeDict } from '@/api/entity'
import { apiAddEntity, apiAddEntityFromSql, apiAddEntitiesFromDb } from '@/api/project'
import { apiDeleteAllFields, apiGetFieldSelect } from '@/api/field'
import { apiUpdateRelationship, fetchRList } from '@/api/relationship'
const defaultForm = {
  entityName: '',
  entityUiName: '',
  comments: '',
  className: '',
  primaryKey: '',
  showFields: '',
  table: '',
  module: '',
  packageName: 'com.',
  moduleName: '',
  projectList: [],
  author: localStorage.getItem('username'),
  solutions: [],
  relationships: [],
  solutionArr: [],
  fields: [
    {
      fieldName: '',
      fieldUiLabel: '',
      comments: '',
      columnName: '',
      jdbcType: 'varchar',
      typeFmt: '(255)',
      uiType: 'String',
      isPk: '0',
      isFk: '0',
      isNull: '1',
      isIncrement: '0',
      isInsert: '1',
      isEdit: '1',
      isList: '1',
      isQuery: '1',
      queryType: 'eq',
      formType: 'input',
      minValue: '',
      maxValue: '',
      dictType: '',
      sort: 10
    }
  ]

}

export default {
  name: 'EntityDetail',
  components: { Sticky },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  // computed: {
  //     solutionArr: {
  //         // getter
  //         get: function () {
  //             if(!!this.postForm.solutions)
  //             {
  //                 return this.postForm.solutions.split(',')
  //             }
  //             return [];
  //
  //         },
  //         // setter
  //         set: function (newValue) {
  //             if(!!newValue)
  //             {
  //                 var selectSolutions = newValue.join(',');
  //                 this.postForm.solutions = selectSolutions;
  //             }
  //
  //         }
  //     }
  // },
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
      mappingTypeDict: [],
      jdbcTypeDict: [],
      typeFmtDict: [],
      formTypeDict: [],
      queryTypeDict: [],
      solutionList: [],
      projectId: null,
      projectList: [],
      fileList: [],
      dialogTableVisible: false,
      relationshipsDialogTableVisible: false,
      tempRelation: { 'relationName': '', 'entity1SideType': '1', 'entity2SideType': '1' },
      entityList1: [],
      entityList2: [],
      entityFieldsList1: [],
      entityFieldsList2: [],
      entityDisplayFieldsList1: [],
      entityDisplayFieldsList2: [],
      ownerEntityIdList: [], // 主控方
      sqlStr: '',


      // basePackageName:"",
      file: [], // 字段文件
      rules: {
        entityName: [
          // { pattern : /^1(3|4|5|7|8)\d{9}$/ , required: true, message: '请输入活动名称', trigger: 'blur' }
          { required: true, message: '请输入实体类名', trigger: 'blur' }
        ]
      },
      tempRoute: {},
        autoStatus:100
    }
  },
  computed: {

    lang() {
      return this.$store.getters.language
    }
  },
  watch: {
    'postForm.solutionArr': 'updateSolutionStr'
  },
  created() {
    // const projectId = this.$route.params && this.$route.params.projectId

    // debugger;
    this.getProjectList() // 初始化工程列表
    // debugger;
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)

      // this.initSelect(this.projectId);
    } else {
      this.postForm = Object.assign({}, defaultForm)
      const projectId = this.$route.params && this.$route.params.projectId
      this.postForm.projectId = projectId

      // this.postForm.projectId = projectId
      fetchProject(projectId).then(response => {
        this.postForm.project = response.data.object
      })
      // setTimeout(()=>{}, 1000);
    }
    this.postForm.author = localStorage.getItem('username')

    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    updateSolutionStr() {
      this.postForm.solutions = this.postForm.solutionArr.join(',')
      // console.log(this.postForm.solutions)
    },
    changeProject(id) {
      this.initSelect(id)
    },
    async initRelationSelect() {
      const [remoteEntityList1, remoteEntityList2, remoteEntityFieldsList1, remoteEntityFieldsList2, remoteEntityDisplayFieldsList1, remoteEntityDisplayFieldsList2] = await Promise.all([
        apiGetEntitySelect({ projectId: this.postForm.project.id }), apiGetEntitySelect({ projectId: this.postForm.project.id }), // entitylist
        apiGetFieldSelect({ entityId: this.tempRelation.entityId1 }), apiGetFieldSelect({ entityId: this.tempRelation.entityId2 }), // idlist
        apiGetFieldSelect({ entityId: this.tempRelation.entityId1 }), apiGetFieldSelect({ entityId: this.tempRelation.entityId2 })// displaylist
      ])

      this.entityList1 = remoteEntityList1.data.object
      this.entityList2 = remoteEntityList2.data.object
      this.entityFieldsList1 = remoteEntityFieldsList1.data.object
      this.entityFieldsList2 = remoteEntityFieldsList2.data.object
      this.entityDisplayFieldsList1 = remoteEntityDisplayFieldsList1.data.object
      this.entityDisplayFieldsList2 = remoteEntityDisplayFieldsList2.data.object
      //
      this.ownerEntityIdList = []
      for (var i = 0; i < this.entityList1.length; i++) {
        if (this.entityList1[i].id == this.tempRelation.entityId1 || this.entityList1[i].id == this.tempRelation.entityId2) {
          this.ownerEntityIdList.push({ id: this.entityList1[i].id, entityName: this.entityList1[i].entityName })
        }
      }
    },
    async initSelect(projectId) {
      const [remoteSolution, remoteMappingTypeDict, remoteJdbcTypeDict, remoteTypeFmtDict, remoteFormTypeDict, remoteQueryTypeDict] = await Promise.all([
        getRemoteSolution(projectId),
        getRemoteMappingTypeDict(projectId),
        getRemoteJdbcTypeDict(projectId),
        getRemoteTypeFmtDict(projectId),
        getRemoteFormTypeDict(projectId),
        getRemoteQueryTypeDict(projectId)
      ])

      this.solutionList = remoteSolution.data
      this.mappingTypeDict = remoteMappingTypeDict.data
      this.jdbcTypeDict = remoteJdbcTypeDict.data
      this.typeFmtDict = remoteTypeFmtDict.data
      this.formTypeDict = remoteFormTypeDict.data
      this.queryTypeDict = remoteQueryTypeDict.data
    },
    // 远程工程列表信息
    async getProjectList() {
      await apiFetchList().then(response => {
        this.projectList = response.data.object.ArrayList
      })
    },
    fetchData(id) {
      fetchEntity(id).then(response => {
        this.postForm = response.data.object
        this.postForm.solutionArr = this.postForm.solutions.split(',')
        this.projectId = response.data.object.project.id
        this.initSelect(this.projectId)
        this.setTagsViewTitle()
      }).catch(err => {
        console.log(err)
      })
    },
    generateFromSql() {
      const params = { 'projectId': this.postForm.project.id, 'sqlStr': this.sqlStr }
      apiAddEntityFromSql(params).then(response => {
        this.postForm.fields = response.data.object
      })
    },
    goGenerateEntitiesFromDB() {
      const params = { 'projectId': this.postForm.project.id, 'sqlStr': this.sqlStr }
      apiAddEntitiesFromDb(params).then(response => {
        this.postForm.fields = response.data.object
        if (response.data.code === 1) {
          this.$notify({
            title: '成功',
            message: response.data.message,
            type: 'success'
          })
        }
      })
    },

    deleteAllFields() {
      apiDeleteAllFields(this.postForm.id).then(response => {
        this.postForm.fields = []
        if (response.data.code === 1) {
          this.$notify({
            title: '成功',
            message: response.data.message,
            type: 'success'
          })
        }
      })
    },
    uploadOk(res) {
      const self = this
      //                self.entity.fields=res.object;
      //                console.log(res)
      //                debugger;
      if (res.code === 1) {
        var temp = []
        //                    debugger;
        for (var i = 0; i < res.object.length; i++) {
          var item = res.object[i]
          if (item.typeFmt.indexOf('(') < 0) {
            item.typeFmt = '(' + item.typeFmt + ')'
          }
          if (!item.columnName || item.columnName == '') { item.columnName = entity2Column(item.fieldName) }
          temp.push(item)
        }
        self.entity.fields = temp
        //                    console.log(self.entity.fields)
      } else {
        this.$notify({
          title: '失败',
          message: '导入失败请检查excel！',
          type: 'fail'
        })
      }
    },
    beforeUpload(file) {
      this.$notify({
        title: '请稍后哦......',
        message: '导入需要时间请稍后！',
        type: 'success'
      })
    },
    setMappingType2: function(event) {
      console.log('触发了：' + document.hasFocus())
      alert(event.target.tagName)
    },
    setString(index) { this.setUiType(index, 'String') },
    setInteger(index) { this.setUiType(index, 'Integer') },
    setMoney(index) { this.setUiType(index, 'Money') },
    setLong(index) { this.setUiType(index, 'Long') },
    setDate(index) { this.setUiType(index, 'Date') },
    setIntBoolean(index) { this.setUiType(index, 'IntBoolean') },
    setUiType(index, uiTypeName) {
      for (var i = 0; i < this.mappingTypeDict.length; i++) {
        if (this.mappingTypeDict[i].uiType == uiTypeName) {
          this.postForm.fields[index].uiType = uiTypeName
          this.postForm.fields[index].jdbcType = this.mappingTypeDict[i].dbTypeValue.split(',')[0]
          this.postForm.fields[index].formType = this.mappingTypeDict[i].formType
          this.postForm.fields[index].typeFmt = this.mappingTypeDict[i].typeFmt
          break
        }
      }
    },
    inEdit(index) {
      this.postForm.fields[index].editMode = true
    },
    leaveEdit(index) {
      this.postForm.fields[index].editMode = false
    },
    setMappingType(index) {
      console.log('聚焦：' + document.hasFocus() + 'editMode模式:' + this.postForm.fields[index].editMode)
      if (!this.postForm.fields[index].editMode) { // 下拉框的话，那文本框肯定失去焦点了
        //                    console.log( "The document DOES NOT have focus."+x.innerHTML);
        // 目前只是java,后续可以node,php等
        // 全部读取配置
        for (var i = 0; i < this.mappingTypeDict.length; i++) {
          if (this.mappingTypeDict[i].uiType == this.postForm.fields[index].uiType) {
            this.postForm.fields[index].jdbcType = this.mappingTypeDict[i].dbTypeValue.split(',')[0]// 暂时取第一个jdbc类型
            this.postForm.fields[index].formType = this.mappingTypeDict[i].formType
            this.postForm.fields[index].typeFmt = this.mappingTypeDict[i].typeFmt
            break
          }
        }
      }
    },

    setTagsViewTitle() {
      const title = '编辑实体'
      const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.postForm.id}` })
      this.$store.dispatch('updateVisitedView', route)
    },
    submitForm() {
      // console.log(this.postForm)

      this.$refs.postForm.validate(valid => {
        if (valid) {
          // debugger;
          if (!this.postForm.entityName ||
              this.postForm.fields.length == 0 ||
              !this.postForm.fields[0].fieldName
          ) {
            this.$notify({
              title: '请检查必填项',
              message: '请补全类信息或者字段信息【' + this.postForm.solutions + '】',
              type: 'error'
            })
            return false
          }

          this.loading = true
          const primaryTypes = []
          const primaryKeys = []
          for (var i = 0; i < this.postForm.fields.length; i++) {
            if (this.postForm.fields[i].isPk === '1') {
              primaryKeys.push(this.postForm.fields[i].fieldName)
              primaryTypes.push(this.postForm.fields[i].languageType)
            }
          }
          if (primaryKeys.length > 0) {
            this.postForm.primaryKey = primaryKeys.join(',')
            this.postForm.PrimaryType = primaryTypes.join(',')
          }
          // this.postForm.solutions = this.postForm.solutions.join(',') // 防止报错 e的solutins是字符型
          apiAddEntity(this.postForm).then(response => {
            this.postForm.id = response.data.object.id
            this.$notify({
              title: '成功',
              message: response.data.message,
              type: 'success',
              duration: 2000
            })
            this.loading = false
            // debugger;
            // this.$router.push({ name: 'CreateEntityFromProject', params: { projectId: this.postForm.project.id }})
            // this.isEdit=false;
            // location.href = location.href.replace(/edit/, 'create')
            // location.reload(true)
            // location.href=createFromProject;

            // this.postForm.fields=[];
            // this.postForm = Object.assign({}, defaultForm);
            // // this.postForm.fields=Object.assign([],);
            // this.postForm.fields.push(defaultForm.fields)

            // debugger;
            // console.log('xxxxxx')
            // console.log(this.postForm);
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    inputEnity(value) {
        const {autoStatus} = this
        console.log(autoStatus);
       if(autoStatus == 0){
           this.postForm.className = entity2Class(value)
           this.postForm.entityUiName = value
           this.postForm.comments = value
           var fieldSplitType = this.postForm.project.fieldSplitType || '0'
           var fieldCapital = this.postForm.project.fieldCapital || '1'
           // console.log('when input entity,project is:')
           // console.log(this.postForm.project)
           this.postForm.table = entity2Column(value, fieldSplitType, fieldCapital)
       }
    },


      inputTable(value) {
          const {autoStatus} = this
          console.log(autoStatus);
          if(autoStatus == 0){
              this.postForm.className = entity2Class(value)
              this.postForm.comments = value
              var fieldSplitType = this.postForm.project.fieldSplitType || '0'
              var fieldCapital = this.postForm.project.fieldCapital || '1'
              this.postForm.table = entity2Column(value, fieldSplitType, fieldCapital)
          }
      },
    handleAdd() {
      this.postForm.fields.push({
        fieldName: '',
        comments: '',
        columnName: '',
        jdbcType: 'varchar',
        typeFmt: '(255)',
        uiType: 'String',
        isPk: '0',
        isFk: '0',
        isNull: '1',
        isIncrement: '0',
        isInsert: '1',
        isEdit: '1',
        isList: '1',
        isQuery: '1',
        queryType: 'eq',
        formType: 'input',
        minValue: '',
        maxValue: '',
        dictType: '',
        sort: this.postForm.fields.length + 1
      })
    },
    goBackEntities() {
      this.$router.push({ name: 'Entities' })// 路由名字来跳转，全局唯一
    },
    generateCode() {
      apiGenerateEntity(this.postForm.id).then(response => {
        this.fileList = []
        for (var i = 0; i < response.data.object.length; i++) {
          this.fileList.push({ 'file': response.data.object[i] })
        }
        this.dialogTableVisible = true
      })
    },
    createNew() {
      this.$router.push('/entity/createFromProject/' + this.postForm.project.id)
    },
    goGenerateEntity() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          const primaryTypes = []
          const primaryKeys = []
          for (var i = 0; i < this.postForm.fields.length; i++) {
            if (this.postForm.fields[i].isPk === '1') {
              primaryKeys.push(this.postForm.fields[i].fieldName)
              primaryTypes.push(this.postForm.fields[i].languageType)
            }
          }
          if (primaryKeys.length > 0) {
            this.postForm.primaryKey = primaryKeys.join(',')
            this.postForm.primaryType = primaryTypes.join(',')
          }
          delete this.postForm.project.entities
          this.postForm.projectId = this.postForm.project.id
          console.log(this.postForm.project)
          axios.post('/api/project/addEntity.do', JSON.stringify(this.entity), { headers: { 'Content-Type': 'application/json' }}).then((res1) => {
            if (res1.data.code === 1) {
              var projectId = res1.data.object.project.id
              this.$notify({
                title: '成功',
                message: res1.data.message,
                type: 'success'
              })
              const res = axios.get(`/api/project/generateEntity/` + res1.data.object.id).then(res => {
                if (res.data.code == 1) {
                  this.fileList = []
                  for (var i = 0; i < res.data.object.length; i++) {
                    this.fileList.push({ 'file': res.data.object[i] })
                  }
                  this.dialogTableVisible = true
                }
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    /** 关系操作*/
    addRelation() {
      this.getEntity1('')
      this.getEntity2('')
      this.tempRelation = { 'relationName': '', 'entity1SideType': '1', 'entity2SideType': '1' }
      this.relationshipsDialogTableVisible = true
    },
    editR(r) {
      //                console.log(this.$ref.)
      // 赋值给tempR,并且弹出框
      this.tempRelation = r
      this.initRelationSelect()
      this.relationshipsDialogTableVisible = true
    },
    saveR() {
      //                console($(e).attr("r-id"))
      // 校验参数：
      console.log(this.tempRelation)
      if (!this.tempRelation.entityId1 ||
      !this.tempRelation.entityId2 ||
      !this.tempRelation.entityDisplayFieldId1 ||
      !this.tempRelation.entityDisplayFieldId2
      ) {
        alert('关联关系字段不全，请补全')
      }
      delete this.tempRelation.entity1// 防止级联更新
      delete this.tempRelation.entity2// 防止级联更新
      apiUpdateRelationship(this.tempRelation).then(response => {
        if (response.data.code === 1) {
          this.$notify({
            title: '成功',
            message: response.data.message,
            type: 'success'
          })
        }
        this.relationshipsDialogTableVisible = false
        // 再去拿所有关联信息，更新关联列表
        fetchRList(this.postForm.id).then(response2 => {
          this.postForm.rs = response2.data.object
          // for(var i=0;i<)
          // delete this.tempRelation.entity1;//防止级联更新
          // delete this.tempRelation.entity2;//防止级联更新
        })
      })
    },
    chooseEntity1() {
      this.getEntityFieldId1('')
      this.getEntityDisplayFieldId1('')
      this.updateOwnerEntity()
    },
    chooseEntity2() {
      this.getEntityFieldId2('')
      this.getEntityDisplayFieldId2('')
      this.updateOwnerEntity()
    },
    updateOwnerEntity() {
      this.ownerEntityIdList = []
      for (var i = 0; i < this.entityList1.length; i++) {
        if (this.entityList1[i].id == this.tempRelation.entityId1 || this.entityList1[i].id == this.tempRelation.entityId2) {
          this.ownerEntityIdList.push({ id: this.entityList1[i].id, entityName: this.entityList1[i].entityName })
        }
      }
    },
    getEntity1(query) {
      const params = { entityName: query, projectId: this.postForm.project.id }
      apiGetEntitySelect(params).then(response => {
        this.entityList1 = response.data.object
      })
    }, // 远程获取实体1信息
    getEntity2(query) {
      const params = { entityName: query, projectId: this.postForm.project.id }
      apiGetEntitySelect(params).then(response => {
        this.entityList2 = response.data.object
      })
    },
    // 远程获取实体1信息
    getEntityFieldId1(query) {
      const data = { entityId: this.tempRelation.entityId1, fieldName: query }
      apiGetFieldSelect(data).then(response => {
        this.entityFieldsList1 = response.data.object
      })
    },
    // 远程获取实体2关联字段信息
    getEntityFieldId2(query) {
      const data = { entityId: this.tempRelation.entityId2, fieldName: query }
      apiGetFieldSelect(data).then(response => {
        this.entityFieldsList2 = response.data.object
      })
    },
    // 显示字段1
    getEntityDisplayFieldId1(query) {
      const data = { entityId: this.tempRelation.entityId1, fieldName: query }
      apiGetFieldSelect(data).then(response => {
        this.entityDisplayFieldsList1 = response.data.object
      })
    },
    // 显示字段2
    getEntityDisplayFieldId2(query) {
      const data = { entityId: this.tempRelation.entityId2, fieldName: query }
      apiGetFieldSelect(data).then(response => {
        this.entityDisplayFieldsList2 = response.data.object
      })
    }, // 远程获取实体2关联字段信息

    /** */
    inputFieldName(index)// 先从数据库匹配
    {
      // 提示开始
      /** *****************************************************______SYSTEM:系统常用字段______****************************************/

      const id = this.postForm.fields[index].fieldName == 'id' || this.postForm.fields[index].fieldName == 'id_'
      if (id) {
        this.postForm.fields[index].isPk = '1'
        this.postForm.fields[index].isIncrement = '1'
        this.postForm.fields[index].fieldUiLabel = '编号'
        this.setInteger(index)
        this.postForm.fields[index].isEdit = '0'
        this.postForm.fields[index].isNull = '0'
        this.postForm.fields[index].formType = 'hidden'
      }

      const fkid = /id/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase()) && this.postForm.fields[index].fieldName.length > 3
      if (fkid) {
        this.postForm.fields[index].fieldUiLabel = '编号'
        this.setString(index)
        this.postForm.fields[index].typeFmt = '(64)'
      }

      const createtime = /createtime|createdate/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (createtime) {
        this.postForm.fields[index].fieldUiLabel = '创建时间'
        this.postForm.fields[index].isEdit = '0'
        this.setDate(index)
        this.postForm.fields[index].formType = 'label'
      }

      const updatetime = /updatetime|updatedate/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (updatetime) {
        this.postForm.fields[index].fieldUiLabel = '更新时间'
        this.setDate(index)
        this.postForm.fields[index].isEdit = '0'
        this.postForm.fields[index].formType = 'label'
      }

      const start = /start/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (start) {
        this.postForm.fields[index].fieldUiLabel = '开始'
        this.setDate(index)
      }

      const end = /end/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (end) {
        this.postForm.fields[index].fieldUiLabel = '结束'
        this.setDate(index)
      }
      const starttime = /starttime|startdate/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (starttime) {
        this.postForm.fields[index].fieldUiLabel = '开始时间'
        this.setDate(index)
      }

      const endtime = /endtime|endDate/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (endtime) {
        this.postForm.fields[index].fieldUiLabel = '结束时间'
        this.setDate(index)
      }

      const createby = /createby/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (createby) {
        this.postForm.fields[index].fieldUiLabel = '创建者'
        this.setString(index)
        this.postForm.fields[index].typeFmt = '(64)'
      }
      const updateby = /updateby/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (updateby) {
        this.postForm.fields[index].fieldUiLabel = '修改者'
        this.setString(index)
        this.postForm.fields[index].typeFmt = '(64)'
      }
      const isdel = /isdel|delflag/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (isdel) {
        this.postForm.fields[index].fieldUiLabel = '删除标记'
        this.setInteger(index)
      }

      const username = /username|user/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (username && !id) {
        this.postForm.fields[index].fieldUiLabel = '用户名'
        this.setString(index)
        this.postForm.fields[index].typeFmt = '(64)'
      }
      const password = /password|pwd|pass/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (password) {
        this.postForm.fields[index].fieldUiLabel = '密码'
        this.setString(index)
        this.postForm.fields[index].typeFmt = '(64)'
      }
      const status = /status|active/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (status) {
        this.postForm.fields[index].fieldUiLabel = '状态'
        this.setIntBoolean(index)
      }
      const groupid = /groupid/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (groupid) {
        this.postForm.fields[index].fieldUiLabel = '组ID'
        this.setInteger(index)
      }
      const group = /group/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (!groupid && group) {
        this.postForm.fields[index].fieldUiLabel = '组'
        this.setString(index)
      }
      const roleid = /roleid/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (roleid) {
        this.postForm.fields[index].fieldUiLabel = '角色ID'
        this.setInteger(index)
      }
      const role = /group/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (!roleid && role) {
        this.postForm.fields[index].fieldUiLabel = '角色'
        this.setString(index)
      }
      /** *****************************************************______ESHOP：电商常用字段______****************************************/
      const memberid = /memberid/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (memberid) {
        this.postForm.fields[index].fieldUiLabel = '会员ID'
        this.postForm.fields[index].isFk = '1'
        this.setString(index)
      }
      const member = /member/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (!memberid && member) {
        this.postForm.fields[index].fieldUiLabel = '会员'
        this.postForm.fields[index].isFk = '0'
        this.setString(index)
      }

      const price = /price|cost/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (price) {
        this.postForm.fields[index].fieldUiLabel = '价格'
        this.setMoney(index)
      }

      const shopid = /shopid|mallid/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (shopid) {
        this.postForm.fields[index].fieldUiLabel = '店铺编号'
        this.setString(index)
      }
      const shop = /shop|mall/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (!shopid && shop) {
        this.postForm.fields[index].fieldUiLabel = '店铺'
        this.setString(index)
      }
      /** *****************************************************______CMS:内容系统常用字段______****************************************/
      const title = /title/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (title) {
        this.postForm.fields[index].fieldUiLabel = '标题'
        this.setString(index)
      }
      const content = /content/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (content) {
        this.postForm.fields[index].fieldUiLabel = '内容'
        this.setString(index)
      }
      const comment = /comment|reply/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (comment) {
        this.postForm.fields[index].fieldUiLabel = '评论'
        this.setString(index)
      }

      const tags = /tags/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (tags) {
        this.postForm.fields[index].fieldUiLabel = '标签'
        this.setString(index)
      }

      const keyword = /keyword/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (keyword) {
        this.postForm.fields[index].fieldUiLabel = '关键字'
        this.setString(index)
      }
      /** *****************************************************______CRM______****************************************/
      const customer = /customer|client/.test(this.postForm.fields[index].fieldName.replace('_', '').toLocaleLowerCase())
      if (customer) {
        this.postForm.fields[index].fieldUiLabel = '客户'
        this.setString(index)
      }

      /** *****************************************************______提示结束______****************************************/
      var fieldSplitType = this.postForm.project.fieldSplitType || '0'
      var fieldCapital = this.postForm.project.fieldCapital || '1'
      console.log('project为:')
      console.log(this.postForm.project)
      this.postForm.fields[index].columnName = entity2Column(this.postForm.fields[index].fieldName, fieldSplitType, fieldCapital)
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
