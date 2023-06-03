import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Job {
  employer_name: string;
  job_title: string;
  job_apply_link: string;
}

const SelectedList = () => {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const savedJobsData: Job[] = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    setSavedJobs(savedJobsData);
  }, []);

  return (
    <div>
      <h2 className="mt-[200px] text-4xl text-center">These are offers that may interest me</h2>
      <hr className="text-black" />
      {savedJobs.length === 0 ? (
        <p className="mt-4 text-lg text-center">No liked components</p>
      ) : (
        <ul className="mt-4">
          {savedJobs.map((job, index) => (
            <li key={index} className="py-4 px-5 border rounded-lg border-sky-500 flex flex-col md:flex-row md:items-center md:justify-between mb-[50px] mx-auto md:mx-0">
              <div className="flex-grow">
                <h3 className="text-xl font-bold">{job.employer_name}</h3>
                <p className="mt-2 text-lg">{job.job_title}</p>
              </div>
              <a
                className="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80 mt-5 md:mt-0"
                href={job.job_apply_link}
                target="_blank"
              >
                {t('apply')}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedList;