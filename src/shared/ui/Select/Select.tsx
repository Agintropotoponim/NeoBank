import { device } from "shared/config/theme/device";
import styled from "styled-components";

export const Select = styled.select<{ isError: boolean; customWidth?: string }>`
    padding: 12px;
    border: ${({ isError, theme }) => (isError ? theme.colors.select.errorBorder : theme.colors.select.border)};

    box-sizing: border-box;

    width: ${({ customWidth }) => customWidth || "297px"};
    height: 40px;

    background: ${({ theme }) => theme.colors.select.background};

    border-radius: 6px;

    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.select.textPrimary};;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.select.focusBorder};
    }

    @media ${device.desktopS} {
        width: 297px;
    }

    @media ${device.laptopS} {
        width: 250px;
    }
`;
