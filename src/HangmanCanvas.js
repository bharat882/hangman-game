import React from "react";
const HangmanCanvas = ({ mistakes }) => {
  const imgSrc = `${mistakes}.jpg`;
  return (
    <div className="hangman-canvas">
      <img src={imgSrc} alt={`Hangman State ${mistakes}`}></img>
    </div>
  );
};

export default HangmanCanvas;
