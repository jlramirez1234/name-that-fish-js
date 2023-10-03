import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuessResult = (isCorrectGuess) => {
    if (isCorrectGuess) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    
    const totalGuesses = correctCount + incorrectCount + 1;
    if (totalGuesses >= 4) {
      setGameOver(true);
    }
  };

  return (
    <>
      {gameOver ? (
        <>
          <FunctionalFinalScore
            correctCount={correctCount}
            totalCount={correctCount + incorrectCount}
          />
        </>
      ) : (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
          <FunctionalGameBoard setFirstFish={handleGuessResult} />
        </>
      )}
    </>
  );
}
