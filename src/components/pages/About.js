import React from 'react';
import portraitImg from '../images/portrait.jpeg';

export default function About() {
  return (
    <div className='container mt-5 d-flex justify-content-center align-items-center'>
      <div className='row'>
        <div className='col-7'>
          <h1 className='m-3'>About Me</h1>
          <h3 className='m-3'>Full-Stack Web Developer</h3>
          <p className='m-3'>WELCOME! I'm Jake, a professional fueled by an unwavering passion for web development and exercise physiology. With a Bachelor's degree in Exercise Physiology and a comprehensive Full-Stack Web Development certification, I am on an exhilarating journey to blend the realms of health science and cutting-edge technology.</p>
        </div>
        <div className='col-5'>
          <img className="img-fluid rounded" src={portraitImg}></img>
        </div>
      </div>
    </div>
  );
}