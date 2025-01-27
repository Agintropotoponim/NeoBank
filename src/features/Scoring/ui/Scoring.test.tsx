import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Scoring } from "./Scoring";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { useSubmitScoring } from "../hooks/useSubmitScoring";
import { LoanStep } from "shared/types/loanStep";

jest.mock("shared/hooks/useLoanStore", () => ({
    useLoanStore: jest.fn(),
}));

jest.mock("../hooks/useSubmitScoring", () => ({
    useSubmitScoring: jest.fn(),
}));

describe("Scoring Component", () => {
    it("renders the form correctly", () => {
        render(<Scoring />);

        expect(screen.getByText("Continuation of the application")).toBeInTheDocument();
        expect(screen.getByText("Step 2 of 5")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /continue/i })).toBeInTheDocument();
    });

    it("allows user to enter data in the form", () => {
        render(<Scoring />);

        const amountInput = screen.getByPlaceholderText("Enter amount");
        fireEvent.change(amountInput, { target: { value: "5000" } });

        expect(amountInput).toHaveValue("5000");
    });

    it("submits form data correctly", async () => {
        const mockSetCurrentStep = jest.fn();
        (useLoanStore as unknown as jest.Mock).mockReturnValue({
            setCurrentStep: mockSetCurrentStep,
            applicationId: 1,
        });

        const mockMutate = jest.fn();
        (useSubmitScoring as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isSuccess: true,
            error: null,
        });

        render(<Scoring />);

        fireEvent.change(screen.getByPlaceholderText("Enter amount"), {
            target: { value: "5000" },
        });

        fireEvent.submit(screen.getByRole("button", { name: /continue/i }));

        await waitFor(() => {
            expect(mockMutate).toHaveBeenCalled();
            expect(mockSetCurrentStep).toHaveBeenCalledWith(LoanStep.PAYMENT_SCHEDULE);
        });
    });

    it("displays an error message on failure", () => {
        (useSubmitScoring as jest.Mock).mockReturnValue({
            mutate: jest.fn(),
            isSuccess: false,
            error: { message: "Something went wrong" },
        });

        render(<Scoring />);

        expect(screen.getByText("Check your email. If something went wrong, contact us or check the information you entered and try again.")).toBeInTheDocument();
    });
});