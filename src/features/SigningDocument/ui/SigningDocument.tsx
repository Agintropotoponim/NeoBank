import { useState } from "react";
import { device } from "shared/config/theme/device";
import { useLoanStore } from "shared/hooks/useLoanStore";
import { ApplyButton } from "shared/ui/ApplyButton";
import styled from "styled-components";
import { ReactComponent as File } from '../assets/file.svg';
import { downloadName, fileUrl } from "../consts/fileUrl";
import { useSignDocument } from "../hooks/useSignDocument";

const Container = styled.div`
    width: 100%;
    min-height: 584px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 28px;
    box-sizing: border-box;

    @media ${device.tabletS} {
        width: 280px;
    }
`;

const SectionDescription = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    gap: 40px;

    @media ${device.desktopS} {
        height: auto;
        justify-content: center
    }

    @media ${device.laptopS} {
        flex-direction: column;
        align-items: center;
    }
`;

const Title = styled.h2`
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.signingDocument.textPrimary};
`;

const StepsBlock = styled.p`
    font-family: 'Ubuntu';
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.signingDocument.textSecondary};
`;

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Content = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 112%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.signingDocument.textTertiary};
`;

const LowerSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    gap: 20px;

    @media ${device.laptopS} {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

const FileImage = styled(File)`
    max-width: 60px;
    cursor: pointer;
`;

const DocumentContainer = styled.div`
    display: flex;
    gap : 30px;
`;

const DocumentInfo = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 112%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.signingDocument.textSecondary};
    cursor: pointer;
`;

export const SigningDocument: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);
    const { applicationId, setCurrentStep } = useLoanStore();
    const { signDocument, isSuccess, isError, error } = useSignDocument({ applicationId });

    const checkBoxHandler = () => {
        setIsChecked(!isChecked);
    };

    const handleSend = () => {
        if (applicationId) {
            signDocument(applicationId);
            setCurrentStep(5);
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = downloadName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    //if (!isSuccess) return <Loader />

    return (
        <Container>
            <SectionDescription>
                <Title>
                    Signing of documents
                </Title>
                <StepsBlock>
                    Step 4 of 5
                </StepsBlock>
            </SectionDescription>
            <Content>
                Information on interest rates under bank deposit agreements with individuals. Center for Corporate Information Disclosure. Information of
                a professional participant in the securities market. Information about persons under whose control or significant influence the Partner
                Banks are. By leaving an application, you agree to the processing of personal data, obtaining information, obtaining access to a credit
                history, using an analogue of a handwritten signature, an offer, a policy regarding the processing of personal data, a form of consent to the
                processing of personal data.
            </Content>
            <DocumentContainer>
                <FileImage onClick={handleDownload} />
                <DocumentInfo onClick={handleDownload}>
                    Information on your card
                </DocumentInfo>
            </DocumentContainer>
            <LowerSection>
                <CheckboxLabel>
                    <input type="checkbox" checked={isChecked} onClick={checkBoxHandler} />
                    I agree
                </CheckboxLabel>
                <ApplyButton disabled={!isChecked} onClick={handleSend}>Send</ApplyButton>
            </LowerSection>
        </Container>
    );
};