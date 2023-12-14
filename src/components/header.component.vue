
<template>
 <header>
   <h2>{{ title }}</h2>
 </header>
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
export default defineComponent({
  name: 'HeaderComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  }, 
  setup() {
    return { }
  }
})
</script>

<style scoped>
header {
  background-color: #141414;
  color: #ffffff;
  padding: 1rem;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  text-align: center;
}

header h2 {
  font-size: 1rem;
}
</style>