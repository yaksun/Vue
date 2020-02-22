<template>
  <div class="content" @mouseover="mouseOver" @mouseleave="mouseLeave" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.4)">
    <div class="title">{{helpListObj.title}}</div>
    <div class="police-list-box">
      <div class="police-list" v-for="(item, index) in policeList" :key="index" @click="getHelpInfo(item)">
        <div class="leftbar">
          <div class="police-content">【{{item.type}}】{{item.content}}</div>
          <div class="time">{{item.alertTime | formatTime}}</div>
        </div>
        <div class="rightbar">
          <!-- 警情级别 level 后面加 -->
          <!-- <img src="../assets/images/policelist/tip-bg.png"> -->
          <div>{{item.level | formatLevel}}</div>
        </div>
      </div>
    </div>
    <div class="reset-btn" @click="reset">重置</div>
  </div>
</template>

<script>
import { getPoliceList, getJpInfo } from '@/api/index.js'
import { getDateTimeByStr } from '@/config/util'
import { mapState } from 'vuex'
import store from "@/store"
export default {
  data () {
    return {
      policeList: [],
      loading: true,
      timer: ''
    }
  },
  watch: {
    refreshHelpList: function(val) {
      if(val) {
        this.loading = true;
        console.log(this.helpListObj)
        if(this.helpListObj.index === 0) {
          this.getHelpList(this.helpListObj.param,'', '');
        }
        if(this.helpListObj.index === 1) {
          this.getHelpList('',this.helpListObj.param, '');
        }
        if(this.helpListObj.index === 2) {
          this.getHelpList('','', this.helpListObj.param);
        }
      }
    }
  },
  filters: {
    formatTime (val) {
      return getDateTimeByStr(val, false)
    },
    formatLevel (val) {
      let arr = ['一级警情', '二级警情', '三级警情']
      return arr[val - 1]
    }
  },
  computed: {
    ...mapState(['helpListObj', 'refreshHelpList']),
  },
  methods: {
    reset() {
      this.getHelpList();
      this.helpListObj.title = '求助列表'
    },
    getHelpList(phone, address, wordType) {
      getPoliceList(phone, address, wordType).then(res => {
        this.loading = false;
        if(res.data.length > 0) {
          this.policeList = res.data;
          clearInterval(this.timer);
          this.timer = setInterval(()=>{
            let item = this.policeList.shift();
            this.policeList.push(item);
          },3000)
            
          this.$once('hook:beforeDestroy', () => {          
            clearInterval(this.timer);                                
          });
        } else {
          this.policeList = []
        }
        store.commit('initRefreshHelpList', false)
      }).catch(err => {
        this.loading = false;
      })
    },
    mouseOver() {
      clearInterval(this.timer)
    },
    mouseLeave() {
      this.timer = setInterval(()=>{
        let item = this.policeList.shift();
        this.policeList.push(item);
      },3000)
    },
    getHelpInfo(item) {
      getJpInfo(item.jqId).then(res => {
        store.commit('initHelpInfo', res.data[0])
        store.commit('initHelpInfoBoxStatus', true)
      })
    }
  },
  created () {

  },
  mounted () {
    this.getHelpList();
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
    position: relative;
    width: 100%;
    height: 65%;
    background: url('../assets/images/policelist/bg.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    overflow: hidden;
    .title {
      font-size: 14px;
      color: #fff;
      font-weight: bold;
      margin-top: 4px;
    }
    .police-list-box {
      width: 100%;
      height: calc(100% - 30px);
      overflow-y: auto;
    }
    .police-list {
      width:94%;
      height: 15%;
      background: url('../assets/images/policelist/card-bg.png') no-repeat;
      background-size: 100% 100%;
      margin: 10px auto;
      font-size: 12px;
      display: flex;
      align-items: center;
      cursor: pointer;
      .leftbar {
        width:80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        overflow: hidden;
        text-align: left;
        .police-content {
          margin-bottom: 1%;
          width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .time {
          display: flex;
          align-items: center;
        }
        .time::before {
          content: url('../assets/images/policelist/time.png');
          margin: 0 4px;
        }
      }
      .rightbar {
        width: 82px;
        height: 31px;
        background: url('../assets/images/policelist/tip-bg.png') no-repeat;
        background-size: 100% 100%;
        color:#ff2d2d;
        overflow: hidden;
        div {
          height: 100%;
          text-align: center;
          line-height: 31px;
          transform:rotate(-10deg);
          -ms-transform:rotate(-10deg); 	/* IE 9 */
          -moz-transform:rotate(-10deg); 	/* Firefox */
          -webkit-transform:rotate(-10deg); /* Safari 和 Chrome */
          -o-transform:rotate(-10deg);
        }
      }
    }
    .reset-btn {
      position: absolute;
      right: 3%;
      top: 1%;
      font-size: 14px;
      border-radius: 5px;
      border:1px solid #1077bd;
      width: 44px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      cursor: pointer;
    }
  }
</style>