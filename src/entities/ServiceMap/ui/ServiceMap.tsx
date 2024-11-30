import { serviceMap } from '../const/service-map'
import classes from './ServiceMap.module.scss'

export const ServiceMap: React.FC = () => {
    return (
        <section className={classes['service-map-container']}>
            <h2 className={classes['service-map-container__title']}>
                You can use our services anywhere in the world
            </h2>
            <h3 className={classes['service-map-container__desc']}>
                Withdraw and transfer money online through our application
            </h3>
            <img src={serviceMap} alt="services map" className={classes['service-map-container__img']} />
        </section>
    )
}