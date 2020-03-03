<template>
  <div class="wrapper">
    <page-title title="疫情治安防控平台"></page-title>
    <div class="container">
      <div class="left-content">
        <city-rank></city-rank>
        <trip-search></trip-search>
      </div>
      <div class="main-content">
        <div class="separator"></div>
        <total-num></total-num>
        <total-trend></total-trend>
        <div class="echart-box">
          <complain-statistics></complain-statistics>
          <area-statistics></area-statistics>
        </div>
        <repeat-help></repeat-help>
      </div>
      <div class="right-content">
        <police-list></police-list>
        <hot-words></hot-words>
      </div>
    </div>
    <info-box v-if="infoBoxStatus"></info-box>
    <help-info v-if="helpInfoBoxStatus"></help-info>
    <div class="bg" v-if="infoBoxStatus || helpInfoBoxStatus"></div>
  </div>
</template>

<script>
import pageTitle from '@/components/title.vue'
import cityRank from '@/components/cityRank.vue'
import areaDistribute from '@/components/areaDistribute.vue'
import tripSearch from '@/components/tripSearch.vue'
import policeList from '@/components/policeList.vue'
import hotWords from '@/components/hotWords.vue'
import totalNum from '@/components/totalNum.vue'
import totalTrend from '@/components/totalTrend.vue'
import complainStatistics from '@/components/complainStatistics.vue'
import areaStatistics from '@/components/areaStatistics.vue'
import repeatHelp from '@/components/repeatHelp.vue'
import infoBox from '@/components/infoBox.vue' // 信息弹框
import helpInfo from '@/components/helpInfo.vue' // 警情弹框

import { mapState } from 'vuex'
import store from "@/store"
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['infoBoxStatus', 'helpInfoBoxStatus']),
  },
  components: {
    pageTitle,
    cityRank,
    areaDistribute,
    tripSearch,
    policeList,
    hotWords,
    totalNum,
    totalTrend,
    complainStatistics,
    areaStatistics,
    repeatHelp,
    infoBox,
    helpInfo
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width:100vw;
  height: 100vh;
  background: url('../assets/images/bg.jpg') 100% 100%;
  background-size: 100% 100%;
  overflow: hidden;

  .bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width:100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, .3);
  }

  .container {
    margin-top: 90px;
    width: 100%;
    height: calc(100% - 90px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    .left-content {
      width: 24%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    .main-content {
      width: 48%;
      height: 100%;
      position: relative;
      .separator {
        width:100%;
        height: 6px;
        background: url('../assets/images/main/separator.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 14px; 
        left: 0;
      }
      .echart-box {
        width: 100%;
        height: 30%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
      }
    }

    .right-content {
      width: 24%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>


