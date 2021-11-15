import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
	border-left: 1px solid ${({ theme }) => theme.color.border};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 21px;
	column-gap: 9px;
`;

export const PageLink = styled(NavLink)`
	position: relative;
	color: ${({ theme }) => theme.color.navFont};
	font-size: 14px;
	text-transform: uppercase;
	font-weight: 800;
	letter-spacing: 1px;
	padding: 10px;

	&::after {
		content: '';
		position: absolute;
		width: 25px;
		height: 2px;
		bottom: 3px;
		left: 50%;
		transform: translateX(-50%);
		background-color: transparent;
	}

	&:hover {
		color: ${({ theme }) => theme.color.primary};
	}

	&.active {
		color: ${({ theme }) => theme.color.primary};

		&::after {
			background-color: ${({ theme }) => theme.color.primary};
		}
	}
`;
