import { computed, ref, onMounted, type Ref } from 'vue';
import type { Company } from '../interfaces/providers.interface';
import { getProviders } from '../services/providers.service';

export function useCompanies(searchTerm: Ref<string>) {
  const companies = ref<Company[]>([]);
  
  const isLoading = ref<boolean>(false);

  const error = ref<string | null>(null);

  const filteredCompanies = computed(() => {
    return companies.value.filter((company) =>
      company.company.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });

  const loadCompanies = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await getProviders();
      companies.value = response.data.companies;
    } catch (err) {
      error.value = 'Failed to load companies';
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(loadCompanies);

  return {
    companies,
    filteredCompanies,
    isLoading,
    error,
    loadCompanies,
  };
}