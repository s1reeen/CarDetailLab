import Card from "../Card/Card";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import css from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={css.sliderContainer}>
      <h2>Work Progress</h2>
      <div className={css.slider}></div>
      <div className={css.cardsWrapper}>
        <Card image={card1} text="Card 1" />
        <Card image={card2} text="Card 2" />
        <Card image={card3} text="Card 3" />
        <Card image={card4} text="Card 4" />
      </div>
    </div>
  );
};
export default Cards;
