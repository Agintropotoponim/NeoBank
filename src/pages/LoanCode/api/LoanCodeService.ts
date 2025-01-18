import axios from "axios";

export class LoanCodeService {
    static async verifyCode(applicationId: number | null, code: number) {
        const response = await axios.post(`http://localhost:8080/document/${applicationId}/sign/code`, JSON.stringify(code), {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    }
}
