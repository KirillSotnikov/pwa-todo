<template>
  <router-link :to="`/list${linkInfo.href}`">
    <span class="link text-info">{{linkInfo.title}}</span>
  </router-link>
</template>

<script>
export default {
  props: [
    'linkInfo'
  ]
}
</script>
