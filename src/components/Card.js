import { useState } from "react";

export default function Card(props) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      className={flipped ? "Card" : "flipped"}
      id="1"
      onClick={() => setFlipped(!flipped)}
    >
      <img class="img" src={props.pic} alt={props.pic} />
    </button>
  );
}
