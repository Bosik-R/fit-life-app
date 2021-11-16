import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

interface Props {
	open: boolean;
}

export const Wrapper = styled.nav<Props>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	background-color: ${({ theme }) => theme.color.bgLight};
	${({ theme }) => theme.borderBottomLight};
	transform: ${({ open }) => (open ? 'translateY(0px)' : 'translateY(-110%)')};
	z-index: 10;
	transition: transform 0.5s ease;
	color: ${({ theme }) => theme.color.navFont};
	padding-bottom: 30px;
`;

export const IconClose = styled(CloseOutline)`
	position: absolute;
	top: 10px;
	right: 10px;
`;
export const UserWrapper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
`;

export const Option = styled.p`
	margin: 0 10px;
	text-align: center;
	padding: 10px;
	border-top: 1px solid ${({ theme }) => theme.color.border};
`;
