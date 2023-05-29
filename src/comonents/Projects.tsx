import React, {useEffect} from 'react';
import Repo from './Repo';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
    const {error, isFetching, items} = useTypedSelector(state => state.repos);
    const {getRepos} = useActions()
    
    const { t } = useTranslation();

    useEffect(()=>{
         getRepos()
    },[])

    if(isFetching) {
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }
    
    return (
        <div className="py-16 max-w-3xl mx-auto mt-24" id="projects">
        <h6 className="text-blue-700 text-l font-bold mb-4 ml-3">PORTFOLIO</h6>
        <p className="text-2xl font-bold leading-tight mb-6 capitalize ml-3">{t("projects")} ⚙️</p>
        {items.map((project, index) => (
          <Repo key={index} item={project} index={index} />
        ))}
      </div>
    );
};

export default Projects;