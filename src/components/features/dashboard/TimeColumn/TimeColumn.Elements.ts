import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 85px;
	height: 100%;
`;

export const Row = styled.div`
	width: 100%;
	height: 92px;
	display: grid;
	place-items: center;
	${({ theme }) => theme.borderBottomLight}
`;

export const RowLast = styled(Row)`
	border-bottom: none;
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
`;

export const RowBottom = styled.div`
	width: 100%;
	height: 35px;
	${({ theme }) => theme.borderBottomLight};
`;

export const RowWorkout = styled.div`
	position: relative;
	font-size: 11px;
	width: 100%;
	height: 31px;
	display: grid;
	place-content: center;

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 12px;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 2.5px 0 2.5px 3px;
		border-color: transparent transparent transparent ${({ theme }) => theme.color.mediumFont};
	}
`;
