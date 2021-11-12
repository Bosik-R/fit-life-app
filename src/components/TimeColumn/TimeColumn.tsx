import React from 'react';
import * as S from './TimeColumn.Elements';

const TimeColumn: React.FC = () => {
	return (
		<S.Wrapper>
			<S.RowTop></S.RowTop>
			<S.Row>
				<S.Time>
					6:00<S.TimePeriod>AM</S.TimePeriod>
				</S.Time>
			</S.Row>
			<S.Row>
				<S.Time>
					9:00<S.TimePeriod>AM</S.TimePeriod>
				</S.Time>
			</S.Row>
			<S.Row>
				<S.Time>
					12:00<S.TimePeriod>AM</S.TimePeriod>
				</S.Time>
			</S.Row>
			<S.Row>
				<S.Time>
					3:00<S.TimePeriod>PM</S.TimePeriod>
				</S.Time>
			</S.Row>
			<S.Row>
				<S.Time>
					6:00<S.TimePeriod>PM</S.TimePeriod>
				</S.Time>
			</S.Row>
			<S.RowBottom></S.RowBottom>
			<S.RowWorkout></S.RowWorkout>
		</S.Wrapper>
	);
};

export default TimeColumn;
