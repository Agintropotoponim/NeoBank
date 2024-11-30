import clsx from 'clsx'
import classes from './BlueButton.module.scss'

interface IBlueButtonProps {
    readonly children: string
    readonly disabled?: boolean
    readonly className?: string
    readonly onClick?: () => void
}

export const BlueButton: React.FC<IBlueButtonProps> = ({ children, onClick, disabled, className }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={
                clsx(
                    classes['blue-button'],
                    disabled && classes['blue-button_disabled'],
                    className
                )}
        >
            {children}
        </button>
    )
} 