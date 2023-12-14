
<script lang="ts" setup>
import { defineAsyncComponent, ref, watch } from 'vue';
import { useCompanies } from '../../composables/useCompanies';

const CompanyItem = defineAsyncComponent(() => import('./CompanyItem.vue'))

interface Props {
  termFromSearch: string
}
const props = defineProps<Props>();
const searchTerm = ref(props.termFromSearch);

const { filteredCompanies, isLoading } = useCompanies(searchTerm);

watch(() => props.termFromSearch, (newValue) => {
  searchTerm.value = newValue;
});
</script>

<template>
  <div v-if="isLoading" role="status">
    <span>Loading...</span>
  </div>
  <ul v-else class="animate-fadeIn">
    <CompanyItem :companies="filteredCompanies" />
  </ul>
</template>
