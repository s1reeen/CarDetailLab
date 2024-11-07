import "modern-normalize/modern-normalize.css";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Detailing from "./components/Detailing/Detailing";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Detailing />
      <Testimonials /> 
    </div>
  );
};
export default App;
