import styled from "styled-components";

export const ApplyButton = styled.button<{ disabled?: boolean }>`
    all: unset;
    box-sizing: border-box;
    width: 145px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    box-shadow: none;
    gap: 8px;
    background: ${({ theme, disabled }) =>
        disabled ? theme.colors.blueButton.disabled : theme.colors.blueButton.background};
    border-radius: 8px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: 0.02em;
    font-feature-settings: 'salt' on, 'liga' off;
    color: ${({ theme }) => theme.colors.blueButton.textPrimary};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.blueButton.hover};
        background: ${({ theme }) => theme.colors.blueButton.disabled};;
    }

    &:active {
        color: ${({ theme }) => theme.colors.blueButton.active};
    }

    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    
`;