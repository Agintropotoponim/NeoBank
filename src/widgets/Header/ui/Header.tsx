import { useNavigate } from 'react-router-dom'
import { NavBar } from '../../../entities/NavBar'
import { BlueButton } from '../../../shared/ui/BlueButton'
import { Logo } from '../../../shared/ui/Logo'
import classes from './Header.module.scss'
import { ERoutes } from 'shared/types/routesEnum'

export const Header: React.FC = () => {

    const nav = useNavigate();

    const onClickHandler = () => {
        nav(ERoutes.HOME);
    }

    return (
        <header className={classes['header']}>
            <Logo
                className={classes['logo']}
                onClick={onClickHandler}
            >
                NeoBank
            </Logo>
            <NavBar className={classes['nav-bar']} />
            <BlueButton className={classes['button']}>
                Online Bank
            </BlueButton>
        </header>
    )
}