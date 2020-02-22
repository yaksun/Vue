<template>
  <div >
      <el-button type="warning" size="small" >{{lastItem.txt}}</el-button>
  </div>
</template>

<script>

  import draggable from 'vuedraggable'
  import PubSub from 'pubsub-js'
  export default {
    name: "index",

    created() {
      // PubSub.subscribe('getItem',(msg)=>{
      // // console.log(msg);
      // }),
      //  console.log( window.$vm.$store)


    },

    components: {
      draggable
    },
    computed: {
      lastItem: {
        get() {
          return window.$vm.$store.state.lastItem
        },


      },

    },

  }
</script>

<style lang="">

</style>
