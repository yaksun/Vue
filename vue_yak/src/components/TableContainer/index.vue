<template>
  <div class="container" >
    <div class="showItem" >
      <el-row v-for="(rowNum,index) in 10" :key="index" >
        <el-col :span="2"  v-for="(colNum,index) in 12" :key="index">
          <draggable :id="'parent'+rowNum+colNum" >
            <div  :id="'row'+rowNum+'col'+colNum"></div>
          </draggable>
        </el-col>
      </el-row>

    </div>

  </div>

</template>

<script>
  import DragItem from '../DragItem'
  import { Button } from 'element-ui';
  import PubSub from 'pubsub-js'
  import Vue from 'Vue';
  import {mapState} from 'vuex'
  import draggable from 'vuedraggable'
  Vue.use(Button);

  let _ = require('lodash')
  export default {
        name: "index",
        mounted(){
          this.$nextTick(()=>{

            // 当页面渲染后,拼装表格每个单元格的信息
            let oTotal = document.getElementsByClassName('container')[0]
            let oContainer = document.getElementsByClassName('showItem')[0]
             let oRow = oContainer.getElementsByClassName('el-row')
            let {colCoorList} = this ;
            for(let i=0;i<oRow.length;i++){
                let item = {"oRow":oRow[i].offsetTop,"oCol":[]}
                for(let j=0;j<oRow[i].children.length;j++){
                  // 要加上整个容器的左边距
                  let temp = oRow[i].children[j].offsetLeft+ oTotal.offsetLeft
                  item["oCol"].push(temp)
                }


              colCoorList.constH = oRow[0].offsetHeight
              colCoorList.constW = oRow[0].children[0].offsetWidth

              colCoorList.push(item)

            }

            }),
            PubSub.subscribe('getItem',(val,msg)=>{
              console.log(msg);
              this.targetItem = msg
            })
        },

    data(){
         return {
           colCoorList:[],
           targetItem:{},

         }
    },
     components:{
       DragItem,
       draggable
     },
      methods:{
          // 动态挂载子组件
        dyncMount(objDom){
          var Profile = Vue.extend(DragItem);
          // 创建 Profile 实例，并挂载到一个元素上。
          new Profile().$mount(objDom);
        }
      },
      computed:{
        ...mapState(['dragList']),
        mouseCoor:{
          get(){
            return this.$store.state.mouseCoor
          },

        },
        lastItem:{
          get(){
            return this.$store.state.lastItem
          },
          set(val){
            this.$store.state.lastItem = val
          }

        },
      // 获取具体的单元格
        getCoor(){
          let {mouseCoor,colCoorList} = this
          // console.log(colCoorList);
          let obj={}
            for(let i=0;i<colCoorList.length;i++){
              // 先确定鼠标在哪一行
                if(mouseCoor.y>colCoorList[i].oRow && mouseCoor.y< (colCoorList[i].oRow+colCoorList.constH) ){

                     for(let j=0;j<colCoorList[i].oCol.length;j++){
                       if(mouseCoor.x>=colCoorList[i].oCol[j] && mouseCoor.x <= (colCoorList[i].oCol[j]+colCoorList.constW)){
                         // console.log('行:'+(i + 1)+',列'+(j+1));
                         obj.oRow = i+1
                         obj.oCol = j+1
                       }
                     }
                }
            }

            return obj
        },

        // 根据拖拽的元素和原数组对比，是否可以渲染dom
        changeStatus(){
          let {targetItem,dragList} = this
          let flag=false
            for(let i=0;i<dragList.length;i++){
              if(targetItem.index == i && targetItem.txt== dragList[i].title){
                    flag = true
              }
            }

            return flag
        }



      },
    watch:{
      // inputList(oldval,val){
      //   // console.log(oldval,val);
      //   console.log(_.difference(oldval, val));
      //
      // }
      // 根据拖动的元素ID来动态挂载
      async getCoor(val){
        const {changeStatus,targetItem} =this
      // console.log(Object.keys(val).length);
          if(Object.keys(val).length>0){
            let parentId = 'parent'+val.oRow+val.oCol
            let objId = 'row'+val.oRow+'col'+val.oCol
            console.log(objId);
            let objDom = document.getElementById(objId)
            // console.log(objDom);
            // console.log(changeStatus);
            // 如果元素匹配正确，再去挂载
            if(changeStatus){
              // 改變state中lastItem的值
              this.lastItem = targetItem
              console.log(this.lastItem);
              await this.dyncMount(objDom)
            }
          }




      }

    }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.container
    border 5px dashed blueviolet
    position relative

    .showItem
      z-index 10
      height 100%
      width 100%
      position absolute
      top 0
      left 0
      .el-row
          height 50px
         width 100%
      .el-col
          border 1px solid blueviolet
          height 50px


</style>
