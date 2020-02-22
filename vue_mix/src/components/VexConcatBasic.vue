<template>
    <div>

      <vxe-toolbar>
        <template v-slot:buttons>
          <vxe-button @click="allAlign = 'left'">居左</vxe-button>
          <vxe-button @click="allAlign = 'center'">居中</vxe-button>
          <vxe-button @click="allAlign = 'right'">居右</vxe-button>
        </template>
      </vxe-toolbar>

      <vxe-table
        border
        resizable
        height="400"
        :align="allAlign"
        :span-method="colspanMethod"
        :data="tableData">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name"></vxe-table-column>
        <vxe-table-column field="role" title="Role"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
      </vxe-table>
    </div>
</template>

<script>
    export default {
        name: "VexConcatBasic",
      data () {
        return {
          allAlign: null,
          tableData: [
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
          ]
        }
      },
      created () {
        // this.tableData = window.MOCK_DATA_LIST.slice(0, 20)
      },
      methods: {
        colspanMethod ({ row, rowIndex, column, columnIndex, data }) {
          if (rowIndex < 1) {
            if (columnIndex === 3) {
              return {
                rowspan: 1,
                colspan: 2
              }
            } else if (columnIndex === 4) {
              return {
                rowspan: 0,
                colspan: 0
              }
            }
          }
        }
      }
    }
</script>

<style lang="">

</style>
