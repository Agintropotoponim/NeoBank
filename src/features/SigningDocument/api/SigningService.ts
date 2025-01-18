import axios from "axios";

export class SigningService {
    static async signDocument(applicationId: number | null) {
        const response = await axios.post(`http://localhost:8080/document/${applicationId}/sign`);
        return response.data;
    }
}