import { AxiosResponse } from "axios";
import axiosInstance from "shared/api/axiosInstance";
import { FormPayload } from "../type/FormPayload";

export class ScoringService {
    static async submitScoring(data: FormPayload | null, applicationId: number): Promise<AxiosResponse> {

        const response = await axiosInstance.put(`/application/registration/${applicationId}`, data);
        return response;
    }
}
