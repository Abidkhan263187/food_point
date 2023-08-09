import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram }from 'react-icons/fa';
import { Button } from "react-bootstrap";

 export const Contact = () => {

  const navigate=useNavigate()
  const handlesubmit=()=>{
  
      alert(" form submited thank you !!")
      navigate('/')
    
   
  }
  return (
    <div className="container mt-5">
      <h1>Contact Me</h1>
      <p>We'd love to hear from you! Feel free to reach out.</p>

      <div className="row">
        <div className="col-md-6">
        <form onSubmit={handlesubmit} className="needs-validation" Validate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
              />
              <div className="invalid-feedback">Please enter your name.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
              
                required
              />
              <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                required
              ></textarea>
              <div className="invalid-feedback">Please enter your message.</div>
            </div>
            <Button type="submit" style={{backgroundColor:"#198754"}}>
              Submit
            </Button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Our Location</h4>
          <p>
            Amritsar,
            <br />
            Punjab, India
          </p>
          <h4>Contact Information</h4>
          <p>
            Phone: +91-628-000-7521
            <br />
            Email: abidkhan263187@gmail.com
          </p>
          <div className="mt-3">
            <h4>Connect with Us</h4>
            <a href="https://github.com/Abidkhan263187" className="">
                <FaGithub className="icon big-green" />
              </a>&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/abid-khan-325795182/" className="">
                <FaLinkedin  className="icon big-green"/>
              </a>&nbsp;&nbsp;
              <a href="https://www.instagram.com/_abidkhann/" className="">
                <FaInstagram  className="icon big-green"/>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};


