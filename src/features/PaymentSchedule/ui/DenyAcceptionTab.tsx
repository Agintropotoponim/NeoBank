import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { ERoutes } from "shared/types/routesEnum";
import { ApplyButton } from "shared/ui/ApplyButton";
import styled from "styled-components";
import { ReactComponent as CloseImage } from '../assets/close_square.svg';
import { useDenyApplication } from "../hooks/useDenyApplication";
import { DenyButton } from "./DenyButton";

const Title = styled.h3`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 147.4%;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.paymentSchedule.textPrimary};
`;

const CloseButton = styled(CloseImage)`
    max-height: 24px;
    cursor: pointer;
`;

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

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const UpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LowerSection = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 30px;
`;

interface IDenyAcceptionTabProps {
    visible?: boolean,
    closeTab: React.Dispatch<React.SetStateAction<boolean>>
}

export const DenyAcceptionTab: React.FC<IDenyAcceptionTabProps> = ({ closeTab }) => {

    const [denyStatus, setDenyStatus] = useState<boolean>(false);

    const { applicationId, clearStore } = useLoanStore();
    const { denyApplication, isSuccess } = useDenyApplication({ applicationId });

    const nav = useNavigate();


    const DenyHandler = async () => {
        try {
            await denyApplication(applicationId);
            setDenyStatus(true);
            clearStore()
        } catch (e) {
            throw e;
        }

    };

    const GoHomeFn = () => {
        nav(ERoutes.HOMEPAGE);
    }

    const closeTabHandler = () => {
        closeTab(false);
    }

    const getCurrentTab = () => {
        switch (denyStatus) {
            case true: return (
                <div>
                    <Content>
                        Your application has been deny!
                    </Content>
                    <LowerSection>
                        <ApplyButton onClick={GoHomeFn}>Go home</ApplyButton>
                    </LowerSection>
                </div>
            )
            default: return (
                <div>
                    <Content>
                        You exactly sure, you want to cancel this application?
                    </Content>
                    <LowerSection>
                        <DenyButton onClick={DenyHandler}>Deny</DenyButton>
                        <ApplyButton onClick={closeTabHandler}>Cancel</ApplyButton>
                    </LowerSection>
                </div>
            )
        }
    };

    const currentTab = getCurrentTab();

    return (
        <Container>
            <UpperSection>
                <Title>Deny application</Title>
                <CloseButton onClick={closeTabHandler} />
            </UpperSection>
            {currentTab}
        </Container>
    )
}