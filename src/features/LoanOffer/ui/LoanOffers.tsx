import { ILoanOffer } from 'shared/types/loanOfferType';
import styled from 'styled-components';
import { ReactComponent as TrueIcon } from '../assets/true_icon.svg';
import { ReactComponent as FalseIcon } from '../assets/false_icon.svg';
import { ReactComponent as LoanOfferIcon } from '../assets/offer_icon.svg';
import { ApplyButton } from 'shared/ui/ApplyButton';
import { useApplyLoan } from '../hooks/useApplyLoan';
import { useLoanStore } from 'shared/hooks/useLoanStore';
import { device } from 'shared/config/theme/device';

interface ILoanOffersProps {
    offers: ILoanOffer[];
}

const TrueImage = styled(TrueIcon)`
    max-width: 24px;
    margin-left: 10px;
`;

const FalseImage = styled(FalseIcon)`
    max-width: 24px;
    margin-left: 10px;
`;

const LoanOfferImage = styled(LoanOfferIcon)`
    max-width: 150px;
`;

const OfferContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.loanOffers.textPrimary};
    background: ${({ theme }) => theme.colors.loanOffers.background};
    box-shadow: ${({ theme }) => theme.colors.loanOffers.boxShadow};
    border-radius: 28px;
    width: 295px;
    height: 602px;
    gap: 50px;
    box-sizing: border-box;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${device.desktopS} {
        gap: 20px;
        justify-content: center;
    }

`;

const Field = styled.p`
    display: flex;
    align-items: center;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    margin: 0;
`;

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const LoanOffers: React.FC<ILoanOffersProps> = ({ offers = [] }) => {


    const { setCurrentStep } = useLoanStore();
    const onSuccess = (): void => {
        setCurrentStep(2);
    }

    const { applyLoan } = useApplyLoan(onSuccess);

    const handleApply = (offer: ILoanOffer) => {
        applyLoan(offer);
    };

    return (
        <Container>
            {offers.map((offer, index) => (
                <OfferContainer key={index}>
                    <LoanOfferImage />
                    <FieldContainer>
                        <Field>Requested Amount: {offer.requestedAmount} ₽</Field>
                        <Field>Total Amount: {offer.totalAmount} ₽</Field>
                        <Field>Term: {offer.term} months</Field>
                        <Field>Monthly Payment: {offer.monthlyPayment} ₽</Field>
                        <Field>Rate: {offer.rate}%</Field>
                        <Field>Insurance {offer.isInsuranceEnabled ? <TrueImage /> : <FalseImage />}</Field>
                        <Field>Salary Client {offer.isSalaryClient ? <TrueImage /> : <FalseImage />}</Field>
                    </FieldContainer>
                    <ApplyButton
                        onClick={() => handleApply(offer)}
                    >
                        Select
                    </ApplyButton>
                </OfferContainer>
            ))}
        </Container>
    );
};