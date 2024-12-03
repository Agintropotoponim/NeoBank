import { ChooseCard } from 'entities/ChooseCard/ui/ChooseCard'
import { FeaturesList } from 'entities/FeaturesList/index'
import { Feedback } from 'entities/Feedback/index'
import { ServiceMap } from 'entities/ServiceMap/index'
import { ExchangeRate } from 'features/ExchangeRate/index'
import styled from 'styled-components'
import { Footer } from 'widgets/Footer/index'
import { Header } from 'widgets/Header/index'

const HomePageHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 1300px;
    box-sizing: border-box;
    gap: 30px;

    @media (max-width: 1300px) {
        width: 920px;
    }

    @media (max-width: 920px) {
        width: 500px;
    }

    @media (max-width: 500px) {
        width: 280px;
    }
`;

export const HomePage: React.FC = () => {
    return (
        <HomePageHolder>
            <Header />
            <ChooseCard />
            <FeaturesList />
            <ExchangeRate />
            <ServiceMap />
            <Feedback />
            <Footer />
        </HomePageHolder>
    )
}