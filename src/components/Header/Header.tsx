import React from 'react';
import PagesNavigation from '../PagesNavigation/PagesNavigation';
import User from '../User/User';
import * as S from './Header.Elements';

const Header: React.FC = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<PagesNavigation />
				<User />
			</S.Wrapper>
		</S.Container>
	);
};

export default Header;
