import { AboutCardTab } from "entities/AboutCardTab";
import { CashbackTab } from "entities/CashbackTab";
import { FAQTab } from "entities/FAQTab";
import { RatesAndConditionsTab } from "entities/RatesAndConditionsTab";
import { loanPageTabsType } from "shared/types/loanPageTabsTypes";

export const loanPageTabs: loanPageTabsType[] = [
    { label: 'About card', content: <AboutCardTab /> },
    { label: 'Rates and conditions', content: <RatesAndConditionsTab /> },
    { label: 'Cashback', content: <CashbackTab /> },
    { label: 'FAQ', content: <FAQTab /> },
];