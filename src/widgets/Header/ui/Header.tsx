import { useNavigate } from 'react-router-dom'
import { ERoutes } from 'shared/types/routesEnum'
import styled from 'styled-components'
import { NavBar } from '../../../entities/NavBar'
import { BlueButton } from '../../../shared/ui/BlueButton'
import { Logo } from '../../../shared/ui/Logo'

const HeaderHolder = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 920px) {
        flex-direction: column;
        align-items: center;
        height: fit-content;
        gap: 16px;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        gap: 16px;
        height: fit-content;
    }
`;

export const Header: React.FC = () => {

    const nav = useNavigate();

    const onClickHandler = () => {
        nav(ERoutes.HOME);
    }

    return (
        <HeaderHolder>
            <Logo
                onClick={onClickHandler}
            >
                NeoBank
            </Logo>
            <NavBar />
            <BlueButton w="120px" h="50px">
                Online Bank
            </BlueButton>
        </HeaderHolder>
    )
}