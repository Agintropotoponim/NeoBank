export interface PaymentScheduleItem {
    number: number;
    date: string;
    totalPayment: number;
    interestPayment: number;
    debtPayment: number;
    remainingDebt: number;
}

export interface Credit {
    paymentSchedule: PaymentScheduleItem[];
}

export interface ScheduleResponse {
    credit: Credit;
}