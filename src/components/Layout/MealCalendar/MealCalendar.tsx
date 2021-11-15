import React from 'react';
import MealWeekColumn from '../../features/dashboard/MealWeekColumn/MealWeekColumn';
import TimeColumn from '../../features/dashboard/TimeColumn/TimeColumn';
import GuiltFreeDay from '../../features/dashboard/GuiltFreeDay/GuiltFreeDay';
import * as S from './MealCalendar.Elements';
import { data } from '../../../data';

const MealCalendar: React.FC = () => {
	return (
		<S.MealCalendarWrapper>
			<TimeColumn />
			<S.MealsColumn>
				{data.week7.map((week) => (
					<MealWeekColumn key={week.day} {...week} />
				))}
				<GuiltFreeDay {...data.guiltFreeDay} />
			</S.MealsColumn>
		</S.MealCalendarWrapper>
	);
};

export default MealCalendar;
