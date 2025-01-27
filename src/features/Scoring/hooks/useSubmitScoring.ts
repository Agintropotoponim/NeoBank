import { useMutation } from '@tanstack/react-query';
import { ScoringService } from '../api/ScoringService';
import { FormPayload } from '../type/FormPayload';

interface IUseSubmitScoringOptions {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}

export const useSubmitScoring = ({ onSuccess, onError }: IUseSubmitScoringOptions) => {
    return useMutation<unknown, Error, { data: FormPayload; applicationId: number }>({
        mutationFn: async ({ data, applicationId }) => {
            return await ScoringService.submitScoring(data, applicationId);
        },
        onSuccess,
        onError,
    });
};