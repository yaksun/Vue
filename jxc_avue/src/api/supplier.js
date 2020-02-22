import request from '@/router/axios';


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



