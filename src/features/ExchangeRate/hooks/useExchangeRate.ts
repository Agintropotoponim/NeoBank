import { useQuery } from '@tanstack/react-query';
import { ConverterService } from '../api/ConverterService';
import { IRate, IRateResponse } from '../lib/types';


interface IUseExchangeRatesOptions {
    baseCurrency: string;
    updateInterval: number;
}

export const useExchangeRates = ({ baseCurrency, updateInterval }: IUseExchangeRatesOptions) => {
    const { data, isLoading: isRatesLoading, error: ratesError} = useQuery<IRateResponse>({
      queryKey: ['exchangeRates', baseCurrency],
      queryFn: async () => {
        const response = await ConverterService.getAll(baseCurrency);
        return response.data;
      },
      refetchInterval: updateInterval,
    });

    const rates: IRate = data?.conversion_rates ?? {};
    return { rates, isRatesLoading, ratesError };
};