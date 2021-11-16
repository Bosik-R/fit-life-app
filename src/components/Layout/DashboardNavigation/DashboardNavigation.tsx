import React, { useState } from 'react';
import ProgressBar from '../../features/dashboard/ProgressBar/ProgressBar';
import ProteinSelector from '../../features/dashboard/ProteinSelector/ProteinSelector';
import WeekSlider from '../../features/dashboard/WeekSlider/WeekSlider';
import * as S from './DashboardNavigation.Elements';
import { useMediaQuery } from 'react-responsive';

const DashboardNavigation: React.FC = () => {
	const mobile = useMediaQuery({ query: '(max-width: 767px)' });
	const [open, setOpen] = useState(false);

	return (
		<S.Wrapper>
			<S.ColProgressBar>
				<ProgressBar />
			</S.ColProgressBar>
			<S.ColWeekSlider>
				<WeekSlider />
			</S.ColWeekSlider>
			{mobile ? (
				<S.MobileMenuProtein open={open}>
					<S.Btn onClick={() => setOpen(!open)}>{open ? 'close' : 'protein'}</S.Btn>
					<ProteinSelector />
				</S.MobileMenuProtein>
			) : (
				<S.ColProteinSelector>
					<ProteinSelector />
				</S.ColProteinSelector>
			)}
		</S.Wrapper>
	);
};

export default DashboardNavigation;
