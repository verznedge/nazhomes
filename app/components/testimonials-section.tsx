'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi';
import Heading from '@/components/common/heading';

interface Testimonial {
  author: string;
  position: string;
  text: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="bg-neutral-100 rounded-lg relative py-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 xl:px-16">
        <Heading
          title="What Our Clients Say"
          center
          subtitle="Client Stories: Your Nazhomes Experience."
        />
        <div className="flex items-center justify-between lg:gap-10 mt-5">
          {' '}
          <button
            onClick={prevSlide}
            className="hover:bg-primary/95 hover:text-white p-2 text-primary font-bold rounded focus:outline-none hidden lg:inline-flex transition-all duration-300"
          >
            <PiCaretLeftLight size={35} />
          </button>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              className="testimonial lg:p-10  rounded-lg h-[300px] flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <p className="lg:text-lg text-neutral-700 text-center">
                {testimonials[currentSlide].text}
              </p>
              <h4 className="testimonial-author text-lg lg:text-xl font-bold text-primary mt-5">
                {testimonials[currentSlide].author}
              </h4>
              <p className="testimonial-position text-neutral-600">
                {testimonials[currentSlide].position}
              </p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={nextSlide}
            className="hover:bg-primary/95 hover:text-white p-2 text-primary font-bold rounded focus:outline-none hidden lg:inline-flex transition-all duration-300"
          >
            <PiCaretRightLight size={35} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 xl:px-16 mt-4 flex justify-between items-center"></div>
      <div className="w-full flex items-center justify-center">
        {' '}
        <button
          onClick={prevSlide}
          className="hover:bg-primary/95 hover:text-white p-2 text-primary font-bold rounded focus:outline-none lg:hidden inline-flex transition-all duration-300"
        >
          <PiCaretLeftLight size={25} />
        </button>
        <button
          onClick={nextSlide}
          className="hover:bg-primary/95 hover:text-white p-2 text-primary font-bold rounded focus:outline-none lg:hidden inline-flex transition-all duration-300"
        >
          <PiCaretRightLight size={25} />
        </button>
      </div>
      <div className="pagination mt-2 text-center">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`pagination-dot inline-block mx-1 w-2 h-2 rounded-[2px] cursor-pointer ${
              currentSlide === index ? 'bg-primary' : 'bg-neutral-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
