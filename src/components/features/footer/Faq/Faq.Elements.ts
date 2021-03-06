import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight';

export const Wrapper = styled.div`
	width: 304px;
	padding-left: 40px;
	color: ${({ theme }) => theme.color.mediumFont};

	@media (max-width: 425px) {
		width: 100%;
	}

	@media (max-width: 1024px) {
		padding: 20px;
	}
`;

export const Title = styled.h1`
	padding: 8px 0;
	width: 220px;
	font-size: 26px;
	line-height: 29px;
	letter-spacing: -0.5px;
`;

export const Content = styled.p`
	padding: 9px 0;
	font-size: 14px;
	line-height: 20px;
`;

export const Btn = styled.button`
	position: relative;
	margin-top: 9px;
	padding: 7px 30px 7px 18px;
	font-size: 16px;
	border: 1px solid grey;
	border-radius: 5px;
	background-color: transparent;
	transition: all 0.2s ease;
	color: ${({ theme }) => theme.color.mediumFont};

	&:hover {
		color: ${({ theme }) => theme.color.primary};
		border-color: ${({ theme }) => theme.color.primary};
	}
`;
export const ArrowIcon = styled(ChevronRight)`
	position: absolute;
	top: 7px;
	right: 7px;
`;
