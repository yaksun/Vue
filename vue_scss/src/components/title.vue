<template>
  <div class="top-title">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-title {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 86px;
    background: transparent url("../assets/images/title-bg.png") 0 0 no-repeat;
    background-size: 100% 100%;
    z-index: 2;
    line-height: 86px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    letter-spacing: 1px;
  }
</style>