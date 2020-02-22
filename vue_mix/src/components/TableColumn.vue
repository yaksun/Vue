<template>
    <div>
      <vxe-toolbar>
        <template v-slot:buttons>
          <vxe-button @click="addColumn()">下计划</vxe-button>
        </template>
      </vxe-toolbar>
      <vxe-grid
        border="none"
        highlight-hover-row
        highlight-current-row
        ref="xTable"
        height="300"
        :edit-config="{trigger: 'click', mode: 'cell'}"
        :data="tableData">
        <vxe-table-column v-for="(config, index) in tableColumn" :key="index" v-bind="config"></vxe-table-column>
      </vxe-grid>

    </div>
</template>

<script>
  import  XEUtils from 'xe-utils'
    export default {
        name: "TableColumn",
      data () {
        return {
          tableData: [
            {"name":"张三","nickname":"立领","sex":"不想","role":"总统","address":"上海"},
            {"name":"李四","nickname":"立领","sex":"不想","role":"总统","address":"上海"},
            {"name":"王五","nickname":"立领","sex":"不想","role":"总统","address":"上海"}

          ],
          tableColumn: [
            { type: 'seq', width: 60, fixed: null },
            { type: 'checkbox', width: 50, fixed: null },
            { field: 'name', title: 'Name', width: 200 },
            { field: 'nickname', title: 'Nickname', width: 300 },
            { field: 'sex', title: 'Sex', width: 200 },
            { field: 'role', title: 'Role', width: 200 },
            { field: 'address', title: 'Address', width: 300, showOverflow: true }
          ]
        }
      },
      created () {
        // this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
      },
      methods: {
        addColumn () {
          const uniqueId = XEUtils.uniqueId()
          this.tableColumn.push({
            field: `plan_${uniqueId}`,
            title: `计划_${uniqueId}`,
            minWidth: 100,
           editRender:{name: 'input'}
          })
        },
        removeColumn () {
          this.tableColumn.pop()
        },
        updateFilter (index) {
          let xTable = this.$refs.xTable
          xTable.filter(this.tableColumn[index].field, options => {
            // 修改筛选列表，可以通过 checked 属性设置默认勾选
            return [
              { value: '1', label: '男' },
              { value: '0', label: '女', checked: true }
            ]
          }).then(() => {
            // 修改条件之后，需要手动调用 updateData 处理表格数据
            xTable.updateData()
          })
        },
        toggleFixedColumn (index, value) {
          const xTable = this.$refs.xTable
          this.tableColumn[index].fixed = this.tableColumn[index].fixed ? null : value
          // 更改了列属性，需要手动刷新列
          this.$nextTick(() => {
            xTable.refreshColumn()
            // 由于固定列的动态切换是无状态的，所以需要手动刷新滚动位置
              .then(() => xTable.refreshScroll())
          })
        },
        updateWidthColumn (index, value) {
          this.tableColumn[index].width = value
          // 更改了列属性，需要手动刷新列
          this.$nextTick(() => {
            this.$refs.xTable.refreshColumn()
          })
        }
      }
    }
</script>

<style lang="">

</style>
