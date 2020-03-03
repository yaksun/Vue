# 手机版点餐系统

安装stylus
cnpm i stylus stylus-loader --save
设置使用stylus
<style lang="stylus" rel="stylesheet/stylus">

安装vue-router
cnpm i vue-router --save
配置router

阿里图标的另一种用法
选好图标后，点击查看在线链接
页面中引入网址就可以了
  <link rel="stylesheet" href="http://at.alicdn.com/t/font_518606_6676bmcalnrhehfr.css"></link>


缓存组件
keep-alive

图片懒加载
1.安装cnpm i vue-lazyload --save
2.main.js中引入并注册
3.要用到的地方使用   <img :src='food.image'>  换成 <img v-lazy="food.image">

组件按需加载 顶级路由用的多
语法 const Miste=()=>import('../page/Miste/Miste')
把打包的js切片 有几个import就分成几片
npn run build 打包后查看效果

装X神器 查看插件所占大小
npm run build --report

手机登录 容联 云通讯
13716962779
用户名登录
abc 123
