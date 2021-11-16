import React, { Fragment } from 'react';
import MealWeekColumn from '../../features/dashboard/MealWeekColumn/MealWeekColumn';
import TimeColumn from '../../features/dashboard/TimeColumn/TimeColumn';
import GuiltFreeDay from '../../features/dashboard/GuiltFreeDay/GuiltFreeDay';
import * as S from './MealCalendar.Elements';
import { data } from '../../../data';
import { useMediaQuery } from 'react-responsive';
import MobileMealCard from '../../features/dashboard/MobileMealCard/MobileMealCard';
import workoutDone from '../../../images/workoutDone.svg';
import workoutNotDone from '../../../images/workoutNotDone.svg';
import done from '../../../images/done.svg';

const MealCalendar: React.FC = () => {
	const mobile = useMediaQuery({ query: '(max-width: 425px)' });
	const { week7, activeDayIndex } = data;
	const activeDay = week7[activeDayIndex];

	return (
		<Fragment>
			{mobile ? (
				<S.MobileMealCardWrapper>
					{activeDay.meals.map((item, index) => (
						<MobileMealCard key={index} meal={item} />
					))}
					<S.SummaryCard>
						<S.CardTitle>summary</S.CardTitle>
						<S.Carbs>{activeDay.carbs}</S.Carbs>
						<S.WorkoutWrapper>
							{activeDay.workout ? (
								<Fragment>
									<S.Workout src={workoutDone} />
									<S.Done src={done} />
								</Fragment>
							) : (
								<S.Workout src={workoutNotDone} />
							)}
						</S.WorkoutWrapper>
					</S.SummaryCard>
				</S.MobileMealCardWrapper>
			) : (
				<S.MealCalendarWrapper>
					<TimeColumn />
					<S.MealsColumn>
						{week7.map((week) => (
							<MealWeekColumn key={week.day} {...week} />
						))}
						<GuiltFreeDay {...data.guiltFreeDay} />
					</S.MealsColumn>
				</S.MealCalendarWrapper>
			)}
		</Fragment>
	);
};

export default MealCalendar;
