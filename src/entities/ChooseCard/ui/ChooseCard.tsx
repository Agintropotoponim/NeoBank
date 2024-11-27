import { BlueButton } from '../../../shared/ui/BlueButton'
import { card1Path, card2Path, card3Path, card4Path } from '../conts/images'
import classes from './ChooseCard.module.scss'

export const ChooseCard: React.FC = () => {
    return (
        <section className={classes['choose-container']}>
            <article className={classes['choose-container__title-block']}>
                <p className={classes['choose-container__title_p']}>
                    Choose the design you like and apply for card right now
                </p>
                <BlueButton
                    className={classes['choose-container__button']}
                >
                    Choose the card
                </BlueButton>
            </article>
            <div className={classes['choose-container__cards']}>
                <img src={card1Path} alt="card1" />
                <img src={card2Path} alt="card1" />
                <img src={card3Path} alt="card1" />
                <img src={card4Path} alt="card1" />
            </div>
        </section>
    )
}