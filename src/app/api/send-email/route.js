import nodemailer from 'nodemailer';

export async function POST(req) {

    // Extracting name, email, and message from the JSON body of the request
    const { name, email, message } = await req.json();
    const transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: 'chavezconcreteworkinc@yahoo.com',
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response('Error sending email', { status: 500 });
    }
    
}
