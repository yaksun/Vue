<template>
    <div>
      <vxe-toolbar>
        <template v-slot:buttons>
          <vxe-button icon="fa fa-plus" @click="saveInsertRow">保存</vxe-button>
          <vxe-button icon="fa fa-plus" @click="insertEvent">新增</vxe-button>
          <vxe-button @click="$refs.xTable.removeSelecteds()">删除选中</vxe-button>
          <vxe-button @click="getInsertEvent">获取新增</vxe-button>
          <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
          <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
          <vxe-button @click="showMessage">更新所有修改的Name列</vxe-button>

        </template>
      </vxe-toolbar>

      <vxe-table
        border
        show-overflow
        keep-source
        ref="xTable"
        class="my_table_status"
        :data="tableData"
        :edit-config="{trigger: 'click', mode: 'cell', showStatus: true, icon: 'fa fa-edit'}">
        <vxe-table-column type="checkbox" width="60"></vxe-table-column>
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="date3" title="Date" formatter="toDateString"></vxe-table-column>
        <vxe-table-column field="select" title="下拉输入过滤" type="html" ></vxe-table-column>
        <vxe-table-column field="select2" title="下拉输入过滤">
          <template v-slot="{ row, rowIndex }">
            <input  :loading="row.loading" class='vxe-default-input' v-model="row.select2" :id="'sex_'+row._XID" type="text" :list="'sexlist_'+row._XID" />
              <datalist :id="'sexlist_'+row._XID">
                <option v-for="(item,index) in list" :key="index" >{{item}}</option>
              </datalist>
          </template>
        </vxe-table-column>
        <vxe-table-column title="操作" width="200">
          <template v-slot="{ row, rowIndex }">
            <template v-if="!row.date3">
              <vxe-button @click="saveEvent2(row)" :loading="row.loading">更新并替换新数据</vxe-button>
            </template>
            <template v-else-if="rowIndex % 2 === 0">
              <vxe-button @click="saveEvent(row)" :loading="row.loading">更新行数据</vxe-button>
            </template>
            <template v-else>
              <vxe-button status="primary" @click="saveEvent(row, 'name')" :loading="row.loading">更新 Name 列</vxe-button>
            </template>
          </template>
        </vxe-table-column>
      </vxe-table>
    </div>
</template>

