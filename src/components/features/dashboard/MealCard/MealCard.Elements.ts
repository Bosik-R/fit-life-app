import styled from 'styled-components';

interface Props {
	active: boolean;
}

export const Row = styled.div<Props>`
	position: relative;
	width: 100%;
	height: 92px;
	color: ${({ active, theme }) => (active ? theme.color.fontDark : theme.color.mediumFont)};
	background-color: #ffffff;
	border-top: ${({ theme }) => theme.mealColumnBorder};
	cursor: pointer;
`;

export const MealImage = styled.img<Props>`
	position: absolute;
	bottom: 0;
	left: 50%;
	opacity: ${({ active }) => (active ? '1' : '0.4')};
	transform: translateX(-50%);
`;

export const MealDone = styled.img`
	float: right;
	margin-right: 6px;
	margin-top: 6px;
	margin-left: 6px;
`;

export const MealName = styled.p`
	width: 100%;
	height: 100%;
	padding: 10px 10px 8px 11px;
	margin: 0;
	font-size: 13px;
	line-height: 17px;
	font-weight: 500;

	${Row}:hover & {
		color: ${({ theme }) => theme.color.primary};
	}
`;
