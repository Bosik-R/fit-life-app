import styled from 'styled-components';

export const ProgressBarWrapper = styled.div``;

export const Title = styled.p`
	font-size: 9px;
	margin: 0;
	padding: 11px 0;
	text-transform: uppercase;
	color: ${({ theme }) => theme.color.fontLight};
`;

export const ProgressDotsWrapper = styled.div`
	width: 230px;
	height: 35px;
	display: flex;
`;

export const DotWrapper = styled.div`
	width: 10px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	&:not(:first-child) {
		margin-left: 10px;
	}
`;

interface DotProps {
	status: string;
	index: number;
}

export const Dot = styled.span<DotProps>`
	position: relative;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 2px solid;
	margin-bottom: 6px;
	background-color: ${({ status }) =>
		status === 'completed' ? '#B2C200' : status === 'incompleted' ? '#DBDBDB' : '#ffffff'};
	border-color: ${({ status }) => (status === 'completed' ? '#B2C200' : '#DBDBDB')};
	z-index: ${({ status }) => (status === 'completed' ? '2' : '1')};

	${({ index, status }) =>
		index > 0
			? `&::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -13px;
      width: 13px;
      height: 2px;
      background-color: ${status === 'completed' ? '#B2C200' : '#DBDBDB'};
  }`
			: null};
`;

export const Week = styled.span`
	font-size: 9px;
	color: ${({ theme }) => theme.color.fontLight};
`;
