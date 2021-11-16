import styled from 'styled-components';

export const MealCalendarWrapper = styled.div`
	height: 580px;
	margin: 0 10px 45px 10px;
	border-radius: 5px 0 5px 5px;
	display: flex;
	overflow: hidden;
	color: ${({ theme }) => theme.color.navFont};
	background-color: ${({ theme }) => theme.color.gradientSecond};
	background: linear-gradient(160deg, ${({ theme }) => theme.color.gradientSecond} 2px, transparent 3px) 10px 0,
		linear-gradient(-160deg, ${({ theme }) => theme.color.gradientSecond} 2px, transparent 3px) 10px 0,
		linear-gradient(20deg, ${({ theme }) => theme.color.gradientSecond} 2px, transparent 3px),
		linear-gradient(-20deg, ${({ theme }) => theme.color.gradientSecond} 2px, transparent 3px);
	background-size: 20px 3px;
	background-repeat: repeat;
`;

export const MealsColumn = styled.div`
	display: flex;
`;

export const MobileMealCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: flex-start;
	row-gap: 10px;
`;

export const SummaryCard = styled.div`
	position: relative;
	width: 150px;
	height: 150px;
	color: ${({ theme }) => theme.color.navFont};
	background-color: ${({ theme }) => theme.color.bgLight};
	border-radius: 7px;
	box-shadow: 1px 1px 11px 0px rgba(0, 0, 0, 0.8);
`;

export const CardTitle = styled.p`
	text-align: center;
	padding: 5px;
	border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const Carbs = styled.p`
	margin-top: 10px;
	padding: 10px;
	text-align: center;
`;
export const WorkoutWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Workout = styled.img`
	cursor: pointer;
`;

export const Done = styled.img`
	padding-left: 10px;
`;
