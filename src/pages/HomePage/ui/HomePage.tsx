import { ChooseCard } from '../../../entities/ChooseCard'
import { FeaturesList } from '../../../entities/FeaturesList'
import { Header } from '../../../widgets/Header'
import classes from './HomePage.module.scss'

export const HomePage: React.FC = () => {
    return (
        <div className={classes['home-page']}>
            <Header />
            <ChooseCard />
            <FeaturesList />
        </div>
    )
}