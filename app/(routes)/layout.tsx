import Footer from '@/components/layout/footer';
import React from 'react';

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default layout;
