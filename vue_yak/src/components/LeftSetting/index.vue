<template>
    <div class="setting">
      <h3>数据源</h3>
      <draggable tag="ul"
                 :group="{ name: 'form', pull: 'clone', put: false }"
                 ghost-class="ghost"
                 :sort="false"
                 :list="dragList"
                 @start="checkStart"
                 @end="checkEnd"
                 :move="checkMove"
      >

        <li class="field-label"
            v-for="(item,index) in dragList"
            :key="index"
            ref="dragSource"


        >

         <el-button type="primary" size="small"  class="dragAll"   >{{item.title}}</el-button>

        </li>

      </draggable>
    </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import {mapState} from 'vuex'
  import PubSub from 'pubsub-js'
    export default {
        name: "DragLayout",

      computed:{
        ...mapState(['dragList']),
          // 鼠标坐标
        mouseCoor:{
          get(){
            return this.$store.state.mouseCoor
          },
          set(val){
            this.$store.state.mouseCoor = val
          }
        },

      },

      components:{
        draggable
      },
      methods:{
        checkMove(event){

            },
        checkEnd(event){
          // console.log(event.originalEvent.clientX);
          // 当拖拽完成时获取鼠标坐标
          let  oX = event.originalEvent.clientX
          let oY = event.originalEvent.clientY

          this.mouseCoor ={"x":oX,"y":oY}
          console.log(this.mouseCoor);

        },
        // 当每次开始的时候就发布拖拽元素的信息
        checkStart(event){
          console.log(event);
          let item={"txt":event.item.innerText,"index":event.oldDraggableIndex}
          PubSub.publish('getItem',item)

        },



      }
    }
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.setting
    border 1px dashed brown
 .field-label:hover
    color  #409eff
    border 1px dashed #409eff
  .el-button
      margin-bottom 10px
</style>
