import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Daschboard from './components/Views/Daschboard/Daschboard';
import Recipes from './components/Views/Recipes/Recipes';
import Challenge from './components/Views/Challenge/Challenge';

const App: React.FC = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' element={<Daschboard />} />
						<Route path='/recipes' element={<Recipes />} />
						<Route path='/challenge' element={<Challenge />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</Fragment>
	);
};

export default App;
