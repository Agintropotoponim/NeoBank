import styled from "styled-components";

export const Tooltip = styled.div`
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.tooltip.background};
    padding: 8px;
    border-radius: 8px;
    white-space: nowrap;
    font-size: 14px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.tooltip.textPrimary};
`;