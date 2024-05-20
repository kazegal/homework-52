import Card from "./Card";

class CardDeck {
    private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private readonly suits = ['clubs', 'diams', 'hearts', 'spades'];
    public deck: Card[] = [];

    constructor() {
        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                const card = new Card(rank, suit);
                this.deck.push(card);
            });
        });
    };

    getCard(): Card {
        const randomCardIndex: number = Math.floor(Math.random() * this.deck.length);
        const randomCardObject = this.deck[randomCardIndex];
        this.deck.splice(randomCardIndex, 1);

        return randomCardObject;
    }

    getCards(howMany: number): Card[] {
        let randomCardsDeck: Card[] = [];
        let i = 0;

        while (i < howMany) {
            const ranDeck = this.getCard();
            randomCardsDeck.push(ranDeck);
            i++;
        }
        return randomCardsDeck;
    }
}

export default CardDeck;