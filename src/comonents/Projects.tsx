import React, {useEffect} from 'react';
import Repo from './Repo';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { useTranslation } from 'react-i18next';
import skywings from "../assets/skywings-express.onrender.com_.png"
import macpaw from "../assets/catpaw.onrender.com_breed_beng (1).png"

const projects = [
  {
    img: skywings,
    title: "SkyWings.Express",
    description: "Welcome to SkyWings.Express - Your Gateway to the Skies! Discover seamless travel planning and book your dream flights effortlessly with SkyWings.Express. Navigate through a user-friendly interface that caters to your every travel need. Whether you're jetting off for business or leisure, our website offers a vast selection of destinations and airlines.",
    github: "https://github.com/vergovters/flight-booking-dev",
    page: "https://skywings-express.onrender.com",
    tech: "MongoDB, Express.js, React.js, Node.js"
  },
  {
    img: macpaw,
    title: "CatPaw",
    description: "Welcome to CatPaw  - Your Ultimate Feline Paradise! Immerse yourself in the world of adorable kitties with our website that integrates the CatAPI, bringing you a delightful collection of cat pictures and comprehensive breed information. Browse through an extensive gallery of cat pictures featuring an array of breeds, colors, and charming poses. ",
    github: "https://github.com/vergovters/CatAPI",
    page: "https://catpaw.onrender.com",
    tech: "React.JS, CatAPI"
  }
 
]

const Projects: React.FC = () => {

   
    const { t } = useTranslation();



    
    return (
        <div className="py-16 max-w-3xl mx-auto mt-24" id="projects">
        <h6 className="text-blue-700 text-l font-bold mb-4 ml-3">PORTFOLIO</h6>
        <p className="text-2xl font-bold leading-tight mb-6 capitalize ml-3">{t("projects")} ⚙️</p>
        {projects.map((project, index) => (
          <Repo key={index} item={project} index={index} />
        ))}
      </div>
    );
};

export default Projects;