export const card1Path: string = require("../assets/cardImage1.svg").default;
export const card2Path: string = require("../assets/cardImage2.svg").default;
export const card3Path: string = require("../assets/cardImage3.svg").default;
export const card4Path: string = require("../assets/cardImage4.svg").default;

interface Card {
    path: string;
    desc: string;
}

export const cards: Card[] = [
    {
        path: card1Path,
        desc: "card 1"
    },
    {
        path: card2Path,
        desc: "card 2"
    },
    {
        path: card3Path,
        desc: "card 3"
    },
    {
        path: card4Path,
        desc: "card 4"
    },
]