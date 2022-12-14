import React from "react";
import "../styles/fundamentals.css";
import "./WelcomeScreen.css";
import Buttontertiary from "./Buttontertiary.js";
import { FaArrowDown } from "react-icons/fa";
import welcomeImg from "../assets/welcomeScreenImage.png";
import { useInView } from "framer-motion";
import { useRef } from "react";

function WelcomeScreen(props) {
  const animation = useRef(null);
  const isInView = useInView(animation, { once: true });

  return (
    <div className="welcomeScreenMainContainer" ref={animation}>
      <div className="welcomeScreenMainTopContainer">
        <div
          className="welcomeScreenTopLeftContainer"
          style={{
            transform: isInView ? "none" : "translateX(-40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div>
            <img className="img" src={welcomeImg} />
          </div>
          <div className="name">
            <div className="textColorG1 h1">CLÉMENT</div>
            <div className="textColorG1 h1">GUILLOT</div>
          </div>
          <div className="welcomeScreenBottomLeftContainer1">
            <div className="welcomeScreenBottomLeftContainer2">
              <div className="h3 textColorG1">PRODUCT</div>
              <div className="h3 textColorG1">DESIGNER</div>
              <div className="h3 textColorG1">DÉVELOPPEUR</div>
            </div>

            <div
              className="textColorPrimary"
              style={{
                fontFamily: "Inconsolata",
                fontStyle: "normal",
                fontWeight: 900,
                fontSize: 109,
                lineHeight: "81px",
              }}
            >
              &
            </div>
          </div>
        </div>
        <div
          className="welcomeScreenDivider BGColorG5"
          style={{
            height: isInView ? "100%" : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          }}
        ></div>
        <div
          className="textColorG1 body welcomeScreenTopRightContainer"
          style={{
            transform: isInView ? "none" : "translateX(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Entre design et conception technique, je suis passionné par la
          création d’un produit et chaque étape du développement. En tant
          que développeur front-end, je souhaite construire des
          solutions pragmatiques, correspondant aux besoins des utilisateurs et
          répondant à la vision métier et business du client.
        </div>
      </div>
      <div
        className="button"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s",
        }}
      >
        <Buttontertiary label="Voir les projets" />
        <FaArrowDown className="textColorPrimary" />
      </div>
    </div>
  );
}

export default WelcomeScreen;
