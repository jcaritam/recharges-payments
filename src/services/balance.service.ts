import { apiRechargesPayments } from "@/api";
import type { IResponseCurrentBalance } from "@/interfaces/balance.interface";


export const getCurrentBalance = async (): Promise<IResponseCurrentBalance> => {
 try {
  const { data } = await apiRechargesPayments.get<IResponseCurrentBalance>('/getActualBalance');
  return data;
 } catch (error) {
  throw new Error('Could not get current balance');
 }
}