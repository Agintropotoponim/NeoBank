import axios, { AxiosResponse } from "axios";
import { ILoanOffer } from "shared/types/loanOfferType";

export class LoanOfferService {
    
    static async applyLoan(offer: ILoanOffer): Promise<AxiosResponse> {
        const response = await axios.post('http://localhost:8080/application/apply', offer);
        return response;
    }
}

