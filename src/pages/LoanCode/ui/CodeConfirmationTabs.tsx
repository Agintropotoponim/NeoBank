import styled from 'styled-components';
import { ReactComponent as Final } from '../assets/final.svg';
import { BlueButton } from 'shared/ui/BlueButton';
import { IResultTabProps } from '../types/IResultTabProps';
import { ICodeConfirmationTabProps } from '../types/ICodeConfirmationTabProps';

const FinalImage = styled(Final)`
    max-width: 150px;
`;

const Content = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 147.4%;
    text-align: center;
    color: ${({ theme }) => theme.colors.loanCode.textSecondary};
`;

const CodeInputContainer = styled.div`
    display: flex;
    gap: 10px;
    height: 40vh;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
`;

const LoanCodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
`;

const Title = styled.h3`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 147.4%;
    text-align: center;
    color: ${({ theme }) => theme.colors.loanCode.textPrimary};
`;

export const ResultTab: React.FC<IResultTabProps> = ({ clearStore }) => {
    return (
        <LoanCodeContainer>
            <FinalImage />
            <Title>Congratulations! You have completed your new credit card.</Title>
            <Content>Your credit card will arrive soon. Thank you for choosing us!</Content>
            <BlueButton w={"268px"} h={"50px"} onClick={clearStore}>View other offers of our bank</BlueButton>
        </LoanCodeContainer>
    )
}

export const CodeConfirmationTab: React.FC<ICodeConfirmationTabProps> = ({ renderCodeInputs, error }) => {
    return (
        <LoanCodeContainer>
            <Title>Please enter confirmation code</Title>
            <CodeInputContainer>{renderCodeInputs()}</CodeInputContainer>
            {error && <ErrorMessage>Incorrect code, please try again.</ErrorMessage>}
        </LoanCodeContainer>
    )
}