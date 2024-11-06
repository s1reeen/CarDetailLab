import css from "./Card.module.css";

const Card = ({ image, text}) => {
  return (
    <div>
      <img className={css.image} src={image} alt="" />
      <p>{text}</p>
    </div>
  );
};
export default Card;
