import { BlueButton } from 'shared/ui/BlueButton';
import styled from 'styled-components';
import { cards } from '../conts/images';
import { device } from 'shared/config/theme/device';

const ChooseCardContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    gap: 10px;

    @media ${device.desktopS} {
        justify-content: center;
    }

    @media ${device.tabletS} {
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

    @media ${device.tabletS} {
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

    @media ${device.desktopS} {
        justify-content: flex-end;
        align-items: center;
        height: fit-content;
    }

    @media ${device.laptopS} {
        height: fit-content;
    }

    @media ${device.tabletS} {
        justify-content: center;
        height: fit-content;
    }
`;

const Card = styled.img`
    max-width: 250px;
    max-height: 148.78px;
`;

export const ChooseCard: React.FC = () => {

    const cardsContent = cards.map(card =>
        <Card src={card.path} alt={card.desc} loading='lazy' />
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