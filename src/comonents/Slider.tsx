import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useTranslation } from 'react-i18next';
interface intfSlides {
  url: string;
  text?: any;
}



const Slider = () => {
  const { t } = useTranslation();
    
  const slides:intfSlides[] = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
      text: t('slide1')
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      text: t('slide2')
    },
    {
      url: 'https://suarbarid.com/storage/sor-khlfy-t-sth-lmktb/127d0061a660/shry-n-fy-a-mk-n-ldb-lktby-kyf-gaal-khlfy-sth-lmktb-hd-7.png',
      text: t('slide3')
    },
  
    {
      url: 'https://blogger.googleusercontent.com/img/a/AVvXsEgJb3nizYhnwxITY58CfEDdrFDmYmLBZDCuUu32Dp61szuLhLVSwpF7CVLfNYVeGyGDaBpv2KzNkNGMQpBEMP8tMyHaIcR-oSmHDal1lpMqJIWRNM4ePAUDaeK9oh_nFftHNtIGz2LPcJxtJZniVrcR_eUOeKQfSpbkuagNv4hvL9cuEkHzuoZsXzv1=s1920',
      text: t('slide4')
    },
    {
      url: 'https://m3luma.com/wp-content/uploads/2022/06/18-1-1024x640.jpg',
      text: t('slide5')
    },
  ];  


      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex:number) => {
        setCurrentIndex(slideIndex);
      };
    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group mt-[60px]'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        
      >
        <div className='text-white text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {slides[currentIndex].text}
        </div>
      </div>
    
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
     
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
    );
};

export default Slider;