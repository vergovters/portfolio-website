import React from 'react';
import {About}   from '../comonents/About';
import Contact from '../comonents/Contact';
import { Intro } from '../comonents/Intro';
import Projects from '../comonents/Projects';
import {motion, Variants} from 'framer-motion'
import {useIntersectionObserver} from "../hooks/useIntersectionObserver"
 

const HomePage = () => {

  const introRef = useIntersectionObserver();
  const aboutRef = useIntersectionObserver();
  const projectsRef = useIntersectionObserver();
  const contactRef = useIntersectionObserver();

  const appear: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 3,
      },
      transform: 'translateY(-100%)',
      filter: 'blur(5px)',
    },
    show: {
      opacity: 1,
      transform: 'translateX(0)',
      filter: 'blur(0)',
    },
  };

    return (

      <motion.div 
            // initial={{ scaleY: 0 }}
            // animate={{ scaleY: 1 }}
            // exit={{ scaleY: 0 }}
            // transition={{ duration: 0.5 }}
            >
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Intro />
        </div>
  
        <div className="flex flex-col justify-center items-center min-h-screen" ref={aboutRef}>
          <motion.div variants={appear}>
            <About />
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen" ref={projectsRef}>
          <motion.div variants={appear}>
            <Projects/>
          </motion.div>
        </div> 
        <div className="flex flex-col justify-center items-center mb-[100px] mt-[150px]"  ref={contactRef}>
          <motion.div variants={appear}>
            <Contact/>
          </motion.div>
        </div> 
      </motion.div>
    );
  };
  

export default HomePage;