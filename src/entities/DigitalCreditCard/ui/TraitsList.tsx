import styled from "styled-components";
import { traits } from "../consts/traits";
import { Tooltip } from "shared/ui/Tooltip";
import { device } from "shared/config/theme/device";

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

const Container = styled.div`
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

export const TraitsList: React.FC = () => {

    const traitsList = traits.map(({ key, value, tooltip }) => (
        <Trait key={key}>
            <TraitValue>{value}</TraitValue>
            <TraitKey>{key}</TraitKey>
            <Tooltip>{tooltip}</Tooltip>
        </Trait>
    ));

    return (
        <Container>
            {traitsList}
        </Container>
    )
}