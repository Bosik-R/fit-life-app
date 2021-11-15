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

export const OptionWrapper = styled.div`
	position: relative;
`;

interface OptionProps {
	selected: boolean;
}
export const Option = styled.img<OptionProps>`
	${({ selected }) => (selected ? '' : '')}
`;

export const Opt = styled.img`
	&::before {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		//transform: translate(-50%, -50%);
		width: 3px;
		height: 20px;
		z-index: 2;
		background-color: ${({ theme }) => theme.color.proteinIconNegationBar};
	}
`;

export const OptionNegation1 = styled.img`
	position: absolute;
	bottom: 0;
	right: 2px;
`;

export const OptionNegation2 = styled.img`
	position: absolute;
	bottom: 0;
	right: 5px;
`;
