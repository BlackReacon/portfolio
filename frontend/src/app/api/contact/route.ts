import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/send-mail';

export async function POST(request: NextRequest) {
  try {
    // JSON from request
    const data = await request.json();
    
    const name = data.name?.toString() || '';
    const email = data.email?.toString() || '';
    const message = data.message?.toString() || '';
    const privacyAccepted = data.privacy === 'on' || data.privacy === true;

    // validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder müssen ausgefüllt werden' },
        { status: 400 }
      );
    }

    if (!privacyAccepted) {
      return NextResponse.json(
        { error: 'Datenschutzerklärung muss akzeptiert werden' },
        { status: 400 }
      );
    }

    // send email
    const mailText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    await sendMail({
      email,
      subject: 'Neue Kontaktanfrage',
      text: mailText,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Nachricht erfolgreich gesendet!' 
    });
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler beim Senden der Nachricht' },
      { status: 500 }
    );
  }
}