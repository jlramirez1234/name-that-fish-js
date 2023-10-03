import "./styles/game-board.css";
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

export function FunctionalGameBoard(props) {
  const [fishType, setFishType] = useState("");
  const [nextFishToName, setCurrentFishIndex] = useState(0);

  function fish(e) {
    e.preventDefault();
    const isCorrectGuess =
      fishType.toLowerCase() ===
      initialFishes[nextFishToName].name.toLowerCase();
    props.setFirstFish(isCorrectGuess);
    setFishType("");
  }

  function nextImage(e) {
    e.preventDefault();
    const nextIndex = (nextFishToName + 1) % initialFishes.length;
    setCurrentFishIndex(nextIndex);
  }
  const currentFish = initialFishes[nextFishToName];

  function submitForm(e) {
    e.preventDefault();
    fish(e);
    nextImage(e);
    setFishType("");
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form id="fish-guess-form" onSubmit={submitForm}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishType}
          onChange={(e) => {
            setFishType(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
