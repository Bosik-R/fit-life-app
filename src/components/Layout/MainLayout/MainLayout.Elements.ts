import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.color.bgSection};
	display: flex;
	justify-content: center;
`;

export const Wrapper = styled.div`
	max-width: ${({ theme }) => theme.appWidth};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	margin: 12px 0;

	@media (max-width: 425px) {
		margin: 0;
	}
`;
