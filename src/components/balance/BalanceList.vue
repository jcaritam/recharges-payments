<script setup lang="ts">
import { defineProps } from 'vue'

interface Item {
  title: string;
  icon: string;
  link: string;
}

const props = defineProps({
  items: {
    type: Array as () => Item[],
    required: true
  }
});
</script>

<template>
  <ul class="flex flex-col justify-start items-center gap-4">
    <li
      v-for="item in props.items"
      :key="item.title"
      class="rounded-md text-[#6b788a] py-5 px-4 w-full bg-gray-100 shadow-md"
    >
      <router-link
       :to="item.link"
        prefetch
        class="flex justify-start items-center gap-4"
       >
        <i class="
          fa-regular
          text-sm
          w-8
          h-8
          flex
          justify-center
          items-center
          rounded-xl
          text-white
          bg-[#EB6F25]
        " :class="item.icon"></i>
        <span>
         {{ item.title }}
        </span>
      </router-link>
    </li>
  </ul>
</template>
