'use client';

import Container from '@/components/common/container';
import ProjectCard from '@/components/common/project-card';
import Image from 'next/image';
import React from 'react';

type Props = {};

const OurProjectsSection = (props: Props) => {
  const projects = [
    {
      id: 1,
      imageSrc: '/assets/img/apartments3.jpeg',
      label: 'Project 1',
      location: 'Location 1',
    },
    {
      id: 2,
      imageSrc: '/assets/img/apartments2.jpeg',
      label: 'Project 2',
      location: 'Location 2',
    },
    {
      id: 3,
      imageSrc: '/assets/img/apartments.jpeg',
      label: 'Project 3',
      location: 'Location 3',
    },
    {
      id: 4,
      imageSrc: '/assets/img/apartments5.jpeg',
      label: 'Project 3',
      location: 'Location 3',
    },
  ];

  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 h-auto">
        <div className="grid xl:grid-cols-2 gap-3 order-2 lg:order-1">
          {/* {projects.map((project) => (
            <ProjectCard
              key={project.id}
              imageSrc={project.imageSrc[1]}
              label={project.label}
              location={project.location}
            />
          ))} */}
        </div>{' '}
        <div className="flex flex-col lg:gap-10 gap-5 order-1 lg:order-2">
          <h4 className="lg:text-3xl text-2xl text-primary font-bold">
            Our Completed & Ongoing Projects
          </h4>
          <p className="text-lg font-medium">
            At Naz Homes, we believe in elevating modern living to a level that
            transcends ordinary. Our projects are a testament to our commitment
            to style and elegance. We understand that a home is not just a
            structure; it&apos;s a reflection of your aspirations, a canvas for
            your lifestyle, and a sanctuary for your dreams.
          </p>
          {/* <div className="flex flex-col gap-3">
              <button className="group w-fit flex items-center gap-5 text-primary hover:text-primary/50 transition-all duration-300 text-lg font-bold">
                {' '}
                <PiCaretDoubleRightBold
                  size={25}
                  className="transition-transform duration-300 group-hover:transform group-hover:translate-x-2"
                />{' '}
                Contact Us
              </button>
              <button className="group w-fit flex items-center gap-5 text-primary hover:text-primary/50 transition-all duration-300 text-lg font-bold">
                {' '}
                <PiCaretDoubleRightBold
                  size={25}
                  className="transition-transform duration-300 group-hover:transform group-hover:translate-x-2"
                />{' '}
                Our Projects
              </button>{' '}
              <button className="group w-fit flex items-center gap-5 text-primary hover:text-primary/50 transition-all duration-300 text-lg font-bold">
                {' '}
                <PiCaretDoubleRightBold
                  size={25}
                  className="transition-transform duration-300 group-hover:transform group-hover:translate-x-2"
                />{' '}
                About Us
              </button>
            </div> */}
        </div>
      </div>
    </Container>
  );
};

export default OurProjectsSection;
