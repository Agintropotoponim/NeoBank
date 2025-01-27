import React from "react";
import { ApplyButton } from "shared/ui/ApplyButton";
import styled from "styled-components";
import { IConfirmDenialProps } from "../types/IConfirmDenialProps";
import { ISuccesDenialTabProps } from "../types/ISuccesDenialTabProps";
import { DenyButton } from "./DenyButton";

const Content = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 147.4%;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.paymentSchedule.textTertiary};
`;

const LowerSection = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 30px;
`;

export const SuccesDenialTab: React.FC<ISuccesDenialTabProps> = ({ goHome }) => {
    return (
        <div>
            <Content>
                Your application has been deny!
            </Content>
            <LowerSection>
                <ApplyButton onClick={goHome}>Go home</ApplyButton>
            </LowerSection>
        </div>
    )
}

export const ConfirmDenialTab: React.FC<IConfirmDenialProps> = ({ denyHandler, closeTabHandler }) => {
    return (
        <div>
            <Content>
                You exactly sure, you want to cancel this application?
            </Content>
            <LowerSection>
                <DenyButton onClick={denyHandler}>Deny</DenyButton>
                <ApplyButton onClick={closeTabHandler}>Cancel</ApplyButton>
            </LowerSection>
        </div>
    )
}