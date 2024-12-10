import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import './contact-me.css';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateField = (name, value) => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Invalid email address';
    }

    return '';
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFormErrors({ ...formErrors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    for (const field in formData) {
      errors[field] = validateField(field, formData[field]);
    }

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      return; // Prevent submission if there are errors
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formData,
        { publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY }
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setNotification('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.log('FAILED...', err);
          setNotification('Failed to send your message. Please try again later.');
        }
      )
      .finally(() => {
        setTimeout(() => setNotification(''), 5000);
      });
  };

  return (
    <div className="component-wrapper">
      <h1 className="title">Contact<span>Me</span></h1>
      <section>
        <form onSubmit={handleSubmit}>
          {['name', 'email', 'message'].map((field) => (
            <div className="input-container" key={field}>
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              {field === 'message' ? (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              )}
              {formErrors[field] && <p className="error-message">{formErrors[field]}</p>}
            </div>
          ))}
          <button type="submit">Submit</button>
          {notification && <div className="notification">{notification}</div>}
        </form>
      </section>
    </div>
  );
}

export default ContactMe;
