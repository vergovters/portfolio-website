import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useTranslation } from 'react-i18next';

export const JobFull = () => {
  const { id } = useParams();
  const { jobs } = useTypedSelector((state) => state.jobs);
  const { t } = useTranslation();

  let job = jobs.filter((item: any) => item.job_id === id)[0];

  const [isSaved, setIsSaved] = useState(false);
  
  const handleSaveClick = () => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    if (!isSaved) {
      savedJobs.push(job);
    } else {
      const index = savedJobs.findIndex((savedJob: any) => savedJob.job_id === job.job_id);
      if (index !== -1) {
        savedJobs.splice(index, 1);
      }
    }
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    setIsSaved(!isSaved);
  };

  return (
    <div className="mx-[30px] my-[100px]">
      <div className="group bg-gray-900 p-4 transition-all  lg:p-8">
        <div className="mb-3 text-right">
          <button
            onClick={handleSaveClick} 
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-6 w-6 ${isSaved ? 'text-red-500' : 'text-gray-500'}`}
  
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <img className="aspect-[2/2] w-16" src={job.employer_logon} alt="" />
          <div>
            <h3 className="text-xl font-bold text-gray-50">{job.employer_name}</h3>
            <span className="text-xs text-gray-300">
              {job.job_city}, {job.job_country}
            </span>
          </div>
        </div>
        <div className="my-4">
          <h3 className="text-2xl font-medium text-gray-200">{job.job_title}</h3>
          <div className="text-sm font-medium">
            <span className="m-1 ml-0 inline-block text-blue-500">{job.employer_company_type}</span>
            <span className="m-1 ml-0 inline-block text-yellow-500">{job.job_publisher}</span>
            <span className="m-1 ml-0 inline-block text-pink-500">{job.job_apply_quality_score}</span>
            <span className="m-1 ml-0 inline-block text-lime-500">
              {job.job_posted_at_datetime_utc}
            </span>
            <span className="m-1 ml-0 inline-block text-blue-500">{job.job_posting_language}</span>
          </div>
          <div className="mt-2 text-sm text-gray-400">{job.job_description}</div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-50">{job.job_employment_type}</span>
          <a
            className="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80"
            href={job.job_apply_link}
            target="_blank"
          >
            {t('apply')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobFull;