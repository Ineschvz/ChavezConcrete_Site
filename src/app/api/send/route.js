import EmailTemplate from '@/app/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const emailData = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: <EmailTemplate firstName="John" />
    });

    if (emailData.error) {
      return NextResponse.json({ error: emailData.error }, { status: 500 });
    }

    return NextResponse.json({ data: emailData.data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
