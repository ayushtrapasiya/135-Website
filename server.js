import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "hosting.135degrees@gmail.com",
    pass: "wcxa czyw xgsy koov",
  },
});

app.post("/send-mail", async (req, res) => {
    const { name, mobile, email, message } = req.body;
  
    if (!name || !mobile || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      // Mail to the customer
      const customerMailOptions = {
        from: "hosting.135degrees@gmail.com",
        to: email,
        subject: "135 Degrees - Contact Form Submission",
        text: `Thank you for contacting us! We have received your message and will get back to you soon.`,
        html: `
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f7f7f7;
                  padding: 20px;
                  color: #333;
                }
                .container {
                  background: #ffffff;
                  padding: 30px;
                  border-radius: 8px;
                  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                  width: 100%;
                  max-width: 600px;
                  margin: 0 auto;
                }
                .header {
                  text-align: center;
                  margin-bottom: 20px;
                }
                .header img {
                  width: 120px;
                  margin-bottom: 10px;
                }
                h2 {
                  color: #0B2545;
                  font-size: 24px;
                  margin-bottom: 20px;
                  text-align: center;
                }
                p {
                  font-size: 16px;
                  line-height: 1.6;
                  margin-bottom: 10px;
                }
                .footer {
                  margin-top: 30px;
                  font-size: 14px;
                  text-align: center;
                  color: #777;
                }
                .footer a {
                  color: #007BFF;
                  text-decoration: none;
                }
                .footer a:hover {
                  text-decoration: underline;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <img src="https://storage.googleapis.com/135-degrees-dev/135DegreesLogo/1743506045492-logo%201.jpg?GoogleAccessId=cloud-storage%40degree-dev.iam.gserviceaccount.com&Expires=1901186046&Signature=oVaNJY9Mi58RnLKcC1CsLxJ7LjJKkHZ8XLT5f4lI56LHf6mdJ2uYzOzeEoSlKUXj9Pm4NVv%2Fcwfnk4BwEWsCu2TCut9e49S89WfLYssTCZrFNBvtKfvaHOXoY7rsevmtJ9kZR3RearOZmTKDJfs2t9c%2FwTIUdnmSxO26IkGlaho%2FIci6FsQxJ0erBq2g16b6NoqQrahFyd3f9QX%2BvC%2Bj5If1YqYYOTEmxjsGbP%2BgpQl7Xx8BNg7i3RMK8aTmlshqYZQ5EKG6jDuQHRF6ELa5uh5BVX9f64C84PgnDmQKODOQQJfNPW2cPT4aOEtfGiu%2BMLSHJ8tpzkcJ6CDklNRaew%3D%3D" alt="135 Degrees Logo"/>
                </div>
                <h2>Thank you for contacting 135 Degrees!</h2>
                <p>We have received your message and will get back to you as soon as possible.</p>
                <p>We appreciate you reaching out, and we’re excited to connect with you!</p>
                
                <div class="footer">
                  <p>Best regards,</p>
                  <p><strong>The 135 Degrees Team</strong></p>
                  <p>Visit our website: <a href="https://135degrees.com" target="_blank">135degrees.com</a></p>
                </div>
              </div>
            </body>
          </html>
        `
      };
      
  
      // Mail to the admin
      const adminMailOptions = {
        from: "hosting.135degrees@gmail.com",
        to: "hosting.135degrees@gmail.com", // Replace with the admin's email address
        subject: "New Contact Form Submission - 135 Degrees",
        text: `You have received a new message from the contact form.`,
        html: `
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f7f7f7;
                  padding: 20px;
                  color: #333;
                }
                .container {
                  background: #ffffff;
                  padding: 30px;
                  border-radius: 8px;
                  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                }
                h2 {
                  color: #007BFF;
                  font-size: 24px;
                  margin-bottom: 20px;
                }
                p {
                  font-size: 16px;
                  line-height: 1.6;
                  margin-bottom: 10px;
                }
                .details {
                  border-top: 2px solid #f1f1f1;
                  padding-top: 15px;
                  margin-top: 15px;
                }
                .details p {
                  margin-bottom: 8px;
                }
                .footer {
                  margin-top: 30px;
                  font-size: 14px;
                  text-align: center;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h2>New Contact Form Submission</h2>
                <p>You have received a new message from the contact form on your website.</p>
                
                <div class="details">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Mobile:</strong> ${mobile}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Message:</strong></p>
                  <p>${message}</p>
                </div>
  
                <div class="footer">
                  <p>This message was sent to you by the 135 Degrees website contact form.</p>
                </div>
              </div>
            </body>
          </html>
        `
      };
  
      // Sending the emails to both customer and admin
      await transporter.sendMail(customerMailOptions);
      await transporter.sendMail(adminMailOptions);
  
      // Send success response
      res.status(200).json({ message: "Emails sent successfully!" });
  
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email", error });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
