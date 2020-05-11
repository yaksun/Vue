<template>
    <div>第二个孩子
        <childOne></childOne>
    </div>

</template>

<script>
    import childOne from './chindOne'
    export default {
        name: "childTwo",

        components:{
            childOne
        }

    }
</script>

<style lang="">

</style>
