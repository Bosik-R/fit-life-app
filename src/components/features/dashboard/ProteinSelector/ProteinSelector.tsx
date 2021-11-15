import React from 'react';
import * as S from './ProteinSelector.Elements';

import { data } from '../../../../data';

// interface ProtienOptionProps {
// 	id: string;
// 	svg: string;
// 	selected: boolean;
// }

const ProteinSelector: React.FC = () => {
	return (
		<S.Wrapper>
			<S.Title>select your protein options</S.Title>
			<S.OptionsWrapper>
				{data.proteins.options.map((opt) => (
					<S.OptionWrapper key={opt.id} selectedOption={opt.selected}>
						<S.Option src={opt.svg} alt={opt.id} />
					</S.OptionWrapper>
				))}
			</S.OptionsWrapper>
		</S.Wrapper>
	);
};

export default ProteinSelector;
