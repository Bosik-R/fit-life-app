import styled from 'styled-components';
import { ChevronDown } from '@styled-icons/bootstrap/ChevronDown';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	z-index: 3;
	color: ${({ theme }) => theme.color.navFont};
`;

export const ImageWrapper = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid #f4f4f4;
	box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.8);
	overflow: hidden;
	margin: 0 10px;
	transform: translateY(-3px);
`;

export const UserImage = styled.img`
	position: absolute;
	top: 2px;
	left: 50%;
	transform: translateX(-50%);
`;

export const UserName = styled.span`
	font-size: 15px;
	padding-right: 10px;
	font-weight: 600;
`;

interface UserMenuProps {
	open: boolean;
}

export const IconArrow = styled(ChevronDown)<UserMenuProps>`
	${({ open }) => (open ? 'transform: rotate(180deg);' : null)}
	width: 12px;
	cursor: pointer;
	transition: transform 0.5s ease;

	@media (max-width: 425px) {
		display: none;
	}
`;
