import { ref, onMounted } from 'vue';
import { apiRechargesPayments } from '@/api';
import type { IResponseCurrentBalance } from '@/interfaces/balance.interface';

export const useCurrentBalance = () => {
  const currentBalance = ref<string | null>(null);
  const isLoading = ref<boolean>(false);
  const error = ref<string| null>(null);

  async function fetchCurrentBalance() {
    isLoading.value = true;
    error.value = null;

    try {
      const { data } = await apiRechargesPayments.get<IResponseCurrentBalance>('/getActualBalance');
      currentBalance.value = data.data.balanceCommerce;
    } catch (err) {
      error.value = 'Could not get current balance';
      console.error('Could not get current balance', err);
    } finally {
      isLoading.value = false;
    }
  }

  onMounted(fetchCurrentBalance);

  return {
    currentBalance,
    isLoading,
    error,
    fetchCurrentBalance,
  };
}