<template>
  <div class="list-group">
      <app-list-item
        v-for="(link, index) in linkArr"
        :key="index"
        class="list-group-item"
        :linkInfo="link"
      />
  </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  props: [
    'linkArr'
  ],
  components: {
    'app-list-item': ListItem
  },
}
</script>
