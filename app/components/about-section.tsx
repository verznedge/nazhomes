'use client';

import Container from '@/components/common/container';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { PiCaretDoubleRightBold } from 'react-icons/pi';

type Props = {};

const AboutSection = (props: Props) => {
  const router = useRouter();
  return (
    <Container>
      <div className="grid lg:grid-cols-2 h-auto gap-5 lg:gap-10">
        <div className="flex flex-col lg:gap-10 gap-5">
          <h4 className="lg:text-3xl text-2xl text-primary font-bold">
            Every detail matters to us. We prioritize quality, ensuring that our
            homes stand the test of time.
          </h4>
          <p className="text-lg font-medium">
            At Naz Homes, we are more than just property developers; we are
            dream weavers, visionaries, and your partners in turning aspirations
            into reality. Our commitment to innovation, quality craftsmanship,
            and community-driven projects sets us apart in the real estate
            industry.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => router.push('/contact')}
              className="group w-fit flex items-center gap-5 text-primary hover:text-primary/50 transition-all duration-300 text-lg font-bold"
            >
              {' '}
              <PiCaretDoubleRightBold
                size={25}
                className="transition-transform duration-300 group-hover:transform group-hover:translate-x-2"
              />{' '}
              Contact Us
            </button>
            <button
              onClick={() => router.push('/projects')}
              className="group w-fit flex items-center gap-5 text-primary hover:text-primary/50 transition-all duration-300 text-lg font-bold"
            >
              {' '}
              <PiCaretDoubleRightBold
                size={25}
                className="transition-transform duration-300 group-hover:transform group-hover:translate-x-2"
              />{' '}
              Our Projects
            </button>{' '}
            <button
              onClick={() => router.push('/about')}
              className="group w-fit flex items-center gap-5 text-primary hover:text-primary/50 transition-all duration-300 text-lg font-bold"
            >
              {' '}
              <PiCaretDoubleRightBold
                size={25}
                className="transition-transform duration-300 group-hover:transform group-hover:translate-x-2"
              />{' '}
              About Us
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 -mt-16 lg:mt-0">
          <div className="col-span-2 lg:h-[450px] h-[400px] flex items-end">
            {' '}
            <Image
              src={'/assets/img/apartments3.jpeg'}
              alt="Loading..."
              width={1000}
              height={1000}
              className="lg:h-[400px] h-[300px]  shadow-lg object-cover"
            />
          </div>
          <div className="lg:h-[450px] h-[400px] flex items-start">
            {' '}
            <Image
              src={'/assets/img/apartments3.jpeg'}
              alt="Loading..."
              width={1000}
              height={1000}
              className="lg:h-[300px] h-[200px] shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
