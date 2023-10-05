import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

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

export class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctCount: 0,
      incorrectCount: 0,
    };
  }

  handleGuessResult = (guess) => {
    if (
      initialFishes[this.state.correctCount + this.state.incorrectCount]
        .name === guess
    ) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    }
  };

  render() {
    const { correctCount, incorrectCount } = this.state;
    const fishIndex = correctCount + incorrectCount;
    const isGameOver = fishIndex === initialFishes.length;
    const answersLeft = initialFishes.map((fish) => fish.name).slice(fishIndex);

    return (
      <>
        {isGameOver ? (
          <>
            <ClassFinalScore
              correctCount={correctCount}
              totalCount={initialFishes.length}
            />
          </>
        ) : (
          <>
            <ClassScoreBoard
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              handleGuessResult={this.handleGuessResult}
              fishData={initialFishes[fishIndex]}
            />
          </>
        )}
      </>
    );
  }
}
