import React from 'react';
import * as S from './Daschboard.Elements';
import DashboardNavigation from '../../Layout/DashboardNavigation/DashboardNavigation';
import MealCalendar from '../../Layout/MealCalendar/MealCalendar';

const Daschboard: React.FC = () => {
	return (
		<S.DashboardWrapper>
			<DashboardNavigation />
			{/* <MealCalendar /> */}
		</S.DashboardWrapper>
	);
};

export default Daschboard;
