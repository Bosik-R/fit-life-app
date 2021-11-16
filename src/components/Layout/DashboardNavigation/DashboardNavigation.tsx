import React, { useState } from 'react';
import ProgressBar from '../../features/dashboard/ProgressBar/ProgressBar';
import ProteinSelector from '../../features/dashboard/ProteinSelector/ProteinSelector';
import WeekSlider from '../../features/dashboard/WeekSlider/WeekSlider';
import * as S from './DashboardNavigation.Elements';
import { useMediaQuery } from 'react-responsive';
import { data } from '../../../data';
import DaySlider from '../../features/dashboard/DaySlider/DaySlider';

const DashboardNavigation: React.FC = () => {
	const mobile = useMediaQuery({ query: '(max-width: 767px)' });
	const [open, setOpen] = useState(false);
	const { weeks, week7, activeDayIndex, activeWeekIndex } = data;

	return (
		<S.Wrapper>
			<S.ColProgressBar>
				<ProgressBar />
			</S.ColProgressBar>
			<S.ColWeekSlider>
				<WeekSlider activeIndex={activeWeekIndex} data={weeks} />
			</S.ColWeekSlider>
			{mobile ? (
				<S.MobileMenuProtein open={open}>
					<S.Btn onClick={() => setOpen(!open)}>
						<S.Text>{open ? 'close' : 'protein'}</S.Text>
					</S.Btn>
					<ProteinSelector />
				</S.MobileMenuProtein>
			) : (
				<S.ColProteinSelector>
					<ProteinSelector />
				</S.ColProteinSelector>
			)}
			{mobile && (
				<S.ColDaySlider>
					<DaySlider activeIndex={activeDayIndex} data={week7} />
				</S.ColDaySlider>
			)}
		</S.Wrapper>
	);
};

export default DashboardNavigation;
