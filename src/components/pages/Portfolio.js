import React from "react";
import Project from "../Projects";
import easyMealzImg from "../images/eazyMealz.png";
import techBlogImg from "../images/techBlog.png";
import eCommerceImg from "../images/eCommerce.png";
import socialMediaImg from "../images/socialMedia.png";
import ptProjectImg from "../images/ptProject.png";
import textEditorImg from "../images/textEditor.png";

const projects = [
    {
      id: 1,
      name: "Eazy Mealz",
      description: "Designed front end application to calculate a user's needed caloric intake using Rapid API fitness-calculator as well as plan meals using Edamam API.",
      image: easyMealzImg
    },
    {
      id: 2,
      name: "Tech Blog",
      description: "This full-stack web application features a blog where users are able to create an account and new blog posts. The project uses authentication, CRUD operations, MySQL database, and Node.js. This was my first time creating a full-stack application which gave me a better understanding of database formation and server integration.",
      image: techBlogImg
    },
    {
      id: 3,
      name: "E-Commerce Back End",
      description: "Stores and retrieves e-commerce information using MySQL, NodeJS, and Express.",
      image: eCommerceImg
    },
    {
      id: 4,
      name: "Social Media API",
      description: "This is a social media API that uses a NoSQL database. It allows users to create a user, add friends, create thoughts, and add reactions to thoughts. It also allows users to update and delete their own thoughts and reactions.",
      image: socialMediaImg
    },
    {
      id: 5,
      name: "AI Physical Therapy Assistant",
      description: "Patient portal that uses AI to assess the patient's symptoms and send a likely diagnosis and treatment plan to the physical therapist in order to reduce lengthy first visits.",
      image: ptProjectImg
    },
    {
      id: 6,
      name: "Text Editor PWA",
      description: "This is a text editor that can be used offline. It uses a service worker to cache the files and a manifest to make it a PWA.",
      image: textEditorImg
    }
  ];

export default function Contact() {
    return (
      <div className="container">
        <Project projects={projects}/>
      </div>
    );
  }