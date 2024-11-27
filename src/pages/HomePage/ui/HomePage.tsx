import { ChooseCard } from '../../../entities/ChooseCard'
import { FeaturesList } from '../../../entities/FeaturesList'
import { Feedback } from '../../../entities/Feedback/intex'
import { ServiceMap } from '../../../entities/ServiceMap/ui/ServiceMap'
import { ExchangeRate } from '../../../features/ExchangeRate'
import { CustomInput } from '../../../shared/ui/CustomInput'
import { Header } from '../../../widgets/Header'
import classes from './HomePage.module.scss'

export const HomePage: React.FC = () => {
    return (
        <div className={classes['home-page']}>
            <Header />
            <ChooseCard />
            <FeaturesList />
            {
                //<ExchangeRate />
            }
            <ServiceMap />
            <Feedback />
        </div>
    )
}