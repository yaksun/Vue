
import Mock from 'mockjs'

const supplier = [
    {
        supplier_id:'1',
        supplier_name:'福建福桂食品有限公司',
        contact_user:'小王',
        contact_phone:'0773-7217175',
        contact_address:'上海市金山区张堰镇松金公路2072号6607室',
        supplier_desc:'优质供应商'
    },
    {
        supplier_id:'2',
        supplier_name:'上海福桂食品有限公司',
        contact_user:'小张',
        contact_phone:'0773-7217175',
        contact_address:'上海市金山区张堰镇松金公路2072号6607室',
        supplier_desc:'优质供应商'
    },
    {
        supplier_id:'3',
        supplier_name:'广州福桂食品有限公司',
        contact_user:'小李',
        contact_phone:'0773-7217175',
        contact_address:'上海市金山区张堰镇松金公路2072号6607室',
        supplier_desc:'优质供应商'
    },

]


const supplier_column= [
    {
        label:"编号",
        prop:"supplier_id"
    },
    {
        label:'供应商名称',
        prop:'supplier_name',
        // searchslot:true,
        // search:true,

    },
    {
        label:'联系人',
        prop:'contact_user'
    },
    {
        label: "联系电话",
        prop: "contact_phone",
    },
    {
        label: "联系地址",
        prop: "contact_address",
    },
    {
        label:"备注",
        prop:"supplier_desc"
    }
]

export default ({ mock }) => {
    if (!mock) return;


    Mock.mock('/shop/getSupplier', 'get',()=>{
        return  {
            data: {
                supplier : supplier || [],
                supplier_column:supplier_column || []
            }
        }
    })

    Mock.mock('/shop/addSupplier', 'post',()=>{
        // supplier.push(params)
        return  {
            // data: {supplier}
            data:{
                success:1
            }
        }

    })

    Mock.mock('/shop/updateSupplier', 'post',()=>{
        return  {
            data:{
                success:1
            }
        }
    })

    Mock.mock('/shop/delSupplier', 'post',()=>{
        return  {
            data:{
                success:1
            }
        }
    })

    Mock.mock('/shop/updateItem', 'post',()=>{
        return  {
            data:{
                success:1
            }
        }
    })
}

