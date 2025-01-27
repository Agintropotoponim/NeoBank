import { Navigate, useParams } from "react-router-dom";
import { device } from "shared/config/theme/device";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { LoanStep } from "shared/types/loanStep";
import { ERoutes } from "shared/types/routesEnum";
import styled from "styled-components";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";
import { useLoanCode } from "../hooks/useLoanCode";
import { CodeConfirmationTab, ResultTab } from "./CodeConfirmationTabs";

const Container = styled.div`
    width: 1300px;
    min-height: 584px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 28px;
    box-sizing: border-box;
    
    @media ${device.desktopS} {
        width: 920px;
    }

    @media ${device.laptopS} {
        width: 500px;
    }

    @media ${device.tabletS} {
        width: 280px;
    }
`;

const CodeInputWrapper = styled.div`
    position: relative;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CodeCircle = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: ${({ theme }) => theme.colors.loanCode.circleBorder};
    background-color: transparent;
`;

const CodeInput = styled.input`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.loanCode.textTertiary};

    width: 48px;
    height: 48px;
    text-align: center;
    border: ${({ theme }) => theme.colors.loanCode.cellBorder};
    border-radius: 8px;
    outline: none;
    background: transparent;

    &:focus {
        border-color: ${({ theme }) => theme.colors.loanCode.focusCellBorder};
    }
`;

export const LoanCode: React.FC = () => {
    const { currentStep, applicationId, setCurrentStep, clearStore } = useLoanStore();
    const { id } = useParams<{ id: string }>();

    const { code, error, handleChange } = useLoanCode(applicationId);

    if (Number(id) !== applicationId) {
        return <Navigate to={ERoutes.HOMEPAGE} />;
    }

    const renderCodeInputs = () =>
        code.map((digit, index) => (
            <CodeInputWrapper key={index}>
                <CodeCircle />
                <CodeInput
                    id={`code-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                />
            </CodeInputWrapper>
        ));

    const getCurrentLoanTab = () => {
        switch (currentStep) {
            case LoanStep.CODE_CONFIRMATION:
                return <CodeConfirmationTab renderCodeInputs={renderCodeInputs} error={error} />
            case LoanStep.FINAL:
                return <ResultTab clearStore={clearStore} />
            default:
                return <Navigate to={ERoutes.HOMEPAGE} />;
        }
    };

    const currentTab = getCurrentLoanTab();

    return (
        <Container>
            <Header />
            {currentTab}
            <Footer />
        </Container>
    );
};
