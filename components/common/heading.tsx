'use client';

import { textVariant } from '@/lib/utils';
import { motion } from 'framer-motion';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  white?: boolean;
}

const staggerDiv = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.1,
    },
  },
};

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  white,
}) => {
  return (
    <motion.div
      variants={staggerDiv}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${center ? 'lg:text-center' : 'lg:text-start'} text-center`}
    >
      <motion.p
        variants={textVariant(0.1)}
        className={`${
          white ? 'text-white' : 'text-primary'
        } text-2xl lg:text-4xl font-bold`}
      >
        {title}
      </motion.p>
      <motion.p
        variants={textVariant(0.4)}
        className={`${
          white ? 'text-neutral-300' : 'text-neutral-500'
        } font-medium text-neutral-500 mt-1 text-lg lg:text-xl`}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default Heading;
