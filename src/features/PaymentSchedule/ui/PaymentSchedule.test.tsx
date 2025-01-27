import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { PaymentSchedule } from "./PaymentSchedule";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { usePaymentSchedule } from "../hooks/usePaymentSchedule";
import { useConsentDocuments } from "../hooks/useConsentDocuments";
import { useSchedule } from "../hooks/useSchedule";
import { LoanStep } from "shared/types/loanStep";

jest.mock("shared/hooks/useLoanStore", () => ({
    useLoanStore: jest.fn(() => ({
        setCurrentStep: jest.fn(),
        applicationId: 1,
    })),
}));

jest.mock("../hooks/usePaymentSchedule", () => ({
    usePaymentSchedule: jest.fn(),
}));

jest.mock("../hooks/useConsentDocuments", () => ({
    useConsentDocuments: jest.fn(),
}));

jest.mock("../hooks/useSchedule", () => ({
    useSchedule: jest.fn(),
}));

describe("PaymentSchedule Component", () => {
    it("renders the form correctly", () => {
        (usePaymentSchedule as jest.Mock).mockReturnValue({
            fetchPaymentSchedule: jest.fn(),
            response: [],
            isSuccess: true,
        });

        (useSchedule as jest.Mock).mockReturnValue({
            schedule: [],
            sortKey: null,
            handleSort: jest.fn(),
        });

        render(<PaymentSchedule />);

        expect(screen.getByText("Payment Schedule")).toBeInTheDocument();
        expect(screen.getByText("Step 3 of 5")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
    });

    it("allows user to check the checkbox", () => {
        (usePaymentSchedule as jest.Mock).mockReturnValue({
            fetchPaymentSchedule: jest.fn(),
            response: [],
            isSuccess: true,
        });

        (useSchedule as jest.Mock).mockReturnValue({
            schedule: [],
            sortKey: null,
            handleSort: jest.fn(),
        });

        render(<PaymentSchedule />);

        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();
    });

    it("calls handleConsent when the button is clicked", async () => {
        const mockSetCurrentStep = jest.fn();
        (useLoanStore as unknown as jest.Mock).mockReturnValue({
            setCurrentStep: mockSetCurrentStep,
            applicationId: 1,
        });

        (usePaymentSchedule as jest.Mock).mockReturnValue({
            fetchPaymentSchedule: jest.fn(),
            response: [],
            isSuccess: true,
        });

        (useSchedule as jest.Mock).mockReturnValue({
            schedule: [],
            sortKey: null,
            handleSort: jest.fn(),
        });

        (useConsentDocuments as jest.Mock).mockReturnValue(jest.fn());

        render(<PaymentSchedule />);

        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);

        fireEvent.click(screen.getByRole("button", { name: /send/i }));

        await waitFor(() => {
            expect(mockSetCurrentStep).toHaveBeenCalledWith(LoanStep.SIGNING_DOCUMENTS);
        });
    });

    it("displays a loader when loading", () => {
        (usePaymentSchedule as jest.Mock).mockReturnValue({
            fetchPaymentSchedule: jest.fn(),
            response: null,
            isSuccess: false,
        });

        render(<PaymentSchedule />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
});