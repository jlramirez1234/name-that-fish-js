import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const fishIndex = correctCount + incorrectCount;
  const isGameOver = fishIndex === initialFishes.length;
  const answersLeft = initialFishes.map((fish) => fish.name).slice(fishIndex);

  const handleGuessResult = (guess) => {
    if (initialFishes[fishIndex].name === guess) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
  };

  return (
    <>
      {isGameOver ? (
        <>
          <FunctionalFinalScore
            correctCount={correctCount}
            totalCount={initialFishes.length}
          />
        </>
      ) : (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            handleGuessResult={handleGuessResult}
            fishData={initialFishes[fishIndex]}
          />
        </>
      )}
    </>
  );
}
