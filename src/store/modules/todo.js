import Todo from '@/utils/TodoEntity'

export default {
  state: {
    todoList: [

    ]
  },

  mutations: {
    addTodo (state, payload) {
      state.todoList.unshift(payload)
    }
  },

  actions: {
    addTodo({commit}, payload) {
      let todo = new Todo()
      const newTodo = todo
        .setText(payload)
        .getObject()
      commit('addTodo', newTodo)
    }
  },

  getters: {
    todoList (state) {
      return state.todoList
    }
  }
}
