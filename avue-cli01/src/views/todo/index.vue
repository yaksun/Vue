<template>
    <div>
        <h1 style="text-align: center">待办demo</h1>
      <AddTodo />
        <hr>
        <ListTodo></ListTodo>
    </div>
</template>

<script>
    import AddTodo from '../../components/Todo/AddTodo'
    import ListTodo from '../../components/Todo/ListTodo'
    export default {
        name: "index",

        components:{
            AddTodo,
            ListTodo
        }

    }
</script>

<style scoped>

</style>