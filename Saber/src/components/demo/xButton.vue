<template>
    <div>
      <el-button @click="show">自定义组件</el-button>
    </div>
</template>

<script>
    export default {
        name: "xButton",
      methods:{
          show(){
            alert(9999)
          }
      }
    }
</script>

<style lang="">

</style>
