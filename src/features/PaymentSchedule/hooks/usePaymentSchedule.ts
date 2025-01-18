import { useMutation } from "@tanstack/react-query";
import { PaymentScheduleService } from "../api/PaymentScheduleService";
import { ScheduleResponse } from "../types/ScheduleResponse";

interface IUsePaymentScheduleOptions {
    applicationId: number | null;
}

export const usePaymentSchedule = ({ applicationId }: IUsePaymentScheduleOptions) => {
    const { mutate: fetchPaymentSchedule, data: response, isSuccess, isError, error } = useMutation<ScheduleResponse, Error, number | null>({
        mutationFn: async (applicationId) => {
            const res = await PaymentScheduleService.getPaymentSchedule(applicationId);
            return res;
        },
        onSuccess: () => { },
        onError: () => { },
    });

    return { fetchPaymentSchedule, response, isSuccess, isError, error };
};