<template>
  <div class="container">
    <app-calculator />
  </div>
</template>

<script>
import CalculatorApp from '@/components/Apps/Calculator/CalculatorApp'
export default {
  components: {
    'app-calculator': CalculatorApp
  }
}
</script>
