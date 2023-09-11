import React from "react";

export default function Contact() {
    return (
      <div className='container mt-5 card w-50'>
        <h1 className="text-center">Contact Me</h1>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
    );
  }