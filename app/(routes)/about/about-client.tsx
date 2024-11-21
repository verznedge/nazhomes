'use client';

import Button from '@/components/common/button';
import Container from '@/components/common/container';
import Heading from '@/components/common/heading';
import PageHeader from '@/components/common/page-header';
import Paragraph from '@/components/common/paragraph';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsHouse } from 'react-icons/bs';

type Props = {};

const AboutClient = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <PageHeader
        title={'About Naz Homes '}
        imageUrl={'/assets/slider/10.jpg'}
        subtitle="Crafting Dreams into Homes"
      />
      <div className="mx-auto max-w-5xl py-20 px-3">
        <div>
          <p className="text-lg lg:text-3xl font-bold text-primary">
            Welcome to Naz Homes, where we are more than just property
            developers – we are dream weavers, visionaries, and your partners in
            turning aspirations into reality. Our story is one of innovation,
            quality craftsmanship, and a commitment to building communities.
          </p>
        </div>
        <Container>
          <div>
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="flex flex-col gap-5 lg:col-span-2 lg:gap-10">
                <div className="flex flex-col gap-5">
                  <Heading title={'Who We Are'} />
                  <Paragraph
                    content={
                      'At Naz Homes, we believe that a home is more than just a place to live; its a sanctuary for your dreams, a reflection of your lifestyle, and a canvas for your aspirations. We are dedicated to crafting living spaces that transcend the ordinary, bringing style, elegance, and functionality to the forefront.'
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Heading title={'Our Mission'} />
                  <Paragraph
                    content={
                      'Our mission is simple but profound: to create homes that inspire and uplift. We aim to redefine modern living by pushing the boundaries of design and construction. Every project we undertake is a testament to our commitment to excellence.                      '
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Heading title={'Our Core Values'} />
                  <Paragraph
                    content={
                      'At Naz Homes, our values form the foundation of everything we do. They guide our decisions, actions, and the way we interact with our clients, partners, and team members. Our values are not just words; they are principles we live and work by every day.'
                    }
                  />
                </div>
              </div>
              <div className="w-full h-auto bg-gray-50 flex items-center justify-center py-10">
                <div className="w-full px-5 flex flex-col items-center justify-center text-center font-bold text-xl gap-3">
                  <BsHouse size={40} />
                  <p>
                    Est eum omnis velit sapiente.Est eum omnis velit sapiente.
                  </p>
                  <Button
                    onClick={() => router.push('/contact')}
                    label="Contact"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutClient;
