import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  firstName: '';
  lastName: '';
  email: '';
  number: '';
  message: '';
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const ContactEmail = ({
  firstName,
  lastName,
  email,
  message,
  number,
}: ContactEmailProps) => {
  const previewText = `Feedback Received on crownlusso.com`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/static/vercel-logo.png`}
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Feedback received from <strong>{firstName}</strong> on{' '}
              <strong>crownlusso.com</strong> website
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Message:,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{message}</strong>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
