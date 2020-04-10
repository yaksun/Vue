
<template>
  <div id="div-base-info-box">
    <el-tabs v-if="AlarmInfoDetail.alarmInfo.hasReport" v-model="activeName" :stretch="true">
      <el-tab-pane label="回告信息" name="回告信息"></el-tab-pane>
      <el-tab-pane label="警情基本信息" name="警情基本信息"></el-tab-pane>
    </el-tabs>

    <div class="div-base-info-title">
      <span>{{activeName}}</span>
    </div>

    <!--警情基本信息-->
    <!-- <div v-show="activeName=='警情基本信息'" class="div-base-infos" style="flex: 1;overflow: auto;">

      <p class="p-title">
        <i class="fa fa-long-arrow-right fa-lg fa-fw"></i>基本信息
      </p>
      <p>
        <span>流水号：</span>
        {{AlarmInfoDetail.alarmInfo.sn}}
      </p>
      <p>
        <span>等级：</span>
        {{AlarmInfoDetail.alarmInfo.levels|getLevels}}
      </p>
      <p>
        <span>案件来源：</span>
        {{AlarmInfoDetail.alarmInfo.origin}}
      </p>
      <p>
        <span>接线员：</span>
        {{AlarmInfoDetail.alarmInfo.recvPerson}}
      </p>
      <p>
        <span>报警时间：</span>
        {{formatDate(new Date(AlarmInfoDetail.alarmInfo.alarmTime),'yyyy-MM-dd hh:mm:ss')}}
      </p>
      <p>
        <span>接警时间：</span>
        {{formatDate(new Date(AlarmInfoDetail.alarmInfo.recvTime),'yyyy-MM-dd hh:mm:ss')}}
      </p>
      <p>
        <span>报警电话：</span>
        {{AlarmInfoDetail.alarmInfo.aPhone|getaPhone}}
      </p>
      <p class="p-title">
        <i class="fa fa-long-arrow-right fa-lg fa-fw"></i>接警信息
      </p>

      <p v-if="AlarmInfoDetail.alarmInfo.sn">
        <span>报警人：</span>
        {{AlarmInfoDetail.alarmInfo.aPerson}}
        <span>性别：</span>
        {{AlarmInfoDetail.alarmInfo.aPersonGender|getGender}}
      </p>

      <p v-else>
        <span>报警人：</span>
        {{AlarmInfoDetail.alarmInfo.aPerson}}
        <span>性别：</span>
      </p>

      <p>
        <span>联系电话：</span>
        {{AlarmInfoDetail.alarmInfo.aPersonPhone|getaPhone}}
      </p>
      <p style="word-break: break-all;">
        <span>警情摘要：</span>
        {{AlarmInfoDetail.alarmInfo.summary}}
      </p>
      <p>
        <span>发案地址：</span>
        {{AlarmInfoDetail.alarmInfo.address}}
      </p>
      <p v-if="AlarmInfoDetail.alarmInfo.sn">
        <span>发案部位：</span>
        {{AlarmInfoDetail.alarmInfo.casePosition|getPositionDataList}}/{{AlarmInfoDetail.alarmInfo.positionType|getPositionDataList}}/{{AlarmInfoDetail.alarmInfo.positionTinyType|getPositionDataList}}
      </p>
      <p v-else>
        <span>发案部位：</span>
      </p>
      <p v-if="AlarmInfoDetail.alarmInfo.sn">
        <span>案件类型：</span>
        {{AlarmInfoDetail.alarmInfo.alarmCategory|getCaseDataList}}/{{AlarmInfoDetail.alarmInfo.alarmType|getCaseDataList}}/{{AlarmInfoDetail.alarmInfo.alarmTinyType|getCaseDataList}}
      </p>
      <p v-else>
        <span>发案部位：</span>
      </p>
      <p>
        <span>创建人员：</span>
        {{AlarmInfoDetail.sendPersonName}}
      </p>
      <p>
        <span>创建单位：</span>
        {{AlarmInfoDetail.sendStationName}}
      </p>
      <p class="p-title">
        <i class="fa fa-long-arrow-right fa-lg fa-fw"></i>指令内容
      </p>
      <p style="padding-left: 20px;word-break: break-all;">{{AlarmInfoDetail.insContent}}</p>
      <p class="p-title">
        <i class="fa fa-long-arrow-right fa-lg fa-fw"></i>关联警情
      </p>
      <p>
        <span>关联警情数：</span>
        {{AlarmInfoDetail.alarmInfo.sn?(AlarmInfoDetail.alarmInfo.repeatSn? AlarmInfoDetail.alarmInfo.repeatSn.length:0):''}}
      </p>
    </div> -->
    <div v-show="activeName=='警情基本信息'" >
      <taskDetail :taskDetail="AlarmInfoDetail" @closeDetail="closeDetail"></taskDetail>
    </div>
    <!--回告信息-->
    <div
      v-show="activeName=='回告信息'"
      class="div-base-infos"
      style="flex: 1;overflow: auto;"
      id="div-base-infos-return"
    >
      <!--基本信息-->
      <p class="p-title">
        <i class="fa fa-long-arrow-right fa-lg fa-fw"></i>基本信息
      </p>
      <p>
        <span>案件类型：</span>
        {{ReportInfoDetail.event.caseTypeId|getCaseDataList}}/{{ReportInfoDetail.event.caseTypePropertyId|getCaseDataList}}/{{ReportInfoDetail.event.propertyTypeId|getCaseDataList}}
      </p>
      <p>
        <span>发案部位：</span>
        {{ReportInfoDetail.event.casePartTypeId|getPositionDataList}}/{{ReportInfoDetail.event.partTypeId|getPositionDataList}}
      </p>
      <p>
        <span>分派时间：</span>
        {{formatDate(new Date(ReportInfoDetail.assignTime),'yyyy-MM-dd hh:mm:ss')}}
      </p>
      <p>
        <span>处警单位：</span>
        {{ReportInfoDetail.eventDeal.stationName}}
      </p>
      <p>
        <span>出警人员：</span>
        {{ReportInfoDetail.eventDeal.polices|getPolicesName}}
      </p>
      <p>
        <span>责任区域：</span>
        {{ReportInfoDetail.eventDeal.dutyAreaName}}
      </p>
      <p>
        <span>受理时间：</span>
        {{formatDate(new Date(ReportInfoDetail.eventDeal.dealTime),'yyyy-MM-dd hh:mm:ss')}}
      </p>
      <p>
        <span>出警时间：</span>
        {{formatDate(new Date(ReportInfoDetail.policeTime),'yyyy-MM-dd hh:mm:ss')}}
      </p>
      <p>
        <span>到场时间：</span>
        {{formatDate(new Date(ReportInfoDetail.policedTime),'yyyy-MM-dd hh:mm:ss')}}
      </p>
      <p>
        <span>值班领导：</span>
        {{ReportInfoDetail.eventDeal.leaderName}}
      </p>
      <!--回告信息-->
      <p class="p-title">
        <i class="fa fa-long-arrow-right fa-lg fa-fw"></i>回告信息
      </p>
      <p>
        <span>警情综述：</span>
        {{ReportInfoDetail.event.eventContent}}
      </p>
      <p>
        <span>领导批示：</span>
        {{ReportInfoDetail.eventDeal.leaderContent}}
      </p>
      <p>
        <span>处警结果：</span>
        {{ReportInfoDetail.eventDeal.eventResult}}
      </p>
      <p>
        <span>回告人员：</span>
        {{ReportInfoDetail.reportName}}
      </p>
      <p>
        <span>回告时间：</span>
        {{formatDate(new Date(ReportInfoDetail.reportTime),'yyyy-MM-dd hh:mm:ss')}}
      </p>

      <div
        v-loading="showLoading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.3)"
      >
        <!--基本信息-->
        <p class="p-title">
          <i class="fa fa-long-arrow-right fa-lg fa-fw"></i>基本信息
        </p>
        <p>
          <span>案件类型：</span>
          {{ReportInfoDetail.event.caseTypeId|getCaseDataList}}/{{ReportInfoDetail.event.caseTypePropertyId|getCaseDataList}}/{{ReportInfoDetail.event.propertyTypeId|getCaseDataList}}
        </p>
        <p>
          <span>发案部位：</span>
          {{ReportInfoDetail.event.casePartTypeId|getPositionDataList}}/{{ReportInfoDetail.event.partTypeId|getPositionDataList}}
        </p>
        <p>
          <span>分派时间：</span>
          {{formatDate(new Date(ReportInfoDetail.assignTime),'yyyy-MM-dd hh:mm:ss')}}
        </p>
        <p>
          <span>处警单位：</span>
          {{ReportInfoDetail.eventDeal.stationName}}
        </p>
        <p>
          <span>出警人员：</span>
          {{ReportInfoDetail.eventDeal.polices|getPolicesName}}
        </p>
        <p>
          <span>责任区域：</span>
          {{ReportInfoDetail.eventDeal.dutyAreaName}}
        </p>
        <p>
          <span>受理时间：</span>
          {{formatDate(new Date(ReportInfoDetail.eventDeal.dealTime),'yyyy-MM-dd hh:mm:ss')}}
        </p>
        <p>
          <span>出警时间：</span>
          {{formatDate(new Date(ReportInfoDetail.policeTime),'yyyy-MM-dd hh:mm:ss')}}
        </p>
        <p>
          <span>到场时间：</span>
          {{formatDate(new Date(ReportInfoDetail.policedTime),'yyyy-MM-dd hh:mm:ss')}}
        </p>
        <p>
          <span>值班领导：</span>
          {{ReportInfoDetail.eventDeal.leaderName}}
        </p>
        <!--回告信息-->
        <p class="p-title">
          <i class="fa fa-long-arrow-right fa-lg fa-fw"></i>回告信息
        </p>
        <p>
          <span>警情综述：</span>
          {{ReportInfoDetail.event.eventContent}}
        </p>
        <p>
          <span>领导批示：</span>
          {{ReportInfoDetail.eventDeal.leaderContent}}
        </p>
        <p>
          <span>处警结果：</span>
          {{ReportInfoDetail.eventDeal.eventResult}}
        </p>
        <p>
          <span>回告人员：</span>
          {{ReportInfoDetail.reportName}}
        </p>
        <p>
          <span>回告时间：</span>
          {{formatDate(new Date(ReportInfoDetail.reportTime),'yyyy-MM-dd hh:mm:ss')}}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Prop} from "vue-property-decorator";
