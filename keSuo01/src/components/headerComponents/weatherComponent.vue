<template>
  <div class="weather-box">
    <div class="weather">
      <img :src='weatherImage()'>
      <span>{{weatherName}}</span>
    </div>
    <div class="temperature">{{temperature}}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from "vue-property-decorator";
import { weather_ui_model } from "@/model/sysManage/weather_model.ts";
import { weatherService } from '@/bll/sysManage/weatherService';
import { Action, Getter, State, Mutation } from "vuex-class";
@Component
export default class Weather extends Vue {
  @Getter('getCityName') cityName: any;
   /** 天气 */
  public temperature: string = '';
  public weatherName: string = '';

  public weatherImage() {
    if(this.weatherName.indexOf("雨") > 0) {
      return "./static/images/weather/xiayu.png";
    } else if(this.weatherName.indexOf("雪") > 0) {
      return "./static/images/weather/xiaxue.png";
    } else if(this.weatherName == "晴转多云" || this.weatherName == "多云转晴") {
      return "./static/images/weather/duoyunzhuanqing.png";
    } else if(this.weatherName == "多云" || this.weatherName.indexOf("阴") > 0) {
      return "./static/images/weather/duoyun.png";
    } else if(this.weatherName == "晴") {
      return "./static/images/weather/qingtian.png";
    } else {
      return "./static/images/weather/duoyun.png";
    }
  }

  created () {
    this.getWeather(); // 天气
  }

  // 获取天气
  private async getWeather() {
    let params = new weather_ui_model();
    params.cityName = this.cityName;
    let weatherdata = await new weatherService().getCityWeather(params);
    if (weatherdata.code == "200" && weatherdata.msg == "ok") {
      this.weatherName = weatherdata.data.results[0].daily[0].text_day;
      this.temperature = weatherdata.data.results[0].daily[0].low + '~' + weatherdata.data.results[0].daily[0].high + '°C';
    }
  }
}
</script>

<style lang="scss" scoped>
.weather-box {
  position: absolute;
  left: 18px;
  display: flex;
  align-items: center;
  color: #fff;

  .weather {
    display: flex;
    align-items: center;
    font-size: 18px;

    img {
      width:46px;
      margin-right: 12px;
    }
  }

  .temperature {
    margin-left: 13px;
    font-size: 24px;
  }
}
</style>