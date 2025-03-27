import React from "react";
import { Input, Button, Container } from "reactstrap";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "../css/Bottom.css";

export default function Bottom() {
  return (
    <div className="footer-container">
      <Container className="d-flex flex-column align-items-center text-center">

        <h1 className="logo">Event <span>Hive</span></h1>


        <div className="subscribe d-flex">
          <Input type="email" placeholder="Enter your mail" className="email-input" />
          <Button className="subscribe-btn">Subscribe</Button>
        </div>

        <nav className="links d-flex justify-content-center">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Get in touch</a>
          <a href="#">FAQs</a>
        </nav>
        <div className="white-line"></div>

        <div className="d-flex justify-content-between w-100 align-items-center">
          <div className="d-flex align-items-center"> {/* עוטף את כפתורי השפה והקופיריט */}
            <div className="language-buttons">
              <Button className="language-btn">English</Button>
              <Button className="language-btn">French</Button>
              <Button className="language-btn">Hindi</Button>
            </div>
          </div>
          <div className="social-icons">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
          </div>
                    <span className="footer-bottom-text">Non Copyrighted © 2023 Upload by rich technologies</span> {/* העברתי את הטקסט לכאן */}
        </div>
      </Container>
    </div>
  );
}