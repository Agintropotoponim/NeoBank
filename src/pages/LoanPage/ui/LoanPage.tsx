import { DigitalCreditCard } from "entities/DigitalCreditCard";
import { Tabs } from "features/Tabs";
import { device } from "shared/config/theme/device";
import styled from "styled-components";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";
import { loanPageTabs } from "../consts/loanPageTabs";
import { Prescoring } from "features/Prescoring";
import { useRef } from "react";
import { HowToGetCard } from "entities/HowToGetCard";

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

    return (
        <LoanPageHolder>
            <Header />
            <DigitalCreditCard scrollToApp={scrollToApp} />
            <Tabs tabs={loanPageTabs} />
            <HowToGetCard />
            <Prescoring ref={prescoringRef} />
            <Footer />
        </LoanPageHolder>
    )
}