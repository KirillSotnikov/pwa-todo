<template>
  <div>
    <div class="container py-4">
      <app-list :linkArr="linkArr" />
    </div>
  </div>
</template>

<script>
import List from '@/components/AppList/List'
export default {
  components: {
    'app-list': List
  },
  data () {
    return {
      linkArr: [
        {
          title: 'ToDo List',
          href: '/todo'
        },
        {
          title: 'Calculator',
          href: '/calculator'
        }
      ]
    }
  }
}
</script>
