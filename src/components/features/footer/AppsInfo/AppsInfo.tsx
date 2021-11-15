import React from 'react';
import * as S from './AppsInfo.Elements';
//import apple from '../../../../images/apple.svg';
//import android from '../../../../images/android.svg';

const AppsInfo: React.FC = () => {
	return (
		<S.Wrapper>
			<S.Title>Bod•ē Trainer in your pocket</S.Title>
			<S.Content>Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</S.Content>
			<S.BtnWrapper>
				<S.BtnApple>
					<S.Icon size='22' />
					iOS
					<S.ArrowIcon size='16' />
				</S.BtnApple>
				<S.BtnAndroid>
					<S.Icon />
					Android
					<S.ArrowIcon size='16' />
				</S.BtnAndroid>
			</S.BtnWrapper>
		</S.Wrapper>
	);
};

export default AppsInfo;
