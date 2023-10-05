import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guess: "",
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    const { guess } = this.state;
    this.props.handleGuessResult(guess);
    this.setState({ guess: "" });
  };

  handleInputChange = (e) => {
    this.setState({ guess: e.target.value });
  };

  render() {
    const { fishData } = this.props;
    const { guess } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishData.url} alt={fishData.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.submitForm}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={guess}
            onChange={this.handleInputChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
