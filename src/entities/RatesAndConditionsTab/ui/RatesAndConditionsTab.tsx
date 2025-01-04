import styled from "styled-components"
import { ratesAndConditions } from "../consts/ratesAndConditions";
import { device } from "shared/config/theme/device";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    width: 1016.47px;
    display: flex;
    align-items: center;
    padding: 15px 0px;
    border-bottom: ${({ theme }) => theme.colors.ratesAndConditionsTab.border};
    box-sizing: border-box;

    @media ${device.desktopS} {
        width: 920px;
    }

    @media ${device.laptopS} {
        width: 500px;
    }

    @media ${device.tabletS} {
        width: 280px;
    }
`;

const ItemKey = styled.pre`
    margin: 0;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.ratesAndConditionsTab.textPrimary};
    min-width: 300px;
    box-sizing: border-box;

    @media ${device.tabletS} {
        min-width: 180px;
        white-space: pre-wrap;
    }
`;

const ItemValue = styled.pre`
    padding: 10px;
    margin: 0;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.ratesAndConditionsTab.textSecondary};
    box-sizing: border-box;
    white-space: pre-wrap;
`;

export const RatesAndConditionsTab: React.FC = () => {

    const list = Object.entries(ratesAndConditions).map(([key, value]) => (
        <Item key={key}>
            <ItemKey>{key}</ItemKey>
            <ItemValue>{value}</ItemValue>
        </Item>
    ));

    return (
        <Container>
            {list}
        </Container>
    )
}