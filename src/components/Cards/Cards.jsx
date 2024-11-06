import Card from "../Card/Card";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import css from "./Cards.module.css";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Interior Clearing",
      image: card1
    },
    {
      id: 2,
      title: "Polishing",
      image: card2
    },
    {
      id: 3,
      title: "Quartz application",
      image: card3
    },
    {
      id: 4,
      title: "Support & Maintenance",
      image: card4
    }
  ];

  return (
    <div className={css.sliderContainer}>
      <h2>Work Progress</h2>
      <div className={css.slider}></div>
      <div className={css.cardsWrapper}>
        {cardsData.map(card => (
          <Card 
            key={card.id} 
            image={card.image} 
            icon={card.icon} 
            text={card.title} 
          />
        ))}
      </div>
    </div>
  );
};
export default Cards;
