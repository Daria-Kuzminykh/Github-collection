import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {routes} from './routes';
import Layout from './shared/layout/Layout';

export default function App() {
    return (
        <Layout>
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						{...route}
					/>
				))}
			</Routes>
		</Layout>
    );
}
