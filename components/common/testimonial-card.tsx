'use client';

import React from 'react';

type TestimonialCardProps = {
  author: string;
  quote: string;
  imageSrc: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  author,
  quote,
  imageSrc,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <img
        src={imageSrc}
        alt={author}
        className="w-20 h-20 rounded-full mx-auto"
      />
      <p className="text-gray-700 text-center my-4">{quote}</p>
      <p className="text-blue-600 text-center font-semibold">{author}</p>
    </div>
  );
};

export default TestimonialCard;
