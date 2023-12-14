<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
// import CompanyList from '../components/recharges/CompanyList.vue';
const CompanyList = defineAsyncComponent(() => import('../components/recharges/CompanyList.vue'));
// import SearchCopmany from '../components/recharges/SearchCompany.vue';
const SearchCopmany = defineAsyncComponent(() => import('../components/recharges/SearchCompany.vue'));


const selectedTab = ref('all')
const items = ref([
  {
    title: 'Todos',
    icon: 'fa-regular fa-heart',
    slug: 'all'
  },
  {
    title: 'Favoritos',
    icon: 'fa-regular fa-star',
    slug: 'favorites'
  },
  {
    title: 'Telefonia',
    icon: 'fa-solid fa-phone',
    slug: 'phone'
  }
])

const term = ref<string>('')

const handlerTerm = (newVal: string) => term.value = newVal

</script>

<template>
  <div class="flex flex-col gap-1">
    <SearchCopmany
      @update:term="handlerTerm"
    />
  </div>

  <div class="mt-3">
    <ul class="max-w-[90vw] flex gap-2 justify-around">
      <li
        v-for="item of items"
        :key="item.title"
        class="flex items-center gap-1 border text-gray-500 py-1 px-5 rounded-3xl text-sm"
        :class="{
          'border-orange-400 ': item.slug === selectedTab,
          'bg-white': item.slug !== selectedTab
        }"
      >
        <i :class="item.icon"></i>
        <span class="font-semibold">{{ item.title }}</span>
      </li>
    </ul>
  </div>

  <div class="mt-3">
    <CompanyList
      :termFromSearch="term"
    />
  </div>
</template>

