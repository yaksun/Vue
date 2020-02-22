
import { getGoodsInfo,addGoods,updateGoods,delGoods} from '@/api/goods'



const goods = {
    state:{
        GoodsInfo: [],
        GoodsColumn:[]
    },


    actions:{
        GetGoodsInfo ({ commit }) {


            return new Promise((resolve, reject) => {
                getGoodsInfo().then((res) => {
                    const data = res.data.data;
                    console.log(data)
                    commit('GET_GOODSIFNO', data);
                    resolve(data);
                }).catch(err => {
                    reject(err);
                })
            })
        },

        AddGoods({commit},goodsItem){
            return new Promise((resolve,reject)=>{
                addGoods().then((res)=>{
                    console.log(res)
                    if(res.data.data.success){
                        commit('ADD_GOODS',goodsItem);
                        resolve(res)

                    }

                }).catch(err =>{
                    reject(err)
                })
            })
        },

        UpdateGoods({commit},{row,index}){
            return new Promise((resolve,reject)=>{
                updateGoods().then((res)=>{
                    if(res.data.data.success){
                        commit('UPDATA_GOODS',{row,index})
                        resolve(res)
                    }
                }).catch(err=>{
                    reject(err)
                })
            })
        },

        DelGoods({commit},index){
            return new Promise((resolve,reject)=>{
                delGoods().then((res)=>{
                    commit('DEL_GOODS',index)
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
            })
        }



    },
    mutations:{
        GET_GOODSIFNO: (state, data) => {
            state.GoodsInfo = data.goods;
            state.GoodsColumn = data.goods_column
        },
        ADD_GOODS:(state,goodsItem)=>{
            state.GoodsInfo.push(goodsItem)
        },
        UPDATA_GOODS:(state,{row,index})=>{
            state.GoodsInfo.splice(index,1,row)
        },
        DEL_GOODS:(state,index)=>{
            state.GoodsInfo.splice(index,1)
        }

    }
}


export default goods