<template>
  <div>
    <div class="container py-4">
      <app-list />
    </div>
  </div>
</template>

<script>
import List from '@/components/Home/List'
export default {
  components: {
    'app-list': List,
  }
}
</script>
