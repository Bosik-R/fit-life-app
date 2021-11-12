import React from 'react';
import PagesNav from '../PagesNav/PagesNav';
import User from '../User/User';
import * as S from './Header.Elements';

const Header: React.FC = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<PagesNav />
				<User />
			</S.Wrapper>
		</S.Container>
	);
};

export default Header;
