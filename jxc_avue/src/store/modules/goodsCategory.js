import {getGoodsCategoryInfo, addGoodsCategory, updateGoodsCategory, delGoodsCategory,getNode,delNode,getId} from '@/api/goodsCategory'



const GoodsCategory = {
    state: {
        GoodsCategoryInfo: [],
        message:{}
    },


    actions: {
        GetGoodsCategoryInfo({commit}) {
            return new Promise((resolve, reject) => {
                getGoodsCategoryInfo().then((res) => {
                    const data = res.data.data;
                    console.log(data)
                    commit('GET_GOODSCATEGORYIFNO', data.goods_category);
                    resolve(data);
                }).catch(err => {
                    reject(err);
                })
            })
        },

        AddGoodsCategory({commit}, {node,category_name}) {
            return new Promise((resolve, reject) => {
                addGoodsCategory().then((res) => {

                    if (res.data.data.success) {
                        commit('ADD_GOODSCATEGORY',{node, category_name});
                        resolve(res)

                    }

                }).catch(err => {
                    reject(err)
                })
            })
        },

        // 双括号的使用
        // action接收时没有双括号
        DelGoodsCategory({commit}, node) {
             commit('DEL_GOODSCATEGORY',{node})

               // return new Promise((resolve,reject)=>{
                   // commit('DEL_GOODSCATEGORY',{node}).then((res)=>{
                   //      if(res.status == 1){
                   //          resolve(res.msg)
                   //      }else{
                   //          reject(res.msg)
                   //      }
                   // })


        }


    },
    mutations: {
        GET_GOODSCATEGORYIFNO: (state, data) => {
            state.GoodsCategoryInfo = data;
        },


        // 没处理的问题
        // 给节点添加children属性，数据没法更新
        // 只能手动改mock数据了
        // Object.defineProperty(node,'children',{
        //      value:[],
        //      writable:true,
        //     configurable:true
        // })
        // node.children=[]
        //
        // node.children.push(newChild)
        //
        //  console.log(node)
        ADD_GOODSCATEGORY: (state,{node,category_name}) => {
            let data = state.GoodsCategoryInfo
            getNode(data,node,(res)=>{
                console.log(node)
                console.log(res)
                let newChild = { id: res, label: category_name, children: [] };

                // 当选择了节点的时候
                if(node && Object.keys(node).length>0){
                    if (!node.children) {


                    }else{

                        // 当选择了节点，并且节点下有children的时候
                        node.children.push(newChild)

                    }


                }

            })




        },

        // 双括号的使用
        // mutations方法接收时有双括号
        DEL_GOODSCATEGORY: (state,{node}) => {

          delNode(state.GoodsCategoryInfo,node.id,(res)=>{

               state.message = res
           })





        }

    }
}


export default GoodsCategory
