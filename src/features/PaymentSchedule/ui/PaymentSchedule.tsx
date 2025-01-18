import { useState, useEffect } from "react";
import styled from "styled-components";
import { usePaymentSchedule } from "../hooks/usePaymentSchedule";
import { ScheduleResponse } from "../types/ScheduleResponse";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { device } from "shared/config/theme/device";
import { ApplyButton } from "shared/ui/ApplyButton";
import { Modal } from "shared/ui/Modal";
import { DenyButton } from "./DenyButton";
import { DenyAcceptionTab } from "./DenyAcceptionTab";
import { Loader } from "shared/ui/Loader";
import { useConsentDocuments } from "../hooks/useConsentDocuments";

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

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    @media ${device.laptopS} {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 460px;
    }

    @media ${device.tabletS} {
        width: 100%;

    }
`;

const Th = styled.th<{ isSorted: boolean }>`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 147.4%;
    letter-spacing: 0.02em;

    color: ${({ theme }) => theme.colors.paymentSchedule.textQuaternary};

    padding: 10px;
    text-align: left;
    cursor: pointer;
    position: relative;


    &::after {
        content: ${({ isSorted }) => (isSorted ? "'▼'" : "'▲'")};
        font-size: 12px;
        margin-left: 8px;
    }

    @media ${device.laptopS} {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
    }
`;

const Td = styled.td`
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.paymentSchedule.borderColor};
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

const Cell = styled.tr`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 147.4%;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.paymentSchedule.textTertiary};

    @media ${device.tabletS} {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
    }
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

const Tbody = styled.tbody`
    @media ${device.tabletS} {
        display: flex;
        align-items: center;
        flex-direction: column;
        
        width: 100%;
    }
`;

export const PaymentSchedule: React.FC = () => {
    const { applicationId, setCurrentStep } = useLoanStore();
    const { fetchPaymentSchedule, response, isSuccess } = usePaymentSchedule({ applicationId });
    const [schedule, setSchedule] = useState<ScheduleResponse['credit']['paymentSchedule']>([]);
    const [sortKey, setSortKey] = useState<keyof ScheduleResponse['credit']['paymentSchedule'][0] | null>(null);
    const [isAscending, setIsAscending] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { consentDocuments } = useConsentDocuments({ applicationId: -1 });

    const handleConsent = () => {
        consentDocuments(applicationId);
        setCurrentStep(4);
    };


    useEffect(() => {
        fetchPaymentSchedule(applicationId);
    }, [applicationId]);

    useEffect(() => {
        if (isSuccess && response?.credit.paymentSchedule) {
            setSchedule(response.credit.paymentSchedule);
        }
    }, [response, isSuccess]);

    const handleSort = (key: keyof ScheduleResponse['credit']['paymentSchedule'][0]) => {
        const sortedData = [...schedule].sort((a, b) => {
            if (a[key] < b[key]) return isAscending ? -1 : 1;
            if (a[key] > b[key]) return isAscending ? 1 : -1;
            return 0;
        });
        setSchedule(sortedData);
        setSortKey(key);
        setIsAscending(!isAscending);
    };

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

            <Table>
                <thead>
                    <tr>
                        {["number", "date", "totalPayment", "interestPayment", "debtPayment", "remainingDebt"].map((key) => (
                            <Th key={key} isSorted={sortKey === key} onClick={() => handleSort(key as keyof ScheduleResponse['credit']['paymentSchedule'][0])}>
                                {key.toUpperCase()}
                            </Th>
                        ))}
                    </tr>
                </thead>
                <Tbody>
                    {schedule.map((row, index) => (
                        <Cell key={index}>
                            <Td>{row.number}</Td>
                            <Td>{row.date}</Td>
                            <Td>{row.totalPayment}</Td>
                            <Td>{row.interestPayment}</Td>
                            <Td>{row.debtPayment}</Td>
                            <Td>{row.remainingDebt}</Td>
                        </Cell>
                    ))}
                </Tbody>
            </Table>

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
                <DenyAcceptionTab closeTab={setModalVisible} />
            </Modal>
        </Container>
    );
};
