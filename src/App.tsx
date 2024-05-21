import React, {useState} from 'react';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import PokerHand from "./lib/PokerHand";
import './cards.css';
import './App.css';


const App = () => {
    const [cards, setCards] = useState<Card []>([]);

    const pokerHand = new PokerHand(cards);
    const pokerHandText:string = pokerHand.getOutcome();

    const getCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards(5);
        setCards(newCards);
    }

    if (cards.length === 0) {
        return (
            <div>
                <button className='start-btn' onClick={getCards}>Dealing cards</button>
                <p className='title-state'>No Cards</p>
            </div>
        );
    }

    return (
        <div className="App">
            <button className='start-btn' onClick={getCards}>Dealing cards</button>
            <div className="cards">
                {cards.map((card) => (
                    <CardView key={card.rank + card.suit} rank={card.rank} suit={card.suit}/>
                ))}
            </div>
            <h1>Poker Hand :</h1>
            <p><b>{pokerHandText}</b></p>

        </div>
    );
};

export default App;
