import { useLoanStore } from "./useLoanStore";
import { LoanStep } from "shared/types/loanStep";

beforeEach(() => {
    localStorage.clear();
});

describe("useLoanStore", () => {
    test("inits with correct values", () => {
        const store = useLoanStore.getState();
        expect(store.loanOffers).toEqual([]);
        expect(store.applicationId).toBeNull();
        expect(store.currentStep).toBe(LoanStep.PREVALIDATION);
    });

    test("set loanOffers and applicationId", () => {
        const store = useLoanStore.getState();
        store.setLoanOffers([], 123);

        expect(useLoanStore.getState().loanOffers).toEqual([]);
        expect(useLoanStore.getState().applicationId).toBe(123);

        expect(JSON.parse(localStorage.getItem("loanOffers")!)).toEqual([]);
        expect(JSON.parse(localStorage.getItem("applicationId")!)).toBe(123);
    });

    test("changes currentStep", () => {
        const store = useLoanStore.getState();
        store.setCurrentStep(LoanStep.PREAPPROVAL);

        expect(useLoanStore.getState().currentStep).toBe(LoanStep.PREAPPROVAL);
        expect(JSON.parse(localStorage.getItem("currentStep")!)).toBe(LoanStep.PREAPPROVAL);
    });

    test("clear store", () => {
        const store = useLoanStore.getState();
        store.setLoanOffers([], -1);
        store.setCurrentStep(LoanStep.PREAPPROVAL);
        store.clearStore();

        expect(useLoanStore.getState().loanOffers).toBeNull();
        expect(useLoanStore.getState().applicationId).toBeNull();
        expect(useLoanStore.getState().currentStep).toBe(LoanStep.PREVALIDATION);

        expect(localStorage.getItem("loanOffers")).toBeNull();
        expect(localStorage.getItem("applicationId")).toBeNull();
        expect(localStorage.getItem("currentStep")).toBeNull();
    });
});
