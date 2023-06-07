import React from 'react';
import { JobsList } from '../comonents/JobsList';
import Slider from '../comonents/Slider';
import {motion} from 'framer-motion'
 

const JobsPage = () => {
    return (
        <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}>
           <Slider/>
           <JobsList/>     
        </motion.div>
    );
};

export default JobsPage;