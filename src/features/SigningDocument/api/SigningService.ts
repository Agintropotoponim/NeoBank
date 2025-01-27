import axiosInstance from "shared/api/axiosInstance";

export class SigningService {
    static async signDocument(applicationId: number | null) {
        const response = await axiosInstance.post(`/document/${applicationId}/sign`);
        return response.data;
    }
}