import "./styles/final-score.css";


export const FunctionalFinalScore = (props) => (
  
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{props.correctCount}</p>
      <hr />
      <p>{props.totalCount}</p>
    </div>
  </div>
  
);
