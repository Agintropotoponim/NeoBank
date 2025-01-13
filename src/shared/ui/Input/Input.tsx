import styled from "styled-components";

export const Input = styled.input<{ isError: boolean }>`
    box-sizing: border-box;
    width: 297px;
    height: 40px;
    background: ${({ theme }) => theme.colors.input.background};
    border: ${({ isError, theme }) => (isError ? theme.colors.input.errorBorder : theme.colors.input.border)};
    border-radius: 6px;
    padding: 12px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.input.textPrimary};

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.input.focusBorder};
    }
`;
