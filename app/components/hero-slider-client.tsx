/* eslint-disable @next/next/no-img-element */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi';
import Button from '@/components/common/button';
import Image from 'next/image';

const SlideContent = ({
  intro,
  title,
  logo,
  content,
  buttonLabel,
  buttonLink,
  secondButtonLabel,
  secondButtonLink,
}: any) => {
  const router = useRouter();
  return (
    <div className="text-white text-center flex flex-col items-center justify-center h-full gap-3 lg:gap-5">
      {/* {intro && ( */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-base md:text-lg xl:text-xl tracking-widest font-medium uppercase max-w-[550px]"
      >
        {intro}
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="text-3xl md:text-4xl xl:text-6xl font-semibold capitalize max-w-[700px] playfair"
      >
        {' '}
        {logo ? (
          <div className="h-[50%]">
            <Image
              src={logo}
              alt="Loading..."
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        ) : (
          <span>{title}</span>
        )}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        className="text-sm text-white max-w-sm lg:max-w-lg font-medium"
      >
        {content}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
        className="flex items-center gap-3"
      >
        {buttonLabel && (
          <Button
            label={buttonLabel}
            onClick={() => router.push(`${buttonLink}`)}
          />
        )}

        {secondButtonLabel && (
          <Button
            label={secondButtonLabel}
            onClick={() => router.push(`${secondButtonLink}`)}
          />
        )}
      </motion.div>
    </div>
  );
};

const HeroSliderClient = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [manualChange, setManualChange] = useState(false);

  const slides = [
    {
      intro: 'Introducing',
      title: 'The Opulent Residence',
      content:
        'The Opulent Residence, located at Airport Residential Area in Accra, offers 1 and 2-bedroom units, as well as luxurious penthouses, at the heart of a thriving neighborhood',
      buttonLabel: 'Read More',
      buttonLink: '/projects/opulent',
      secondButtonLabel: '',
      secondButtonLink: '',
      backgroundImage: '/assets/slider/6.jpg',
      logo: '/assets/logos/opulent.png',
    },
    {
      title: 'Great Comfort & Elegance',
      content: 'Provided By Nazhomes',
      buttonLabel: '',
      buttonLink: '',
      secondButtonLabel: '',
      secondButtonLink: '',
      backgroundImage: '/assets/slider/d4B.png',
    },
    {
      title: 'Luxury & Comfort',
      content: 'Experience the Epitome of Luxury',
      buttonLabel: '',
      buttonLink: '',
      secondButtonLabel: '',
      secondButtonLink: '',
      backgroundImage: '/assets/slider/1.jpg',
    },
    {
      title: 'Tailored with Great Flexibility',
      content: 'One of A Kind Development',
      buttonLabel: '',
      buttonLink: '',
      secondButtonLabel: '',
      secondButtonLink: '',
      backgroundImage: '/assets/slider/d4B.png',
    },
  ];

  const nextSlide = () => {
    setManualChange(true);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setManualChange(true);
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (!manualChange) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 10000);
    }

    return () => clearInterval(interval);
  }, [manualChange, slides.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setManualChange(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden h-[100vh] bg-primary">
      <div className="z-50 absolute w-full h-full flex items-center justify-center">
        <SlideContent
          title={slides[currentSlide]?.title}
          intro={slides[currentSlide]?.intro}
          logo={slides[currentSlide]?.logo}
          content={slides[currentSlide]?.content}
          buttonLabel={slides[currentSlide]?.buttonLabel}
          buttonLink={slides[currentSlide]?.buttonLink}
          secondButtonLabel={slides[currentSlide]?.secondButtonLabel}
          secondButtonLink={slides[currentSlide]?.secondButtonLink}
        />
      </div>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          style={{
            backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 z-10 w-full"
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-24 lg:bottom-14 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-3 z-50 w-fit">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setManualChange(true);
            }}
            className="mx-auto"
          >
            <img
              alt="Loading..."
              src={slides[index].backgroundImage}
              className={`${
                currentSlide === index
                  ? 'border-white opacity-100'
                  : 'border-primary opacity-50'
              } border-2 rounded-full h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-cover transform hover:scale-105 transition duration-300 shadow`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSliderClient;
