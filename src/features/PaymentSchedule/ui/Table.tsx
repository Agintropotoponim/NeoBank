import { device } from "shared/config/theme/device";
import styled from "styled-components";
import { PaymentScheduleItem } from "../types/ScheduleResponse";

const Container = styled.table`
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

const Tbody = styled.tbody`
    @media ${device.tabletS} {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
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

const Td = styled.td`
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.paymentSchedule.borderColor};
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


interface ITableProps {
    schedule: PaymentScheduleItem[];
    sortKey: keyof PaymentScheduleItem | null;
    onSort: (key: keyof PaymentScheduleItem) => void;
}

const scheduleHeaders: { key: keyof PaymentScheduleItem; label: string }[] = [
    { key: "number", label: "NUMBER" },
    { key: "date", label: "DATE" },
    { key: "totalPayment", label: "TOTAL PAYMENT" },
    { key: "interestPayment", label: "INTEREST PAYMENT" },
    { key: "debtPayment", label: "DEBT PAYMENT" },
    { key: "remainingDebt", label: "REMAINING DEBT" }
];


export const Table: React.FC<ITableProps> = ({ schedule, sortKey, onSort }) => {
    return (
        <Container>
            <thead>
                <tr>
                    {scheduleHeaders.map(({ key, label }) => (
                        <Th key={key} isSorted={sortKey === key} onClick={() => onSort(key)}>
                            {label}
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
        </Container>
    )
}