import taskDetail from "@/components/taskList/taskDetail.vue";
@Component({
  components:{
    taskDetail
  },
  filters:{
    getGender:(str: number)=> {

				if(str == 0) {
					return '男'
				} else if(str == 1) {
					return '女'
				} else {
					return '无';
				}

			},
    getLevels:(val:number|string)=>{

				switch(val) {
					case '1':
					case 1:
						return '一级';
						break;
					case '2':
					case 2:
						return '二级';
						break;
					case '3':
					case 3:
						return '三级';
						break;
					case '4':
					case 4:
						return '四级';
						break;
					default:
						return val
				};

      },
      getPolicesName: (arr:Array<any>)=> {
				if(arr) {
					var policeName = arr.map(function(user) {
						return user.policeName;
					});
					return policeName.toString();
				} else {
					return '';
				}
			},
			getPositionDataList: (id:string) =>{
				// var name = "";
				// var str = sessionStorage.getItem("selectPositionDataList");
				// var selectPositionDataList = JSON.parse(str);

				// if(!id) {

				// } else if(id.length == 2) {

				// 	selectPositionDataList.map((item, index) => {
				// 		if(item.id == id) {
				// 			name = item.positionName;
				// 		}
				// 	})
				// } else if(id.length > 2) {

				// 	var id1 = id.substr(0, 2);
				// 	selectPositionDataList.map((item, index) => {
				// 		if(item.id == id1) {
				// 			item.teventPositions.map((item2, index2) => {
				// 				if(item2.id == id) {
				// 					name = item.positionName;
				// 				}
				// 			})
				// 		}
				// 	})

				// }
				// return name;

			},

			//案件类型
			getCaseDataList: (id:string)=> {
				// var name = "";
				// var str = sessionStorage.getItem("selectCaseDataList");
				// var selectCaseDataList = JSON.parse(str);

				// if(!id) {

				// } else if(id.length == 2) {
				// 	selectCaseDataList.map((item, index) => {
				// 		if(item.id == id) {
				// 			name = item.typeName;
				// 		}
				// 	})
				// } else if(id.length == 6 && id.substr(4, 2) == '00') {
				// 	var id1 = id.substr(0, 2);

				// 	selectCaseDataList.map((item, index) => {
				// 		if(item.id == id1) {

				// 			item.tEventTypePropertyModels.map((item2, index2) => {
				// 				if(item2.id == id) {
				// 					name = item2.typeName;
				// 				}
				// 			})

				// 		}
				// 	})

				// } else if(id.length == 6) {
				// 	var id1 = id.substr(0, 2);
				// 	var id2 = id.substr(0, 4) + '00';
				// 	selectCaseDataList.map((item, index) => {
				// 		if(item.id == id1) {

				// 			item.tEventTypePropertyModels.map((item2, index2) => {
				// 				if(item2.id == id2) {

				// 					item2.propertyTypeModels.map((item3, index3) => {
				// 						if(item3.id == id) {
				// 							name = item3.typeName;
				// 						}
				// 					})

				// 				}
				// 			})

				// 		}
				// 	})

				// }
				// return name;
			},
			getaPhone: (str: string)=> {
				if(str) {
					if(str.length > 15) {
						return(str.substr(0, 15) + '...');
					} else {
						return str;
					}

				} else {
					return '';
				}

			}
  }
})
export default class xxx extends Vue {
    @Prop()
    AlarmInfoDetail!:any;
    @Prop()
    userId!:any;
    showLoading: boolean = false;
    ReportInfoDetail:object = {
      event: {},
      eventDeal: {}
    };
    activeName: string = "警情基本信息";
    mounted(){
      this.getPositionDataList();
      this.getCaseDataList1();
    }
    //发案部位
    getPositionDataList() {
      //				const loading2 = this.$loading({
      //					lock: true,
      //					text: '加载中...',
      //					spinner: 'el-icon-loading',
      //					background: 'rgba(0, 0, 0, 0.7)'
      //				});
      // this.$axios({
      //   url: this.PolSituInfo + "/ppolsituInfo/positionDatas",
      //   method: "get"
      // })
      //   .then(res => {
      //     //					loading2.close();
      //     this.selectPositionDataList = res.data;
      //     sessionStorage.setItem(
      //       "selectPositionDataList",
      //       JSON.stringify(res.data)
      //     );
      //   })
      //   .catch(err => {
      //     //					loading2.close();
      //   });
    }

