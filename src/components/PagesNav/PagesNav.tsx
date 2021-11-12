import React from 'react';
import * as S from './PagesNav.Elements';

const PagesNav: React.FC = () => {
	return (
		<S.Wrapper>
			<S.PageLink to='/'>dashboard</S.PageLink>
			<S.PageLink to='/recipes'>recipes</S.PageLink>
			<S.PageLink to='/challenge'>challenge</S.PageLink>
		</S.Wrapper>
	);
};

export default PagesNav;
