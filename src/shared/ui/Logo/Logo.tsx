import styled from 'styled-components'

interface ILogoProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

const LogoHolder = styled.div`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.logo};
    cursor: pointer;

    @media (max-width: 1300px) {
        font-size: 26px;
    }

    @media (max-width: 920px) {
        font-size: 28px;
    }

    @media (max-width: 500px) {
        font-size: 30px;
    }
`;

export const Logo: React.FC<ILogoProps> = ({ onClick, children }) => {
    return (
        <LogoHolder onClick={onClick}>
            {children}
        </LogoHolder>
    )
}