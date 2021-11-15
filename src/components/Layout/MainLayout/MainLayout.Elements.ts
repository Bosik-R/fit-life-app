import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.color.bgSection};
	display: flex;
	justify-content: center;
`;

export const Wrapper = styled.div`
	width: ${({ theme }) => theme.appWidth};
	display: flex;
	flex-direction: column;
	align-items: stretch;
	margin: 12px 15px;
`;
