/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回最初信息的接口
Mock.mock('/initmsg', {code:0, data: data.initMsg})

// 模拟数据
Mock.mock('/lastitem', {code:0, data: {}})


// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
