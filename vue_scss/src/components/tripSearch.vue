<template>
  <div class="content">
    <div class="title">新冠肺炎确诊患者相同行程查询工具</div>
    <div class="search-cont">
      <el-form label-width="60px" label-position="right">
        <el-form-item label="日期：" label-width="60px">
          <el-date-picker
            v-model="queryForm.time"
            type="date"
            placeholder="选择日期时间"
            size="small"
            :clearable="false"
            value-format="yyyy-MM-dd"
            popper-class="date-box"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="车次：" label-width="60px">
          <el-input placeholder="请输入" size="mini" v-model.trim="queryForm.carNum"></el-input>
        </el-form-item>
        <el-form-item label="地区：" label-width="60px">
          <el-input placeholder="请输入" size="mini" v-model.trim="queryForm.area"></el-input>
        </el-form-item>
      </el-form>
      <!-- <div class="search-btn" @click="searchInfo">立即查询</div> -->
      <el-button class="search-btn" :loading="btn_loading" @click="searchInfo">立即查询</el-button>
      <div class="line"></div>
    </div>
    <div class="info-box">
      <div @click="getInfoBox(item)" class="traffic-box" v-for="(item, index) in trafficArr" :key="index">
        <div class="top-box">
          <div class="left-box">
            <img :src="getImgUrl(item.trafficType)">
            <p class="traffic-name">{{item.trafficType | formatTraffic}}</p>
            <p class="text text1">{{item.trainName}}</p>
          </div>
          <div class="right-box">{{item.dateTime}}</div>
        </div>
        <div class="middle-box">
          <div class="text text2">出发：{{item.departureStation}}</div>
          <div v-if="item.destination" class="text text2">到达：{{item.destination}}</div>
          <div class="text text2">来源：{{item.clueSource}}</div>
        </div>
        <div class="bottom-box">描述: {{item.describes}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchTrip, getCarInfo, searchRoute } from '@/api/index.js'
import store from "@/store"
export default {
  data () {
    return {
      queryForm: {
        time: '2020-01-26',
        carNum: '',
        area: ''
      },
      trafficArr: [],
      btn_loading: false
    }
  },
  filters: {
    formatTraffic(type) {
      let arr = ['全部', '飞机', '火车', '地铁', '公交车', '长途客车', '出租车', '轮船', '其他'];
      return arr[type]
    }
  },
  methods: {
    getImgUrl(id) {
      return require("@/assets/images/icon/"+id+".png");
    },
    searchInfo() {
      this.btn_loading = true
      searchTrip(this.queryForm.time, this.queryForm.carNum, this.queryForm.area).then(res => {
        console.log(res.data);
        this.btn_loading = false
        this.trafficArr = res.data;
      })
    },
    getInfoBox(item) {
      store.commit('initInfo', item)
      store.commit('initInfoBoxStatus', true)
    }
  },
  mounted() {
    this.searchInfo();
  }
}
</script>

<style lang="scss" scoped>
  /* 滚动条 */
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #00afff;
  }
  /*定义最上方和最下方的按钮*/
  ::-webkit-scrollbar-button {
    background: transparent;
  }

  .content {
    width: 100%;
    height: 68%;
    background: url('../assets/images/search/bg.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    overflow: hidden;
    .title {
      font-size: 14px;
      color: #fff;
      font-weight: bold;
      margin-top: 4px;
    }

    .line {       
      width: 98%;
      height: 1px;
      border-top: 1px dotted #03aae1;
      margin: 10px auto 5px;
    }

    .info-box {
      width:100%;
      height:calc(100% - 220px);
      overflow-y: auto;
      .traffic-box {
        width: 96%;
        height: 80px;
        background: url('../assets/images/search/card-bg.png') no-repeat;
        background-size: 100% 100%;
        margin: 5px auto;
        font-size: 14px;
        overflow: hidden;
        .top-box {
          width: 96%;
          margin: 5px auto;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .left-box {
            display: flex;
            align-items: center;
            width: 70%;
            .traffic-name {
              margin-right: 4px;
            }
            img {
              margin-right: 6px;
            }
          }
        }
        .middle-box {
          width: 96%;
          margin: 5px auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .bottom-box {
          width: 96%;
          margin: 5px auto;
          font-size: 12px;
          color: #01c5ff;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }

    .text {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-align: left;
    }

    .text1{
      width: 50%;
    }

    .text2 {
      width:30%;
    }

    .search-cont {
      width:100%;
      height: auto;
    }
    
    .search-cont /deep/ .el-form-item__label {
      color: #fff;
    }

    .search-cont /deep/ .el-form-item {
      margin-bottom: 6px;
    }

    .search-cont /deep/ .el-input__inner {
      background-color: transparent;
      border-radius: 3px;
      border: solid 1px #2bd0ff;
      color: #2bd0ff;
    }

    .search-cont /deep/ .el-date-editor.el-input, .search-cont /deep/ .el-date-editor.el-input__inner {
      width:100%;
    }

    .search-cont {
      .el-form {
        width: 90%;
        margin:8px auto;
      }
    }

    .search-btn {
      width: 107px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      font-size: 14px;
      border-radius: 5px;
      border:1px solid #1077bd;
      font-weight: bold;
      color: #00a0ff;
      margin: 0 auto;
      cursor: pointer;
    }

    .el-button {
      background: transparent;
      padding: 0;
    }
    .el-button.is-loading:before {
      background: transparent;
    }
  }
</style>