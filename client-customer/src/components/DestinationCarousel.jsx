import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DestinationCard from './DestinationCard';

export default function DestinationCarousel({ cards }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Enable auto loop
    autoplaySpeed: 10000, 
  };

  return (
    <div className=" py-10">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <DestinationCard 
          key={index}
          destination={card}></DestinationCard>
        ))}
      </Slider>
    </div>
  );
}
