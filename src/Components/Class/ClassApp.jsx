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
      answersLeft: initialFishes.map((fish) => fish.name),
      fishIndex: 0,
    };
  }

  handleGuessResult = (guess) => {
    const { fishIndex } = this.state;
    if (initialFishes[fishIndex].name === guess) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    }

    const updatedAnswersLeft = this.state.answersLeft.filter(
      (answer) => answer !== guess
    );

    this.setState({
      answersLeft: updatedAnswersLeft,
      fishIndex: fishIndex + 1,
    });
  };

  render() {
    const { correctCount, incorrectCount, answersLeft, fishIndex } = this.state;
    const isGameOver = fishIndex === initialFishes.length;

    return (
      <>
        {isGameOver ? (
          <>
            <ClassFinalScore correctCount={correctCount} totalCount={fishIndex} />
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