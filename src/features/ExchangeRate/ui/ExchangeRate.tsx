import { useEffect, useState } from "react";
import styled from "styled-components";
import { ConverterService } from "../api/ConverterService";
import { baseCurrency, currencies, moscowDate, updateIntervaInlMinutes, updateInterval } from "../const/config";
import { illustration } from "../const/illustration";
import { useFetching } from "../hooks/useFetching";
import { rubForOneUnit } from "../lib/rubForOneUnit";

interface IRate {
    [key: string]: number;
}

interface IRateResponse {
    data: {
        conversion_rates: IRate;
    };
}

const CurrencyConverter = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    background: linear-gradient(358.2deg, 
        ${({ theme }) => theme.colors.currencyConverter.backgroundLight}, 
        ${({ theme }) => theme.colors.currencyConverter.backgroundDark});
    mix-blend-mode: normal;
    box-shadow: 
        ${({ theme }) => theme.colors.currencyConverter.shadowLight}, 
        ${({ theme }) => theme.colors.currencyConverter.shadowDark};
    border-radius: 28px;
    box-sizing: border-box;
`;

const Title = styled.h2`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 50px;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: 920px) {
        text-align: center;
    }
`;

const CurrencyInscription = styled.h2`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 50px;
    color: ${({ theme }) => theme.colors.textTertiary};
`;

const LeftSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;
`;

const RightSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;

const CurrencyGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 20px 0;

    @media (max-width: 920px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

const ConversionItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CurrencyText = styled.span`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 112%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.currencyConverter.currency};
`;

const CurrencyValue = styled.span`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 112%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.textTertiary};
`;

const UpdateInfo = styled.p`
    display: flex;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 50px;
    color: ${({ theme }) => theme.colors.textTertiary};

    @media (max-width: 920px) {
        height: 30%;
    }

    @media (max-width: 500px) {
        margin-top: 25px;
        padding-left: 20px;
    }
`;

const AllCourses = styled.p`
    width: fit-content;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 112%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.textQuinary};
    cursor: pointer;
`;

const ConverterImage = styled.img`
    @media (max-width: 920px) {
        width: 70px;
    }
`;

export const ExchangeRate: React.FC = () => {

    const [rates, setRates] = useState<IRate>({});

    const {
        fetchFn: fetchRates,
        isLoading: isRateLoading,
        errorMessage: ratesLoadingError
    } = useFetching<IRateResponse>(async () => {
        const response = await ConverterService.getAll(baseCurrency);
        setRates(response.data.conversion_rates);
        return response.data;
    });

    useEffect(() => {

        fetchRates();

        const interval = setInterval(() => {
            fetchRates();
        }, updateInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <CurrencyConverter>
            <LeftSection>
                <Title>Exchange rate in Internet Bank</Title>
                <CurrencyInscription>Currency</CurrencyInscription>
                <CurrencyGrid>
                    {isRateLoading && <p>Loading...</p>}
                    {ratesLoadingError && (
                        <p>
                            {String(ratesLoadingError)}
                        </p>
                    )}
                    {Object.keys(rates).length > 0 &&
                        currencies.map((currency) => {
                            const rate = rates[currency];
                            if (!rate) return null;

                            const rubForOneUnitValue = rubForOneUnit(rate);
                            return (
                                <ConversionItem key={currency}>
                                    <CurrencyText>{currency}:</CurrencyText>
                                    <CurrencyValue>{rubForOneUnitValue}</CurrencyValue>
                                </ConversionItem>
                            );
                        })}
                </CurrencyGrid>
                <AllCourses>All courses</AllCourses>
            </LeftSection>
            <RightSection>
                <UpdateInfo>
                    Update every {updateIntervaInlMinutes} minutes, MSC {moscowDate}
                </UpdateInfo>
                <div>
                    <ConverterImage
                        src={illustration}
                        alt="bank"
                    />
                </div>
            </RightSection>
        </CurrencyConverter>
    );
};