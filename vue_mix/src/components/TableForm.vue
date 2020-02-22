<template>
    <div>
      <el-form class="form-container">
        <el-row>
          <el-col :span="4">
           <span>供应商来源</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="4">
           <span>供应商类型</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
           <span>供应商全称</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="4">
            <span>公司电话</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <span>法定代表人</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="4">
            <span>传真</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <span>注册资本(万元)</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="4">
            <span>网址</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <span>工商登记号</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="4">
            <span>纳税资格</span>
          </el-col>
          <el-col :span="8">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="一般纳税人"></el-checkbox>
              <el-checkbox label="小规模"></el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <span>成立时间</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="4">
            <span>员工人数</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <span>公司注册地址</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="4">
            <span>微信公众号</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <span>公司办公地址</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="4">
            <span>公司网址</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <span>自主品牌</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="4">
            <span>代理品牌</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <span>供货周期</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="4">
            <span>发票类型</span>
          </el-col>
          <el-col :span="8">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">供应商类型</el-col>
          <el-col :span="20">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="生产厂商"></el-checkbox>
              <el-checkbox label="代理商"></el-checkbox>
              <el-checkbox label="经销商"></el-checkbox>
              <el-checkbox label="外包商"></el-checkbox>
              <el-checkbox label="其它"></el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><span>主要证书</span></el-col>
          <el-col :span="20">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><span>重要客户名称</span></el-col>
          <el-col :span="20">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><span>主要资质</span></el-col>
          <el-col :span="20">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><span>主要产品</span></el-col>
          <el-col :span="20">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><span>主要产品授权</span></el-col>
          <el-col :span="20">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><span>价格体系/折扣</span></el-col>
          <el-col :span="20">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><span>付款条件</span></el-col>
          <el-col :span="20">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="concat">
            <span>技术支持和服务承诺</span>
          </el-col>
          <el-col :span="20" class="concat">
              <el-row>
                <el-col :span="10">
                  <span>售后服务响应模式</span>
                </el-col>
                <el-col :span="14">
                  <el-checkbox-group v-model="checkList">
                    <el-checkbox label="7*24"></el-checkbox>
                    <el-checkbox label="其它"></el-checkbox>
                  </el-checkbox-group>
                </el-col>
              </el-row>
              <el-row>
              <el-col :span="10">
                <span>提供远程技术支持</span>
              </el-col>
              <el-col :span="14">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="是"></el-checkbox>
                  <el-checkbox label="否"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <span>提供售前技术方案支持</span>
              </el-col>
              <el-col :span="14">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="是"></el-checkbox>
                  <el-checkbox label="否"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <span>提供免费样机</span>
              </el-col>
              <el-col :span="14">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="是"></el-checkbox>
                  <el-checkbox label="否"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <span>技术培训内容</span>
              </el-col>
              <el-col :span="14">
                <el-input v-model="form.name"></el-input>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <span>提供产品认证工程师5个</span>
              </el-col>
              <el-col :span="14">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="是"></el-checkbox>
                  <el-checkbox label="否"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <span>提供集成商认证证书</span>
              </el-col>
              <el-col :span="14">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="是"></el-checkbox>
                  <el-checkbox label="否"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <span>免费培训和认证考试名额</span>
              </el-col>
              <el-col :span="14">
                <el-input v-model="form.name"></el-input>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <span>提供维修备品配件</span>
              </el-col>
              <el-col :span="14">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="是"></el-checkbox>
                  <el-checkbox label="否"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <span>提供本地售后服务网点</span>
              </el-col>
              <el-col :span="14">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="是"></el-checkbox>
                  <el-checkbox label="否"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <span>返点</span>
              </el-col>
              <el-col :span="14">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="是"></el-checkbox>
                  <el-checkbox label="否"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <span>提供市场活动经费</span>
              </el-col>
              <el-col :span="14">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="是"></el-checkbox>
                  <el-checkbox label="否"></el-checkbox>
                  <el-checkbox label="特定"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <span>其它:</span>
              </el-col>
              <el-col :span="14">
                 <el-input v-model="form.name"></el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><span>主要成功案例</span></el-col>
          <el-col :span="20">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-row>
      </el-form>

    </div>
</template>

<script>
    export default {
        name: "TableForm",
      data() {
        return {
          checkList:'',
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          }
        }
      },

      methods: {
        onSubmit() {
          console.log('submit!');
        }
      }
    }
</script>

<style lang="">
  /*.form-container{*/
    /*width: 70%;*/
    /*margin: 0 15%;*/
  /*}*/
.form-container .el-col{
  border: 1px solid #ccc;
  height: 25px;

}
.form-container .el-input , .el-input__inner{
  height: 25px;
}
  .form-container .concat{
    height: 325px;
  }
</style>
