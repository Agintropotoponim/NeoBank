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
import { ResultTab } from "./ResultTab";

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
            default: <ResultTab />
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