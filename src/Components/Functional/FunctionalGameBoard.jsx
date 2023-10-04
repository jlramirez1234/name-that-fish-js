import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard(props) {
  const [guess, setGuess] = useState("");

  const { fishData, handleGuessResult } = props;

  function submitForm(e) {
    e.preventDefault();
    handleGuessResult(guess);
    setGuess("");
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form id="fish-guess-form" onSubmit={submitForm}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
