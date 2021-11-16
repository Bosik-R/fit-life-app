import React from 'react';
import User from '../User/User';
import * as S from './UserMobile.Elements';

interface Props {
	open: boolean;
	setOpen: (data: boolean) => void;
}
const UserMobile: React.FC<Props> = ({ open, setOpen }) => {
	return (
		<S.Wrapper open={open}>
			<S.IconClose size='30' onClick={() => setOpen(false)} />
			<S.UserWrapper>
				<User />
			</S.UserWrapper>
			<S.Option>profile</S.Option>
			<S.Option>settings</S.Option>
			<S.Option>logout</S.Option>
		</S.Wrapper>
	);
};

export default UserMobile;
