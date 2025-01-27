import { render, screen, fireEvent } from "@testing-library/react";
import { LoanCode } from "./LoanCode";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { useLoanCode } from "../hooks/useLoanCode";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("shared/hooks/useLoanStore", () => ({
    useLoanStore: jest.fn(() => ({
        currentStep: 1,
        applicationId: 1,
        setCurrentStep: jest.fn(),
        clearStore: jest.fn(),
    })),
}));

jest.mock("../hooks/useLoanCode", () => ({
    useLoanCode: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
    useParams: jest.fn(() => ({ id: "123" })),
    Navigate: jest.fn(() => null),
}));

describe("LoanCode Component", () => {
    beforeEach(() => {
        (useLoanCode as jest.Mock).mockReturnValue({
            code: ["", "", "", ""],
            error: null,
            handleChange: jest.fn(),
        });
    });

    it("renders the component correctly", () => {
        render(
            <Router>
                <LoanCode />
            </Router>
        );

        expect(screen.getByRole("heading", { name: /loan code/i })).toBeInTheDocument();
        expect(screen.getAllByRole("textbox")).toHaveLength(4);
    });

    it("redirects to homepage if applicationId does not match", () => {
        (useLoanStore as unknown as jest.Mock).mockReturnValue({
            currentStep: 1,
            applicationId: 2,
            setCurrentStep: jest.fn(),
            clearStore: jest.fn(),
        });

        render(
            <Router>
                <LoanCode />
            </Router>
        );

        expect(screen.queryByText(/loan code/i)).not.toBeInTheDocument();
        expect(screen.getByText(/homepage/i)).toBeInTheDocument();
    });

    it("allows user to enter code in input fields", () => {
        render(
            <Router>
                <LoanCode />
            </Router>
        );

        const inputs = screen.getAllByRole("textbox");
        fireEvent.change(inputs[0], { target: { value: "1" } });
        fireEvent.change(inputs[1], { target: { value: "2" } });
        fireEvent.change(inputs[2], { target: { value: "3" } });
        fireEvent.change(inputs[3], { target: { value: "4" } });

        expect(inputs[0]).toHaveValue("1");
        expect(inputs[1]).toHaveValue("2");
        expect(inputs[2]).toHaveValue("3");
        expect(inputs[3]).toHaveValue("4");
    });
});