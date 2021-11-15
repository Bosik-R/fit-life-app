import React from 'react';
import * as S from './ProgressBar.Elements';
import { data } from '../../../../data';

const ProgressBar: React.FC = () => {
	const { dietLength, activeWeekIndex } = data;

	return (
		<S.ProgressBarWrapper>
			<S.Title>your 12 week progress</S.Title>
			<S.ProgressDotsWrapper>
				{dietLength.map((week, index) => (
					<S.DotWrapper key={index}>
						<S.Dot index={index} status={index < activeWeekIndex ? 'completed' : index > activeWeekIndex ? 'incompleted' : 'active'}></S.Dot>
						<S.Week>{week}</S.Week>
					</S.DotWrapper>
				))}
			</S.ProgressDotsWrapper>
		</S.ProgressBarWrapper>
	);
};

export default ProgressBar;
