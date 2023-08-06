import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaCcVisa, FaCcMastercard, FaCcPaypal, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h4>Contact Us</h4>
            <p>
              <FaPhone className="mr-2 mb-1" /> Phone: +91-628-000-7521
            </p>
            <p>
              <FaEnvelope className="mr-2 mb-1" /> Email: abidkhan263187@gmail.com
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h4>Follow Us</h4>
            <div>
              <a href="https://github.com/Abidkhan263187" className="text-white mr-3">
                <FaGithub />
              </a>&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/abid-khan-325795182/" className="text-white mr-3">
                <FaLinkedin />
              </a>&nbsp;&nbsp;
              <a href="https://www.instagram.com/_abidkhann/" className="text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Accepted Payment Methods</h4>
            <div>
              <FaCcVisa className="mr-3" />&nbsp;&nbsp;&nbsp;
              <FaCcMastercard className="mr-3" />&nbsp;&nbsp;&nbsp;
              <FaCcPaypal />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


