import Mock from 'mockjs'

/**
 *
 * 动态模拟商品，供货商
 *
 *
 */

var goods = [
    {
        goods_id:'1',
        goods_number:'7499',
        goods_name:'摄像头',
        goods_version:'p2',
        goods_type:'电器',
        inPrice:100,
        outPrice:129,
        supplier_name:'陶华碧老干妈香辣脆油辣椒'

    },
    {
        goods_id:'2',
        goods_number:'7479',
        goods_name:'电线杆',
        goods_version:'v5',
        goods_type:'公共设施',
        inPrice:100,
        outPrice:150,
        supplier_name:'华为计算机系统有限公司'

    },

]

var goods_column=[
    {
        label:"ID",
        prop:"goods_id"
    },
    {
        label:'商品编号',
        prop:'goods_number',


    },
    {
        label:'商品名称',
        prop:'goods_name'
    },
    {
        label: "商品版本",
        prop: "goods_version",
    },
    {
        label: "商品类别",
        prop: "goods_type",
        formslot:true
    },
    {
        label:"商品进价",
        prop:"inPrice"
    },
    {
        label:"商品售价",
        prop:"outPrice"
    },
    {
        label:"供货商",
        prop:"supplier_name"
    }
]



export default ({ mock }) => {
    if (!mock) return;


    // Mock.mock('/shop/getGoods', 'get', {
    //   data:{goods}

    // })

    Mock.mock('/shop/getGoods', 'get', ()=>{
        return {
            data:{
                goods : goods || [],
                goods_column:goods_column || []
            }
        }

    })

    Mock.mock('/shop/addGoods', 'post',()=>{
        // supplier.push(params)
        return  {
            // data: {supplier}
            data:{
                success:1
            }
        }

    })



    Mock.mock('/shop/updateGoods', 'post',()=>{
        return  {
            data:{
                success:1
            }
        }
    })

    Mock.mock('/shop/delGoods', 'post',()=>{
        return  {
            data:{
                success:1
            }
        }
    })





}