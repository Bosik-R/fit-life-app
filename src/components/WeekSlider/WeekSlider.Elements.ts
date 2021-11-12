import styled, { css } from 'styled-components';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ChevronLeft } from '@styled-icons/bootstrap/ChevronLeft';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight';

export const WeekSliderWrapper = styled.div`
	width: 300px;
	height: 100%;
	display: flex;
	align-items: center;
`;

export const SliderWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 50px;
	padding: 0 50px;
`;

export const Week = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-content: center;
	justify-content: center;
	font-size: 48px;
	line-height: 48px;
	color: ${({ theme }) => theme.color.primary};
`;

const ButtonSharedStyles = css`
	position: absolute;
	background-color: transparent;
	border: 1px solid #cecece;
	border-radius: 5px;
	top: 50%;
	overflow: hidden;
	height: 43px;
	width: 25px;
	display: grid;
	place-items: center;
	transform: translateY(-50%);
`;

export const BackBtn = styled(ButtonBack)`
	${ButtonSharedStyles}
	left: 0;
`;

export const NextBtn = styled(ButtonNext)`
	${ButtonSharedStyles}
	right: 0;
`;

export const ArrowIconBack = styled(ChevronLeft)`
	color: #747474;
	margin-left: -2px;
`;
export const ArrowIconNext = styled(ChevronRight)`
	color: #747474;
	margin-left: -2px;
`;
