import { AxiosResponse } from 'axios';
import axiosInstance from 'shared/api/axiosInstance';

export class EmailService {
    static async sendEmail(email: string): Promise<AxiosResponse> {
        const response = await axiosInstance.post('/email', { email });
        return response;
    }
}