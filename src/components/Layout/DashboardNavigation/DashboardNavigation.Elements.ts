import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
	position: relative;
	width: 100%;
	margin-top: 10px;
	margin-bottom: 16px;
	height: 73px;
	display: flex;
	align-items: stretch;
	padding: 0 10px;

	@media (max-width: 767px) {
		flex-direction: column;
		height: auto;
		margin-top: 0;
	}
`;

const Col = css`
	display: flex;
	width: 33.3333%;
	flex-basis: 33.3333%;

	@media (max-width: 767px) {
		width: 100%;
		flex-basis: 100%;
		padding: 10px 0;
	}
`;

export const ColProgressBar = styled.div`
	${Col};

	@media (max-width: 767px) {
		order: 1;
	} ;
`;

export const ColWeekSlider = styled.div`
	${Col};
	justify-content: center;
	flex-grow: 1;

	@media (max-width: 767px) {
		order: 3;
	} ;
`;

export const ColProteinSelector = styled.div`
	display: none;

	@media (min-width: 768px) {
		${Col};
		justify-content: flex-end;
	}
`;

interface Props {
	open: boolean;
}

export const MobileMenuProtein = styled.div<Props>`
	display: flex;
	align-items: center;
	position: absolute;
	width: 300px;
	height: 65px;
	top: 10px;
	right: 0;
	background-color: #fff;
	border: 1px solid ${({ theme }) => theme.color.border};
	border-right: none;
	border-radius: 5px 0 0 5px;
	z-index: 3;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(260px)')};
	overflow: hidden;
	transition: all 0.5s ease-in-out;
`;

export const Btn = styled.button`
	height: 65px;
	width: 30px;
	display: grid;
	place-items: center;
	border: none;
	background-color: ${({ theme }) => theme.color.primary};
`;

export const Text = styled.span`
	text-transform: uppercase;
	font-size: 12px;
	color: white;
	writing-mode: vertical-lr;
`;

export const ColDaySlider = styled.div`
	${Col};
	order: 4;
`;
