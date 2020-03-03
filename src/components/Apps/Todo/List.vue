<template>
<div class="w-100">
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between"
      v-for="todoItem in todoList"
      :key="todoItem.id"
    >
      <div class="d-flex">
        <div class="form-check form-check-inline">
          <input @change="inputDone(todoItem)" :checked="todoItem.done" class="form-check-input" type="checkbox">
        </div>

        <div class="position-relative">
          <span
            :class="{'line-through' : todoItem.done}"
          >
            {{todoItem.text}}
          </span>

          <input
            v-if="todoItem.editable"
            class="list-input"
            type="text"
          >
        </div>
      </div>

      <div
        class="close close-icon"
        @click="deleteFunction(todoItem.id)"
      >
        <span aria-hidden="true">&times;</span>
      </div>

    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: [
    'todoList',
    'deleteFunction',
    'inputDone'
  ]
}
</script>

<style scoped>
.line-through{
  text-decoration: line-through;
}
.close-icon{
  cursor: pointer;
  transition: all .3s ease-out;
}
.close-icon:hover{
  color: red;
}
.list-input{
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% + 10px);
}
</style>
