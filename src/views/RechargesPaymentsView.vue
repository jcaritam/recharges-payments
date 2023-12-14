
<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
// import BalanceHeader from '@/components/balance/BalanceHeader.vue';
const BalanceHeader = defineAsyncComponent(() => import('@/components/balance/BalanceHeader.vue'));
// import BalanceInfo from '@/components/balance/BalanceInfo.vue';
const BalanceInfo = defineAsyncComponent(() => import('@/components/balance/BalanceInfo.vue'));
// import BalanceActions from '@/components/balance/BalanceActions.vue';
const BalanceActions = defineAsyncComponent(() => import('@/components/balance/BalanceActions.vue'));

// import BalanceList from '@/components/balance/BalanceList.vue';
const BalanceList = defineAsyncComponent(() => import('@/components/balance/BalanceList.vue'));

const items = ref([
  {
    title: 'Recargas',
    icon: 'fa-solid fa-mobile',
    link: '/recharges'
  },
  {
    title: 'Pago de servicios',
    icon: 'fa-solid fa-credit-card',
    link: '#'
  },
  {
    title: 'Historial de ganancias y operaciones',
    icon: 'fa-solid fa-history',
    link: '#'
  }
])
const initialBalance = '0.00';
</script>

<template>
  <section class="flex flex-col justify-center gap-1">
    <BalanceHeader :initial-balance="initialBalance" />
    <BalanceInfo />
    <BalanceActions />
    <hr class="my-2"/>
    <BalanceList :items="items" />
  </section>
</template>
