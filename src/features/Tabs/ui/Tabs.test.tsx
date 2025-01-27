import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "./Tabs";

describe("Tabs Component", () => {
    const tabs = [
        { label: "Tab 1", content: <div>Content 1</div> },
        { label: "Tab 2", content: <div>Content 2</div> },
        { label: "Tab 3", content: <div>Content 3</div> },
    ];

    it("renders the tabs correctly", () => {
        render(<Tabs tabs={tabs} />);

        expect(screen.getByText("Tab 1")).toBeInTheDocument();
        expect(screen.getByText("Tab 2")).toBeInTheDocument();
        expect(screen.getByText("Tab 3")).toBeInTheDocument();
    });

    it("displays the content of the active tab", () => {
        render(<Tabs tabs={tabs} />);

        expect(screen.getByText("Content 1")).toBeInTheDocument();
        expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
        expect(screen.queryByText("Content 3")).not.toBeInTheDocument();

        fireEvent.click(screen.getByText("Tab 2"));

        expect(screen.getByText("Content 2")).toBeInTheDocument();
        expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
    });

    it("changes the active tab on click", () => {
        render(<Tabs tabs={tabs} />);

        fireEvent.click(screen.getByText("Tab 3"));

        expect(screen.getByText("Content 3")).toBeInTheDocument();
        expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
        expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
    });
});