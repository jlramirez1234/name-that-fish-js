import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incorrectCount: 0,
      correctCount: 0,
      gameOver: false,
    };
  }

  handleGuessResult = (isCorrectGuess) => {
    if (isCorrectGuess) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    }

    const totalGuesses =
      this.state.correctCount + this.state.incorrectCount + 1;
    if (totalGuesses >= 4) {
      this.setState({
        gameOver: true,
      });
    }
  };

  render() {
    return (
      <>
        {this.state.gameOver ? (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            totalCount={this.state.correctCount + this.state.incorrectCount}
          />
        ) : (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
            />
            <ClassGameBoard setFirstFish={this.handleGuessResult} />
          </>
        )}
      </>
    );
  }
}
