import axiosInstance from "shared/api/axiosInstance";

export class LoanCodeService {
    static async verifyCode(applicationId: number | null, code: number) {
        const response = await axiosInstance.post(`/document/${applicationId}/sign/code`, JSON.stringify(code), {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    }
}
