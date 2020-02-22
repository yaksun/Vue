<template>
    <div>
      <vxe-grid
        border
        resizable
        export-config
        import-config
        keep-source
        height="530"
        :pager-config="tablePage"
        :proxy-config="tableProxy"
        :columns="tableColumn"
        :toolbar="tableToolbar"
        :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
        @toolbar-button-click="toolbarButtonClickEvent"></vxe-grid>
    </div>
</template>

<script>
  import XEAjax from 'xe-utils'
    export default {
        name: "VexCrud",
      data () {
        return {
          tablePage: {
            pageSize: 15
          },
          tableProxy: {
            // 配置响应的数据属性
            props: {
              result: 'result',
              total: 'page.total'
            },
            ajax: {
              // page 对象： { pageSize, currentPage }
              query: ({ page }) => XEAjax.get(`/api/user/page/list/${page.pageSize}/${page.currentPage}`), // 模拟请求
              // body 对象： { removeRecords }
              delete: ({ body }) => XEAjax.post('/api/user/save', body),
              // body 对象： { insertRecords, updateRecords, removeRecords, pendingRecords }
              save: ({ body }) => XEAjax.post('/api/user/save', body)
            }
          },
          tableToolbar: {
            buttons: [
              { code: 'insert_actived', name: '新增' },
              {

                code: 'mark_cancel',
                name: 'app.body.button.markCancel',
                dropdowns: [
                  { code: 'delete_selection', name: 'app.body.button.deleteSelectedRecords' },
                  { code: 'remove_selection', name: '移除数据' }
                ]
              },
              { code: 'save', name: 'app.body.button.save' },
              {

                name: '数据导出',
                dropdowns: [
                  { code: 'open_import', name: '高级导入' },
                  { code: 'open_export', name: '高级导出' }
                ]
              },
              { code: 'myBtn', name: '自定义按钮' },
              {

                name: '禁用按钮',
                disabled: false,
                dropdowns: [
                  {
                    code: 'other1',
                    name: '下拉的按钮1',
                    disabled: false
                  },
                  {
                    code: 'other2',
                    name: '下拉的按钮2',
                    disabled: true
                  },
                  {
                    code: 'other3',
                    name: '下拉的按钮3',
                    disabled: false
                  }
                ]
              }
            ],
            refresh: true, // 刷新按钮
            import: true, // 导入按钮
            export: true, // 导出按钮
            zoom: true, // 最大化按钮
            // 列宽操作记录
            resizable: {
              storage: true
            },
            // 列操作记录
            custom: {
              storage: true
            }
          },
          tableColumn: [
            { type: 'checkbox', width: 50 },
            { type: 'seq', width: 60 },
            { field: 'name', title: 'Name', editRender: { name: 'input' } },
            { field: 'nickname', title: 'Nickname', editRender: { name: 'input' } },
            { field: 'role', title: 'Role', editRender: { name: 'input' } },
            { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }
          ]
        }
      },
      methods: {
        toolbarButtonClickEvent ({ code }, event) {
          switch (code) {
            case 'myBtn':
              this.$XModal.alert(code)
              break
          }
        }
      }
    }
</script>

<style lang="">

</style>
