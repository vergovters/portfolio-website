import {  ReactNode } from "react";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import SelectedPage from "./pages/SelectedPage";
import { JOBS_ROUTE, HOME_ROUTE, JOB_ROUTE, SELECTED_ROUTE} from "./utils/consts";

interface Route {
    path: string;
    element: ReactNode;
  }

export const RoutesArr:Route[] = [
    {
        path: HOME_ROUTE,
        element: <HomePage/>
    },
    {
        path: JOBS_ROUTE,
        element: <JobsPage/>
    },
    {
        path: JOB_ROUTE + '/:id',
        element: <JobPage/>
    },
    {
        path: SELECTED_ROUTE,
        element: <SelectedPage/>
    },
    {
        path: "*",
        element: <NotFoundPage/>
    },
]