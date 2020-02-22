<template>
    <div>
      新闻页面
      <button >返回</button>
      <ul>
        <li v-for="(item,index) in data" :key="index">
         <router-link :to=" `/hello/news/detail?id=${item.id} `">
           {{item.title}}
         </router-link><button @click="replaceGet(item.id)">replace访问</button> --- <button @click="pushGet(item.id)">push访问</button>
        </li>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "News",
      data(){
          return {
            data:[
              {id:1,title:'我是新闻标题1'},
              {id:2,title:'我是新闻标题2'},
              {id:3,title:'我是新闻标题3'}
            ]
          }
      },
      mounted(){
        // console.log(this);
        console.log(this.$router);
      },
      methods:{
        replaceGet(id){
          this.$router.replace('/hello/news/detail/?id='+id)
        },

        pushGet(id){
          this.$router.push('/hello/news/detail/?id='+id)
        }
      }
    }
</script>

<style scoped>

</style>
