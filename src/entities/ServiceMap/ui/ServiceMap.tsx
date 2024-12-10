import styled from 'styled-components';
import { ReactComponent as ServiceMapImage } from '../assets/service-map.svg';
import { device } from 'shared/config/theme/device';

const ServiceMapContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h2`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

const Description = styled.h3`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

const StyledServiceMapImage = styled(ServiceMapImage)`
    max-width: 1060px;
    max-height: 537.77px;

    @media ${device.desktopS} {
        width: 100%;
        height: auto
    }
`;

export const ServiceMap: React.FC = () => {
    return (
        <ServiceMapContainer>
            <Title>
                You can use our services anywhere in the world
            </Title>
            <Description>
                Withdraw and transfer money online through our application
            </Description>
            <StyledServiceMapImage />
        </ServiceMapContainer>
    )
}