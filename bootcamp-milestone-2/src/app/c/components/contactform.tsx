"use client"
import style from "./contactform.module.css"


import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('Please fill all fields');
      return;
    }

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message
      };


      await emailjs.send(
        'service_ngwe7za',
        'template_q3uqn2j',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USERID
      );

      setSuccess('Email sent successfully!');
      setError('');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Error sending email. Please try again later.');
      setSuccess('');
      console.log(err);
    }
  };

  return (
    <div>
      <div className={style.content}>
        <main>
          <div>
            <h1 className={style.contact}>Contact me!</h1>
            <div className={style.contact_me}>
              <h2>
                <a
                  className={style.linkedin}
                  href="https://www.linkedin.com/in/vishnu-alachi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My LinkedIn
                </a>
              </h2>
              <form onSubmit={handleSubmit} style={{ maxWidth: '450px', margin: 'auto' }}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: '100%', boxSizing: 'border-box' }}
        />
      </div>
      <button type="submit" >
        Submit
      </button>
    </form>

              {error && <p style={{ color: "red" }}>{error}</p>}
              {success && <p style={{ color: "green" }}>{success}</p>}
            </div>
          </div>
        </main>

        <footer className="footer">
          © 2024 Vishnu's Website | All Rights Reserved
        </footer>
      </div>
    </div>
  );
};

export default ContactForm;