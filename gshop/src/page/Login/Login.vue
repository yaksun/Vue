<template>
    <div class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">硅谷外卖</h2>
          <div class="login_header_title">
            <!--样式是使用对象还是使用赋值 要考虑的地方 对象一般是布尔值-->
            <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">短信登录</a>
            <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form @submit.prevent="login">
            <div :class="{on:loginWay}" >
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机号" v-model="phone">
                <button
                        :disabled="!showStatus"
                        class="get_verification"
                        :class="{right_phone:showStatus}"
                        @click.prevent="countTime"
                >{{ computedTime  ? '已发送('+computedTime+'s)' :'获取验证码'}}</button>
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="验证码" v-model="code">
              </section>
              <section class="login_hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div :class="{on:!loginWay}">
              <section>
                <section class="login_message">
                  <input type="text" maxlength="11" v-model="name" placeholder="手机/邮箱/用户名">
                </section>
                <section class="login_verification">
                  <input type="text" maxlength="8" placeholder="密码" v-model="pwd" v-if="buttonShow">
                  <input type="password" maxlength="8" placeholder="密码" v-model="pwd" v-else>
                  <div class="switch_button " :class="buttonShow ? 'on': 'off' "  @click="buttonShow=!buttonShow">
                    <div class="switch_circle" :class="{right:buttonShow}"></div>
                    <span class="switch_text">{{buttonShow ? 'abc' : '...'}}</span>
                  </div>
                </section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                  <img class="get_verification" src="http://localhost:4000/captcha" @click="changeCaptcha" alt="captcha" ref="captcha">
                </section>
              </section>
            </div>
            <button class="login_submit">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <!--$router.back() 要前面是router-link 跳转过来的才有效-->
        <a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-jiantou2"></i>
        </a>
      </div>
      <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip2"/>
    </div>

</template>

<script>
  import {reqSendCode,reqSmsLogin,reqPwdLogin} from '../../api'
  import AlertTip from '../../components/AlertTip/AlertTip'
    export default {
        name: "Login",
      data(){
          return {
            loginWay:false,  // true 短信登录 false手机登录
            phone:'',    //手机号
            code:'',    //短信验证码
            computedTime:0,  //倒计时时间
            alertShow:false ,  //弹框默认隐藏
            alertText:'',  //弹框文本
            name:'',  //用户名
            pwd:'',    //密码
            captcha:'',  //图形验证码
            buttonShow:false
          }
      },
      computed:{
          showStatus(){
            // 第一位是1，后面有十位数字
            return /^1\d{10}$/.test(this.phone)
          }
      },
      components:{
        AlertTip
      },
      methods:{
          // 封装弹框传值
        showAlert(alertText) {
          this.alertShow = true
          this.alertText = alertText
        },
        changeCaptcha(){
          // Date.now()要快于new.Date().getTime()
          this.$refs.captcha.src = "http://localhost:4000/captcha?time="+Date.now()
        },
        // 关闭弹框
        closeTip2(){
          this.alertShow = false
          this.alertText = ''

        },

        // 倒计时和发送短信验证码异步请求
        async  countTime(){
            if(!this.computedTime){
                this.computedTime = 10

              this.timer = setInterval(()=>{
                this.computedTime--

                if( this.computedTime <= 0){
                   clearInterval(this.timer)
                }
              },1000)

                const result = await reqSendCode(this.phone)
                if(result.code ==1 ){
                  this.showAlert(result.msg)
                  // 短信验证接收成功
                  if(this.computedTime>0){
                    this.computedTime = 0
                    // 关闭定时器
                    clearInterval(this.timer)
                    this.timer = null
                  }

                }

            }
        },

       async login(){
          let result
          // 短信登录
          if(this.loginWay){
              let {showStatus,phone,code} = this

            if(!showStatus){
               this.showAlert('手机号不正确')
               return
            }

            if(!/\d{6}.text(code)/){
              this.showAlert('验证码不正确')
              return
            }


              result =  await reqSmsLogin(phone,code)

          }else{
            // 密码登录
            let {name,pwd,captcha} = this
            if(!name){
              this.showAlert('用户名不能为空')
              return
            }
            if(!pwd){
                this.showAlert('密码不能为空')
              return
            }

            if(!captcha){
              this.showAlert('图形验证码不能为空')
              return
            }

            result =  await reqPwdLogin({name,pwd,captcha})
            // result =  await reqPwdLogin()

          }

         // 短信验证接收成功
         if(this.computedTime>0){
           this.computedTime = 0
           // 关闭定时器
           clearInterval(this.timer)
           this.timer = null
         }

          if(result.code == 0){
            const user = result.data

            // this.$cookies.set('user_id', user._id,60*60*24)   //return this
            this.$store.dispatch('recordUser',user)
            // 跳转到个人中心
             this.$router.replace('/profile')
          }else{
            this.changeCaptcha()
            this.captcha = ''
            const msg = result.msg
            this.showAlert(msg)
          }
        }

      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
