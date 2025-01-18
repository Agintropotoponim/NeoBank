import { PaymentSchedule } from "features/PaymentSchedule/ui/PaymentSchedule";
import { SigningDocument } from "features/SigningDocument";
import { Navigate, useParams } from "react-router-dom";
import { device } from "shared/config/theme/device";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { ERoutes } from "shared/types/routesEnum";
import styled from "styled-components";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

const LoanDocumentSignPageHolder = styled.div`
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

const LoanDocumentSignsResult = styled.div`
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

const LoanDocumentSignsResultTitle = styled.h3`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.loanDocumentSign.textPrimary};
    margin: 0;
`;

const LoanDocumentSignsResultDescription = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.loanDocumentSign.textSecondary};
    margin: 0;
`;

export const LoanDocumentSign: React.FC = () => {

    const { currentStep, applicationId } = useLoanStore();
    const { id } = useParams<{ id: string }>();

    if (Number(id) !== applicationId) {
        return <Navigate to={ERoutes.HOMEPAGE} />;
    }

    const getCurrentLoanTab = () => {
        switch (currentStep) {
            case 4: return <SigningDocument />
            case 5: return (
                <LoanDocumentSignsResult>
                    <LoanDocumentSignsResultTitle>
                        Documents have been successfully signed and sent for approval
                    </LoanDocumentSignsResultTitle>
                    <LoanDocumentSignsResultDescription>
                        Within 10 minutes you will be sent a PIN code to your email for confirmation
                    </LoanDocumentSignsResultDescription>
                </LoanDocumentSignsResult>
            )
            default:
                return <Navigate to={ERoutes.HOMEPAGE} />;
        }
    };

    const currentLoanTab = getCurrentLoanTab();

    return (
        <LoanDocumentSignPageHolder>
            <Header />
            {currentLoanTab}
            <Footer />
        </LoanDocumentSignPageHolder>
    )
}