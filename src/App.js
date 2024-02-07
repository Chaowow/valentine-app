import { useState } from 'react';
import './App.css';

const phrases = [
  "No",
  "Are you sure?",
  "Positive?",
  "Cariño please", 
  "Come on:(",
  "PLEASE",
  "Estás rompiendo mi corazón;("
] // phrases for the getNoButtonText function

function ValentineApp() {
  const [noCount, setNoCount] = useState(0); // keeps track of count
  const [yesPressed, setYesPressed] = useState(false); // keeps track if yes button is pressed
  const yesButtonSize = noCount * 20 + 16; //increases yes button size using simple math

  function handleNoClick() {
    setNoCount(noCount + 1); //increments count every time no button is pressed
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)]; // returns phrases depending on noCount or returns the last one
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img 
            alt="Bear kiss"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className='yay-text'>Yay!!! It's a date!</div>
        </>
      ) : (
        <>
          <img 
            alt="Cute bears"
            src="https://media.tenor.com/-Qq0R9rKNzUAAAAi/panda-bear.gif"
          />

          <div className='question-text'>Will you be my valentine?</div>
          <div>
            <button
              className='yesButton'
              style={{ fontSize: yesButtonSize}}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className='noButton'>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ValentineApp;

