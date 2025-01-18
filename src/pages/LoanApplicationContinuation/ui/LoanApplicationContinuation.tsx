import { Scoring } from "features/Scoring";
import { Navigate, useParams } from "react-router-dom";
import { device } from "shared/config/theme/device";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { ERoutes } from "shared/types/routesEnum";
import styled from "styled-components";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

const LoanPageHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 1300px;
    box-sizing: border-box;
    gap: 30px;

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

export const LoanApplicationContinuation: React.FC = () => {

    const { currentStep, applicationId } = useLoanStore();
    const { id } = useParams<{ id: string }>();

    if (Number(id) !== applicationId) {
        return <Navigate to={ERoutes.HOMEPAGE} />;
    }

    const getCurrentLoanTab = () => {
        switch (currentStep) {
            case 2: return <Scoring />
            case 3: return (
                <LoanContinuationDecision>
                    <LoanContinuationDecisionTitle>
                        Wait for a decision on the application
                    </LoanContinuationDecisionTitle>
                    <LoanContinuationDecisionDescription>
                        The answer will come to your mail within 10 minutes
                    </LoanContinuationDecisionDescription>
                </LoanContinuationDecision>
            )
            default:
                return <Navigate to={'/'} />;
        }
    };

    const currentLoanTab = getCurrentLoanTab();

    return (
        <LoanPageHolder>
            <Header />
            {currentLoanTab}
            <Footer />
        </LoanPageHolder>
    )
}