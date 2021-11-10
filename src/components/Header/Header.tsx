import React from 'react';
import PageNav from '../PagesNav/PagesNav';
import * as S from './Header.Elements';

const Header: React.FC = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<PageNav />
			</S.Wrapper>
		</S.Container>
	);
};

export default Header;
