<template>
 <div>
   <div class="header">
    <router-link to="/hello/home">首页</router-link>
     <router-link to="/hello/news">新闻</router-link>
     <router-link to="/hello/sport">体育</router-link>
     <router-view></router-view>
   </div>
 </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
