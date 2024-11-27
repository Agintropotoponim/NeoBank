import { illustration } from '../const/illustrations'
import classes from './FeaturesList.module.scss'

export const FeaturesList: React.FC = () => {
    return (
        <section className={classes['features-list-container']}>
            <img className={classes['features-list-container__illustration']} src={illustration} alt="feature-list-illustration" />
            <article className={classes['features-article']}>
                <p className={classes['features-article__title']}>We Provide Many Features You Can Use</p>
                <p className={classes['features-article__desc']}>You can explore the features that we provide with fun and have their own functions each feature</p>
                <ul className={classes['features-article__list']}>
                    <li>Powerfull online protection.</li>
                    <li>Cashback without borders.</li>
                    <li>Personal design</li>
                    <li>Work anywhere in the world</li>
                </ul>
            </article>
        </section>
    )
}