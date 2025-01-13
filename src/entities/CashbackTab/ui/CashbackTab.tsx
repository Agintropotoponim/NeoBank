import styled from "styled-components";
import { cashback } from "../const/cashback";
import { device } from "shared/config/theme/device";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    gap: 30px;
    justify-content: center;

    & > :nth-child(odd){
        background: ${({ theme }) => theme.colors.cashbackTab.oddBackground};
    }

    & > :nth-child(even){
        background: ${({ theme }) => theme.colors.cashbackTab.evenBackground};
    }
`;

const Item = styled.div`
    width: 406.66px;
    height: 163.2px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: ${({ theme }) => theme.colors.cashbackTab.boxShadow};
    border-radius: 28px;
    padding: 15px 30px;
    box-sizing: border-box;

    @media ${device.tabletS} {
        width: 280px
    }
`;

const Title = styled.h3`
    margin: 0;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 147.4%;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.cashbackTab.textPrimary};
    @media ${device.laptopS} {
        justify-content: center;
    }
`;

const Value = styled.h4`
    margin: 0;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 147.4%;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.cashbackTab.textSecondary};

    @media ${device.laptopS} {
        justify-content: center;
    }
`;


export const CashbackTab: React.FC = () => {
    const list = Object.entries(cashback).map(([key, value], index) => (
        <Item key={index}>
            <Title>{key}</Title>
            <Value>{value}</Value>
        </Item>
    ));

    return (
        <Container>
            {list}
        </Container>
    );
};