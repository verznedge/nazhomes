import ContactEmail from '@/emails/contact';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();

  const { firstName, lastName, email, number, message } = body;

  console.log(firstName, lastName, email, number, message);

  await resend.emails.send({
    from: 'contact@emails.nazhomesgh.co',
    to: 'maabsuf@gmail.com',
    subject: 'New message',
    react: ContactEmail({ firstName, lastName, email, number, message }),
  });

  return NextResponse.json({ status: 'ok' });
}
