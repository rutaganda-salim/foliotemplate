import nodemailer from 'nodemailer'

const email = process.env.NEXT_PUBLIC_EMAIL
const password = process.env.NEXT_PUBLIC_PASSWORD

export const transporter = nodemailer.createTransport({
	// service can be ‘hotmail’, ‘yahoo’, etc.
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
})
