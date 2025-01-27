import styled from "styled-components";

const LoanContinuationDecision = styled.div`
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

const LoanContinuationDecisionTitle = styled.h3`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.applicationDecision.textPrimary};
    margin: 0;
`;

const LoanContinuationDecisionDescription = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.applicationDecision.textSecondary};
    margin: 0;
`;

export const ResultTab: React.FC = () => {
    return (
        <LoanContinuationDecision>
            <LoanContinuationDecisionTitle>
                Wait for a decision on the application
            </LoanContinuationDecisionTitle>
            <LoanContinuationDecisionDescription>
                The answer will come to your mail within 10 minutes
            </LoanContinuationDecisionDescription>
        </LoanContinuationDecision>
    )
} 