import React from 'react';
import TimeColumn from '../TimeColumn/TimeColumn';
import * as S from './MealCalendar.Elements';

const MealCalendar: React.FC = () => {
	return (
		<S.MealCalendarWrapper>
			<TimeColumn />
			<h1>meals</h1>
		</S.MealCalendarWrapper>
	);
};

export default MealCalendar;
