import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { PaymentScheduleService } from '../api/PaymentScheduleService';


interface IUseDenyApplicationOptions {
    applicationId: number | null;
}

export const useDenyApplication = ({ applicationId }: IUseDenyApplicationOptions) => {
    const { mutate: denyApplication, data: response, isSuccess, isError, error } = useMutation<AxiosResponse, Error, number | null>({
        mutationFn: async (applicationId) => {
            const res = await PaymentScheduleService.denyApplication(applicationId);
            return res;
        }
    });

    return { denyApplication, response, isSuccess, isError, error };
};