import axios, { AxiosResponse } from 'axios';

export class EmailService {
    static async sendEmail(email: string): Promise<AxiosResponse> {
        const response = await axios.post('http://localhost:8080/email', { email });
        return response;
    }
}