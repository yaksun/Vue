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
        goods_name:'路兹贝尔',
        goods_number:'7499',
        goods_color:'黑',
        goods_size:'37',
        inPrice:100,
        outPrice:129,
        supplier:'兰州东部鞋城103号'

    },
    {
        goods_id:'2',
        goods_name:'路兹贝尔',
        goods_number:'7499',
        goods_color:'黑',
        goods_size:'36',
        inPrice:110,
        outPrice:139,
        supplier:'兰州东部鞋城277号'

    },

]


const supplier = [
    {
        supplier_id:'1',
        arrange:'9527',
        board:'兰州东部鞋城101号',
        contact:'8650805'

    },
    {
        supplier_id:'2',
        arrange:'9526',
        board:'兰州东部鞋城103号',
        contact:'8650805'

    },
    {
        supplier_id:'1',
        arrange:'9528',
        board:'兰州东部鞋城104号',
        contact:'8650805'

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
          goods : goods || []
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


       

  Mock.mock('/shop/getSupplier', 'get',()=>{
    return  {
        data: {
            supplier : supplier || []
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