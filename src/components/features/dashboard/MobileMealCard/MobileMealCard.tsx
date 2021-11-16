import React from 'react';
import * as S from './MobileMealCard.Elements';
import mealDone from '../../../../images/mealDone.svg';
import { Meal } from '../MealWeekColumn/MealWeekColumn';

interface Props {
	meal: Meal;
}

const MobileMealCard: React.FC<Props> = ({ meal }) => {
	return (
		<S.Wrapper>
			<S.MealTime>{meal.time}</S.MealTime>
			{meal.image && <S.MealImage src={meal.image} alt={meal.name} />}
			{meal.completed && <S.MealDone src={mealDone} />}
			<S.MealName>{meal.name}</S.MealName>
		</S.Wrapper>
	);
};

export default MobileMealCard;
