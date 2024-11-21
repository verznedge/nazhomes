import Image from 'next/image';
import React from 'react';
import Container from './container';

type Props = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

const PageHeader = ({ title, imageUrl, subtitle }: Props) => {
  return (
    <div className="relative flex items-center justify-center h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-0" />
      <Image
        width={1000}
        height={1000}
        src={imageUrl}
        alt={'Loading...'}
        className="w-full h-[70vh] object-cover z-1"
      />
      <div className="absolute inset-0 z-2 w-full h-full">
        <Container>
          <div className="text-left flex flex-col justify-end gap-2 w-full h-full">
            <p className="text-white text-3xl md:text-5xl font-semibold playfair">
              {title}
            </p>
            <p className="text-white text-lg lg:text-2xl max-w-2xl capitalize">
              {subtitle}
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PageHeader;
