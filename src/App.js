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
]

function ValentineApp() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
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
            alt="Romantic bear"
            src="https://media.tenor.com/6eIkl-Qc62EAAAAj/cute.gif"
          />

          <div>Will you be my valentine?</div>
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

