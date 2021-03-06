import React, { useState } from 'react';
import * as S from './User.Elements';
import UserImage from '../../../../images/user.svg';

const User: React.FC = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<S.Wrapper>
			<S.ImageWrapper>
				<S.UserImage src={UserImage} alt={UserImage} />
			</S.ImageWrapper>
			<S.UserName>Olivia Wilde</S.UserName>
			<S.IconArrow open={openMenu} onClick={() => setOpenMenu(!openMenu)} />
		</S.Wrapper>
	);
};

export default User;
