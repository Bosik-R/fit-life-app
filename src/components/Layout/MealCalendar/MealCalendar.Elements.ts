import styled from 'styled-components';

export const MealCalendarWrapper = styled.div`
	height: 580px;
	margin: 0 10px 45px 10px;
	border-radius: 5px 0 5px 5px;
	display: flex;
	overflow: hidden;
	color: ${({ theme }) => theme.color.mediumFont};
	background-color: ${({ theme }) => theme.color.gradientSecond};
	background: linear-gradient(160deg, ${({ theme }) => theme.color.gradientSecond} 3px, transparent 2px) 10px 0,
		linear-gradient(-160deg, ${({ theme }) => theme.color.gradientSecond} 3px, transparent 2px) 10px 0,
		linear-gradient(20deg, ${({ theme }) => theme.color.gradientSecond} 3px, transparent 2px),
		linear-gradient(-20deg, ${({ theme }) => theme.color.gradientSecond} 3px, transparent 2px);
	background-size: 20px 5px;
	background-repeat: repeat;
`;

export const MealsColumn = styled.div`
	display: flex;
`;