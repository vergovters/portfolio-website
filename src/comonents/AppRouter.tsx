import React, {FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutesArr } from '../routes';


const AppRouter:FC = () => {
    return (
        <div className='back'>
            <Routes>
            {RoutesArr.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
            )}
        </Routes>
        </div>
    );
};

export default AppRouter;