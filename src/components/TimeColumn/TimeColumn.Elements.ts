import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 85px;
	height: 100%;
	border: 1px dotted;
`;

export const Row = styled.div`
	width: 100%;
	height: 92px;
	display: grid;
	place-items: center;
	border-bottom: 2px solid #757575;
`;
export const Time = styled.p`
	text-align: center;
	font-size: 13px;
	font-weight: bold;
`;

export const TimePeriod = styled.span`
	padding-left: 2px;
	font-weight: normal;
`;

export const RowTop = styled.div`
	width: 100%;
	height: 52px;
	border-bottom: 2px solid #757575;
`;

export const RowBottom = styled.div`
	width: 100%;
	height: 35px;
	border-bottom: 2px solid #757575;
`;

export const RowWorkout = styled.div`
	width: 100%;
	height: 33px;
`;
