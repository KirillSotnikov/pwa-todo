import Todo from '@/utils/TodoEntity'
import { getLocalStorageByName, addLocalStorageByName, deleteLocalStorageByName, updateLocalStorageByName } from '@/utils/LocalStorage'

export default {
  state: {
    todoList: [

    ],
    isFetch: false
  },

  mutations: {
    fetchTodoList (state, payload) {
      state.todoList = payload
    },
    addTodo (state, payload) {
      state.todoList.push(payload)
    },
    deleteTodo (state, payload) {
      const idx = state.todoList.findIndex(item => item.id == payload)
      state.todoList.splice(idx, 1)
    },
    updateTodo (state, {id, todo}) {
      const todoItem = state.todoList.find(item => item.id == id)
      todoItem.done = todo.done
    },
    setFetch (state, payload) {
      state.isFetch = payload
    }
  },

  actions: {
    fetchTodoList({commit}) {
      const data = getLocalStorageByName('todos')
      commit('fetchTodoList', data)

      commit('setFetch', true)
      return data
    },
    addTodo({commit}, payload) {
      try {
        let todoEntity = new Todo()
        const todo = todoEntity
          .setText(payload)
          .getObject()

        addLocalStorageByName('todos', todo)

        commit('addTodo', todo)
      } catch (err) {
        console.error(err);
      }
    },
    deleteTodo ({commit}, payload) {
      try {
        deleteLocalStorageByName('todos', payload)

        commit('deleteTodo', payload)
      } catch (err) {
        console.log(err);
      }
    },
    setInputDone ({commit, dispatch}, payload) {
      try {
        const id = payload.id
        let todoEntity = new Todo()
        const todo = todoEntity
          .setObject(payload)
          .setDone(!payload.done)
          .getObject()

        updateLocalStorageByName('todos', id, todo)

        commit('updateTodo', {id, todo})

      } catch (err) {

      }
    }
  },

  getters: {
    todoList (state) {
      return {
        todos: state.todoList,
        isFetch: state.isFetch
      }
    }
  }
}

