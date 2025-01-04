import React from 'react';
import styled from 'styled-components';

import { device } from 'shared/config/theme/device';
import { cards } from '../const/cards';

const AboutCardContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 1fr);
    width: 1300px;
    

    & > :nth-child(n) {
        box-sizing: border-box;
        height: 236px;
        border-radius: 28px;
        color: ${({ theme }) => theme.colors.aboutCardTab.textPrimary};
        box-shadow: ${({ theme }) => theme.colors.aboutCardTab.itemBoxShadow};
    }

    & > :nth-child(odd) {
        background: ${({ theme }) => theme.colors.aboutCardTab.oddBackground};
    }

    & > :nth-child(even) {
        background: ${({ theme }) => theme.colors.aboutCardTab.evenBackground};
    }

    & > :nth-child(1) {
        grid-column: 1 / span 2;
    }

    & > :nth-child(2) {
        grid-column: 3 / span 2;
    }

    & > :nth-child(3) {
        width: 406.66px;
        grid-column: 5 / span 2;
    }

    & > :nth-child(4),
    & > :nth-child(5) {
        width: 630px;
        grid-column: span 3;
        grid-row: 2;
    }

    @media ${device.desktopS} {
        grid-template-columns: 1fr;

        justify-items: center;

        & > :nth-child(n) {
            grid-column: 1 / -1;
            grid-row: auto;
            width: 630px;
        }

        width: 920px;
    }

    @media ${device.laptopS} {
        grid-template-columns: 1fr;
        width: 100%;

        & > :nth-child(n) {
            width: 500px;
        }
    }

    @media ${device.tabletS} {
        & > :nth-child(n) {
            width: 280px;
        }
    }
`;

const Card = styled.div`
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    svg {
        max-width: 40px;
        min-height: 40px;
    }
`;

const CardTitle = styled.h3`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 147.4%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

const CardDescription = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;
`;

export const AboutCardTab: React.FC = () => {
    return (
        <AboutCardContainer>
            {cards.map((card, index) => (
                <Card key={index}>
                    {card.icon}
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                </Card>
            ))}
        </AboutCardContainer>
    );
};
