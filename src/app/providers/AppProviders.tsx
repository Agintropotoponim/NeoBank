import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "shared/api/query-client";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
};