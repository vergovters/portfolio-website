import React from 'react';
import { JobsList } from '../comonents/JobsList';
import Slider from '../comonents/Slider';

const JobsPage = () => {
    return (
        <div>
           <Slider/>
           <JobsList/>     
        </div>
    );
};

export default JobsPage;