<template>
  <div class="container py-4">
    <app-todo-form
      :addFunction="addTodo"
    />
    <app-todo-list
      :todoList="todoList"
      class="mt-4"
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
  computed: {
    todoList () {
      return this.$store.getters.todoList
    }
  },
  methods: {
    addTodo (text) {
      this.$store.dispatch('addTodo', text)
    }
  }
  // mounted () {
  //   let todo = new Todo()
  //   const newTodo = todo
  //     .setText('newTodo')
  //     .getObject()
  // }
}
</script>
