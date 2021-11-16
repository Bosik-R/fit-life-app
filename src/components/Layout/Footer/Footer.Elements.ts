import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 425px) {
		flex-direction: column;
		align-items: center;
	}
`;
