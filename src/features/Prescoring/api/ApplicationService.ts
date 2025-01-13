import axios, { AxiosResponse } from 'axios';
import { PrescoringForm } from '../type/PrescoringForm';

export class ApplicationService {
    static async submitApplication(data: PrescoringForm | null): Promise<AxiosResponse> {
        const response = await axios.post('http://localhost:8080/application', data);
        return response;
    }
}