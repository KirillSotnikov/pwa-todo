<template>
  <button
    :type="type"
    :class="`btn ${newClass}`"
  >
    {{text}}
  </button>
</template>

<script>
export default {
  props: [
    'text',
    'newClass',
    'type'
  ]
}
</script>

<style scoped>
button {
  white-space: nowrap;
}
</style>
