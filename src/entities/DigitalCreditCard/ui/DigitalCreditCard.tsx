import { device } from 'shared/config/theme/device';
import styled from 'styled-components';
import { ReactComponent as CardImage } from '../assets/cardImage.svg';
import { traits } from '../consts/traits';
import { Tooltip } from 'shared/ui/Tooltip';
import { ApplyButton } from 'shared/ui/ApplyButton';
import { useLoanStore } from 'shared/hooks/useLoanStore';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    background: ${({ theme }) => theme.colors.loanPage.creditCardLinearGradient};
    box-shadow: ${({ theme }) => theme.colors.loanPage.loadPageBoxShadow};
    border-radius: 28.8px;
    width: 1300px;
    height: 390px;
    padding: 20px 30px;
    
    display: flex;
    gap: 20px;

    @media ${device.desktopS} {
        width: 920px;
    }

    @media ${device.laptopS} {
        width: 500px;
        flex-direction: column;
        height: auto;
    }

    @media ${device.tabletS} {
        width: 280px;
    }
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media ${device.laptopS} {
        gap: 20px;
        align-items: center;
    }
`;

const RightSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Header = styled.h2`
    margin: 0;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 100%;
    display: flex;
    white-space: nowrap;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.loanPage.textTertiary};

    @media ${device.desktopS} {
        white-space: normal;
    }

    @media ${device.laptopS} {
        text-align: center;
    }
`;

const Description = styled.p`
    margin: 0;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: 0.02em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
    height: 39px;
    color: ${({ theme }) => theme.colors.loanPage.textPrimary};

    @media ${device.laptopS} {
        width: fit-content;
        height: auto;
        gap: 10px;
    }
`;

const DescriptionItem = styled.p`
    margin: 0;
`;

const CardIllustration = styled(CardImage)`
    max-width: 380px;
    height: auto;

    @media ${device.desktopS} {
        max-width: 280px;
    }
`;

const TraitKey = styled.p`
    margin: 0;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.loanPage.textSecondary};
`;

const TraitValue = styled.p`
    margin: 0;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 112%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.loanPage.textSecondary};
`;

const TraitList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 613px;
    height: 47px;

    @media ${device.laptopS} {
        width: fit-content;
        height: auto;
    }

    @media ${device.tabletS} {
        grid-template-columns: 1fr;
    }
`;

const Trait = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover > div {
        visibility: visible;
        opacity: 1;
    }
`;

interface IDigitalCreditCardProps {
    scrollToApp: () => void
}

export const DigitalCreditCard: React.FC<IDigitalCreditCardProps> = ({ scrollToApp }) => {
    const { currentStep, applicationId } = useLoanStore();
    const nav = useNavigate();

    const traitsList = traits.map(({ key, value, tooltip }) => (
        <Trait key={key}>
            <TraitValue>{value}</TraitValue>
            <TraitKey>{key}</TraitKey>
            <Tooltip>{tooltip}</Tooltip>
        </Trait>
    ));

    const continueConfig: Record<number, { fn?: () => void; link?: string }> = {
        0: { fn: scrollToApp },
        1: { fn: scrollToApp },
        2: { link: `/loan/${applicationId}` },
        3: { link: `/loan/${applicationId}/document` },
        4: { link: `/loan/${applicationId}/document/sign` },
        5: { link: `/loan/${applicationId}/code` },
    };

    const clickHandler = () => {
        const action = continueConfig[currentStep];
        if (action?.fn) {
            action.fn();
        } else if (action?.link) {
            nav(action.link);
        }
    };

    let label = currentStep < 2 ? "Apply for card" : "Continue";

    return (
        <Container>
            <LeftSection>
                <Header>Platinum digital credit card</Header>
                <Description>
                    <DescriptionItem>Our best credit card. Suitable for everyday spending and shopping.</DescriptionItem>
                    <DescriptionItem>Cash withdrawals and transfers without commission and interest.</DescriptionItem>
                </Description>
                <TraitList>{traitsList}</TraitList>
                <ApplyButton onClick={clickHandler}>{label}</ApplyButton>
            </LeftSection>
            <RightSection>
                <CardIllustration />
            </RightSection>
        </Container>
    );
}
