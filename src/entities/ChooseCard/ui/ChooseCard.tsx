import { BlueButton } from 'shared/ui/BlueButton';
import styled from 'styled-components';
import { cards } from '../conts/images';

const ChooseCardContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    gap: 10px;

    @media (max-width: 1300px) {
        justify-content: center;
    }

    @media (max-width: 500px) {
        flex-wrap: wrap;
    }
`;

const TitleBlock = styled.article`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 50px;
    color: ${({ theme }) => theme.colors.textPrimary};
    width: 610px;
    box-sizing: border-box;

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
    }
`;

const CardsBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    width: 518px;
    height: 314.78px;
    box-sizing: border-box;

    @media (max-width: 1300px) {
        justify-content: flex-end;
        align-items: center;
        height: fit-content;
    }

    @media (max-width: 920px) {
        height: fit-content;
    }

    @media (max-width: 500px) {
        justify-content: center;
        height: fit-content;
    }
`;

export const ChooseCard: React.FC = () => {

    const cardsContent = cards.map(card =>
        <img src={card.path} alt={card.desc} />
    )

    return (
        <ChooseCardContainer>
            <TitleBlock>
                <p>
                    Choose the design you like and apply for card right now
                </p>
                <BlueButton w="160px" h="50px">
                    Choose the card
                </BlueButton>
            </TitleBlock>
            <CardsBlock>
                {cardsContent}
            </CardsBlock>
        </ChooseCardContainer>
    )
}