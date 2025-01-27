import { PaymentSchedule } from "features/PaymentSchedule/ui/PaymentSchedule";
import { Navigate, useParams } from "react-router-dom";
import { device } from "shared/config/theme/device";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { ERoutes } from "shared/types/routesEnum";
import styled from "styled-components";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";
import { ResultTab } from "./ResultTab";

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

export const LoanDocument: React.FC = () => {

    const { currentStep, applicationId } = useLoanStore();
    const { id } = useParams<{ id: string }>();

    if (Number(id) !== applicationId) {
        return <Navigate to={ERoutes.HOMEPAGE} />;
    }

    const getCurrentLoanTab = () => {
        switch (currentStep) {
            case 3: return <PaymentSchedule />
            case 4: return <ResultTab />
            default: return <Navigate to={ERoutes.HOMEPAGE} />;
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