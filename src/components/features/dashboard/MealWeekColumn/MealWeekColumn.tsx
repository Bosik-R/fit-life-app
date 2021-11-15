import React, { Fragment } from 'react';
import * as S from './MealWeekColumn.Elements';
import workoutDone from '../../../../images/workoutDone.svg';
import workoutNotDone from '../../../../images/workoutNotDone.svg';
import done from '../../../../images/done.svg';
import MealCard from '../MealCard/MealCard';

export interface Meal {
	id: string;
	name: string;
	image?: string;
	completed: boolean;
}

interface Props {
	day: string;
	active: boolean;
	meals: Meal[];
	carbs: string;
	workout: boolean;
}
const MealWeekColumn: React.FC<Props> = ({ day, active, meals, carbs, workout }) => {
	return (
		<S.Wrapper active={active}>
			<S.RowTop>
				<S.Day active={active}>{day}</S.Day>
			</S.RowTop>
			{meals.map((meal, index) => (
				<MealCard key={index} meal={meal} active={active} />
			))}

			<S.RowBottom>
				<S.RowBottomText>{carbs}</S.RowBottomText>
			</S.RowBottom>
			<S.RowWorkout>
				{workout && (
					<Fragment>
						<S.Workout src={workoutDone} />
						<S.Done src={done} />
					</Fragment>
				)}
				{!workout && <S.Workout src={workoutNotDone} />}
			</S.RowWorkout>
		</S.Wrapper>
	);
};

export default MealWeekColumn;
