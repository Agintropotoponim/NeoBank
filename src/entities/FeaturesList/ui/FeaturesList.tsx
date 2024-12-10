import styled from 'styled-components';
import { checkMark } from '../const/illustrations';
import { ReactComponent as FeaturesIllustration } from '../assets/feature-list-illustration.svg';
import { device } from 'shared/config/theme/device';

const FeaturesListContainer = styled.section`
    display: flex;
    flex-wrap: wrap;

    @media ${device.desktopS} {
        justify-content: center;
    }

    @media ${device.laptopS} {
        width: fit-content;
    }
`;

const StyledFeatureIllustration = styled(FeaturesIllustration)`
    max-width: 508.12px;
    max-height: 414.71px;

    @media ${device.laptopS} {
        width: 100%;
        height: auto;
    }
`;

const FeaturesArticle = styled.article`
    width: 790px;

    @media ${device.laptopS} {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Title = styled.p`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 50px;
    color: ${({ theme }) => theme.colors.featureArticleTitle};

    @media ${device.laptopS} {
        text-align: center;
    }
`;

const Description = styled.p`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.textQuaternary};

    @media ${device.laptopS} {
        text-align: center;
        width: 90%;
        font-size: 18px;
    }

    @media ${device.tabletS} {
        font-size: 20px;
    }
`;

const List = styled.ul`
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.textQuaternary};
    list-style: none;
    padding: 0;

    @media ${device.desktopS} {
        display: flex;
        justify-content: center;
    }

    @media ${device.laptopS} {
        flex-direction: column;
        width: 50%;
        font-size: 16px;
    }

    @media ${device.tabletS} {
        font-size: 18px;
        width: 100%;
    }
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 8px 0;

    @media ${device.desktopS} {
        text-align: center;
    }

    &::before {
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        background-image: url(${checkMark});
        background-repeat: no-repeat;
        background-size: contain;
        flex-shrink: 0;
    }
`;

export const FeaturesList: React.FC = () => {
    return (
        <FeaturesListContainer>
            <StyledFeatureIllustration />
            <FeaturesArticle>
                <Title>We Provide Many Features You Can Use</Title>
                <Description>You can explore the features that we provide with fun and have their own functions each feature</Description>
                <List>
                    <ListItem>Powerfull online protection.</ListItem>
                    <ListItem>Cashback without borders.</ListItem>
                    <ListItem>Personal design</ListItem>
                    <ListItem>Work anywhere in the world</ListItem>
                </List>
            </FeaturesArticle>
        </FeaturesListContainer>
    )
}