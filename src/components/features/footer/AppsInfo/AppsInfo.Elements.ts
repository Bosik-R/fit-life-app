import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight';
import { LogoApple } from '@styled-icons/ionicons-solid/LogoApple';

export const Wrapper = styled.div`
	width: 369px;
	padding: 0 50px;
	color: ${({ theme }) => theme.color.mediumFont};
	border-left: 1px solid #dfdfdf;
	border-right: 1px solid #dfdfdf;
`;

export const Title = styled.h1`
	padding: 8px 0;
	width: 200px;
	font-size: 26px;
	line-height: 29px;
	letter-spacing: -0.5px;
`;

export const Content = styled.p`
	padding: 9px 0;
	font-size: 14px;
	line-height: 20px;
`;

export const BtnWrapper = styled.div`
	margin: 10px 0;
`;

export const BtnApple = styled.button`
	position: relative;
	padding: 7px 30px 7px 36px;
	font-size: 16px;
	border: 1px solid grey;
	border-radius: 5px;
	background-color: transparent;
	transition: all 0.3s ease;

	&:hover {
		color: ${({ theme }) => theme.color.primary};
		border-color: ${({ theme }) => theme.color.primary};
	}
`;

export const Icon = styled(LogoApple)`
	position: absolute;
	color: ${({ theme }) => theme.color.primary};
	left: 10px;
	top: 4px;
`;

export const ArrowIcon = styled(ChevronRight)`
	position: absolute;
	top: 7px;
	right: 7px;
`;

export const BtnAndroid = styled(BtnApple)`
	padding: 7px 32px 7px 36px;
	margin-left: 14px;
`;
