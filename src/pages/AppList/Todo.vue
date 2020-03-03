<template>
  <div class="container py-4">

    <app-todo-form
      :addFunction="addTodo"
    />
    <app-todo-list
      :todoList="todos"
      class="mt-4"
      :deleteFunction="deleteTodo"
      :inputDone="inputDone"
    />
  </div>
</template>

<script>
import Todo from '@/utils/TodoEntity'

import TodoForm from '@/components/Apps/Todo/Form'
import TodoList from '@/components/Apps/Todo/List'
export default {
  components: {
    'app-todo-form': TodoForm,
    'app-todo-list': TodoList
  },
  data () {
    return {
      todos: []
    }
  },
  computed: {
    async todoList () {
      const {todos, isFetch} = this.$store.getters.todoList
      let todoList = todos
      if (todos.length == 0) {
        if(isFetch == false) {
          const fetchTodos = await this.$store.dispatch('fetchTodoList')
          todoList = fetchTodos
        }
      }
      this.todos = todoList
    }
  },
  methods: {
    addTodo (text) {
      this.$store.dispatch('addTodo', text)
    },
    deleteTodo (id) {
      this.$store.dispatch('deleteTodo', id)
    },
    inputDone (todoItem) {
      this.$store.dispatch('setInputDone', todoItem)
    }
  },
  mounted () {
    const getTodo = async () => {
      const {todos, isFetch} = this.$store.getters.todoList
      let todoList = todos
      if (todos.length == 0) {
        if(isFetch == false) {
          const fetchTodos = await this.$store.dispatch('fetchTodoList')
          todoList = fetchTodos
        }
      }
      this.todos = todoList
    }
    getTodo()
  }
}
</script>
