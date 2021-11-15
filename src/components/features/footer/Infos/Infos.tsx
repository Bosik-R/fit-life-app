import React from 'react';
import * as S from './Infos.Elements';

const Infos: React.FC = () => {
	return (
		<S.Wrapper>
			<S.Title>Running out of products?</S.Title>
			<S.Content>Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</S.Content>
			<S.Btn>
				Buy now
				<S.ArrowIcon size='16' />
			</S.Btn>
		</S.Wrapper>
	);
};

export default Infos;
