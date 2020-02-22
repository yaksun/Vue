<template>
    <div style="width: 100%;height: 100%;">
        {{inputList}}
        <el-row style="height: 100%;">
            <el-col style="height: 100%;" :span="4">

                  <draggable tag="ul"
                             :group="{ name: 'form', pull: 'clone', put: false }"
                             ghost-class="ghost"
                             :sort="false"
                             :list="msg"
                  >

                      <li class="field-label"
                          v-for="(item,index) in msg"
                          :key="index"
                      >

                          <span>{{item}}</span>

                      </li>

                  </draggable>

            </el-col>
            <el-col style="height: 100%; border:10px solid black" :span="20">
                <el-row style="height: 100%">
                    <draggable
                            :group="{ name: 'form',put:true }"
                            ghost-class="ghost"
                            :animation="300"
                            v-model="inputList"

                    >

                        <template v-for="(item,index) in inputList">

                            <div  :key="index">
                                {{item}}
                            </div>
                        </template>
                    </draggable>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import draggable from "vuedraggable";
    export default {
        name: "NewDrag",
        components:{
            draggable
        },
       computed:{
            // 报错没有setter的解决方案
            inputList:{
                get(){
                    return this.$store.state.inputList
                },
                set(val){
                    this.$store.state.inputList = val
                }
            }
       },

        data(){
            return {
                msg:['广州','上海','北京','深圳']
            }
        }
    }
</script>

<style lang="css">
.field-label{
    width: 200px;
    height: 100px;
    margin: 20px 0;
    background-color: brown;
}
</style>