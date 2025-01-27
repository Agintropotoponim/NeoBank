import { useCallback, useEffect, useState } from "react";
import { usePaymentSchedule } from "../hooks/usePaymentSchedule";
import { PaymentScheduleItem } from "../types/ScheduleResponse";
import { useNavigate } from "react-router-dom";
import { ERoutes } from "shared/types/routesEnum";

export const useSchedule = (applicationId: number | null) => {
    const { fetchPaymentSchedule, response, isSuccess } = usePaymentSchedule({ applicationId });
    const nav = useNavigate();

    const [schedule, setSchedule] = useState<PaymentScheduleItem[]>([]);
    const [sortKey, setSortKey] = useState<keyof PaymentScheduleItem | null>(null);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    useEffect(() => {
        fetchPaymentSchedule(applicationId);
    }, [applicationId, fetchPaymentSchedule]);

    useEffect(() => {
        if (isSuccess) {
            if (response?.credit) {
                setSchedule(response.credit.paymentSchedule);
            } else {
                nav(ERoutes.CREDIT_CARD);
            }
        }
    }, [response, isSuccess, nav]);

    const handleSort = useCallback((key: keyof PaymentScheduleItem) => {
        const direction = sortDirection === "asc" ? 1 : -1;
        const sortedData = [...schedule].sort((a, b) => (a[key] > b[key] ? direction : -direction));

        setSchedule(sortedData);
        setSortKey(key);
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    }, [schedule, sortDirection]);

    return { schedule, sortKey, sortDirection, handleSort, isSuccess };
};