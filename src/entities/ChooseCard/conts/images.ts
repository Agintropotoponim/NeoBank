import card1 from '../assets/cardImage1.svg';
import card2 from '../assets/cardImage2.svg';
import card3 from '../assets/cardImage3.svg';
import card4 from '../assets/cardImage4.svg';

interface Card {
    path: string;
    desc: string;
}

export const cards: Card[] = [
    { path: card1, desc: 'Card 1' },
    { path: card2, desc: 'Card 2' },
    { path: card3, desc: 'Card 3' },
    { path: card4, desc: 'Card 4' },
];
