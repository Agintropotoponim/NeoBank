import { useQuery } from '@tanstack/react-query';
import { ScoringService } from '../api/ScoringService';
import { FormPayload } from '../type/FormPayload';

interface IUseSubmitScoringOptions {
    data: FormPayload | null;
    applicationId: number
}

export const useSubmitScoring = ({ data, applicationId }: IUseSubmitScoringOptions) => {
    const { data: response, isLoading, error } = useQuery({
        queryKey: ['submitScoring', data],
        queryFn: async () => {
            const res = await ScoringService.submitScoring(data, applicationId || -1);
            return res;
        },
        enabled: !!data,
    });

    return { response, isLoading, error };
};
