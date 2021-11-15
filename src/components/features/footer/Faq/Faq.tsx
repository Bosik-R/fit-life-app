import React from 'react';
import * as S from './Faq.Elements';

const Faq: React.FC = () => {
	return (
		<S.Wrapper>
			<S.Title>Frequently Asked Questions</S.Title>
			<S.Content>Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet.</S.Content>
			<S.Btn>
				Read FAQs
				<S.ArrowIcon size='16' />
			</S.Btn>
		</S.Wrapper>
	);
};

export default Faq;
