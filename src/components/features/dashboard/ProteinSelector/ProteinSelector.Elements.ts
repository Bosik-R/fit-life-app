import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;
`;
export const Title = styled.p`
	padding: 12px 10px 10px 12px;
	font-size: 9px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	color: ${({ theme }) => theme.color.navFont};
`;

export const OptionsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	padding-left: 12px;
`;

interface Props {
	selectedOption: boolean;
}
export const OptionWrapper = styled.div<Props>`
	position: relative;

	${({ selectedOption, theme }) =>
		selectedOption
			? ''
			: `
			&::before,
			::after {
		position: absolute;
		content: '';
		width: 2px;
		height: 38px;
		transform: rotate(45deg);
		top: -8px;
		//left: 15px;
		z-index: 2;
	}
	
	/* &::after {
		position: absolute;
		content: '';
		width: 2px;
		height: 38px;
		transform: rotate(45deg);
		top: -8px;
		left: 12px;
		background-color: white;
		z-index: 2;
	} */
	
	&::before {
		left: 15px;
		background-color: ${theme.color.lightGrey};
	}
	
	&::after {
		left: 12px;
		background-color: ${theme.color.bgLight};
	}
		`}
`;

export const Option = styled.img`
	cursor: pointer;
`;
