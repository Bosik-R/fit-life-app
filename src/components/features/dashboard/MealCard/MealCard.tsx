import React from 'react';
import mealDone from '../../../../images/mealDone.svg';
import * as S from './MealCard.Elements';
import { Meal } from '../MealWeekColumn/MealWeekColumn';

interface Props {
	active: boolean;
	meal: Meal;
}

const MealCard: React.FC<Props> = ({ active, meal }) => {
	return (
		<S.Row active={active}>
			{meal.image && <S.MealImage src={meal.image} alt={meal.name} active={active} />}
			{meal.completed && <S.MealDone src={mealDone} />}
			<S.MealName>{meal.name}</S.MealName>
		</S.Row>
	);
};

export default MealCard;
