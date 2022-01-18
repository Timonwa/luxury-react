/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.scss";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        {/* contacts */}
        <address className="contact-cntr">
          <h5 className="contact-cntr__header">Contact Us</h5>
          <div className="contacts-list">
            <span className="contacts-list__link">
              Phone
              <a href="tel:+23480xxxxxxxx">: 080xxxxxxxx</a>
              <a href="tel:+23480xxxxxxxx">, 080xxxxxxxx</a>
            </span>

            <span className="contacts-list__link">
              Email
              <a href="mailto:luxury@gmail.com">: luxury@gmail.com</a>
            </span>
          </div>
        </address>

        <address className="social-media-cntr">
          <h5 className="contact-cntr__header">
            Connect with Us on Social Media
          </h5>
          <ul className="social-media__list">
            <li>
              <a
                className="socials fb"
                alt="facebook handle"
                href="https://example.com"
                target="_blank"
                rel="noreferrer">
                <FaFacebookSquare className="icons" />
              </a>
            </li>
            <li>
              <a
                className="socials ig"
                alt="instagram handle"
                href="https://example.com"
                target="_blank"
                rel="noreferrer">
                <FaInstagram className="icons" />
              </a>
            </li>
            <li>
              <a
                className="socials twitter"
                alt="twitter handle"
                href="https://example.com"
                target="_blank"
                rel="noreferrer">
                <FaTwitterSquare className="icons" />
              </a>
            </li>
            <li>
              <a
                className="socials whatsapp"
                alt="whatsapp handle"
                href="https://example.com"
                target="_blank"
                rel="noreferrer">
                <FaWhatsappSquare className="icons" />
              </a>
            </li>
          </ul>
        </address>

        {/* the name of the designer of the website */}
        <p className="designer">
          Designed by{" "}
          <a href="http://timonwa.vercel.app" target="_blank" rel="noreferrer">
            Timonwa
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
