import { apiRechargesPayments } from "@/api";
import type { IResponseProviders } from "@/interfaces/providers.interface";


export const getProviders = async (): Promise<IResponseProviders> => {
 try {
  const { data } = await apiRechargesPayments.get<IResponseProviders>('/getProviders');
  return data;
 } catch (error) {
  throw new Error('Could not get providers');
 }

}
