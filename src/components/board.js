import buddha from "../img/buddha.jpg";
import corpse from "../img/corpse.jpg";
import eifel from "../img/eifel.jpg";
import marblehall from "../img/marble-hall.jpg";
import meso from "../img/meso.jpg";
import ny from "../img/ny-lib.jpg";
import pisa from "../img/pisa.jpg";
import pagoda from "../img/pagoda.jpg";
import paris from "../img/paris.jpg";
import pyramid from "../img/pyramid.jpg";
import rocket from "../img/rocket.jpg";
import sphinx from "../img/sphinx.jpg";

const cards = [
  buddha,
  corpse,
  eifel,
  marblehall,
  meso,
  ny,
  pagoda,
  paris,
  pisa,
  pyramid,
  rocket,
  sphinx,
];

let check = [];
let check2 = [];
function board() {
  for (let i = 0; i < cards.length; i++) {
    debugger;
    const randomCard = Math.floor(Math.random() * cards.length);
    const checker = check.includes(randomCard);
    if (!checker) {
      check.push(randomCard);
    } else {
      board();
    }
    if (check.length === 12) {
      for (let i = 0; i < cards.length; i++) {
        debugger;
        const randomCard = Math.floor(Math.random() * cards.length);
        const checker = check2.includes(randomCard);
        if (!checker) {
          check2.push(randomCard);
        } else {
          board();
        }
        if (check2.length === 12) {
          break;
        }
      }
    }
  }
  const boardLayout = [...check, ...check2];
  return boardLayout;
}
