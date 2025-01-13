import { useMutation } from '@tanstack/react-query';
import { EmailService } from '../api/EmailService';

export const useSubscribeEmail = () => {
    const { mutate, status, isSuccess, isError, error } = useMutation({
        mutationFn: EmailService.sendEmail,
        onSuccess: () => {},
        onError: (error) => {}
    });

    return { mutate, status, isSuccess, isError, error };
};
