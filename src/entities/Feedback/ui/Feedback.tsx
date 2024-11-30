import { CustomInput } from 'shared/ui/CustomInput'
import classes from './Feedback.module.scss'
import { useState } from 'react'

export const Feedback: React.FC = () => {

    const [value, setValue] = useState<string>("");

    const onChange = (newValue: string) => setValue(newValue);

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
            <CustomInput value={value} setValue={setValue} onChange={onChange} />
        </section>
    )
}