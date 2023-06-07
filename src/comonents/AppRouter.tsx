import React, {FC} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { RoutesArr } from '../routes';


const AppRouter:FC = () => {
    const location = useLocation()
    return (
        <div className='back'>
            <Routes location={location} key={location.pathname}>
            {RoutesArr.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
            )}
        </Routes>
        </div>
    );
};

export default AppRouter;