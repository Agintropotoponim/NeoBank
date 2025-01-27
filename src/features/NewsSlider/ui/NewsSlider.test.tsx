import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { NewsSlider } from "./NewsSlider";
import { useNews } from "../lib/hooks/useNews";

jest.mock("../lib/hooks/useNews", () => ({
    useNews: jest.fn(),
}));

jest.mock('../assets/button-active-left.svg', () => 'svg');
jest.mock('../assets/button-disabled-left.svg', () => 'svg');
jest.mock('../assets/button-active-right.svg', () => 'svg');
jest.mock('../assets/button-disabled-right.svg', () => 'svg');


describe("NewsSlider Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders the component correctly", () => {
        (useNews as jest.Mock).mockReturnValue({
            validArticles: [{ title: "Article 1" }, { title: "Article 2" }],
            isLoading: false,
            error: null,
        });

        render(<NewsSlider />);

        expect(screen.getByText("Article 1")).toBeInTheDocument();
        expect(screen.getByText("Article 2")).toBeInTheDocument();
    });

    it("displays a loader when loading", () => {
        (useNews as jest.Mock).mockReturnValue({
            validArticles: [],
            isLoading: true,
            error: null,
        });

        render(<NewsSlider />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it("displays an error message when there is an error", () => {
        (useNews as jest.Mock).mockReturnValue({
            validArticles: [],
            isLoading: false,
            error: { message: "Failed to fetch news" },
        });

        render(<NewsSlider />);

        expect(screen.getByText("Error loading news. Please try again later.")).toBeInTheDocument();
    });

    it("allows user to scroll left and right", async () => {
        (useNews as jest.Mock).mockReturnValue({
            validArticles: [{ title: "Article 1" }, { title: "Article 2" }, { title: "Article 3" }],
            isLoading: false,
            error: null,
        });

        render(<NewsSlider />);

        const leftButton = screen.getByRole("button", { name: /left/i });
        const rightButton = screen.getByRole("button", { name: /right/i });

        expect(leftButton).toBeDisabled();
        expect(rightButton).toBeEnabled();
        fireEvent.click(rightButton);

        await waitFor(() => {
            expect(leftButton).toBeEnabled();
        });
    });
});