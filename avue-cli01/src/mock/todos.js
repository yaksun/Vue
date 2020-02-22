import Mock from 'mockjs'

export default ({ mock }) => {
    // 添加待办
    Mock.mock('/todo/add', 'post', {
        data: new Date().getTime() + ''
    });
}