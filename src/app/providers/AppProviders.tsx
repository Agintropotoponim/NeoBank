import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </BrowserRouter>
    );
};