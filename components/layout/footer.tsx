'use client';

import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-primary">
      {' '}
      {/* Container */}
      <h2 className="sr-only">Footer</h2>
      <div className="mx-auto max-w-5xl flex flex-col items-center text-gray-200 px-3">
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-between items-center">
          {/* <div className="py-4 px-2 flex gap-5">
            <Link href="#link" className="text-gray-200">
              <span className="sr-only">Facebook</span>
              <FaFacebook size={25} />
            </Link>

            <Link href="#link" className="text-gray-200">
              <span className="sr-only">Twitter</span>
              <FaXTwitter size={25} />
            </Link>

            <Link href="#link" className="text-gray-200">
              <span className="sr-only">Instagram</span>
              <FaInstagram size={25} />
            </Link>
          </div> */}

          {/* :NAVIGATION */}
          <nav className="py-4 flex flex-wrap justify-center list-none gap-5">
            <Link href="/" className="hover:font-semibold">
              Home
            </Link>
            <Link href="/about" className="hover:font-semibold">
              About
            </Link>
            <Link href="/projects" className="hover:font-semibold">
              Projects
            </Link>{' '}
            <Link href="/contact" className="hover:font-semibold">
              Contact
            </Link>
          </nav>

          <div className="flex flex-col items-center md:items-start justify-center gap-1">
            <Link
              href="mailto:info@crownlusso.com"
              className="text-gray-300 font-bold"
            >
              <span>nazhomes@gmail.com</span>
            </Link>

            <Link
              href="tel://+233272160000"
              className="text-gray-300 font-bold"
            >
              <span>(233) 2721-60000</span>
            </Link>
          </div>
        </div>

        {/* :COPYRIGHT */}
        <p className="pt-10 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Naz Homes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
