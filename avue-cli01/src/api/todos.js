import request from '@/router/axios';

export const addTodo = (info) => request({
    url: '/todo/add',
    method: 'post',
    data:{
       info
    }
});
