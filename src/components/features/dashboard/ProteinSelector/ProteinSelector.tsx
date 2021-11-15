import React, { Fragment } from 'react';
import * as S from './ProteinSelector.Elements';
import vegetables from '../../../../images/vegetables.svg';
import dairy from '../../../../images/dairy.svg';
import redMeat from '../../../../images/redMeat.svg';
import fish from '../../../../images/fish.svg';
import whiteMeat from '../../../../images/whiteMeat.svg';
import negation1 from '../../../../images/negation1.svg';
import negation2 from '../../../../images/negation2.svg';

interface ProtienOptionProps {
	id: string;
	svg: string;
	selected: boolean;
}

const proteinOptions: ProtienOptionProps[] = [
	{ id: 'vegetables', svg: vegetables, selected: true },
	{ id: 'dairy', svg: dairy, selected: true },
	{ id: 'redMeat', svg: redMeat, selected: true },
	{ id: 'fish', svg: fish, selected: false },
	{ id: 'whiteMeat', svg: whiteMeat, selected: false },
];

const ProteinSelector: React.FC = () => {
	return (
		<S.Wrapper>
			<S.Title>select your protein options</S.Title>
			<S.OptionsWrapper>
				{proteinOptions.map((opt) => (
					<S.OptionWrapper key={opt.id}>
						<S.Option src={opt.svg} alt={vegetables} selected={opt.selected} />
						{!opt.selected && (
							<Fragment>
								<S.OptionNegation1 src={negation1} alt={negation1} />
								<S.OptionNegation2 src={negation2} alt={negation2} />
							</Fragment>
						)}
					</S.OptionWrapper>
				))}
			</S.OptionsWrapper>
		</S.Wrapper>
	);
};

export default ProteinSelector;
