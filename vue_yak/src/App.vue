<template>
    <div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",
        created(){
          this.$store.dispatch('getInitMsg')
        }
    }
</script>

<style lang="">

</style>
