import React from 'react';
import {About}   from '../comonents/About';
import Contact from '../comonents/Contact';
import { Intro } from '../comonents/Intro';
import Projects from '../comonents/Projects';
import {motion} from 'framer-motion'
 

const HomePage = () => {
    return (

      <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <Intro />
        </div>
  
        <div className="flex flex-col justify-center items-center min-h-screen">
          <About />
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <Projects/>
        </div> 
        <div className="flex flex-col justify-center items-center mb-[100px] mt-[150px]">
          <Contact/>
        </div> 
      </motion.div>
    );
  };
  

export default HomePage;