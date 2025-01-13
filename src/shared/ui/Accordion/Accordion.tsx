import React from "react";
import styled from "styled-components";
import { ReactComponent as ExpandIcon } from "./assets/expand.svg";
import { device } from "shared/config/theme/device";

const AccordionItem = styled.div`
    background: ${({ theme }) => theme.colors.accordion.background};
    border: 1px solid ${({ theme }) => theme.colors.accordion.border};
    border-radius: 8px;
    margin-bottom: 10px;
    width: 1300px;

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

const AccordionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    cursor: pointer;
`;

const AccordionTitle = styled.h3`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 147.4%;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.accordion.textPrimary};
`;

const AccordionDescription = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 147.4%;
    display: flex;
    align-items: center;
    padding: 15px;
    color: ${({ theme }) => theme.colors.accordion.textSecondary};
`;

const IconWrapper = styled.div<{ isOpen: boolean }>`
    transform: ${({ isOpen }) => isOpen ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform 0.3s ease;
`;

interface AccordionProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClick: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ title, description, isOpen, onClick }) => {
    return (
        <AccordionItem>
            <AccordionHeader onClick={onClick}>
                <AccordionTitle>{title}</AccordionTitle>
                <IconWrapper isOpen={isOpen}>
                    <ExpandIcon />
                </IconWrapper>
            </AccordionHeader>
            {isOpen && <AccordionDescription>{description}</AccordionDescription>}
        </AccordionItem>
    );
};