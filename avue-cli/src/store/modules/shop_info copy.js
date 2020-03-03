
import { getGoodsInfo, getSupplierInfo} from '@/api/shop'



const shop_info = {
        state:{
            goodsInfo: [],
            supplierInfo: []
        },
      
      
        actions:{
            GetGoodsInfo ({ commit }) {

             
                return new Promise((resolve, reject) => {
                  getGoodsInfo().then((res) => {
                    const data = res.data.data;
                 
                    commit('SET_GOODSIFNO', data.goods);
                    resolve(data);
                  }).catch(err => {
                    reject(err);
                  })
                })
              },
              
              GetSupplierInfo ({ commit }) {
                return new Promise((resolve, reject) => {
                  getSupplierInfo().then((res) => {
                    const data = res.data.data;
                  //  console.log(data.supplier)
                    commit('SET_SUPPLIERIFNO', data.supplier);
                 
                    resolve(data);
                  }).catch(err => {
                    reject(err);
                  })
                })
              },
        },
        mutations:{
          SET_GOODSIFNO: (state, goodsInfo) => {
            state.goodsInfo = goodsInfo;
          },
          SET_SUPPLIERIFNO: (state, supplierInfo) => {
            state.supplierInfo = supplierInfo;
          },
        }
}


export default shop_info