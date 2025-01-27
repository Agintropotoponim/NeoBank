import React from "react";
import styled from "styled-components";

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

export const ResultTab: React.FC = () => {
    return (
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