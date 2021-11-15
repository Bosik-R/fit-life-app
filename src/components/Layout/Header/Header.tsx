import React from 'react';
import PagesNavigation from '../../features/header/PagesNavigation/PagesNavigation';
import User from '../../features/header/User/User';
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
