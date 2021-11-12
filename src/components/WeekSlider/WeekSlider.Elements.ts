import styled from 'styled-components';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ChevronLeft } from '@styled-icons/bootstrap/ChevronLeft';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight';

export const WeekSliderWrapper = styled.div`
	width: 300px;
	height: 45px;
	position: relative;
	padding: 0 50px;
`;

export const Week = styled.div`
	font-size: 48px;
`;

export const BackBtn = styled(ButtonBack)`
	position: absolute;
	left: 0;
	top: 50%;
`;

export const NextBtn = styled(ButtonNext)`
	position: absolute;
	right: 0;
	top: 50%;
`;

export const ArrowIconBack = styled(ChevronLeft)``;
export const ArrowIconNext = styled(ChevronRight)``;
