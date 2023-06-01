import "./styles.css";
import { useState } from "react";

var selfHelpArr = [
  "Courage To Be Disliked",
  "Surounded By Idiots",
  "Atomic Habits"
];
var investingArr = [
  "Psycology of Money",
  "Think And Grow Rich",
  "Rich Dad Poor Dad"
];
var businessArr = ["Doglapan", "Makers and Takers", "The power of Broke"];
var fictionArr = ["The Vinci Code", "Illusion", "The Master of The Game"];
var motivationArr = [
  "The Art of Possibility",
  "Mind Over Clutter",
  "That Sounds Fun"
];
var healthArr = ["The Noctrunal Bain", "Wheat Belly", "Modern Food"];
var historyArr = [
  "After The Fall",
  "A Brief history of Motion",
  "Evil Giniuses"
];

export default function App() {
  const [target, setTarget] = useState([]);
  function displayMyList(value) {
    if (value == 0) setTarget(businessArr);
    else if (value == 1) setTarget(selfHelpArr);
    else if (value == 2) setTarget(investingArr);
    else if (value == 3) setTarget(fictionArr);
    else if (value == 4) setTarget(motivationArr);
    else if (value == 5) setTarget(healthArr);
    else if (value == 6) setTarget(historyArr);
  }

  return (
    <div className="App">
      <u>
        <img src="data:image/png;base64,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"></img>
        <h1>WellBooks</h1>
      </u>
      <h3>Select a genre to get started</h3>
      <button onClick={() => displayMyList(0)}>BUSINESS</button>
      <button onClick={() => displayMyList(1)}>SELF HELP</button>
      <button onClick={() => displayMyList(2)}>INVESTING</button>
      <button onClick={() => displayMyList(3)}>FICTION</button>
      <button onClick={() => displayMyList(4)}>MOTIVATION</button>
      <button onClick={() => displayMyList(5)}>HEALTH</button>
      <button onClick={() => displayMyList(6)}>HISTORY</button>
      <hr />
      <ul>
        {target.map(function (item) {
          return <li class="my-list">{item}</li>;
        })}
      </ul>
    </div>
  );
}
