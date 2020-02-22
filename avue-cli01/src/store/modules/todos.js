import {addTodo} from '@/api/todos'

const todos={
    state:{
        list:[]
    },
    actions:{
        addtodo({commit},todo){
            return new Promise((resolve,reject)=>{
                    addTodo(todo).then(res=>{
                        console.log(res.data)
                        commit('ADD_TODO',{todo})
                    })
            })
        }
    },
    mutations:{
        ADD_TODO(state,todo){
            state.list.push(todo)
        }
    }
}

export default  todos