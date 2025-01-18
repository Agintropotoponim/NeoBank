import axios, { AxiosResponse } from "axios";
import { ScheduleResponse } from "../types/ScheduleResponse";

export class PaymentScheduleService {
    static async getPaymentSchedule(applicationId: number | null): Promise<ScheduleResponse> {
        const response = await axios.get(`http://localhost:8080/admin/application/${applicationId}`);
        return response.data;
    }

    static async denyApplication(applicationId: number | null): Promise<AxiosResponse> {
        const response = await axios.post(`http://localhost:8080/application/${applicationId}/deny`);
        return response;
    }

    static async consentDocuments(applicationId: number | null): Promise<AxiosResponse> {
        const response = await axios.post(`http://localhost:8080/document/${applicationId}`);
        return response;
    }
}