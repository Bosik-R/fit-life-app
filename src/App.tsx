import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout/MainLayout';
import Daschboard from './components/Views/Daschboard/Daschboard';
import Recipes from './components/Views/Recipes/Recipes';
import Challenge from './components/Views/Challenge/Challenge';

const App: React.FC = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<MainLayout>
					<Routes>
						<Route path='/' element={<Daschboard />} />
						<Route path='/recipes' element={<Recipes />} />
						<Route path='/challenge' element={<Challenge />} />
					</Routes>
				</MainLayout>
			</BrowserRouter>
		</Fragment>
	);
};

export default App;
