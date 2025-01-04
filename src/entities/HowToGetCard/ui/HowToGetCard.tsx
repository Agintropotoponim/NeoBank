import styled from "styled-components";
import { instructions } from "../const/instructions";
import { device } from "shared/config/theme/device";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Title = styled.h2`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 147.4%;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.howToGetCard.textPrimary};
`;

const StepList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${device.laptopS}{
        flex-direction: column;
        align-items: center;
    }
`;

const Step = styled.div`
    width: 334px;

    @media ${device.tabletS}{
        width: 280px;
    }
`;

const StepNumber = styled.div`
    background: ${({ theme }) => theme.colors.howToGetCard.stepNumberBackground};
    border-radius: 50px;
    width: 48px;
    height: 48px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 147.4%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.howToGetCard.textPrimary};
`;

const Line = styled.div`
    width: 250px;
    border: ${({ theme }) => theme.colors.howToGetCard.lineBorder};
`

const StepUpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const StepLowerSection = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 147.4%;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.howToGetCard.textPrimary};
    text-align: center;
`;

export const HowToGetCard: React.FC = () => {

    const stepList = instructions.map((inst, index) => (
        <Step key={inst}>
            <StepUpperSection>
                <StepNumber>{index + 1}</StepNumber>
                <Line />
            </StepUpperSection>
            <StepLowerSection>{inst}</StepLowerSection>
        </Step>
    ))

    return (
        <Container>
            <Title>How to get a card</Title>
            <StepList>{stepList}</StepList>
        </Container>
    )
}