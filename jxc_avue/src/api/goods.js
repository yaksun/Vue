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