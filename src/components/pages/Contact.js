import React from "react";

export default function Contact() {
    return (
      <div className='container mt-5 card w-50'>
        <h1 className="text-center">Contact Me</h1>
        <div className="mb-3">
          <label for="nameInput" className="form-label">Name</label>
          <input type="text" className="form-control" id="nameInput" placeholder="ex. John Doe" aria-label="Name"></input>
        </div>
        <div className="mb-3">
            <label for="emailInput" className="form-label">Email address</label>
            <input type="email" class="form-control" id="emailInput" placeholder="name@example.com"></input>
        </div>
        <div className="mb-3">
            <label for="messageInput" class="form-label">Message</label>
            <textarea class="form-control" id="messageInput" rows="4"></textarea>
        </div>
      </div>
    );
  }