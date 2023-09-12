import React, { useState, useEffect } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isMessageTrue, setIsMessageTrue] = useState(false);

   useEffect(() => {
    // Regular expression for basic email format validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // Check if the email input value matches the regular expression
    const isValid = emailRegex.test(email);

    setIsValidEmail(isValid);
  }, [email]);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : name === 'email' ? setEmail(value) : name === 'message' ? (setMessage(value), setIsMessageTrue(true))  : null;
  };

  console.log('isMessageTrue:', isMessageTrue);
  console.log('message:', message);

    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
        <div className='mt-5 card shadow-lg col-lg-6 col-md-12'>
        <h1 className="text-center">Contact Me</h1>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label"><h4>Name</h4></label>
          <input name="firstName" type="text" className="form-control" value={firstName} onChange={handleInputChange} id="nameInput" placeholder="ex. John Doe" aria-label="Name"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="emailInput" className="form-label"><h4>Email address</h4></label>
            <input type="email" name="email" value={email} onChange={handleInputChange} className={`form-control ${isValidEmail ? '' : 'is-invalid'}`} id="emailInput" placeholder="name@example.com"></input>
            {!isValidEmail && <div className="invalid-feedback">Invalid email format</div>}
        </div>
        <div className="mb-3">
            <label htmlFor="messageInput" className="form-label"><h4>Message</h4></label>
            <textarea name="message" value={message} onChange={handleInputChange} className={`form-control ${isMessageTrue && message.trim() === '' ? 'is-invalid' : ''}`} id="messageInput" rows="4"></textarea>
            {!isMessageTrue && (<div className="invalid-feedback">This field is required</div>)}
        </div>
      </div>
        </div>
      </div>
    );
  }