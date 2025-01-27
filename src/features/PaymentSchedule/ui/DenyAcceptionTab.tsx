import { useState } from "react";
import { useLoanStore } from "shared/hooks/useLoanStore";
import styled from "styled-components";
import { ReactComponent as CloseImage } from '../assets/close_square.svg';
import { useDenyApplication } from "../hooks/useDenyApplication";
import { IDenyAcceptionTabProps } from "../types/IDenyAcceptionTabProps";
import { ConfirmDenialTab, SuccesDenialTab } from "./modalTabs";
import { useNavigate } from "react-router-dom";
import { ERoutes } from "shared/types/routesEnum";

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

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const UpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DenyAcceptionTab: React.FC<IDenyAcceptionTabProps> = ({ closeTab }) => {

    const [denyStatus, setDenyStatus] = useState<boolean>(false);

    const { applicationId, clearStore } = useLoanStore();
    const { denyApplication, isSuccess } = useDenyApplication({ applicationId });

    const nav = useNavigate();
    const goHome = () => {
        nav(ERoutes.HOMEPAGE);
    }

    const denyHandler = async () => {
        await denyApplication(applicationId);
        setDenyStatus(true);
        clearStore()
    };

    const closeTabHandler = () => {
        closeTab(false);
    }

    const getCurrentTab = () => {
        if (denyStatus) {
            return <SuccesDenialTab goHome={goHome} />
        } else {
            return <ConfirmDenialTab closeTabHandler={closeTabHandler} denyHandler={denyHandler} />
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