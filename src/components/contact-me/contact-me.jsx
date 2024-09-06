import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import './contact-me.css';

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError('');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      if (name === 'name') {
        setNameError('Name is required');
      } else if (name === 'email') {
        setEmailError('Email is required');
      } else if (name === 'message') {
        setMessageError('Message is required');
      }
    } else if (name === 'email' && !isValidEmail(value)) {
      setEmailError('Invalid email address');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!name.trim()) {
      setNameError('Name is required');
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      hasError = true;
    }

    if (!message.trim()) {
      setMessageError('Message is required');
      hasError = true;
    }

    if (hasError) {
      return; // Prevent form submission if there are errors
    }

    var templateParams = {
      name,
      email,
      message
    };

    emailjs
    .send(import.meta.env.VITE_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID, templateParams, {
      publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
    })
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (err) => {
        console.log('FAILED...', err);
      },
    );
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="component-wrapper">
      <h1 className="title">Contact<span>Me</span></h1>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              onBlur={handleBlur}
            />
            {nameError && <p className="error-message">{nameError}</p>}
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="input-container">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              onBlur={handleBlur}
            />
            {messageError && <p className="error-message">{messageError}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default ContactMe;