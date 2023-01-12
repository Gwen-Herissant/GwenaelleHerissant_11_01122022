import { useState } from 'react';
import '../styles/Gallery.css';
import arrow from '../assets/images/arrow-icon.svg'

export default function Gallery ({slides}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = () =>  {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToslide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  function arrows() {
    if (slides.length > 1) {
      return (
        <div>
          <img className='gallery_arrow gallery_arrow-left' src={arrow} alt="Go to previous" onClick={goBack} />
          <img className='gallery_arrow gallery_arrow-right' src={arrow} alt="Go next" onClick={goNext} />
        </div>
      )
    }
  }

  function bullets() {
    if (slides.length > 1) {
      return (
        <div className='gallery_bullet-points'>
          {slides.map((slide, slideIndex) => (
            <svg 
              key={slideIndex} 
              className={`gallery_single-bullet ${slideIndex === currentIndex ? 'is-active' : ''}`}
              onClick={() => goToslide(slideIndex)}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/>
            </svg>
          ))}
        </div>
      )
    }
  }

  return (
    <div className='gallery-container'>
      {arrows()}
      <div className='gallery_img' style={{backgroundImage: `url(${slides[currentIndex]})`}}></div>
      {bullets()}
    </div>
  )

}