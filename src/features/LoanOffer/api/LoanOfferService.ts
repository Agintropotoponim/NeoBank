import { AxiosResponse } from "axios";
import axiosInstance from "shared/api/axiosInstance";
import { ILoanOffer } from "shared/types/loanOfferType";

export class LoanOfferService {
    
    static async applyLoan(offer: ILoanOffer): Promise<AxiosResponse> {
        const response = await axiosInstance.post('/application/apply', offer);
        return response;
    }
}

