import React from 'react';
import * as S from './WeekSlider.Elements';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { data } from '../../data';
// const data = {
// 	weeks: [
// 		'Week 1',
// 		'Week 2',
// 		'Week 3',
// 		'Week 4',
// 		'Week 5',
// 		'Week 6',
// 		'Week 7',
// 		'Week 8',
// 		'Week 9',
// 		'Week 10',
// 		'Week 11',
// 		'Week 12',
// 	],
// 	activeWeek: 6,
// };

const WeekSlider: React.FC = () => {
	const { weeks, activeWeekIndex } = data;

	return (
		<S.WeekSliderWrapper>
			<S.SliderWrapper>
				<CarouselProvider
					naturalSlideWidth={200}
					naturalSlideHeight={50}
					totalSlides={weeks.length}
					visibleSlides={1}
					currentSlide={activeWeekIndex}>
					<Slider>
						{weeks.map((item, index) => (
							<Slide index={index} key={index}>
								<S.Week>{item}</S.Week>
							</Slide>
						))}
					</Slider>
					<S.BackBtn>
						<S.ArrowIconBack size='18' />
					</S.BackBtn>

					<S.NextBtn>
						<S.ArrowIconNext size='18' />
					</S.NextBtn>
				</CarouselProvider>
			</S.SliderWrapper>
		</S.WeekSliderWrapper>
	);
};

export default WeekSlider;
