import React from 'react';
import styled from 'styled-components';
import DashboardNavigation from '../../DashboardNavigation/DashboardNavigation';
import MealCalendar from '../../MealCalendar/MealCalendar';

const DashboardWrapper = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: stretch;
`;

const Daschboard: React.FC = () => {
	return (
		<DashboardWrapper>
			<DashboardNavigation />
			<MealCalendar />
		</DashboardWrapper>
	);
};

export default Daschboard;
