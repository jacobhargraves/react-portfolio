import React from "react";

export default function Contact() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
        <div className='mt-5 card shadow-lg col-lg-6 col-md-12'>
        <h1 className="text-center">Contact Me</h1>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label"><h4>Name</h4></label>
          <input type="text" className="form-control" id="nameInput" placeholder="ex. John Doe" aria-label="Name"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="emailInput" className="form-label"><h4>Email address</h4></label>
            <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="messageInput" className="form-label"><h4>Mesasge</h4></label>
            <textarea className="form-control" id="messageInput" rows="4"></textarea>
        </div>
      </div>
        </div>
      </div>
    );
  }