import { ScheduleResponse } from '../types/ScheduleResponse'
import { PaymentScheduleService } from './PaymentScheduleService';

export const fetchPaymentSchedule = async (applicationId: number | null): Promise<ScheduleResponse> => {
    const res = await PaymentScheduleService.getPaymentSchedule(applicationId);
    return res;
};