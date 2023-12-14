
<script setup lang="ts">
import type { Company } from '../../interfaces/providers.interface'

interface Props {
  companies: Company[]
}

defineProps<Props>()

</script>

<template>
   <li
    v-for="(company, index) in $props.companies"
    :key="company._id"
    class="flex gap-2 justify-between items-center py-2"
    :class="{'border-b border-gray-400': index !== $props.companies.length - 1}"
  >
    <div class="flex flex-row items-center gap-2">
      <img
        :src="company.image"
        :alt="company.company"
        class="w-16 h-16 rounded-full" />
      <span class="font-semibold">{{ company.company }}</span>
    </div>
    <div class="mr-3">
      <i class="fa-regular fa-star"></i>
    </div>
  </li>
</template>