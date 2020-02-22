<template>
  <div>
    <div class="home">
      <div class="funcBtn">
        <myAdd />
      </div>

      <div class="chartcolo">
        <selectColor
          :chartType="choseCWhichOne"
          :definiteChartType="selectChartType"
          v-on:changeColor="changeColo"
        ></selectColor>
      </div>
      <el-button type="primary" @click="compileBtnFunc()">编辑</el-button>
      <mydrag ref="lineChartsFunc" />
      <mycharts />
    </div>
  </div>
</template>
<script>
import myAdd from "@/components/myAdd.vue";
import mydrag from "@/components/mydrag.vue";
import selectColor from "@/components/selectColor.vue";
import mycharts from "@/components/mycharts.vue";
export default {
  data() {
    return {
      choseCWhichOne: "", //选择图表
      selectChartType: "", //详细图表
      seleColor: [] //选择的颜色
    };
  },
  components: {
    myAdd,
    selectColor,
    mydrag,
    mycharts
  },
  methods: {
    changeColo(data) {
      this.seleColor = data;
    },
    compileBtnFunc() {
      this.$refs.lineChartsFunc.parentInfo(false);
    }
  }
};
</script>
<style lang=""></style>
