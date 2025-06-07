import { useState } from 'react'


function App() {

//   return (
//     <h1>hello</h1>
//   )
// }
  let numOfDecks = 1;

  const buildDeck = () => {
    const newDeck = [];
    for (let i = 0; i < 13; i++) {
      for (let j = 0; j < 4 * numOfDecks; j++) {
        if (i == 10) {
            newDeck.push('J');
        } else if (i == 11) {
            newDeck.push('Q');
        } else if (i == 12) {
            newDeck.push('K');
        } else if (i == 0) {
            newDeck.push('A');
        } else {
            newDeck.push(String(i + 1));
        }
      }
    }
    return newDeck;
  }

  const [deck, setDeck] = useState(buildDeck);
  const [currentCard, setCurrentCard] = useState(null);

  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  let handleCardButton = () => {
    if (deck.length == 0) {
      setCurrentCard('Deck is empty');
      return;
    }

    let index = Math.floor( Math.random() * deck.length );
    let card = deck[index];

    if (card == "2" || card == "3" || card == "4" || card == "5" || card == "6") {
      setCount(count + 1);
    }
    if (card == "A" || card == "K" || card == "Q" || card == "J" || card == "10") {
      setCount(count - 1);
    }

    setCurrentCard(card);


    const newDeck = [...deck];
    newDeck.splice(index, 1);

    setDeck(newDeck);
  }

  let handleCount = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return (
    <>
      <h1>Card Counting</h1>
      <button onClick={handleCardButton}>Draw Card</button>
      <button onClick={handleCount}>{visible ? 'Hide Count' : 'Show Count'}</button>

      <h2>{currentCard}</h2>
      <p>Cards left: {deck.length}</p>

      {visible && <p>Current Count: {count}</p>}
    </>
  )
}

export default App
