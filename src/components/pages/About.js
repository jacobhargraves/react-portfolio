import React from 'react';
import portraitImg from '../images/portrait.jpeg';

export default function About() {
  return (
    <div className='container mt-5 p-3 card w-50 text-center shadow-lg'>
        <img className="img-fluid rounded" src={portraitImg}></img>
        <h1>About Me</h1>
        <h3>Full-Stack Web Developer</h3>
        <p>Furthering Health and Fitness Through Innovative Web Solutions: Bridging Science and Technology for a Better Tomorrow.</p>
    </div>
  );
}