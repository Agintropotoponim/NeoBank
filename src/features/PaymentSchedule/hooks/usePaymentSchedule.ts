import { useMutation } from "@tanstack/react-query";
import { fetchPaymentSchedule } from "../api/paymentScheduleApi";
import { ScheduleResponse } from "../types/ScheduleResponse";

interface IUsePaymentScheduleOptions {
    applicationId: number | null;
}

export const usePaymentSchedule = ({ applicationId }: IUsePaymentScheduleOptions) => {
    const { mutate, data: response, isSuccess, isError, error } = useMutation<ScheduleResponse, Error, number | null>({
        mutationFn: fetchPaymentSchedule,
    });

    return { fetchPaymentSchedule: mutate, response, isSuccess, isError, error };
};