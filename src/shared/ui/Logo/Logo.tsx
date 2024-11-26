import { clsx } from 'clsx'
import classes from './Logo.module.scss'
import { Children } from 'react'

interface ILogoProps {
    readonly children: string
    readonly className?: string
    readonly onClick?: () => void
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