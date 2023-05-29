import React from 'react';
import { Link } from 'react-router-dom';

interface JobPrevState {
    job: {
        job_employment_type: string;
        job_title: string;
        job_city: string;
        job_is_remote: boolean;
        employer_name: string;
        job_id: string;
    }
}

  
    
const Job_Prev: React.FC<JobPrevState> = ({job}) => {
    return (
        <div className="relative flex flex-col justify-center items-center overflow-hidden p-6 sm:py-12">
        <div className="bg-grey-50 shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-2 sm:items-center justify-between px-5 py-4 rounded-md">
          <div>
            <span className="text-blue-800 text-sm">{job.employer_name}</span>
            <h3 className="font-bold mt-px">{job.job_title}</h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-purple-100 text-blue-700 rounded-full px-3 py-1 text-sm">{job.job_employment_type}</span>
              <span className="text-slate-600 text-sm flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg> {job.job_is_remote ? <span>Віддалено</span> : <span>Локально</span>}, {job.job_city ? job.job_city : <span>Не вказано</span>}
              </span>
            </div>
          </div>
          <div>
            <Link to={`/job/${job.job_id}`}>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
              Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Job_Prev;