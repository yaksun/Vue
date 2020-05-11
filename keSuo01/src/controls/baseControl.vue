<template>
  <div>baseControl页</div>
</template>

<script lang="ts">
import Vue from "vue";

// //常规写法
// export default Vue.extend({
//   name: "BaseControl",
//   data() {
//     return {};
//   },
//   methods: {},
//   computed: {}
// });

//现在的方式以下是vue-property-decorator + vuex-class写法：
import { Component } from "vue-property-decorator";
@Component
export default class BaseControl extends Vue {
  
}


</script>


<style lang="scss" scoped>
</style>
