import React from 'react';
import * as S from './ProgressBar.Elements';

const data = {
	dietLength: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	activeIndex: 6,
};

const ProgressBar: React.FC = () => {
	const { dietLength, activeIndex } = data;

	return (
		<S.ProgressBarWrapper>
			<S.Title>your 12 week progress</S.Title>
			<S.ProgressDotsWrapper>
				{dietLength.map((week, index) => (
					<S.DotWrapper>
						<S.Dot index={index} status={index < activeIndex ? 'completed' : index > activeIndex ? 'incompleted' : 'active'}></S.Dot>
						<S.Week>{week}</S.Week>
					</S.DotWrapper>
				))}
			</S.ProgressDotsWrapper>
		</S.ProgressBarWrapper>
	);
};

export default ProgressBar;