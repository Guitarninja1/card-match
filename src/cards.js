import "./App.css";
import cards from "./lib/_cards";
import Card from "./components/Card";

export default function Cards() {
  const board = randomize(cards);
  return (
    <div className="Wrapper">
      <h2 className="App">Card Match</h2>
      <div className="Card-container">
        {board.map((card, index) => (
          <Card key={index} pic={card} />
        ))}
      </div>
    </div>
  );
}
function randomize(_cards) {
  const start = Date.now();
  const doubled = [..._cards, ..._cards];
  for (let i = 0; i < 10000; i++) {
    const randomizer = Math.floor(Math.random() * doubled.length);
    const randomizer2 = Math.floor(Math.random() * doubled.length);
    const a = doubled[randomizer];
    const b = doubled[randomizer2];
    doubled[randomizer] = b;
    doubled[randomizer2] = a;
  }
  console.log(Date.now() - start);
  return doubled;
}
