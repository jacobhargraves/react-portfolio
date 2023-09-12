import React from "react";

export default function Contact() {
    return (
      <div className='container mt-5 card w-50 shadow-lg'>
        <h1 className="text-center">Contact Me</h1>
        <div className="mb-3">
          <label for="nameInput" className="form-label"><h4>Name</h4></label>
          <input type="text" className="form-control" id="nameInput" placeholder="ex. John Doe" aria-label="Name"></input>
        </div>
        <div className="mb-3">
            <label for="emailInput" className="form-label"><h4>Email address</h4></label>
            <input type="email" class="form-control" id="emailInput" placeholder="name@example.com"></input>
        </div>
        <div className="mb-3">
            <label for="messageInput" class="form-label"><h4>Mesasge</h4></label>
            <textarea class="form-control" id="messageInput" rows="4"></textarea>
        </div>
      </div>
    );
  }