    //案件类型
    getCaseDataList1() {

     
    }

    formatDate(date:string, fmt: string) {
      if (
        (date as any).getFullYear().toString() == "1970" ||
        (date as any).getFullYear().toString() == "NaN"
      ) {
        return "";
      } else {
        function padLeftZero(str:string) {
          return ("00" + str).substr(str.length);
        }

        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            ((date as any).getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        }
        let o:any = {
          "M+": (date as any).getMonth() + 1,
          "d+": (date as any).getDate(),
          "h+": (date as any).getHours(),
          "m+": (date as any).getMinutes(),
          "s+": (date as any).getSeconds()
        };
        let k:any;
        for (k in o) {
          if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + "";
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length === 1 ? str : padLeftZero(str)
            );
          }
        }
        return fmt;
      }
    }
    //回告消息
    getReportInfo() {
      //				console.log(document.querySelector('#div-base-infos-return'));
      //
      //
      //
      //				const loading2 = this.$loading({
      //					target: document.querySelector('#div-base-infos-return'),//设置加载动画区域target:$('#div-base-infos-return'),
      //					lock: true,
      //					text: '加载中...',
      //					spinner: 'el-icon-loading',
      //					background: 'rgba(0, 0, 0, 0.7)'
      //				});

      // this.$axios({
      //   url:
      //     this.PolSituInfo +
      //     "/ppolsituInfo/" +
      //     this.AlarmInfoDetail.businessKey +
      //     "/" +
      //     this.AlarmInfoDetail.id +
      //     "/eventtable?userId=" +
      //     this.userId,
      //   method: "get"
      // })
      //   .then(res => {
      //     //					loading2.close();
      //     //已经关联警情
      //     this.ReportInfoDetail = res.data;
      //   })
      //   .catch(err => {
      //     //					loading2.close();
      //   });
    }
    reloadPage() {
      (this as any).reload();
    }
}
</script>
<style scoped>
#div-base-info-box {
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
}

#div-base-info-box .div-base-info-title {
  text-align: center;
  font-size: 1.3em;
  font-weight: bold;
}

#div-base-info-box .p-title {
  color: #00b3de;
  font-weight: bold;
  margin: 5px 0;
  font-size: 1.1em;
}

#div-base-info-box i {
  color: #00b3de;
}

.div-base-infos p span {
  color: #00e8fe;
  display: inline-block;
  width: 90px;
  text-align: right;
}
</style>