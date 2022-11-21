import React from "react";
import "./Home.css";
import "../styles/fundamentals.css";
import Navbar from "../components/Navbar";
import WelcomeScreen from "../components/WelcomeScreen";
import SectionTitle from "../components/SectionTitle";
import ProjectTile from "../components/ProjectTile";
import ProjectModal from "../components/ProjectModal";
import ExperienceSection from "../components/ExperienceSection";
import Loader from "../components/Loader";
import Buttontertiary from "../components/Buttontertiary";
import { useRef, useState, useEffect } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";

function Home(props) {
  const projectSection = useRef(null);
  const experienceSection = useRef(null);
  const aboutMeSection = useRef(null);
  const [projectsList, setprojectsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [infoModal, setInfoModal] = useState([]);

  //Ancres de scroll vers la section associée
  const scrollToSection = (elementRef) => {
    console.log("scrollToSection");
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  //Activation de la modale
  const clickModalProject = () => {
    if (showModal === true) {
      setShowModal(false);
      console.log(showModal, "false");
    } else {
      setShowModal(true);
      console.log(showModal, "true");
    }
  };

  //Récupération des infos du backend
  useEffect(() => {
    const APIResultsLoading = async () => {
      setIsLoading(true);
      const data = await fetch(
        "https://portfolio-backend-74kj.vercel.app/projectData"
      );
      const body = await data.json();
      setprojectsList(body.projectsData);
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(4000);
      setIsLoading(false);
    };
    APIResultsLoading();
  }, []);

  // console.log(projectsList[0],'projectsList');

  // Agencement des tuiles projets dynamiques avec la fonction map
  var tileList = [];
  projectsList.map((tile) => {
    tileList.push(
      <button
        className="buttonTile"
        onMouseEnter={props.hover}
        onMouseLeave={props.notHover}
      >
        <ProjectTile
          onMouseEnter={props.hover}
          onMouseLeave={props.notHover}
          tile={tile}
          clickModalProject={clickModalProject}
          showModal={showModal}
          setShowModal={setShowModal}
          infoModal={infoModal}
          setInfoModal={setInfoModal}
        />
      </button>
    );
  });

  //Constante contenant la page Home
  const home = (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        projectSection={projectSection}
        experienceSection={experienceSection}
        aboutMeSection={aboutMeSection}
        hover={props.hover}
        notHover={props.notHover}
      />

      {showModal && (
        <ProjectModal
          clickModalProject={clickModalProject}
          showModal={showModal}
          setShowModal={setShowModal}
          hover={props.hover}
          notHover={props.notHover}
          infoModal={infoModal}
        />
      )}
      <div className="mainMainContainer">
        <div className="mainContainer">
          <WelcomeScreen />
          <motion.div
            className="sectionProject"
            ref={projectSection}
            // variants={animationInViewLG}
            initial="init"
            animate="final"
          >
            <SectionTitle title1="Quelques" title2="projets" />
            <motion.div
              className="projectWrapper" /* variants={animationInViewMD} */
            >
              {tileList}
            </motion.div>
          </motion.div>
          <motion.div
            className="sections"
            ref={experienceSection}
            /* variants={animationInViewMD} */
            initial="init"
            animate="final"
          >
            <SectionTitle title1="Quelques" title2="experiences" />
            <ExperienceSection />
          </motion.div>
          <div className="sections" ref={aboutMeSection}>
            <SectionTitle title1="Quelques mots" title2="à mon propos" />
          </div>
          <div className="mainContainerAboutMe">
            <text className="body textColorG1">
              Je m’appelle Clément, au cours des 8 dernières années, j'ai
              contribué à la création de produits physiques et digitaux. Mes
              experiences passées m’ont amené à travailler sur les outils
              d’acheminement des colis de La Poste, à la création de parcours
              utilisateurs pour des conseillers en assurance ou encore la
              spécification de nouveaux composants pour le design système NEO de
              BPCE.
            </text>
            <text className="body textColorG1">
              Pour chacune d’elles, mon rôle de Product Designer m’a impliqué
              sur toute la chaîne de création du produit : de l’identification
              du problème à l’implémentation de la solution. J’ai la certitude
              qu’un bon produit voit le jour grâce à une bonne conception mais
              aussi par notre capacité à prendre du recul et à se poser des
              questions durant toute la durée de vie de conception du produit.
              Ainsi l’un de mes rôles a été de mettre en place certains ateliers
              ou design sprints à des moments clés ou bloquant du process de
              création. Je considère que mon travail consiste tout autant à
              créer qu’à collaborer avec les différentes parties prenantes, à
              présenter, à défendre des idées, à challenger les opinions ou
              encore prendre des décisions sans renier ma conviction que
              l’utilisateur doit être au coeur du processus de conception.
            </text>
            <text className="body textColorG1">
              Aujourd’hui ma curiosité et ma soif de connaissance me poussent à
              m’immerger davantage au coeur de la conception technique du
              produit. je cherche à approfondir mes connaissances en
              développement en travaillant en tant que développeur front-end pour
              être capable à terme d'imaginer seulement des expériences techniquement faisable.
            </text>
            <text className="body textColorG1">
              Si vous êtes intéressés par mon profil je vous invite à consulter
              mon CV ou à me contacter directement :
            </text>
            <div className="container-btn-aboutme">
              <a
                href="mailto:clement.guillot.dsgn@gmail.com"
                target="_blank"
                className="btn-meconctacter"
              >
                <Buttontertiary
                  label="Me contacter"
                  className="btn-meconctacter"
                />
              </a>
              <a
              href={require("../assets/cv-clement-guillot.pdf")} target="_blank"
                className="btn-meconctacter"
              >
                <Buttontertiary
                  label="Voir mon CV →"
                  className="btn-meconctacter"
                />
              </a>
            </div>
          </div>
          <div className="footer">
            <a
              href="https://www.linkedin.com/in/cl%C3%A9ment-guillot/"
              target="_blank"
            >
              <FaLinkedinIn className="icon textColorPrimary" />
            </a>
            <a href="https://medium.com/@clement.guillot.dsgn" target="_blank">
              <FaMediumM className="icon textColorPrimary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return <div>{isLoading ? <Loader /> : home}</div>;
}

export default Home;
