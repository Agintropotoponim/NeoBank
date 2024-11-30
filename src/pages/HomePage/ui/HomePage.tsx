import { ChooseCard } from 'entities/ChooseCard/ui/ChooseCard'
import { FeaturesList } from 'entities/FeaturesList/index'
import { Feedback } from 'entities/Feedback/index'
import { ServiceMap } from 'entities/ServiceMap/index'
import { ExchangeRate } from 'features/ExchangeRate/index'
import { Footer } from 'widgets/Footer/index'
import { Header } from 'widgets/Header/index'
import classes from './HomePage.module.scss'

export const HomePage: React.FC = () => {
    return (
        <div className={classes['home-page']}>
            <Header />
            <ChooseCard />
            <FeaturesList />
            <ExchangeRate />
            <ServiceMap />
            <Feedback />
            <Footer />
        </div>
    )
}