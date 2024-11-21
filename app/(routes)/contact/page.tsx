import React from 'react';
import ContactClient from './contact-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Connect with Naz Homes today. Have questions or ready to start your property journey? Contact us via email, phone, or in person. Your dream home is just a conversation away.',
};

type Props = {};

const ContactPage = (props: Props) => {
  return <ContactClient />;
};

export default ContactPage;
