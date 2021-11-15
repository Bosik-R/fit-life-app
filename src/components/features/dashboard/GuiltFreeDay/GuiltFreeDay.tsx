import React from 'react';
import * as S from './GuiltFreeDay.Elements';
import printer from '../../../../images/printer.svg';

interface Props {
	day: string;
	active: boolean;
}

const GuiltFreeDay: React.FC<Props> = ({ day, active }) => {
	return (
		<S.GuiltFreeWrapper active={active}>
			<S.GuiltFreeRowTop>
				<S.GuiltFreeDay active={active}>{day}</S.GuiltFreeDay>
			</S.GuiltFreeRowTop>
			<S.Row active={active}>
				<S.RowText>guilt-free day</S.RowText>
				<S.Smiley size='32' />
			</S.Row>
			<S.RowBottom>
				<S.Printer src={printer} alt={printer} />
				<S.PrintText>Print</S.PrintText>
			</S.RowBottom>
		</S.GuiltFreeWrapper>
	);
};

export default GuiltFreeDay;
