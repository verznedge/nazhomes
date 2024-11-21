'use client';

import Button from '@/components/common/button';
import Heading from '@/components/common/heading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const GetInTouchSection = () => {
  const router = useRouter();

  return (
    <div className="bg-primary py-10 lg:py-20">
      <div className="container mx-auto text-center flex flex-col items-center justify-center gap-5 px-3">
        <Heading
          title="Get In Touch"
          center
          white
          subtitle="Our dedicated team is here to assist you in every way possible. We pride ourselves on providing exceptional customer service, and your satisfaction is our top priority
          needs."
        />

        <Button
          onClick={() => router.push('/contact')}
          label="Register Interest"
        />
      </div>
    </div>
  );
};

export default GetInTouchSection;
