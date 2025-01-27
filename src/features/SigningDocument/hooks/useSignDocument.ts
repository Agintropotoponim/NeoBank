import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { SigningService } from '../api/SigningService';


interface IUseSignDocumentOptions {
    applicationId: number | null;
}

export const useSignDocument = ({ applicationId }: IUseSignDocumentOptions) => {
    const { mutate: signDocument, data: response, isSuccess, isError, error } = useMutation<AxiosResponse, Error, number | null>({
        mutationFn: async (applicationId) => {
            const res = await SigningService.signDocument(applicationId);
            return res;
        },
        onSuccess: () => { },
        onError: () => { },
    });

    return { signDocument, response, isSuccess, isError, error };
};