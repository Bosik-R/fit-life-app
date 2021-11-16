import React, { useState, Fragment } from 'react';
import PagesNavigation from '../../features/header/PagesNavigation/PagesNavigation';
import User from '../../features/header/User/User';
import * as S from './Header.Elements';
import { useMediaQuery } from 'react-responsive';
import UserMobile from '../../features/header/UserMobile/UserMobile';

const Header: React.FC = () => {
	const mobile = useMediaQuery({ query: '(max-width: 768px)' });
	const [open, setOpen] = useState(false);

	return (
		<S.Container>
			<S.Wrapper>
				<PagesNavigation />
				{mobile ? (
					<Fragment>
						<UserMobile open={open} setOpen={setOpen} />
						<S.MobileBtn onClick={() => setOpen(true)}>
							<S.MobileIcon size='30' />
						</S.MobileBtn>
					</Fragment>
				) : (
					<User />
				)}
			</S.Wrapper>
		</S.Container>
	);
};

export default Header;
