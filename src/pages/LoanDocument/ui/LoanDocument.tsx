import { PaymentSchedule } from "features/PaymentSchedule/ui/PaymentSchedule";
import { Navigate, useParams } from "react-router-dom";
import { device } from "shared/config/theme/device";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { ERoutes } from "shared/types/routesEnum";
import styled from "styled-components";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

const LoanDocumentPageHolder = styled.div`
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

export const LoanDocument: React.FC = () => {

    const { currentStep, applicationId } = useLoanStore();
    const { id } = useParams<{ id: string }>();

    if (Number(id) !== applicationId) {
        return <Navigate to={ERoutes.HOMEPAGE} />;
    }

    const getCurrentLoanTab = () => {
        switch (currentStep) {
            case 3: return <PaymentSchedule />
            case 4: return (
                <LoanDocumentsResult>
                    <LoanDocumentsResultTitle>
                        Documents are formed
                    </LoanDocumentsResultTitle>
                    <LoanDocumentsResultDescription>
                        Documents for signing will be sent to your email
                    </LoanDocumentsResultDescription>
                </LoanDocumentsResult>
            )
            default:
                return <Navigate to={ERoutes.HOMEPAGE} />;
        }
    };

    const currentLoanTab = getCurrentLoanTab();

    return (
        <LoanDocumentPageHolder>
            <Header />
            {currentLoanTab}
            <Footer />
        </LoanDocumentPageHolder>
    )
}