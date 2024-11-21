'use client';

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from 'react-icons/io5';
import { TfiClose } from 'react-icons/tfi';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

type Props = {
  links: { href: string; label: string }[];
  isOpen: boolean;
  toggleMenu: () => void;
  top?: boolean;
};

const MobileMenu = ({ links, top, toggleMenu, isOpen }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const location = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showNavbar]);

  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [isOpen]);

  const handleClick = (href: string) => {
    router.push(href);
    toggleMenu();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 0.95 : 0, type: 'spring' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="fixed top-0 left-0 w-full h-screen bg-white z-[1000]"
              onClick={toggleMenu}
            />

            <motion.nav
              initial={{ x: '100%' }}
              exit={{ x: '100%' }}
              animate={{ x: isOpen ? 0 : '100%', type: 'spring' }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
              className="fixed top-0 right-0 w-[70%] lg:w-[50%] h-screen block z-[2000] overflow-hidden backdrop-blur-lg bg-primary"
            >
              <div className="relative flex items-center h-full">
                <Link
                  onClick={() => handleClick('/')}
                  href="/"
                  className="absolute left-6 top-5"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/img/logo.png"
                    alt="Loading..."
                    className="lg:h-[100px] lg:w-[102px] h-[90px] w-[92px]"
                  />
                </Link>
                <button
                  onClick={toggleMenu}
                  className="text-2xl font-bold float-right cursor-pointer focus:outline-none text-white absolute right-5 top-5 rounded-full p-3"
                >
                  <TfiClose size={20} />
                </button>

                <nav className="flex flex-col items-start text-left gap-5 lg:gap-10 pl-8">
                  {links.map((link) => {
                    const active = pathname === link.href;

                    return (
                      <div key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => handleClick(link.href)}
                          className={`${
                            location === link.href
                              ? 'text-white font-bold hover:text-white'
                              : 'text-gray-500 font-semibold hover:text-white/50'
                          } text-3xl md:text-4xl lg:text-5xl rounded-full transition-all duration-300 flex items-center gap-5 group hover:transform hover:translate-x-3 `}
                          aria-label={link.label}
                        >
                          {link.label}
                          <div className="opacity-0 group-hover:opacity-100 group-hover:transform group-hover:translate-x-3 transition-all duration-300">
                            <BsArrowRight />
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                  {/* <div className="w-full flex items-center text-primary gap-10 mt-5">
                    <Link href={''}>
                      <IoLogoFacebook size={30} />
                    </Link>
                    <Link href={''}>
                      <IoLogoInstagram size={30} />
                    </Link>
                    <Link href={''}>
                      <IoLogoWhatsapp size={30} />
                    </Link>
                  </div> */}
                  <span className="py-4 text-xs text-gray-400">
                    © {new Date().getFullYear()} Naz Homes. All Rights Reserved.
                  </span>
                </nav>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
