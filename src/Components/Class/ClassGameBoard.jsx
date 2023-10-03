import { Component } from "react";
import { Images } from "../../assets/Images";
import "./styles/game-board.css";

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

export class ClassGameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fishType: "",
      nextFishToName: 0,
    };
  }

  fish = (e) => {
    e.preventDefault();
    const isCorrectGuess =
      this.state.fishType.toLowerCase() ===
      initialFishes[this.state.nextFishToName].name.toLowerCase();
    this.props.setFirstFish(isCorrectGuess);
    this.setState({ fishType: "" });
  };

  nextImage = (e) => {
    e.preventDefault();
    const nextIndex = (this.state.nextFishToName + 1) % initialFishes.length;
    this.setState({ nextFishToName: nextIndex });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.fish(e);
    this.nextImage(e);
  };

  render() {
    const currentFish = initialFishes[this.state.nextFishToName];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.submitForm}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.fishType}
            onChange={(e) => {
              this.setState({ fishType: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
