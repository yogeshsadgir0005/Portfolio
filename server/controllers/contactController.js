import Contact from '../models/Contact.js';
import { validationResult } from 'express-validator';
import nodemailer from 'nodemailer';

// Get all contacts (admin only)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(50);
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch contacts' });
  }
};

export const submitContact = async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { name, email, subject, message } = req.body;

    // Save to DB
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/> ${message}</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email, // HR email (the one who filled the form)
      subject: "✅ Thank you for contacting me",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out. I have received your message and will get back to you soon.</p>
        <br/>
        <p>Best regards,<br/>Yogesh Sadgir</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: contact,
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again.',
    });
  }
};
