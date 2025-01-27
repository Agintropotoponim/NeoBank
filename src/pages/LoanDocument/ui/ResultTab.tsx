import styled from "styled-components";

const LoanDocumentsResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border-radius: 10px;
    width: 100%;
    height: 50vh;
    box-sizing: border-box;
    margin: 5px;
    padding: 10px;
`;

const LoanDocumentsResultTitle = styled.h3`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.loanDocumentResult.textPrimary};
    margin: 0;
`;

const LoanDocumentsResultDescription = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.loanDocumentResult.textSecondary};
    margin: 0;
`;

export const ResultTab: React.FC = () => {
    return (
        <LoanDocumentsResult>
            <LoanDocumentsResultTitle>
                Documents are formed
            </LoanDocumentsResultTitle>
            <LoanDocumentsResultDescription>
                Documents for signing will be sent to your email
            </LoanDocumentsResultDescription>
        </LoanDocumentsResult>
    )
}