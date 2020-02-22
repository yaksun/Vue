<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  watch: {},
    created () {
        // 获取商品信息
        this.$store.dispatch('GetGoodsInfo')
        //   获取供应商信息
        this.$store.dispatch('GetSupplierInfo')

        //获取商品分类
        this.$store.dispatch('GetGoodsCategoryInfo')
    },

  methods: {},
  computed: {}
}
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>