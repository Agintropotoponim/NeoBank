import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SigningDocument } from "./SigningDocument";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { useSignDocument } from "../hooks/useSignDocument";
import { LoanStep } from "shared/types/loanStep";
import { downloadFile } from "shared/lib/helpers/downloadFile";

jest.mock("shared/hooks/useLoanStore", () => ({
    useLoanStore: jest.fn().mockReturnValue({
        setCurrentStep: jest.fn(),
        applicationId: 1,
    }),
}));

jest.mock("../hooks/useSignDocument", () => ({
    useSignDocument: jest.fn(),
}));

jest.mock("shared/lib/helpers/downloadFile", () => ({
    downloadFile: jest.fn(),
}));

describe("SigningDocument Component", () => {
    it("renders the component correctly", () => {
        (useSignDocument as jest.Mock).mockReturnValue({
            signDocument: jest.fn(),
            isSuccess: false,
            isError: false,
            error: null,
        });

        render(<SigningDocument />);

        expect(screen.getByText("Signing of documents")).toBeInTheDocument();
        expect(screen.getByText("Step 4 of 5")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
    });

    it("allows user to check the checkbox", () => {
        (useSignDocument as jest.Mock).mockReturnValue({
            signDocument: jest.fn(),
            isSuccess: false,
            isError: false,
            error: null,
        });

        render(<SigningDocument />);

        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();
    });

    it("calls handleSend when the button is clicked", async () => {
        const mockSetCurrentStep = jest.fn();
        (useLoanStore as unknown as jest.Mock).mockReturnValue({
            setCurrentStep: mockSetCurrentStep,
            applicationId: 1,
        });

        const mockSignDocument = jest.fn();
        (useSignDocument as jest.Mock).mockReturnValue({
            signDocument: mockSignDocument,
            isSuccess: true,
            isError: false,
            error: null,
        });

        render(<SigningDocument />);

        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);

        fireEvent.click(screen.getByRole("button", { name: /send/i }));

        await waitFor(() => {
            expect(mockSignDocument).toHaveBeenCalledWith(1);
            expect(mockSetCurrentStep).toHaveBeenCalledWith(LoanStep.CODE_CONFIRMATION);
        });
    });

    it("calls downloadFile when the file image is clicked", () => {
        (useSignDocument as jest.Mock).mockReturnValue({
            signDocument: jest.fn(),
            isSuccess: false,
            isError: false,
            error: null,
        });

        render(<SigningDocument />);

        const fileImage = screen.getByRole("img");
        fireEvent.click(fileImage);

        expect(downloadFile).toHaveBeenCalledWith(expect.any(String), expect.any(String));
    });
});