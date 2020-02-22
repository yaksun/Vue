
import { getSupplierInfo,addSupplier,updateSupplier,delSupplier,updateItem} from '@/api/shop'



const supplier = {
        state:{
            supplierInfo: [],
            supplierItem:{}
           
        },
      
      
        actions:{
             
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

              AddSupplier({commit},supplierItem){
                return new Promise((resolve,reject)=>{
                  addSupplier().then((res)=>{
                    console.log(res)
                   if(res.data.data.success){
                        commit('ADD_SUPLLIER',supplierItem);
                        resolve(res)

                   }
                   
                  }).catch(err =>{
                    reject(err)
                  })
                })
              },

              UpdateSupplier({commit},{row,index}){
                  return new Promise((resolve,reject)=>{
                    updateSupplier().then((res)=>{
                        if(res.data.data.success){
                            commit('UPDATA_SUPPLIER',{row,index})
                            resolve(res)
                        }
                    }).catch(err=>{
                      reject(err)
                    })
                  })
              },

              DelSupplier({commit},index){
                return new Promise((resolve,reject)=>{
                  delSupplier().then((res)=>{
                      commit('DEL_SUPPLIER',index)
                      resolve(res)
                  }).catch(err=>{
                    reject(err)
                  })
                })
              },

              // 保存货商信息
              UpdateItem({commit},row){
                return new Promise((resolve,reject)=>{
                    updateItem().then((res)=>{
                         commit('UPDATE_ITEM',row)
                        resolve(res)
                    }).catch(err=>{
                      reject(err)
                    })
                })
              }
         
        },
        mutations:{
        
          SET_SUPPLIERIFNO: (state, supplierInfo) => {
            state.supplierInfo = supplierInfo;
          },
          ADD_SUPLLIER:(state,supplierItem)=>{
            state.supplierInfo.push(supplierItem)
          },
          UPDATA_SUPPLIER:(state,{row,index})=>{
            state.supplierInfo.splice(index,1,row)
          },
          DEL_SUPPLIER:(state,index)=>{
            state.supplierInfo.splice(index,1)
          },
          UPDATE_ITEM:(state,row)=>{
            state.supplierItem = row
          }
        }
}


export default supplier