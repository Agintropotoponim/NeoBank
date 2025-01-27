import { AxiosResponse } from "axios";
import axiosInstance from "shared/api/axiosInstance";
import { ScheduleResponse } from "../types/ScheduleResponse";

export class PaymentScheduleService {
    static async getPaymentSchedule(applicationId: number | null): Promise<ScheduleResponse> {
        const response = await axiosInstance.get(`/admin/application/${applicationId}`);
        return response.data;
    }

    static async denyApplication(applicationId: number | null): Promise<AxiosResponse> {
        const response = await axiosInstance.post(`/application/${applicationId}/deny`);
        return response;
    }

    static async consentDocuments(applicationId: number | null): Promise<AxiosResponse> {
        const response = await axiosInstance.post(`/document/${applicationId}`);
        return response;
    }
}