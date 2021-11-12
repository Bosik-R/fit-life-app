import styled from 'styled-components';

export const MealCalendarWrapper = styled.div`
	width: ${({ theme }) => theme.appWidth};
	height: 580px;
	border-radius: 5px 0 5px 5px;
	display: flex;
	overflow: hidden;
	color: ${({ theme }) => theme.color.mealCalendarFont};
	background-color: ${({ theme }) => theme.color.gradientFirst};
	background: linear-gradient(
				160deg,
				${({ theme }) => theme.color.gradientSecond} 3px,
				transparent 2px
			)
			10px 0,
		linear-gradient(-160deg, ${({ theme }) => theme.color.gradientSecond} 3px, transparent 2px) 10px
			0,
		linear-gradient(20deg, ${({ theme }) => theme.color.gradientSecond} 3px, transparent 2px),
		linear-gradient(-20deg, ${({ theme }) => theme.color.gradientSecond} 3px, transparent 2px);
	background-size: 20px 5px;
	background-repeat: repeat;
`;
