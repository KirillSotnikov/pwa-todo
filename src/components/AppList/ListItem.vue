<template>
  <router-link :to="`/list${linkInfo.href}`" class="d-flex align-items-center">
    <app-list-icon style="width:24px;" />
    <span class="link text-secondary ml-2">{{linkInfo.title}}</span>
  </router-link>
</template>

<script>
import ListIcon from '@/components/Icons/List'
export default {
  props: [
    'linkInfo'
  ],
  components: {
    'app-list-icon': ListIcon
  }
}
</script>
