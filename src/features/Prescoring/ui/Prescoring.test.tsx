import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Prescoring } from "./Prescoring";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { useSubmitApplication } from "../hooks/useSubmitApplication";
import { LoanStep } from "shared/types/loanStep";

jest.mock("shared/hooks/useLoanStore", () => ({
    useLoanStore: jest.fn(),
}));

jest.mock("../hooks/useSubmitApplication", () => ({
    useSubmitApplication: jest.fn(),
}));

describe("Prescoring Component", () => {
    it("renders the form correctly", () => {
        render(<Prescoring />);

        expect(screen.getByText("Customize your card")).toBeInTheDocument();
        expect(screen.getByText("Step 1 of 5")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Enter amount")).toBeInTheDocument();
        expect(screen.getByText("Contact information")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /continue/i })).toBeInTheDocument();
    });

    it("allows user to enter an amount", () => {
        render(<Prescoring />);

        const amountInput = screen.getByPlaceholderText("Enter amount");
        fireEvent.change(amountInput, { target: { value: "5000" } });

        expect(amountInput).toHaveValue("5000");
        expect(screen.getByText("5000 ₽")).toBeInTheDocument();
    });

    it("submits form data correctly", async () => {
        const mockSetLoanOffers = jest.fn();
        const mockSetCurrentStep = jest.fn();

        (useLoanStore as unknown as jest.Mock).mockReturnValue({
            setLoanOffers: mockSetLoanOffers,
            setCurrentStep: mockSetCurrentStep,
        });

        (useSubmitApplication as jest.Mock).mockReturnValue({
            response: [{ applicationId: 123 }],
            isLoading: false,
            error: null,
        });

        render(<Prescoring />);

        fireEvent.change(screen.getByPlaceholderText("Enter amount"), {
            target: { value: "5000" },
        });

        fireEvent.submit(screen.getByRole("button", { name: /continue/i }));

        await waitFor(() => {
            expect(mockSetLoanOffers).toHaveBeenCalledWith(
                [{ applicationId: 123 }],
                123
            );
            expect(mockSetCurrentStep).toHaveBeenCalledWith(LoanStep.PREAPPROVAL);
        });
    });

    it("displays a loader when loading", () => {
        (useSubmitApplication as jest.Mock).mockReturnValue({
            response: null,
            isLoading: true,
            error: null,
        });

        render(<Prescoring />);

        expect(screen.getByTestId("loader")).toBeInTheDocument();
    });

    it("displays an error message on failure", () => {
        (useSubmitApplication as jest.Mock).mockReturnValue({
            response: null,
            isLoading: false,
            error: { message: "Something went wrong" },
        });

        render(<Prescoring />);

        expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    });
});