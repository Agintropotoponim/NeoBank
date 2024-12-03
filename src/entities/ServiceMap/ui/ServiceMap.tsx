import styled from 'styled-components';
import { serviceMap } from '../const/service-map';

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

const Image = styled.img`
    width: 100%;
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
            <Image src={serviceMap} alt="services map" />
        </ServiceMapContainer>
    )
}