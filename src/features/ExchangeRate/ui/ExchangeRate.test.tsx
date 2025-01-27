import { render, screen } from "@testing-library/react";
import { ExchangeRate } from "./ExchangeRate";
import { useExchangeRates } from "../hooks/useExchangeRate";
import { rubForOneUnit } from "../lib/rubForOneUnit";

jest.mock("../hooks/useExchangeRate", () => ({
    useExchangeRates: jest.fn(),
}));

jest.mock("../lib/rubForOneUnit", () => ({
    rubForOneUnit: jest.fn(),
}));

describe("ExchangeRate Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders the component correctly", () => {
        (useExchangeRates as jest.Mock).mockReturnValue({
            rates: { USD: 75, EUR: 85 },
            isRatesLoading: false,
            ratesError: null,
        });

        render(<ExchangeRate />);

        expect(screen.getByText("Exchange rate in Internet Bank")).toBeInTheDocument();
        expect(screen.getByText("Currency")).toBeInTheDocument();
        expect(screen.getByText("All courses")).toBeInTheDocument();
    });

    it("displays a loader when rates are loading", () => {
        (useExchangeRates as jest.Mock).mockReturnValue({
            rates: {},
            isRatesLoading: true,
            ratesError: null,
        });

        render(<ExchangeRate />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it("displays an error message when there is an error", () => {
        (useExchangeRates as jest.Mock).mockReturnValue({
            rates: {},
            isRatesLoading: false,
            ratesError: { message: "Failed to fetch rates" },
        });

        render(<ExchangeRate />);

        expect(screen.getByText("Failed to fetch rates")).toBeInTheDocument();
    });

    it("displays the correct exchange rates", () => {
        (useExchangeRates as jest.Mock).mockReturnValue({
            rates: { USD: 75, EUR: 85 },
            isRatesLoading: false,
            ratesError: null,
        });

        (rubForOneUnit as jest.Mock).mockImplementation((rate) => rate);

        render(<ExchangeRate />);

        expect(screen.getByText("USD:")).toBeInTheDocument();
        expect(screen.getByText("75")).toBeInTheDocument();
        expect(screen.getByText("EUR:")).toBeInTheDocument();
        expect(screen.getByText("85")).toBeInTheDocument();
    });
});