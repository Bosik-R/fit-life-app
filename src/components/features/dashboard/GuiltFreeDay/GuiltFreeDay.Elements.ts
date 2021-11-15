import styled from 'styled-components';
import { EmojiSmile } from '@styled-icons/bootstrap/EmojiSmile';

interface Props {
	active: boolean;
}

export const GuiltFreeWrapper = styled.div<Props>`
	width: 128px;
	height: 100%;
	margin-left: -2px;
	border: 2px solid;
	border-left-color: transparent;
	border-top-color: #ffffff;
	border-bottom-color: transparent;
	border-right-color: #d8d8d8;
	${({ active, theme }) => (active ? `border-color: ${theme.color.primary}` : null)}
`;

export const GuiltFreeRowTop = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
	height: 48px;
	background-color: ${({ theme }) => theme.color.bgLight};
`;

export const GuiltFreeDay = styled.h1<Props>`
	font-size: 24px;
	line-height: 24px;
	letter-spacing: 1px;
	color: ${({ active, theme }) => (active ? theme.color.primary : theme.color.dayFont)};
`;

export const Row = styled.div<Props>`
	position: relative;
	width: 100%;
	height: 458px;
	background-color: ${({ theme }) => theme.color.bgLight};
	border-top: ${({ theme }) => theme.mealColumnBorder};
	color: ${({ active, theme }) => (active ? theme.color.fontDark : theme.color.mediumFont)};
`;

export const RowText = styled.span`
	position: absolute;
	text-transform: uppercase;
	width: 280px;
	bottom: 230px;
	left: -63%;
	font-size: 35px;
	letter-spacing: 1px;
	transform: rotate(270deg);
`;

export const Smiley = styled(EmojiSmile)`
	position: absolute;
	bottom: 63px;
	left: 50%;
	transform: translateX(-50%);
`;

export const RowBottom = styled.button`
	height: 69px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 11px;
	cursor: pointer;
	background-color: transparent;
	border: none;
`;

export const Printer = styled.img``;

export const PrintText = styled.span`
	font-size: 18px;
	font-weight: 500;
	color: ${({ theme }) => theme.color.mediumFont};
`;
