import "./ImageSlider.module.css"; // Importing styles

const ImageSlider = ({}) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="slider-container">
      <button onClick={scrollLeft} className="scroll-button left">
        {"<"}
      </button>
      <div className="slider" ref={sliderRef}>
        {images.map((img, index) => (
          <div key={index} className="slider-item">
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={scrollRight} className="scroll-button right">
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;
