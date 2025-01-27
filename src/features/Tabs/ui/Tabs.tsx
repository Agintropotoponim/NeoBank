import React, { useState } from 'react';
import { device } from 'shared/config/theme/device';
import styled from 'styled-components';

const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const TabList = styled.div`
    display: flex;
    box-sizing: border-box;
    border-bottom: 2px solid ${({ theme }) => theme.colors.loanPage.tabsLine};
    width: 100%;

    @media ${device.tabletS} {
        flex-direction: column;
        border-bottom: none;
    }
`;

const Tab = styled.button<{ isActive: boolean }>`
    box-sizing: border-box;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    background: none;
    border: none;
    padding: 10px 20px;

    color: ${({ theme }) => theme.colors.loanPage.tabsItem};

    border-bottom: ${({ isActive, theme }) =>
        isActive ? `2px solid ${theme.colors.loanPage.tabsItem}` : 'none'};

    margin-bottom: ${({ isActive }) => (isActive ? `-2px` : 'none')};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.loanPage.tabsItemHover};
    }

    @media ${device.tabletS} {
        font-size: 14px;
        padding: 8px 12px;
        border-left: ${({ isActive, theme }) =>
        isActive ? `4px solid ${theme.colors.loanPage.tabsLine}` : 'none'};
        border-bottom: none;
    }
`;

const TabPanel = styled.div`
    padding: 20px 0;

    @media ${device.tabletS} {
        padding: 15px 0;
    }
`;

interface ITabsProps {
    tabs: { label: string; content: React.ReactNode }[];
}

export const Tabs: React.FC<ITabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <TabsContainer>
            <TabList>
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        isActive={activeTab === index}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </Tab>
                ))}
            </TabList>
            <TabPanel>{tabs[activeTab].content}</TabPanel>
        </TabsContainer>
    );
};
