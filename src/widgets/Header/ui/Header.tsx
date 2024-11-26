import { useNavigate } from 'react-router-dom'
import { NavBar } from '../../../entities/NavBar'
import { BlueButton } from '../../../shared/ui/BlueButton'
import { Logo } from '../../../shared/ui/Logo'
import classes from './Header.module.scss'

export const Header: React.FC = () => {

    const nav = useNavigate();

    return (
        <header className={classes['header']}>
            <Logo
                className={classes['logo']}
                onClick={() => nav('/')}
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