<template>
    <div>

      <vxe-toolbar>
        <template v-slot:buttons>
          <vxe-button icon="fa fa-plus" @click="insertEvent()">新增</vxe-button>
        </template>
      </vxe-toolbar>

      <vxe-table
        border
        show-overflow
        ref="xTable"
        resizable
        class="my_table_insert"
        max-height="400"
        :toolbar="tableToolbar"
        :span-method="colspanMethod"
        :show-header="false"
        :data="tableData"
        :edit-config="{trigger: 'click', mode: 'cell',activeMethod: activeCellMethod}"
        @edit-disabled="editDisabledEvent"
      >
        <vxe-table-column type="checkbox" width="60"></vxe-table-column>
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name" sortable :edit-render="{name: 'input', defaultValue: '默认的名字'}"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="age" title="Age" sortable :edit-render="{name: 'input', defaultValue: 18}"></vxe-table-column>
        <vxe-table-column field="describeHtml" :edit-render="{name: 'input'}" title="HTML 标签"></vxe-table-column>
      </vxe-table>
      <vxe-table
        border
        show-overflow
        ref="xTable"
        resizable
        class="my_table_insert"
        max-height="400"
        :toolbar="tableToolbar"
        :span-method="colspanMethod"
        :show-header="false"
        :data="tableData"
        :edit-config="{trigger: 'click', mode: 'cell',activeMethod: activeCellMethod}"
        @edit-disabled="editDisabledEvent"
      >
        <vxe-table-column type="checkbox" width="60"></vxe-table-column>
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name" sortable :edit-render="{name: 'input', defaultValue: '默认的名字'}"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="age" title="Age" sortable :edit-render="{name: 'input', defaultValue: 18}"></vxe-table-column>
        <vxe-table-column field="describeHtml" :edit-render="{name: 'input'}" title="HTML 标签"></vxe-table-column>
      </vxe-table>
    </div>
</template>

<script>

    export default {
      name: "VexTable",
      data () {
        return {
          tableData: [
            {
              id:1,
              name:'小明',
              sex:'男',
              age:20,
              describeHtml:'<input type="radio" name="sex" id="hh"><label for="hh">男</label><input type="radio" name="sex" id="xh"><label for="xh">女</label>'

            },
            {
              id:2,
              name:'小花',
              sex:'女',
              age:28,
              describeHtml:''
            },
            {
              id:3,
              name:'小龙',
              sex:'男',
              age:30,
              describeHtml:''
            }
          ],
          tableToolbar: {
            refresh: true,
            zoom: true,
            custom: true
          },
          sexList: []
        }
      },
      created () {
        // this.tableData = window.MOCK_DATA_LIST.slice(0, 4)
        // this.findSexList()
      },
      methods: {
        // async findSexList () {
        //   this.sexList = await XEAjax.get('/api/conf/sex/list')
        // },
        async insertEvent (row) {
          let record = {
            sex: '1'
          }
          let { row: newRow } = await this.$refs.xTable.insertAt(record, row)
          await this.$refs.xTable.setActiveCell(newRow, 'sex')
        },
        getInsertEvent () {
          let insertRecords = this.$refs.xTable.getInsertRecords()
          this.$XModal.alert(insertRecords.length)
        },
        getSelectionEvent () {
          let removeRecords = this.$refs.xTable.getCheckboxRecords()
          this.$XModal.alert(removeRecords.length)
        },

          colspanMethod ({ row, rowIndex, column, columnIndex, data }) {
            if (rowIndex === 0) {
              if (columnIndex === 2) {
                return {
                  rowspan: 1,
                  colspan: 2
                }
              } else if (columnIndex === 3) {
                return {
                  rowspan: 0,
                  colspan: 0
                }
              }
            }
          },
        activeCellMethod ({ column, columnIndex }) {
          if (columnIndex === 2 ) {
            return false
          }
          return true
        },
        editDisabledEvent ({ row, column }) {
          alert('禁止编辑')
        }
        }

    }

</script>

<style lang="">
  .my_table_insert .vxe-body--row.row--new {
    background-color: #f1fdf1;
  }

</style>
