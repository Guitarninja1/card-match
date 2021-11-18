import "./App.css";

export default function Cards() {
  return (
    <div className="Wrapper">
      <h2 className="App">Card Match</h2>
      <div className="Card-container">
        <button className="flipped" id="c1" onClick={handleClick}>
          {/* <img src={board[0]} alt="buddha" hidden={false} /> */}
        </button>
        <button className="flipped" id="c2" onClick={handleClick}>
          Card2
        </button>
        <button className="flipped" id="c3" onClick={handleClick}>
          Card3
        </button>
        <button className="flipped" id="c4" onClick={handleClick}>
          Card4
        </button>
      </div>
    </div>
  );
}

function handleClick(e) {
  e.preventDefault();
  if (e.target.className === "flipped") {
    e.target.className = "Card";
  } else {
    e.target.className = "flipped";
  }
}
