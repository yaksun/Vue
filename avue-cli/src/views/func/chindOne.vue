<template>
    <div>
        第一个孩子
    </div>
</template>

<script>
    export default {
        name: "chindOne",
        inject:['contain'],
        mounted(){
            console.log(this.contain);
        }

    }
</script>

<style lang="">

</style>
