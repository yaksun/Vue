        api可以实现的功能
        1.鼠标移动选中  只能是dblclick
          :mouse-config="{selected: true}"
        :checkbox-config="{range: true}"
        :keyboard-config="{isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true}"
        :edit-config="{trigger: 'dblclick', mode: 'cell'}">
        2.拖动列宽
         resizable
         3.单元格中渲染表单
         只能指定整列 不能指定某个单元格
          设置   ：<vxe-table-column field="describeHtml" type="html" title="HTML 标签"></vxe-table-column>
          data :  describeHtml:'<input type="radio" name="sex" id="hh"><label for="hh">男</label><input type="radio" name="sex" id="xh"><label for="xh">女</label>'
        4.合并行或列
          设置 :span-method="colspanMethod"
          添加方法 ：指定要跨的行和列   rowIndex不包含表头
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
          }
          5.隐藏头部
            :show-header="false"

        6.禁止编辑 不能和鼠标移动选中配合使用
          :edit-config="{trigger: 'dblclick', mode: 'cell',activeMethod: activeCellMethod}"
           activeCellMethod ({ column, columnIndex }) {
                    if (columnIndex === 2 ) {
                      return false
                    }
                    return true
                  },
        7.实现动态列 改变列数据 让表格重新渲染
         <vxe-table-column v-for="(config, index) in tableColumn" :key="index" v-bind="config"></vxe-table-column>

      8.设置单列为下拉框
       <vxe-table-column field="role1" title="Role" :edit-render="{name: 'select', options: roleList, events: {change: roleChangeEvent}}"></vxe-table-column>
