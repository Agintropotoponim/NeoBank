import { ILoanOffer } from 'shared/types/loanOfferType';
import { LoanStep } from 'shared/types/loanStep';
import { create } from 'zustand';

interface LoanStore {
    loanOffers: ILoanOffer[] | null;
    applicationId: number | null;
    currentStep: LoanStep;
    setLoanOffers: (offers: ILoanOffer[], id: number) => void;
    setCurrentStep: (step: LoanStep) => void;
    clearStore: () => void;
}

export const useLoanStore = create<LoanStore>((set) => ({
    loanOffers: JSON.parse(localStorage.getItem('loanOffers') || 'null') || [],
    applicationId: JSON.parse(localStorage.getItem('applicationId') || 'null'),
    currentStep: JSON.parse(localStorage.getItem('currentStep') || '0') as LoanStep,

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
        set({ loanOffers: null, applicationId: null, currentStep: LoanStep.PREVALIDATION });
    },
}));
