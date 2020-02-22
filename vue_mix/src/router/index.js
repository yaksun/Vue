import Vue from 'vue'
import VueRouter from 'vue-router'
import VxeTable from '../components/VexTable'
import VxeTransform from '../components/VxeTransform'
import VexCrud from '../components/VexCrud'
import VexConcat from '../components/VexConcat'
import VexConcatBasic from '../components/VexConcatBasic'
import TableForm from '../components/TableForm'
import TableColumn from '../components/TableColumn'
import DataUpdate from '../components/DataUpdate'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/vxe-table',
      component:VxeTable
    },
    {
      path:'/vxe-table2',
      component:VxeTransform
    },
    {
      path:'/vxe-crud',
      component:VexCrud
    },
    {
      path:'/vxe-concat',
      component:VexConcat
    },
    {
      path:'/vxe-concat2',
      component:VexConcatBasic
    },
    {
      path:'/table_form',
      component:TableForm
    },
    {
      path:'/table_column',
      component:TableColumn
    },
    {
      path:'/data_update',
      component:DataUpdate
    }
  ]
})
