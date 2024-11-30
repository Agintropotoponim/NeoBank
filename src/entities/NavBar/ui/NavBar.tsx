import { NavLink } from "react-router-dom"
import { CONTENT_NAVIGATION_MENU } from "shared/consts/contentNavMenu"
import classes from './NavBar.module.scss'
import { clsx } from "clsx"

interface INavBarProps {
    className?: string
}

export const NavBar: React.FC<INavBarProps> = ({ className }) => {

    const navigationContent = CONTENT_NAVIGATION_MENU.map((item) => (
        <li key={item.title}>
            <NavLink
                to={item.link}
                end

                className={({ isActive }) =>
                    clsx(
                        classes['nav-bar__item'],
                        isActive && classes['nav-bar__item_active']
                    )
                }>
                {item.title}
            </NavLink>
        </li>
    ))

    return (
        <nav className={clsx(classes['nav-bar'], className)}>
            {navigationContent}
        </nav>
    )
}