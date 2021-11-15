import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
	width: 100%;
	height: 724px;
	display: grid;
	place-items: center;
`;
const Title = styled.h1``;

const Recipes: React.FC = () => {
	return (
		<Wrapper>
			<Title>Recipes</Title>
		</Wrapper>
	);
};

export default Recipes;
