import React from "react";
import '../components/Loader.css';
import '../styles/fundamentals.css';
import { motion } from "framer-motion";

const loaderVariants = {
    animationOne: {
        // x: [-20, 20],
        y : [0, -30],
        transition:{
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25
            }
        }
    }
}

const Loader = () => {
  return (
    <div className="mainContainerLoader">
      <img className="box" src="https://res.cloudinary.com/dv4wgyeje/image/upload/v1667917364/Portfolio/hello_xuwgaj.svg" />
      <div className="typewriter">
        <p className="h1 textColorWhite textTitleLoader" textColorWhite> Hello </p>
      <p className="h3 textColorWhite textDescriptionLoader">À la recherche d'un poste de développeur frontend ?</p>
      </div>
    </div>
  );
};

export default Loader;
