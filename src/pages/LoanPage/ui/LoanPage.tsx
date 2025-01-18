import { DigitalCreditCard } from "entities/DigitalCreditCard";
import { HowToGetCard } from "entities/HowToGetCard";
import { Prescoring } from "features/Prescoring";
import { Tabs } from "features/Tabs";
import { useRef } from "react";
import { device } from "shared/config/theme/device";
import { useLoanStore } from "shared/hooks/useLoanStore";
import styled from "styled-components";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";
import { loanPageTabs } from "../consts/loanPageTabs";
import { LoanOffers } from "features/LoanOffer";

const LoanPageHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 1300px;
    box-sizing: border-box;
    gap: 30px;

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

const PreliminaryDecision = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border: ${({ theme }) => theme.colors.preliminaryDecision.border};
    border-radius: 10px;
    width: 100%;
    min-height: 142px;
    box-sizing: border-box;
    margin: 5px;
    padding: 10px;
`;

const PreliminaryDecisionTitle = styled.h3`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.preliminaryDecision.textPrimary};
    margin: 0;
`;

const PreliminaryDecisionDescription = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.preliminaryDecision.textSecondary};
    margin: 0;
`;

export const LoanPage: React.FC = () => {

    const prescoringRef = useRef<HTMLDivElement | null>(null);

    const scrollToApp = () => {
        if (prescoringRef.current) {
            prescoringRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const { loanOffers, currentStep } = useLoanStore();

    const getCurrentLoanTab = () => {
        switch (currentStep) {
            case 0: return <Prescoring ref={prescoringRef} />;
            case 1:
                return <LoanOffers offers={loanOffers || []} />;
            //case 2:
            default: return (
                <PreliminaryDecision>
                    <PreliminaryDecisionTitle>
                        The preliminary decision has been sent to your email.
                    </PreliminaryDecisionTitle>
                    <PreliminaryDecisionDescription>
                        In the letter you can get acquainted with the preliminary decision on the credit card.
                    </PreliminaryDecisionDescription>
                </PreliminaryDecision>
            )
        }
    };

    const currentLoanTab = getCurrentLoanTab();

    return (
        <LoanPageHolder>
            <Header />
            <DigitalCreditCard scrollToApp={scrollToApp} />
            <Tabs tabs={loanPageTabs} />
            <HowToGetCard />
            {currentLoanTab}
            <Footer />
        </LoanPageHolder>
    )
}