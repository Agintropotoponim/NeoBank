import { useState } from "react";
import { Accordion } from "shared/ui/Accordion";
import styled from "styled-components";
import { faq } from "../const/faq";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const BlockTitle = styled.h2`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 147.4%;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.faqTab.textPrimary};
`;

export const FAQTab: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const handleAccordionToggle = (title: string) => {
        setOpenAccordion(prev => prev === title ? null : title);
    };

    return (
        <Container>
            <BlockTitle>Issuing and receiving a card</BlockTitle>
            {Object.entries(faq["Issuing and receiving a card"]).map(([question, answer]) => (
                <Accordion
                    key={question}
                    title={question}
                    description={answer}
                    isOpen={openAccordion === question}
                    onClick={() => handleAccordionToggle(question)}
                />
            ))}
            <BlockTitle>Using a credit card</BlockTitle>
            {Object.entries(faq["Using a credit card"]).map(([question, answer]) => (
                <Accordion
                    key={question}
                    title={question}
                    description={answer}
                    isOpen={openAccordion === question}
                    onClick={() => handleAccordionToggle(question)}
                />
            ))}
        </Container>
    );
};