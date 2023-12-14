 <script lang="ts" setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['update:term'])
const termKey = ref<string>('')

watch(termKey, (newVal) => {
  emit('update:term', newVal)
})

</script>

<template>
   <label for="searchBusiness" class="font-semibold"> Buscar empresa </label>
    <div class="relative">
      <input
        type="text"
        id="searchBusiness"
        placeholder="ej. Culqi"
        v-model="termKey"
        class="bg-[#f1f1f1] border border-[#e7e5e5] rounded-md px-3 py-3 w-full"
      />
      <i class="fa-solid fa-search text-orange-500 absolute right-3 top-4"></i>
    </div>
</template>