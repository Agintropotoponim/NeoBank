import { ILoanOffer } from "shared/types/loanOfferType";
import { LoanOfferService } from "../api/LoanOfferService";
import { useMutation } from "@tanstack/react-query";

export const useApplyLoan = (onSuccessCallback: () => void) => {
    const { mutate: applyLoan, isSuccess, error, data: response } = useMutation<unknown, Error, ILoanOffer>({
        mutationFn: async (offer: ILoanOffer) => {
            if (!offer) throw new Error("Offer is required");
            const res = await LoanOfferService.applyLoan(offer);
            return res.data;
        },
        onSuccess: () => {
            onSuccessCallback();
        },
        onError: (error) => {
            throw error;
        }
    });

    return { applyLoan, isSuccess, error, response };
};