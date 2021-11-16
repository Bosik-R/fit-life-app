import styled, { css } from 'styled-components';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import { ChevronLeft } from '@styled-icons/bootstrap/ChevronLeft';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 50px;
`;

export const Day = styled.div`
	width: 100%;
	height: 50px;
	font-size: 36px;
	line-height: 36px;
	padding: 10px;
	text-align: center;
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
	transition: border-color 0.2s ease;

	&:hover {
		border-color: ${({ theme }) => theme.color.primary};
	}
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
	color: ${({ theme }) => theme.color.navFont};
	margin-left: -2px;
	transition: color 0.2s ease;

	${BackBtn}:hover & {
		color: ${({ theme }) => theme.color.primary};
	}
`;
export const ArrowIconNext = styled(ChevronRight)`
	color: ${({ theme }) => theme.color.navFont};
	margin-left: -2px;
	transition: color 0.2s ease;

	${NextBtn}:hover & {
		color: ${({ theme }) => theme.color.primary};
	}
`;
