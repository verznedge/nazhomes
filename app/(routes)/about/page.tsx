import React from 'react';
import AboutClient from './about-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Discover Naz Homes – Your premier partner in visionary property development. Explore our commitment to innovation, quality craftsmanship, and creating communities. Elevate your living experience with Nazhomes.',
};

type Props = {};

const AboutPage = (props: Props) => {
  return <AboutClient />;
};

export default AboutPage;
