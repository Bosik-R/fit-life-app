import React from 'react';
import AppsInfo from '../../features/footer/AppsInfo/AppsInfo';
import Faq from '../../features/footer/Faq/Faq';
import Infos from '../../features/footer/Infos/Infos';
import * as S from './Footer.Elements';

const Footer: React.FC = () => {
	return (
		<S.Wrapper>
			<Infos />
			<AppsInfo />
			<Faq />
		</S.Wrapper>
	);
};

export default Footer;
