import { ApplyButton } from "shared/ui/ApplyButton";
import styled from "styled-components"
import { ReactComponent as NotFoundImage } from '../assets/404.svg';
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import { useNavigate } from "react-router-dom";
import { device } from "shared/config/theme/device";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 1300px;

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

const NotFoundContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    @media ${device.laptopS} {
        flex-direction: column-reverse;
        height: fit-content;
    }

`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 50%;

    @media ${device.laptopS} {
        align-items: center;
        width: 100%;
    }
`;

const RightSection = styled.div`
    display: flex;
    justify-content: end;
    width: 50%;

    @media ${device.laptopS} {
        width: 100%;
    }
`;

const Headline = styled.h2`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.notFoundPage.textPrimary};
`;

const Title = styled.h3`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 112%;
    color: ${({ theme }) => theme.colors.notFoundPage.textSecondary};
`;

const Description = styled.p`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.notFoundPage.textTertiary};
`;

const NotFound = styled(NotFoundImage)`
    max-width: 526px;
    height: auto;
`;

const GoBackButton = styled(ApplyButton)``;

export const NotFoundPage: React.FC = () => {

    const nav = useNavigate();
    const goBackFn = () => {
        nav(-1);
    };

    return (
        <Container>
            <Header />
            <NotFoundContainer>
                <LeftSection>
                    <Headline>
                        Oops....
                    </Headline>
                    <Title>
                        Page not found
                    </Title>
                    <Description>
                        This Page doesn`t exist or was removed! We suggest you go back.
                    </Description>
                    <GoBackButton onClick={goBackFn}>
                        Go back
                    </GoBackButton>
                </LeftSection>
                <RightSection>
                    <NotFound />
                </RightSection>
            </NotFoundContainer>
            <Footer />
        </Container>
    )
}