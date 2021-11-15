import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
	active: boolean;
}

export const Wrapper = styled.div<Props>`
	width: 130px;
	height: 100%;
	margin-left: -2px;
	border: 2px solid;
	border-left-color: transparent;
	border-top-color: #ffffff;
	border-bottom-color: transparent;
	border-right-color: #d8d8d8;
	${({ active, theme }) => (active ? `border-color: ${theme.color.primary}` : null)}
`;

export const RowTop = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
	height: 48px;
	background-color: ${({ theme }) => theme.color.bgLight};
`;

export const Day = styled.h1<Props>`
	font-size: 24px;
	line-height: 24px;
	letter-spacing: 1px;
	color: ${({ active, theme }) => (active ? theme.color.primary : theme.color.dayFont)};
`;

export const Row = styled.div<Props>`
	width: 100%;
	height: 92px;
	padding: 9px 10px;
	color: ${({ active, theme }) => (active ? theme.color.fontDark : theme.color.mediumFont)};
	background-color: #ffffff;
	border-top: ${({ theme }) => theme.mealColumnBorder};
`;

export const MealDone = styled.img`
	float: right;
	margin-right: -2px;
	margin-top: -2px;
`;

export const MealName = styled(Link)`
	font-size: 13px;
	line-height: 17px;
	font-weight: 500;
`;

export const RowBottom = styled.div`
	width: 100%;
	height: 37px;
	display: flex;
	justify-content: center;
	padding: 8px;
	border-bottom: ${({ theme }) => theme.mealColumnBorder};
`;

export const RowBottomText = styled.span`
	font-size: 11px;
	font-weight: 600;
`;

export const RowWorkout = styled.div`
	position: relative;
	width: 100%;
	height: 31px;
	display: grid;
	place-content: center;
`;

export const Workout = styled.img``;

export const Done = styled.img`
	position: absolute;
	top: 50%;
	right: 32px;
	transform: translateY(-50%);
`;
