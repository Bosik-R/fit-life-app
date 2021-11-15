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