<script>
  import XEUtils from 'xe-utils'
  import _ from 'lodash'
    export default {
        name: "DataUpdate",
      data () {
        return {
          list:[
            "最美不过下雨天",
            "今天天气不错"
          ],
          tableData: [],
          roleList: [
            {
              label: '',
              value: '',
              disabled: false
            },
            {
              label: '前端',
              value: '1',
              disabled: false
            },
            {
              label: '后端',
              value: '2',
              disabled: false
            },
            {
              label: '项目经理',
              value: '3',
              disabled: false
            },
            {
              label: '设计师',
              value: '4',
              disabled: false
            },
            {
              label: '运维',
              value: '5',
              disabled: false
            }
          ]
        }
      },
      created () {
        this.tableData = [
          {
            id:1,
            name:'小明',
            sex:'男',
            date:"2015814621",
            select:"<input id=\"sex\" class='vxe-default-input' type=\"text\" list=\"sexlist\">\n" +
              "  <datalist id=\"sexlist\">\n" +
              "    <option>男人哭吧哭吧不是罪</option>\n" +
              "    <option>不是醉的女人是最美</option>\n" +
              "  </datalist>",
          },
          {
            id:2,
            name:'大毛',
            sex:'男',
            date3:"2015814621"
          },
          {
            id:3,
            name:'来福',
            sex:'男',
            date3:"2015814621"
          },
          {
            id:1,
            name:'小明',
            sex:'男',
            date3:"2015814621"
          },
          {
            id:2,
            name:'大毛',
            sex:'男',
            date3:"2015814621"
          },
          {
            id:3,
            name:'来福',
            sex:'男',
            date3:"2015814621"
          },
          {
            id:1,
            name:'小明',
            sex:'男',
            date3:"2015814621"
          },
          {
            id:2,
            name:'大毛',
            sex:'男',
            date3:"2015814621"
          },
          {
            id:3,
            name:'来福',
            sex:'男',
            date3:"2015814621"
          }
        ]
      },
      methods: {


        saveInsertRow(){
          let insertRecords = this.$refs.xTable.getInsertRecords()
          for(let i=0;i<insertRecords.length;i++){
            this.tableData.unshift(insertRecords[i])
          }
          console.log(this.tableData);

        },
        roleChangeEvent ({ row }, evnt) {
          // 使用内置 select 需要手动更新，使用第三方组件如果是 v-model 就不需要手动赋值
          row.role1 = evnt.target.value
          console.log(row.role1);
          // this.updateRoleList()
        },
        updateRoleList () {
          // 获取表格中的全量数据
          let { fullData } = this.$refs.xTable.getTableData()
          this.roleList.forEach(item => {
            if (item.value) {
              // 如果当前选项已经被选过，则禁用
              item.disabled = fullData.some(row => row.role1 === item.value)
            }
          })
        },
         showMessage(){
            this.getAllUpdate((arr)=>{
              if(arr.length>0){
                console.log(arr);
                console.log(_.compact(arr));
              }

              // if(){
              //   this.$XModal.message({ message: '所有数据保存成功！', status: 'success' })
              // }else{
              //   this.$XModal.message({ message: '数据没有改动', status: 'info' })
              // }
            })
         } ,

        getAllUpdate(cb){
          let updateRecords = this.$refs.xTable.getUpdateRecords()
          let arr=[]
          for(let i=0;i<updateRecords.length;i++){
              let xTable = this.$refs.xTable
              if (xTable.isUpdateByRow(updateRecords[i])) {
                updateRecords[i].loading = true
                console.log(updateRecords[i]);
                this.submitSave(updateRecords[i]).then(data => {
                  // 局部保存，并将行数据恢复到初始状态（如果 record 为空则不改动行数据，只恢复状态）
                  xTable.reloadRow(updateRecords[i], null, 'name')
                  updateRecords[i].loading = false
                  // arr.push(1)
                  this.$XModal.message({ message: '所有数据保存成功！', status: 'success' })
                })
              } else{
                // arr.push(0)
                this.$XModal.message({ message: '数据没有改动', status: 'info' })
              }
          }
          cb(arr)
        },
        insertEvent () {
          this.$refs.xTable.insert()
            .then(({ row }) => this.$refs.xTable.setActiveCell(row, 'name'))
        },
        saveEvent (row, field) {
          let xTable = this.$refs.xTable
          if (xTable.isUpdateByRow(row)) {
            row.loading = true
            console.log(row);
            this.submitSave(row).then(data => {
              // 局部保存，并将行数据恢复到初始状态（如果 record 为空则不改动行数据，只恢复状态）
              xTable.reloadRow(row, null, field)
              this.$XModal.message({ message: '保存成功！', status: 'success' })
              row.loading = false
            })
          } else {
            this.$XModal.message({ message: '数据未改动！', status: 'info' })
          }
        },
        saveEvent2 (row, field) {
          let xTable = this.$refs.xTable
          console.log(xTable);
          console.log(xTable.isUpdateByRow(row));
          if (xTable.isUpdateByRow(row)) {
            row.loading = true
            console.log(row);
            this.submitSave(row).then(data => {
              // 局部保存，并更新本地数据
              xTable.reloadRow(row, data, field)
              this.$XModal.message({ message: '保存成功！', status: 'success' })
              row.loading = false
            })
          } else {
            this.$XModal.message({ message: '数据未改动！', status: 'info' })
          }
        },
        submitSave (row) {
          return new Promise(resolve => {
            let rest = {
              date3: XEUtils.toDateString(new Date())
            }
            if (row.name) {
              rest.name = row.name
            }
            if (row.sex) {
              rest.sex = row.sex
            }
            setTimeout(() => resolve(rest), 500)
          })
        },
        getInsertEvent () {
          let insertRecords = this.$refs.xTable.getInsertRecords()
          console.log(insertRecords);
          this.$XModal.alert(insertRecords.length)
        },
        getRemoveEvent () {
          let removeRecords = this.$refs.xTable.getRemoveRecords()
          this.$XModal.alert(removeRecords.length)
        },
        getUpdateEvent () {
          let updateRecords = this.$refs.xTable.getUpdateRecords()
          console.log(updateRecords);
          this.$XModal.alert(updateRecords.length)
        }
      }
    }
</script>

<style lang="css">
  .my_table_status .vxe-body--row.row--new {
    background-color: #f1fdf1;
  }

</style>
