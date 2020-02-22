<template>
    <div>
        <el-button type="primary" @click="dialogVisible=true">新增</el-button>

        <draggable
             :options="{
                animation: 150,
                ghostClass: 'blue-background-class'
             }"
             :group="{ name:'widget', pull:'clone',put:false}"
            :sort="false"
        >
            <div style="width: 200px;height: 200px;background: red"></div>
        </draggable>
        <draggable
                :options="{
                animation: 150,
                ghostClass: 'blue-background-class'
              }"

                @change="show"
                @end="moveEnd"
                class="moveBox"
        >
            <el-dialog
                    title="添加图表"
                    :visible.sync="dialogVisible"

            >
                <div>
                    <span>选择图表类型</span>
                    <el-select
                            v-model="chooseType"
                            @change="selectType"
                    >
                        <el-option
                                v-for="(type,index) in typeInfo"
                                :key="index"
                                :value="type.value"
                                :label="type.label"

                        >

                        </el-option>
                    </el-select>
                </div>
            </el-dialog>
        </draggable>
        <widget-form>

        </widget-form>
    </div>
</template>

<script>
    import * as seleData from "../../utils/dataInfor.js";
    import draggable from "vuedraggable";
    import WidgetForm from './WidgetForm'
    export default {
        name: "AddEcharts",
        components:{
            draggable,
            WidgetForm
        },

        data(){
            return {
                typeInfo:seleData.default.choseCharts,
                dialogVisible:false,
                // 选择图表类型
                chooseType:''

            }
        },
        methods:{
            selectType(){

            },
            moveEnd(env){
                // console.log('我移动了')
                var e = env || window.event;

                console.log(e)
            },
            show(){
                console.log('我正在移动')
            }
        }
    }
</script>

<style scoped>

</style>
