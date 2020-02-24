<template>
  <div class="list-group">
    <li
      v-for="(link, index) in linkArr"
      :key="index"
      class="list-group-item"
    >
      <app-list-item
        :linkInfo="link"
      />
    </li>
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
