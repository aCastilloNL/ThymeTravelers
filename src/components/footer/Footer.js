import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__addr">
        <h1 class="footer__logo">Wild Plants</h1>

        <h2>Contact</h2>

        <address>
          134 Christmas Pie Avenue
          <br />
          Denver, Colorado USA
          <br />
          <a class="footer__btn" href="mailto:example@wild-plants.com">
            Email Us
          </a>
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Social Media</h2>

          <ul class="nav__ul">
            <li>
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>

            <li>
              <a href="https://youtube.com">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </li>

            <li>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
          </ul>
        </li>

        <li class="nav__item nav__item--extra">
          <h2 class="nav__title">Explore</h2>

          <ul class="nav__ul nav__ul--extra">
            <li>
              <a href="#">Edible Plants</a>
            </li>

            <li>
              <a href="#">Non Edible Plants</a>
            </li>

            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">About</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Our Story</a>
            </li>

            <li>
              <a href="#">Our Mission</a>
            </li>

            <li>
              <a href="#">Our Values</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <p>Wild Plants Inc.</p>

        <div class="legal__links"></div>
      </div>
    </footer>
  );
};

export default Footer;
