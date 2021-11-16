import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	width: 150px;
	height: 150px;
	color: ${({ theme }) => theme.color.navFont};
	background-color: ${({ theme }) => theme.color.bgLight};
	cursor: pointer;
	overflow: hidden;
	border-radius: 7px;
	box-shadow: 1px 1px 11px 0px rgba(0, 0, 0, 0.8);
`;

export const MealTime = styled.p`
	text-align: center;
	padding: 5px;
	border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const MealImage = styled.img`
	position: absolute;
	bottom: 0;
	left: 50%;
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
`;
