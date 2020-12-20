import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const locationsOpen = useSelector((state) => state.show.moreLocations);

  if (!locationsOpen) {
    return (
      <footer>
        <p>
          <a
            className="footer-link"
            href="_target"
            target="_blank"
            rel="noopener noreferrer"
          >
            @aravindhalahalli.81@gmail.com
          </a>
        </p>
      </footer>
    );
  }

  return null;
};

export default Footer;
