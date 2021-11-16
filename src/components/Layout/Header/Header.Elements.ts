import styled from 'styled-components';
import { Menu } from '@styled-icons/heroicons-outline/Menu';

export const Container = styled.header`
	width: 100%;
	height: 79px;
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.color.bgLight};
	border-bottom: 1px solid #c8c8c8;

	@media (max-width: 425px) {
		height: 50px;
	}
`;

export const Wrapper = styled.div`
	position: relative;
	max-width: 979px;
	width: 100%;
	margin: 0 15px;
	padding-left: 118px;
	display: flex;
	align-items: stretch;
	justify-content: space-between;

	@media (max-width: 425px) {
		padding: 10px 5px;
		padding-right: 40px;
		margin: 0;
	}
`;

export const MobileBtn = styled.button`
	position: absolute;
	top: 50%;
	right: 12px;
	transform: translateY(-50%);
	border: none;
	background-color: transparent;
	cursor: pointer;
`;

export const MobileIcon = styled(Menu)`
	color: ${({ theme }) => theme.color.navFont};
`;
