<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <h1 class="text-4xl font-bold">Home page</h1>
    <button
     class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
     @click="login()"
     >
     Ingresar
    </button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeView',
  setup() {
    return { }
  },
  methods: {
    login() {
      localStorage.setItem('token', "Value")
      this.$router.push({ name: 'recharges-payments' })
    }
  }
})
</script>