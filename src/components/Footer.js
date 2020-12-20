import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const locationsOpen = useSelector((state) => state.show.moreLocations);

  if (!locationsOpen) {
    return (
      <footer>
        <p>
          <a href="_target">
            Developed By: &nbsp; ReactJS, &nbsp;Redux, &nbsp;DarkskyAPI,
            &nbsp;openstreetmap API used.
          </a>
        </p>
      </footer>
    );
  }

  return null;
};

export default Footer;
