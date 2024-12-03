import styled from 'styled-components';

const CustomHR = styled.div`
    background: ${({ theme }) => theme.colors.horizontalRule};
    height: 1px;
    width: 100%;
`;

export const HorizontalRule = () => {
    return (
        <CustomHR></CustomHR>
    )
}