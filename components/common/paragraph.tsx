import React from 'react';

type ParagraphProps = {
  content: string;
};

const Paragraph: React.FC<ParagraphProps> = ({ content }) => {
  return (
    <p className="text-sm sm:text-base md:text-lg 2xl:text-2xl leading-normal text-neutral-500">
      {content}
    </p>
  );
};

export default Paragraph;
