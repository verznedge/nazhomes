'use client';

import HeroSlider from '@/app/components/hero-slider';
import AboutSection from './components/about-section';
import OurProjectsSection from './components/our-projects';
import TestimonialsSection from './components/testimonials-section';
import { testimonialData } from '@/lib/testimonial-data';
import GetInTouchSection from './components/get-in-touch-section';

export default function Home() {
  return (
    <div>
      <HeroSlider />
      {/* <AboutSection />
      <OurProjectsSection />
      <GetInTouchSection />
      <TestimonialsSection testimonials={testimonialData} /> */}
    </div>
  );
}
