import Mock from 'mockjs'



const goods_category = [
    {
    id: 1,
    label: '所有类别',
    children: [
            {
            id: 12,
            label: '服饰',
            children: [
                {
                    id: 129,
                    label: '上衣',
                    children:[]
                },
                {
                id: 128,
                label: '裤子',
                    children:[]
              }
            ]
            },
        {
            id: 13,
            label: '电器',
            children: [
                {
                id: 131,
                label: '电冰箱',
                    children:[]

                },
                {
                id: 132,
                label: '电视机',
                    children:[]

            }]
        }
    ]
    },
];


export default ({ mock }) => {
    if (!mock) return;



    Mock.mock('/shop/getGoodsCategory', 'get', ()=>{
        return {
            data:{
                goods_category : goods_category || [],
            }
        }

    })

    Mock.mock('/shop/addGoodsCategory', 'post',()=>{
        // supplier.push(params)
        return  {
            // data: {supplier}
            data:{
                success:1
            }
        }

    })



    Mock.mock('/shop/updateGoodsCategory', 'post',()=>{
        return  {
            data:{
                success:1
            }
        }
    })

    Mock.mock('/shop/delGoodsCategory', 'post',()=>{
        return  {
            data:{
                success:1
            }
        }
    })





}