import React from 'react';
import ProgressBar from '../../features/dashboard/ProgressBar/ProgressBar';
import ProteinSelector from '../../features/dashboard/ProteinSelector/ProteinSelector';
import WeekSlider from '../../features/dashboard/WeekSlider/WeekSlider';
import * as S from './DashboardNavigation.Elements';

const DashboardNavigation: React.FC = () => {
	return (
		<S.Wrapper>
			<S.ColProgressBar>
				<ProgressBar />
			</S.ColProgressBar>
			<S.ColWeekSlider>
				<WeekSlider />
			</S.ColWeekSlider>
			<S.ColProteinSelector>
				<ProteinSelector />
			</S.ColProteinSelector>
		</S.Wrapper>
	);
};

export default DashboardNavigation;
