<template>
    <div>新闻详情---{{id}}</div>
</template>

<script>
    export default {
        name: "NewsDetail",
      data(){
          return {
            id:''
          }
      },
      mounted(){

        // console.log(this.$route.query.id);
        this.id = this.$route.query.id
      },
      watch:{
          $route:{
            deep:true,
            handler:function (val) {
              // console.log(val);
              this.id = val.query.id
            }
          }
      }
    }
</script>

<style scoped>

</style>
