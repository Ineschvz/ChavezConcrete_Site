
import Mailgun from 'mailgun-js'

const mg = Mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
})

export default async function POST (req, res) {
    const { name, email, message } = req.body; 
    const data = {
        from: 'Excavation Request <mailgun@' + mg.options.domain + '>',
        to: 'chavezconcreteworkinc@yahoo.com',
        subject: 'New message from website',
        text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`
    }
    try{
        await mg.messages().send(data);
        res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Email not sent' })
    }
}

