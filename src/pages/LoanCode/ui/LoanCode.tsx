import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { device } from "shared/config/theme/device";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { ERoutes } from "shared/types/routesEnum";
import { BlueButton } from "shared/ui/BlueButton";
import styled from "styled-components";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";
import { useVerifyCode } from "../hooks/useVerifyCode";
import { ReactComponent as Final } from '../assets/final.svg';


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

const FinalImage = styled(Final)`
    max-width: 150px;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
`;

export const LoanCode: React.FC = () => {
    const { currentStep, applicationId, setCurrentStep, clearStore } = useLoanStore();
    const { id } = useParams<{ id: string }>();

    const { verifyCode } = useVerifyCode({ applicationId });
    const [code, setCode] = useState(["", "", "", ""]);
    const [error, setError] = useState(false);

    if (Number(id) !== applicationId) {
        return <Navigate to={ERoutes.HOMEPAGE} />;
    }

    const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return;
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 3) {
            document.getElementById(`code-input-${index + 1}`)?.focus();
        }

        if (newCode.every((digit) => digit !== "")) {
            handleSubmit(newCode.join(""));
        }
    };

    const handleSubmit = (enteredCode: string) => {
        verifyCode(enteredCode, {
            onSuccess: () => {
                setCurrentStep(6);
            },
            onError: () => {
                setError(true);
                setCode(["", "", "", ""]);
                document.getElementById("code-input-0")?.focus();
            },
        });
    };

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
            case 5:
                return (
                    <LoanCodeContainer>
                        <Title>Please enter confirmation code</Title>
                        <CodeInputContainer>{renderCodeInputs()}</CodeInputContainer>
                        {error && <ErrorMessage>Incorrect code, please try again.</ErrorMessage>}
                    </LoanCodeContainer>
                );
            case 6:
                return (
                    <LoanCodeContainer>
                        <FinalImage />
                        <Title>Congratulations! You have completed your new credit card.</Title>
                        <Content>Your credit card will arrive soon. Thank you for choosing us!</Content>
                        <BlueButton w={"268px"} h={"50px"} onClick={clearStore}>View other offers of our bank</BlueButton>
                    </LoanCodeContainer>
                );
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
