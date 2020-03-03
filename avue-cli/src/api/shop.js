import request from '@/router/axios';
export const getGoodsInfo = () => request({
    url: '/shop/getGoods',
    method: 'get',
   
})

export const addGoods = () => request({
    url: '/shop/addGoods',
    method: 'post',
    
})

export const updateGoods = () => request({
    url: '/shop/updateGoods',
    method: 'post',
    
})

export const delGoods = () => request({
    url: '/shop/delGoods',
    method: 'post',
    
})


export const getSupplierInfo = () => request({
    url: '/shop/getSupplier',
    method: 'get',

})

export const addSupplier = () => request({
    url: '/shop/addSupplier',
    method: 'post',
    
})

export const updateSupplier = () => request({
    url: '/shop/updateSupplier',
    method: 'post',
    
})

export const delSupplier = () => request({
    url: '/shop/delSupplier',
    method: 'post',
    
})

export const updateItem = () => request({
    url: '/shop/updateItem',
    method: 'post',
    
})



