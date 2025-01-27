import { AxiosResponse } from 'axios';
import axiosInstance from 'shared/api/axiosInstance';
import { PrescoringForm } from '../type/PrescoringForm';

export class ApplicationService {
    static async submitApplication(data: PrescoringForm | null): Promise<AxiosResponse> {
        const response = await axiosInstance.post('/application', data);
        return response;
    }
}