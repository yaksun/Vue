<template>
    <div style="height: 100%;">

        行: <select name="" id="row" v-model="inputRow">
        <option :value="item" v-for="(item,index) in rowList" :key="index" >{{item}}</option>
         </select>
        <br>
        列:<select name="" id="col" v-model="inputCol">
        <option :value="item" v-for="(item,index) in colList" :key="index" >{{item}}</option>
    </select>
        <hr style="margin: 20px 0">
        <layoutItem :inputRow="inputRow" :inputCol="inputCol" ></layoutItem>
    </div>
</template>

<script>
    import layoutItem from '@/components/InputDrag/LayoutItem.vue'
    export default {
        name: "LeftInput",
        components:{
            layoutItem
        },
        data(){
            return {
                inputRow:20,
                inputCol:12,

               rowList:[20,40,60,80,100],
                colList:[4,8,12,16,20,24]
            }
        },

    }
</script>

<style lang="css">

</style>