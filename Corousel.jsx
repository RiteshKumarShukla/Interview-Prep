import React, { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/400x200?text=Image+1",
    "https://via.placeholder.com/400x200?text=Image+2",
    "https://via.placeholder.com/400x200?text=Image+3",
    "https://via.placeholder.com/400x200?text=Image+4",
    "https://via.placeholder.com/400x200?text=Image+5",
  ];

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>&#8249;</button>
      <img src={images[activeIndex]} alt="carousel-slide" />
      <button onClick={goToNextSlide}>&#8250;</button>
    </div>
  );
};

export default Carousel;
