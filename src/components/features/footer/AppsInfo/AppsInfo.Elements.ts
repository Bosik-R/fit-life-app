import styled, { css } from 'styled-components';
import { ChevronRight } from '@styled-icons/bootstrap/ChevronRight';
import { LogoApple } from '@styled-icons/ionicons-solid/LogoApple';
import { Android } from '@styled-icons/icomoon/Android';

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
	margin: 8px 0;
`;

export const BtnApple = styled.button`
	position: relative;
	padding: 8px 30px 8px 39px;
	font-size: 16px;
	line-height: 16px;
	border: 1px solid grey;
	border-radius: 5px;
	background-color: transparent;
	transition: all 0.3s ease;
	color: ${({ theme }) => theme.color.mediumFont};

	&:hover {
		border-color: ${({ theme }) => theme.color.primary};
	}
`;

const sharedStylesIcons = css`
	position: absolute;
	color: ${({ theme }) => theme.color.appIcons};
`;

export const AppleIcon = styled(LogoApple)`
	${sharedStylesIcons};
	top: 4px;
	left: 10px;
`;

export const AndroidIcon = styled(Android)`
	${sharedStylesIcons};
	top: 5px;
	left: 10px;
`;

export const ArrowIcon = styled(ChevronRight)`
	position: absolute;
	top: 9px;
	right: 7px;
`;

export const BtnAndroid = styled(BtnApple)`
	//padding: 7px 32px 7px 36px;
	margin-left: 14px;
`;
