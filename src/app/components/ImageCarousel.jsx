import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows width= '375px'  className="mx-auto">
      <div>
        <img src="/images/switz_pic.JPG" alt="Interlaken" className="w-full h-full object-cover"/>
        
      </div>
      <div>
        <img src="/images/sx_speech.jpg" alt="SX Summit Speech" className="w-full h-full object-cover"/>
        
      </div>
      <div>
        <img src="/images/guitar_pic.jpeg" alt="Rockin' Out" className="w-full h-full object-cover"/>
        
      </div>
    </Carousel>
  );
};

export default ImageCarousel;