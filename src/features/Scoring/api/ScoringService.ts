import axios, { AxiosResponse } from "axios";
import { FormPayload } from "../type/FormPayload";

export class ScoringService {
    static async submitScoring(data: FormPayload | null, applicationId: number): Promise<AxiosResponse> {

        console.log("Request Data:", JSON.stringify(data));
        const response = await axios.put(`http://localhost:8080/application/registration/${applicationId}`, data);
        return response;
    }
}
