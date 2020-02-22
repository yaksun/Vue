<template>
  <div >
    <vxe-table
      border
      resizable
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell'}"
   >
      <vxe-table-column v-for="(config, index) in tableColumn" :key="index" v-bind="config"></vxe-table-column>
    </vxe-table>

  </div>

</template>

<script>
    export default {
        name: "VxeTransform",
      data () {
        return {

          tableData:[
            {
              id:'',
              name:'',
              sex:'',
              age:'',
              address:''
            },
            {
              id:'',
              name:'',
              sex:'',
              age:'',
              address:''
            },

          ],
          tableColumn: [
            { field:'id',title:'id' ,editRender:{name: 'input'}},
            { field:'name',title:'姓名', editRender: { name: 'input' }},
            { field: 'sex', title: '性别', editRender: { name: 'input' }},
            { field: 'age', title: '年龄' , editRender: { name: 'input' },},
            { field: 'address', title: '地址', editRender: { name: 'input' }}
          ]
        }
      },
      created () {


      },
      methods: {


      }
    }
</script>

<style lang="">


</style>
