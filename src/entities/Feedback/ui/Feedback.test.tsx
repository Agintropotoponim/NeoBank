import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Feedback } from "./Feedback";
import { useSubscribeEmail } from "../hooks/useSubscribeEmail";

jest.mock("../hooks/useSubscribeEmail", () => ({
    useSubscribeEmail: jest.fn(),
}));

describe("Feedback Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders the component correctly", () => {
        (useSubscribeEmail as jest.Mock).mockReturnValue({
            mutate: jest.fn(),
            status: 'idle',
            isSuccess: false,
            isError: false,
            error: null,
        });

        render(<Feedback />);

        expect(screen.getByText("Support")).toBeInTheDocument();
        expect(screen.getByText("Subscribe Newsletter & get")).toBeInTheDocument();
        expect(screen.getByText("Bank News")).toBeInTheDocument();
    });

    it("allows user to subscribe with a valid email", async () => {
        const mockMutate = jest.fn();
        (useSubscribeEmail as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            status: 'idle',
            isSuccess: true,
            isError: false,
            error: null,
        });

        render(<Feedback />);

        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { value: "test@example.com" } });
        fireEvent.submit(input);

        await waitFor(() => {
            expect(mockMutate).toHaveBeenCalledWith("test@example.com");
        });
    });

    it("displays an error message when subscription fails", () => {
        (useSubscribeEmail as jest.Mock).mockReturnValue({
            mutate: jest.fn(),
            status: 'idle',
            isSuccess: false,
            isError: true,
            error: { message: "Failed to subscribe" },
        });

        render(<Feedback />);

        expect(screen.getByText("Error: Failed to subscribe")).toBeInTheDocument();
    });

    it("displays a message if already subscribed", () => {
        (useSubscribeEmail as jest.Mock).mockReturnValue({
            mutate: jest.fn(),
            status: 'idle',
            isSuccess: false,
            isError: false,
            error: null,
        });

        localStorage.setItem('isSubscribed', 'true');

        render(<Feedback />);

        expect(screen.getByText("You are already subscribed to the bank's newsletter.")).toBeInTheDocument();
    });
});