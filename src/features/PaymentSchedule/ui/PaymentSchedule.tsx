import { useEffect, useState } from "react";
import { device } from "shared/config/theme/device";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { ApplyButton } from "shared/ui/ApplyButton";
import { Loader } from "shared/ui/Loader";
import { Modal } from "shared/ui/Modal";
import styled from "styled-components";
import { useConsentDocuments } from "../hooks/useConsentDocuments";
import { usePaymentSchedule } from "../hooks/usePaymentSchedule";
import { useSchedule } from "../hooks/useSchedule";
import { DenyAcceptionTab } from "./DenyAcceptionTab";
import { DenyButton } from "./DenyButton";
import { Table } from "./Table";
import { LoanStep } from "shared/types/loanStep";

const Container = styled.div`
    width: 100%;
    min-height: 584px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: ${({ theme }) => theme.colors.paymentSchedule.background};
    box-shadow: ${({ theme }) => theme.colors.paymentSchedule.boxShadow};
    border-radius: 28px;
    box-sizing: border-box;

    @media ${device.tabletS} {
        width: 280px;
    }
`;

const SectionDescription = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    gap: 40px;

    @media ${device.desktopS} {
        height: auto;
        justify-content: center
    }

    @media ${device.laptopS} {
        flex-direction: column;
        align-items: center;
    }
`;

const Title = styled.h2`
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.paymentSchedule.textPrimary};
`;

const StepsBlock = styled.p`
    font-family: 'Ubuntu';
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.paymentSchedule.textSecondary};
`;

const LowerSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @media ${device.laptopS} {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px
    }
`;

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const LowerPart = styled.div`
    display: flex;
    gap: 20px;
    width: fit-content;

    @media ${device.laptopS} {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

export const PaymentSchedule: React.FC = () => {
    const { applicationId, setCurrentStep } = useLoanStore();
    const { fetchPaymentSchedule, response, isSuccess } = usePaymentSchedule({ applicationId });

    const [isChecked, setIsChecked] = useState(false);

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { consentDocuments } = useConsentDocuments({ applicationId: -1 });

    const handleConsent = () => {
        consentDocuments(applicationId);
        setCurrentStep(LoanStep.SIGNING_DOCUMENTS);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const { schedule, sortKey, handleSort } = useSchedule(applicationId);

    useEffect(() => {
        fetchPaymentSchedule(applicationId);
    }, [applicationId, fetchPaymentSchedule]);

    const checkBoxHandler = () => {
        setIsChecked(!isChecked)
    }

    if (!isSuccess) return <Loader />

    return (
        <Container>
            <SectionDescription>
                <Title>Payment Schedule</Title>
                <StepsBlock>Step 3 of 5</StepsBlock>
            </SectionDescription>

            <Table schedule={schedule} sortKey={sortKey} onSort={handleSort} />

            <LowerSection>
                <LowerPart>
                    <DenyButton onClick={() => setModalVisible(true)}>Deny</DenyButton>
                </LowerPart>
                <LowerPart>
                    <CheckboxLabel>
                        <input type="checkbox" checked={isChecked} onChange={checkBoxHandler} />
                        I agree with the payment schedule
                    </CheckboxLabel>
                    <ApplyButton disabled={!isChecked} onClick={handleConsent}>Send</ApplyButton>
                </LowerPart>
            </LowerSection>
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <DenyAcceptionTab closeTab={handleCloseModal} />
            </Modal>
        </Container>
    );
};
