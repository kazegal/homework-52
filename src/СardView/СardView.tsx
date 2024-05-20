import React from 'react';

interface ICardViewProps {
    rank: string;
    suit: string;
}

const CardView: React.FC<ICardViewProps> = props => {
    const cardClasses = `card rank-${props.rank.toLowerCase()} ${props.suit}`;

    let ic = '';

    if (props.suit === 'diams') {
        ic = '♦';
    } else if (props.suit === 'clubs') {
        ic = '♣';
    } else if (props.suit === 'hearts') {
        ic = '♥';
    } else {
        ic = '♠';
    }

    return (
        <div className="playingCards faceImages">
            <span className={cardClasses}>
                <span className="rank">{props.rank}</span>
                <span className="suit">{ic}</span>
            </span>
        </div>
    );
};

export default CardView;