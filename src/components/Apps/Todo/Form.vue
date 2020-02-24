<template>
  <form @submit.prevent="addFunction(body.text)" class="form d-flex">
    <app-input
      name="text"
      type="text"
      placeholder="Your ToDo"
      newClass="dadsad"
      :changeValue="changeValue"
    />
    <app-button
      text="Add ToDo"
      class="ml-3"
      type="submit"
      newClass="btn-outline-success"
    />
  </form>
</template>

<script>
import Input from '@/components/Common/Input'
import Button from '@/components/Common/Button'
export default {
  components: {
    'app-input': Input,
    'app-button': Button
  },
  props: [
    'addFunction'
  ],
  data () {
    return {
      body: {
        text: ''
      }
    }
  },
  methods: {
    changeValue (value, name) {
      this.body[name] = value
    }
  }
}
</script>
