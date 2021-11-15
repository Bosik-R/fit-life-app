import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
	width: 100%;
	margin-top: 10px;
	margin-bottom: 16px;
	height: 73px;
	display: flex;
	align-items: stretch;
	padding: 0 10px;
`;

const Col4 = css`
	width: 33.3333%;
	flex-basis: 33.3333%;
`;

export const ColProgressBar = styled.div`
	${Col4};
	display: flex;
`;

export const ColWeekSlider = styled.div`
	${Col4};
	display: flex;
	justify-content: center;
`;

export const ColProteinSelector = styled.div`
	${Col4};
	display: flex;
	justify-content: flex-end;
`;
