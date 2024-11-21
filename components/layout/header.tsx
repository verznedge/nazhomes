'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import MobileMenu from './mobile-menu';
import { BsPhone } from 'react-icons/bs';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { TbMenu } from 'react-icons/tb';

const headerLinks = [
  { label: 'Home', href: '/' },
  // { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const scrollDirection = useScrollDirection();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = usePathname();
  const router = useRouter();
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-[9999] transition duration-300 ease-in-out text-white ${
        !top
          ? 'bg-primary shadow border-b border-primary/50'
          : ' border-b border-white/50'
      } ${
        scrollDirection !== 'up' && !active && location !== '/search'
          ? '-translate-y-full 2xl:translate-y-0'
          : 'translate-y-0'
      }  ${active && 'overflow-visible'} ${hidden ? '' : 'overflow-visible'}`}
    >
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex items-center justify-between h-full">
          {/* Site branding */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView="visible"
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`${
              !top ? 'border-primary/30' : 'border-white'
            } shrink-0 pr-4 h-full`}
          >
            <Link href="/">
              <Image
                width={1000}
                height={1000}
                src="/assets/img/logo.png"
                alt="Loading..."
                className="lg:h-[80px] lg:w-[82px] h-[70px] w-[72px]"
              />
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView="visible"
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center gap-2 md:gap-5">
              {' '}
              <Link
                href="tel://+233272160000"
                className="group flex items-center justify-center gap-3 h-full"
              >
                <span
                  className={`${
                    !top ? 'bg-white' : 'border border-white'
                  } rounded-full p-2 group-hover:bg-primary/10 transition duration-300 ease-in-out group-hover:text-primary`}
                >
                  <BsPhone
                    className={`${!top ? 'text-primary' : 'text-white'}`}
                  />
                </span>
                <span
                  className={`${
                    !top ? '' : ''
                  } hidden md:inline-flex tracking-wider group-hover:text-primary`}
                >
                  (233) 2721-60000
                </span>
              </Link>
              <div
                className={`${
                  !top ? 'border-primary/30' : 'border-white'
                } shrink-0 pl-2 md:pl-4 py-5`}
              >
                {' '}
                <button
                  onClick={toggleMobileMenu}
                  className={`flex items-center justify-center gap-2 text uppercase text-sm`}
                >
                  <TbMenu size={28} />
                </button>
                <MobileMenu
                  toggleMenu={toggleMobileMenu}
                  isOpen={isMobileMenuOpen}
                  links={headerLinks}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
