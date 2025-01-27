import { useQuery } from '@tanstack/react-query';
import { ApplicationService } from '../api/ApplicationService';
import { PrescoringForm } from '../type/PrescoringForm';

interface IUseSubmitApplicationOptions {
    data: PrescoringForm | null;
}

export const useSubmitApplication = ({ data }: IUseSubmitApplicationOptions) => {
    const { data: response, isLoading, error } = useQuery({
        queryKey: ['submitApplication', data],
        queryFn: async () => {
            const res = await ApplicationService.submitApplication(data);
            return res.data;
        },
        
        enabled: !!data,
    });

    return { response, isLoading, error };
};