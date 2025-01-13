import { ReactComponent as CalendarIcon } from '../assets/calendar_duotone.svg';
import { ReactComponent as ClockIcon } from '../assets/clock_duotone.svg';
import { ReactComponent as CreditCardIcon } from '../assets/credit_card_duotone.svg';
import { ReactComponent as MoneyIcon } from '../assets/money_duotone.svg';
import { ReactComponent as BagIcon } from '../assets/bag_duotone.svg';

export const cards = [
    {
        icon: <MoneyIcon />,
        title: 'Up to 50 000 ₽',
        description: 'Cash and transfers without commission and percent',
    },
    {
        icon: <CalendarIcon />,
        title: 'Up to 160 days',
        description: 'Without percent on the loan',
    },
    {
        icon: <ClockIcon />,
        title: 'Free delivery',
        description:
            'We will deliver your card by courier at a convenient place and time for you',
    },
    {
        icon: <BagIcon />,
        title: 'Up to 12 months',
        description:
            'No percent. For equipment, clothes and other purchases in installments',
    },
    {
        icon: <CreditCardIcon />,
        title: 'Convenient deposit and withdrawal',
        description:
            'At any ATM. Top up your credit card for free with cash or transfer from other cards',
    },
];