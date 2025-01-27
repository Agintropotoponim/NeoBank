import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { PaymentScheduleService } from '../api/PaymentScheduleService';


interface IUseConsentDocumentsOptions {
    applicationId?: number | null;
}

export const useConsentDocuments = ({ applicationId }: IUseConsentDocumentsOptions) => {
    const { mutate: consentDocuments, data: response, isSuccess, isError, error } = useMutation<AxiosResponse, Error, number | null>({
        mutationFn: async (applicationId) => {
            const res = await PaymentScheduleService.consentDocuments(applicationId);
            return res;
        }
    });

    return { consentDocuments, response, isSuccess, isError, error };
};