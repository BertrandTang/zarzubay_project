import React, { useState } from 'react';


interface Slide {
    imgURL: string;
    imgAlt: string;
  }
  
interface CarouselProps {
    slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({slides}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

return (
    <div className="carousel">
        <img src="/icons/arrow-left.png" alt="left arrow" onClick={prevSlide} className="carousel__btn carousel__btn--prev" />
        <img
            src={slides[activeIndex].imgURL}
            alt={`${slides[activeIndex].imgAlt}`}
            className="carousel__img"
        />
        <img src="/icons/arrow-right.png" alt="right arrow" onClick={nextSlide} className="carousel__btn carousel__btn--next" />
    </div>
);
};
export default Carousel;