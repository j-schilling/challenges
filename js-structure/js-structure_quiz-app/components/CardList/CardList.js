import Card from "../../components/Card/Card.js";
import { cards } from "../../content/Cardcontent.js";

export default function CardList() {
  const cardList = document.createElement("section");
  cardList.classList.add("card-list");

  cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });

  return cardList;
}
