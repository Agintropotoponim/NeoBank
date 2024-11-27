import { CustomInput } from '../../../shared/ui/CustomInput'
import classes from './Feedback.module.scss'

export const Feedback: React.FC = () => {
    return (
        <section className={classes['feedback-container']}>
            <h3 className={classes['feedback-container__support']}>
                Support
            </h3>
            <h3 className={classes['feedback-container__subscribe']}>
                Subscribe Newsletter & get
            </h3>
            <h3 className={classes['feedback-container__news']}>
                Bank News
            </h3>
            <CustomInput />
        </section>
    )
}