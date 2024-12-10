import styled from "styled-components";
import { ReactComponent as BankIcon } from '../assets/bank-icon.svg';
import { baseCurrency, currencies, moscowDate, updateIntervaInlMinutes, updateInterval } from "../const/config";
import { useExchangeRates } from "../hooks/useExchangeRate";
import { rubForOneUnit } from "../lib/rubForOneUnit";
import { device } from "shared/config/theme/device";

const StyledBankIcon = styled(BankIcon)`
    max-width: 120px;
    height: 112.76px;

    @media ${device.laptopS} {
        width: 70px;
    }
`;

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

    @media ${device.laptopS} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.tabletS} {
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

    @media ${device.laptopS} {
        padding-top: 10px;
        height: 30%;
    }

    @media ${device.tabletS} {
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

export const ExchangeRate: React.FC = () => {

    const { rates, isRatesLoading, ratesError } = useExchangeRates({ baseCurrency, updateInterval });

    return (
        <CurrencyConverter>
            <LeftSection>
                <Title>Exchange rate in Internet Bank</Title>
                <CurrencyInscription>Currency</CurrencyInscription>
                <CurrencyGrid>
                    {isRatesLoading && <p>Loading...</p>}
                    {ratesError && (
                        <p>
                            {String(ratesError.message)}
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
                <StyledBankIcon />
            </RightSection>
        </CurrencyConverter>
    );
};