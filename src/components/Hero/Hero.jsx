import Header from "../Header/Header";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <Header />
      <div className={css.hero}>
        <h2>PREMIUM DETAILING</h2>
        <h1>DREAM TRANSFORMATION</h1>
        <button>Check The Video</button>
      </div>
    </>
  );
};
export default Hero;
