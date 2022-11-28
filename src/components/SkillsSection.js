import React from "react";
import "./SkillsSection.css";
import "../styles/fundamentals.css";
import Tags from "./Tags";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

function ImgGallery(props) {
  const animation = useRef(null);
  const isInView = useInView(animation, { once: true });


  return (
    <div className="mainContainerSkillsSection" ref={animation}
    style={{
        transform: isInView ? "none" : "translateY(40px)",
        opacity: isInView ? 1 : 0,
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",}}>
      <div className="domainSkillsList">
        <div className="domainSkillsContainer">
            <div className="h3 textColorG1">Languages</div>
            <div className="skillsContainer">
                <div className="skillsList">
                <Tags tag="HTML" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="CSS" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="JavaScript" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="Sass" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="TypeScript" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="REACT" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="REACT Native" textStyle={"body"} size={"sizeMd"} />
                </div>
            </div>
        </div>
        <div className="domainSkillsContainer">
            <div className="h3 textColorG1">Librairies</div>
            <div className="skillsContainer">
                <div className="skillsList">
                <Tags tag="Three JS" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="Bootstrap" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="ReactStrap" textStyle={"body"} size={"sizeMd"} />
                </div>
            </div>
        </div>
        <div className="domainSkillsContainer">
            <div className="h3 textColorG1">FRAMEWORKS</div>
            <div className="skillsContainer">
                <div className="skillsList">
                <Tags tag="Node.js" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="Express" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="Expo" textStyle={"body"} size={"sizeMd"} />
                </div>
            </div>
        </div>
        <div className="domainSkillsContainer">
            <div className="h3 textColorG1">Base de données</div>
            <div className="skillsContainer">
                <div className="skillsList">
                <Tags tag="Mongo.DB" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="Mongoose" textStyle={"body"} size={"sizeMd"} />
                </div>
            </div>
        </div>
      </div>
      <div className="dividerContainerSkills BGColorG6"></div>
      <div className="domainSkillsList">
        <div className="domainSkillsContainer">
            <div className="h3 textColorG1">Design</div>
            <div className="skillsContainer">
                <div className="skillsList">
                <Tags tag="Figma" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="Sketch" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="Photoshop" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="Illustrator" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="After effect" textStyle={"body"} size={"sizeMd"} />
                </div>
            </div>
        </div>
        <div className="domainSkillsContainer">
            <div className="h3 textColorG1">3d</div>
            <div className="skillsContainer">
                <div className="skillsList">
                <Tags tag="Blender" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="SolidWorks" textStyle={"body"} size={"sizeMd"} />
                </div>
            </div>
        </div>
        <div className="domainSkillsContainer">
            <div className="h3 textColorG1">Autres outils</div>
            <div className="skillsContainer">
                <div className="skillsList">
                <Tags tag="Notion" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="Whimsical" textStyle={"body"} size={"sizeMd"} />
                <Tags tag="Suite office" textStyle={"body"} size={"sizeMd"} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ImgGallery;