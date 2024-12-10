import styled from "styled-components";

interface IBlueButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    w?: string;
    h?: string;
}

const StyledButton = styled.button<{ disabled?: boolean, w?: string; h?: string; }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    background: ${({ theme, disabled }) =>
        disabled ? theme.colors.blueButton.disabled : theme.colors.blueButton.background};
    border-radius: 16px;
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-feature-settings: "salt" on, "liga" off;
    color: ${({ theme }) => theme.colors.textQuinary};
    border: none;
    transition: 0.3s;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    width: ${({ w }) => `${w}` || "auto"};
    height: ${({ h }) => `${h}` || "auto"};

    &:hover {
        background: ${({ theme, disabled }) =>
        disabled ? theme.colors.blueButton.disabled : theme.colors.customInput.buttonHover};
    }
`;

export const BlueButton: React.FC<IBlueButtonProps> = ({ children, onClick, disabled, w, h }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled} w={w} h={h}>
            {children}
        </StyledButton>
    );
};