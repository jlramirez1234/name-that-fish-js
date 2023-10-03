import { Component } from "react";
import "./styles/score-board.css";

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export class ClassScoreBoard extends Component {
  render() {
    const { incorrectCount, correctCount } = this.props;

    const count = correctCount + incorrectCount;
    const filteredArray = answersLeft.slice(count);

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {filteredArray.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
