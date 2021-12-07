import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  'https://m.media-amazon.com/images/I/71H5hK4wUqL._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/41pBPGVc8zL._SX1500_.jpg'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              {/*<span>Slide 1</span>*/}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;