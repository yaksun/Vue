<template>
    <div>
      <vxe-table
        border
        height="600"
        :span-method="rowspanMethod"
        :data="tableData">
        <vxe-table-column field="name_1" title="功能模块"></vxe-table-column>
        <vxe-table-column field="name_3" title="权限类型">
          <template v-slot="{ row }">
           <vxe-input></vxe-input>
          </template>
        </vxe-table-column>
        <vxe-table-column field="name_2" title="详细功能"></vxe-table-column>
        <vxe-table-column field="name_3" title="权限类型">
          <template v-slot="{ row }">
            <vxe-checkbox v-model="row.check_3" @change="check3ChangeEvent(row)">{{ row.name_3 }}</vxe-checkbox>
            <vxe-checkbox v-model="row.check_3" @change="check3ChangeEvent(row)">{{ row.name_3 }}</vxe-checkbox>
          </template>
        </vxe-table-column>

      </vxe-table>
    </div>
</template>

<script>
  import XEUtils from 'xe-utils'
    export default {
      name: "VexConcat",
      data () {
        return {
          treeData: [
            {
              id: '10000',
              name: '账号管理',
              children: [
                {
                  id: '11000',
                  name: '用户管理',
                  children: [
                    {
                      id: '11100',
                      name: '查看',
                      children: [
                        {
                          id: '11110',
                          name: ''
                        }
                      ]
                    },
                  ]
                },
                {
                  id: '12000',
                  name: '角色管理',
                  children: [
                    {
                      id: '11100',
                      name: '查看',
                    },
                  ]

                },
                {
                  id: '13000',
                  name: '角色管理',
                  children: [
                    {
                      id: '11100',
                      name: '查看',
                    },
                  ]

                },
                {
                  id: '13000',
                  name: '角色管理',
                  children: [
                    {
                      id: '11100',
                      name: '查看',
                    },
                  ]

                },
                {
                  id: '13000',
                  name: '角色管理',
                  children: [
                    {
                      id: '11100',
                      name: '查看',
                    },
                  ]

                }

              ]
            },

          ],
          tableData: []
        }
      },
      created() {
        this.toColTreeData()
      },
      methods: {
        check3ChangeEvent(row) {
          let checked = row.check_3
          let levelList = this.tableData.filter(item => item.id_3 === row.id_3)
          levelList.forEach(item => {
            item.check_4 = checked
          })
        },
        check4ChangeEvent(row) {
          let levelList = this.tableData.filter(item => item.id_3 === row.id_3)
          let checked = levelList.every(item => item.check_4)
          levelList.forEach(item => {
            item.check_3 = checked
          })
        },
        // 转换横向树结构
        toColTreeData() {
          let options = {children: 'children'}
          let list = []
          let keyMap = {}
          XEUtils.eachTree(this.treeData, (item, index, result, paths, parent) => {
            keyMap[item.id] = item
            item.keys = parent ? parent.keys.concat([item.id]) : [item.id]
            if (!item.children || !item.children.length) {
              let row = {}
              item.keys.forEach((key, index) => {
                let level = index + 1
                let obj = keyMap[key]
                row[`check_${level}`] = false
                row[`id_${level}`] = obj.id
                row[`name_${level}`] = obj.name
              })
              list.push(row)
            }
          }, options)
          this.keyMap = keyMap
          this.tableData = list
        },
        colspanMethod({row, $rowIndex, column, data,$columnIndex}){

            if ($columnIndex === 2) {
              return {
                rowspan: 1,
                colspan: 2
              }
            } else if ($columnIndex === 3) {
              return {
                rowspan: 0,
                colspan: 0
              }
            }

        },

        // 通用行合并函数（将相同多列数据合并为一行）
        rowspanMethod({row, $rowIndex, column, data,$columnIndex}) {
          this.colspanMethod({row, $rowIndex, column, data,$columnIndex})

          // 改写合并函数 只对列下标等于0的起作用
          if($columnIndex>0){
            return
          }


          let fields = ['name_1', 'name_2', 'name_3']
          let cellValue = XEUtils.get(row, column.property)
          if (cellValue && fields.includes(column.property)) {
            let prevRow = data[$rowIndex - 1]
            let nextRow = data[$rowIndex + 1]
            if (prevRow && XEUtils.get(prevRow, column.property) === cellValue) {
              return {rowspan: 0, colspan: 0}
            } else {
              let countRowspan = 1
              while (nextRow && XEUtils.get(nextRow, column.property) === cellValue) {
                nextRow = data[++countRowspan + $rowIndex]
              }
              if (countRowspan > 1) {
                return {rowspan: countRowspan, colspan: 1}
              }
            }
          }



        }
      }
    }
</script>

<style lang="">

</style>
