import React, { useState } from 'react';
import './contact-me.css';

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      if (name === 'name') {
        setNameError('Name is required');
      } else if (name === 'email') {
        setEmailError('Email is required');
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
    if (hasError) {
      return; // Prevent form submission if there are errors
    }

    // Construct the mailto link
    const mailtoLink = `mailto:selmgar@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}&from=${encodeURIComponent(email)}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="component-wrapper">
      <h1 className="title">Contact <span>Me</span></h1>
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
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default ContactMe;