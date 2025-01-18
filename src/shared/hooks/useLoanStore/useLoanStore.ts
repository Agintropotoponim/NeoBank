import { ILoanOffer } from 'shared/types/loanOfferType';
import { create } from 'zustand';

interface LoanStore {
    loanOffers: ILoanOffer[] | null;
    applicationId: number | null;
    currentStep: number;
    setLoanOffers: (offers: ILoanOffer[], id: number) => void;
    setCurrentStep: (step: number) => void;
    clearStore: () => void
}

export const useLoanStore = create<LoanStore>((set) => ({
    loanOffers: JSON.parse(localStorage.getItem('loanOffers') || 'null') || [],
    applicationId: JSON.parse(localStorage.getItem('applicationId') || 'null'),
    currentStep: JSON.parse(localStorage.getItem('currentStep') || '0'),

    setLoanOffers: (offers, id) => {
        localStorage.setItem('loanOffers', JSON.stringify(offers));
        localStorage.setItem('applicationId', JSON.stringify(id));
        set({ loanOffers: offers, applicationId: id });
    },

    setCurrentStep: (step) => {
        localStorage.setItem('currentStep', JSON.stringify(step));
        set({ currentStep: step });
    },

    clearStore: () => {
        localStorage.removeItem('loanOffers');
        localStorage.removeItem('applicationId');
        localStorage.removeItem('currentStep');
        set({ loanOffers: null, applicationId: null, currentStep: 0 });
    },

}));
