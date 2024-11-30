import { clsx } from 'clsx'
import classes from './Logo.module.scss'

interface ILogoProps {
    children: string
    className?: string
    onClick?: () => void
}

export const Logo: React.FC<ILogoProps> = ({ onClick, className, children }) => {
    return (
        <div
            onClick={onClick}
            className={clsx(classes['logo'], className)}
        >
            {children}
        </div>
    )
}