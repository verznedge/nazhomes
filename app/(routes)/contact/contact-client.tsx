'use client';

import Button from '@/components/common/button';
import Container from '@/components/common/container';
import InputField from '@/components/common/custom-input';
import CustomTextArea from '@/components/common/custom-textarea';
import PageHeader from '@/components/common/page-header';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

type Props = {};

const ContactFormSchema = Yup.object({
  firstName: Yup.string().required('Please Enter Your First Name'),
  lastName: Yup.string().required('Please Enter Your Last Name'),
  email: Yup.string()
    .email('Please Enter a Valid Email')
    .required('Please Enter Your Email'),
  message: Yup.string()
    .required('Please Enter Your Message')
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be at most 500 characters'),
  number: Yup.string()
    .required('Please enter your phone number')
    .min(8, 'Phone number must be at least 8 numbers long')
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      'Please enter a valid phone number'
    ),
});

const ContactClient = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [serverError, setServerError] = useState('');

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: '',
  };

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ContactFormSchema,
    onSubmit: async (values, action) => {
      if (isSent) {
        return;
      }
      setIsLoading(true);
      setServerError('');
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if (!response.ok) {
          setServerError('An error occurred. Please try again later.');
          return;
        }
        setIsSent(true);
        // toast({
        //   title: 'Thank you for your message!',
        //   description: 'Your message has been sent successfully',
        //   variant: 'destructive',
        // });
        // resetForm();
      } catch (error) {
        setIsSent(false);

        setServerError('An error occurred. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <div>
      <PageHeader
        title={'Contact Us'}
        imageUrl={'/assets/slider/10.jpg'}
        subtitle="We would love to hear from you.
"
      />
      <div className="mx-auto max-w-5xl py-20 px-3">
        <div>
          <p className="text-lg lg:text-3xl font-bold text-primary">
            Ready to turn your dreams into reality? Reach out to Naz Homes for
            personalized consultations, expert insights, and a seamless journey
            towards your dream home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20 gap-10">
          <div className="flex flex-col items-start gap-5">
            <h4 className="text-2xl font-bold">General Enquiries</h4>
            <div className="text-neutral-500">
              <p>Call (233) 2721-60000</p>
              <p>Call (233) 2671-60000</p>
              <p>Email info@nazhomesgh.com</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <h4 className="text-2xl font-bold">Postal Address</h4>
            <div className="text-neutral-500">
              <p>P.O.Box KA 18223</p>
              <p>Airport, Accra</p>
              <p>Ghana</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <h4 className="text-2xl font-bold">Address</h4>
            <div className="text-neutral-500">
              <p>12 Noi Fetreke St</p>
              <p>Accra</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 mt-10 w-full"
        >
          <div className="grid grid-cols-2 gap-3 w-full">
            {' '}
            <InputField
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              label="First Name"
              value={values.firstName}
              error={errors.firstName && touched.firstName}
              errorText={errors.firstName}
              onChange={handleChange}
            />
            <InputField
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              label="Last Name"
              value={values.lastName}
              error={errors.lastName && touched.lastName}
              errorText={errors.lastName}
              onChange={handleChange}
            />
          </div>
          <InputField
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            label="Email Address"
            value={values.email}
            error={errors.email && touched.email}
            errorText={errors.email}
            onChange={handleChange}
          />
          <InputField
            id="number"
            type="tel"
            name="number"
            label="Phone Number"
            placeholder="Phone Number"
            value={values.number}
            error={errors.number && touched.number}
            errorText={errors.number}
            onChange={handleChange}
          />
          <CustomTextArea
            id="message"
            label="Message"
            name="message"
            placeholder="Message*"
            value={values.message}
            error={errors.message && touched.message}
            errorText={errors.message}
            onChange={handleChange}
          />
          <div className="flex items-center justify-start">
            {isSent ? (
              <div>I sent</div>
            ) : (
              <Button
                label={'Submit'}
                disabled={isLoading}
                secondary
                loading={isLoading}
                loadingText="Submitting"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactClient;
