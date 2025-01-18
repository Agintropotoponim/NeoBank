import { ApplyButton } from "shared/ui/ApplyButton";
import styled from "styled-components";

export const DenyButton = styled(ApplyButton)`
    background: ${({ theme }) => theme.colors.denyButton.background};

    &:hover {
        background: ${({ theme }) => theme.colors.denyButton.hover};
    }
`;