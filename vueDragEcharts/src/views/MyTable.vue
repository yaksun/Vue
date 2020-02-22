<template>
    <div class="container">
        <el-row  style="height: 100%">
            <el-col :span="3"  style="height: 100%" >
                <LeftInput />
            </el-col>
            <el-col :span="21"  style="height: 100%">
                <RightContainer />
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import LeftInput from '@/components/InputDrag/LeftInput.vue'
    import RightContainer from '@/components/InputDrag/RightContainer.vue'
    export default {
        name: "MyTable",
        components:{
            LeftInput,
            RightContainer
        }
    }
</script>

<style lang="css">
*{
    margin: 0;
    padding: 0;
}
.container {
    width: 100%;
    height: 100vh;
    overflow: hidden;

}

</style>