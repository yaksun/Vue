import request from '@/router/axios';
import util from 'util'

export const getGoodsCategoryInfo = () => request({
    url: '/shop/getGoodsCategory',
    method: 'get',

})

export const addGoodsCategory = () => request({
    url: '/shop/addGoodsCategory',
    method: 'post',

})

export const updateGoodsCategory = () => request({
    url: '/shop/updateGoodsCategory',
    method: 'post',

})

export const delGoodsCategory = () => request({
    url: '/shop/delGoodsCategory',
    method: 'post',

})




export var  getNode = function(data,node,cb){
    if(data instanceof  Array){
            for(let i=0;i<data.length;i++){
                // if(data[i].length<0){
                //     return
                // }
                if(data[i].id == node.id){

                        // 当子集的children为空数组时
                        if(data[i].children.length<=0){
                            cb(data[i].id+'1')
                        }
                        for(let j=1;j<data[i].children.length;j++){

                            if(data[i].children[0].id < data[i].children[j].id){
                                console.log(data[i])
                               cb( data[i].children[j].id+1)

                                return

                            }else{
                                console.log(data[i])
                                    cb(data[i].children[0].id+1)
                                return
                            }
                        }
                    }
                // if(data[i].children.length<0){
                //
                //         return
                // }

                getNode(data[i].children,node,cb)
                }




            }




}
// 递归配合回调 好爽
export const delNode=(data,id,cb)=>{
    if(data instanceof  Array){
        for(let i=0;i<data.length;i++){
            if(data[i]['id'] == id){

                console.log(data[i].children)

                if(data[i].children.length>0){
                 let  obj =  {
                        status:0,
                        msg:'有子类,不能删除'
                    }

                    cb(obj)

                    return


                }else{
                    data.splice(i,1)
                      let obj =  {
                            status:1,
                            msg:'删除成功'
                        }
                    cb(obj)
                    return

                }



            }else{
                if(data[i].children.length>0){

                    delNode(data[i].children,id,cb)
                }
            }
        }




    }




}
