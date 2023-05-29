import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import Job_Prev from './Job_Prev';
import Fetching from './Fetching';
import { useTranslation } from 'react-i18next';

export const JobsList: React.FC = () => {
  const { error, jobs, isFetching } = useTypedSelector((state) => state.jobs);
  const { getJobs } = useActions();
  const [search, setSearch] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    getJobs();
  }, []);

  if (isFetching) {
    return (
      <div className='my-[100px]'>
        <Fetching />
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const filteredJobs = jobs.filter((job: any) => {
    return job.job_title.includes(search);
  });

  return (
    <div className='mb-[50px]'>
      <div className='bg-grey-500 py-5 px-12'>
        <input
          type='search'
          id='default-search'
          className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Search Works, Practice...'
          value={search}
          onChange={handleSearchChange}
          autoComplete="off"
        />
      </div>
      {filteredJobs.length === 0 ? (
             <div className='bg-red-500 text-white p-12 my-[220px] sm:my-5'>
             <h1 className='text-4xl font-bold mb-4'>
               Oops! No matching jobs found.
             </h1>
             <p className='text-lg'>
               We couldn't find any jobs that match your search criteria. Please try a different search term or check back later for new job listings.
             </p>
           </div>
      ) : (
        filteredJobs.map((job: any) => (
          <Job_Prev key={job.job_id} job={job} />
        ))
      )}
    </div>
  );
};