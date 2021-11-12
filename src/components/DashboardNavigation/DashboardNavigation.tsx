import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import ProteinSelector from '../ProteinSelector/ProteinSelector';
import WeekSlider from '../WeekSlider/WeekSlider';
import * as S from './DashboardNavigation.Elements';

const DashboardNavigation = () => {
	return (
		<S.Wrapper>
			<ProgressBar />
			<WeekSlider />
			<ProteinSelector />
		</S.Wrapper>
	);
};

export default DashboardNavigation;
