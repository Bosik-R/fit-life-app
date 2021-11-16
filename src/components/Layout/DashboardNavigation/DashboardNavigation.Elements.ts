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

	@media (max-width: 768px) {
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
		//justify-content: center;
		padding: 5px 0;
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
	border: 1px solid #000;
	border-right: none;
	border-radius: 5px 0 0 5px;
	z-index: 3;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(268px)')};
	overflow: hidden;
	transition: all 0.5s ease-in-out;
`;

export const Btn = styled.button`
	writing-mode: vertical-lr;
	padding: 11px 10px 11px 5px;
	border: none;
	color: white;
	font-size: 14px;
	text-transform: uppercase;
	background-color: orange;
`;
