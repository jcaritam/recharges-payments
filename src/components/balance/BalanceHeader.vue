<script setup lang="ts">
import { useCurrentBalance } from '@/composables/useCurrentBalance';

const { currentBalance, isLoading, fetchCurrentBalance } = useCurrentBalance()

</script>

<template>
  <header class="flex flex-col justify-center">
    <h2 class="font-semibold text-[#6b788a] flex justify-start items-center gap-1">
      Saldo virtual
      <button
        class="text-[#6fc9c6] font-light"
        aria-label="Ayuda"
        title="Mas informacion sobre el saldo virtual"
      >
        ⓘ
      </button>
    </h2>

    <p class="text-3xl font-semibold flex justify-start items-center gap-2">
      S/ {{ isLoading ? '...' : currentBalance }}
      <button
        class="text-[#6fc9c6] text-base "
        aria-label="Actualizar saldo"
        @click="fetchCurrentBalance"
      >
        <i class="fa-solid fa-arrows-rotate text-xs"></i>
      </button>
    </p>
  </header>
</template>