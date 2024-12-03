import { ReactNode } from "react";
import { theme } from "shared/config/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
