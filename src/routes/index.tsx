import React from 'react';
import FavoritePage from './FavoritePage';
import HomePage from './HomePage';

export const ROUTE_ROOT = '/';
export const ROUTE_FAVORITE_PAGE = '/favorite';

interface IRoute {
    path: string,
    element: React.ReactElement,
    exact?: boolean,
}

export const routes: IRoute[] = [
    {
        path: ROUTE_ROOT,
        element: <HomePage />,
        exact: true,
    },
    {
        path: ROUTE_FAVORITE_PAGE,
        element: <FavoritePage />,
        exact: true,
    },
];
