<template>
  <div class="input-group">
    <input
      :type="type"
      :class="`form-control ${newClass}`"
      :name="name"
      :placeholder="placeholder"
      v-model="text"
      @input="changeValue(text, name)"
    >
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'type',
    'placeholder',
    'newClass',
    'changeValue'
  ],
  data () {
    return {
      text: ''
    }
  }
}
</script>
