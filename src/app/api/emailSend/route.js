import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const mail = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(request) {
    try {
        const { name, email } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: mail,
                pass: pass
            }
        });

        const mailOption = {
            from: 'akmsyfulbd12@gmail.com',
            to: 'amazon@madlymelody.com',
            subject: 'Subscribe to Master Appliance',
            html: `
            <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  padding: 20px;
                }
                .container {
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                h3 {
                  color: #333;
                }
                ul {
                  list-style: none;
                  padding: 0;
                }
                li {
                  margin-bottom: 10px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h3>Madlymelody Newsletter</h3>
                <p> Here are  subscription details:</p>
                <ul>
                  <li><strong>Subscriber Name:</strong> ${name}</li>
                  <li><strong>Subscriber Email:</strong> ${email}</li>
                </ul>
                
              </div>
            </body>
            </html>
          `,
        };

        await transporter.sendMail(mailOption);

        // Set the CORS headers for the response
        const corsHeaders = {
            'Access-Control-Allow-Origin': 'https://masterappliancetech.vercel.app/',
            'Access-Control-Allow-Methods': 'OPTIONS, POST', // Add other methods as needed
            'Access-Control-Allow-Headers': 'Content-Type', // Add other headers as needed
        };

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200, headers: corsHeaders });
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    }
}

// Handle preflight requests (OPTIONS)
export function OPTIONS() {
    // Set the necessary CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': 'https://masterappliancetech.vercel.app/',
        'Access-Control-Allow-Methods': 'OPTIONS, POST', // Add other methods as needed
        'Access-Control-Allow-Headers': 'Content-Type', // Add other headers as needed
    };

    // Respond with an OK (200) status for preflight requests
    return new Response(null, { status: 200, headers: corsHeaders });
}
