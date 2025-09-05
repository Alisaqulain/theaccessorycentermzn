import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // In a real application, you would send the email here
    // For now, we'll just log it and return success
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    // Simulate email sending
    // In production, use services like SendGrid, Nodemailer, or Resend
    const emailContent = `
New Contact Form Submission from The Accessory Center:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Message:
${message}

---
Submitted on: ${new Date().toLocaleString()}
    `

    // For now, we'll create a mailto link that the frontend can use
    const mailtoLink = `mailto:shazizaidi52058@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      mailtoLink: mailtoLink
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
