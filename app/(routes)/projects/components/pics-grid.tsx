import React from 'react';
import Image from 'next/image';

const PicsGrid = ({ media }: { media: string[] }) => {
  return (
    <div className="grid md:grid-cols-2 gap-3 mt-20">
      {media.map((media) => {
        return (
          <div
            key={media}
            className="overflow-hidden mb-3 h-[50vh] lg:h-[60vh] rounded"
          >
            <Image
              src={media}
              width={1000}
              height={1000}
              alt="Loading..."
              className="hover:scale-105 cursor-pointer transition-all duration-500 object-cover  w-full h-[50vh] lg:h-[60vh] rounded"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PicsGrid;
