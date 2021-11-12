import React from 'react';
import * as S from './WeekSlider.Elements';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'];

const WeekSlider: React.FC = () => {
	return (
		<S.WeekSliderWrapper>
			<CarouselProvider naturalSlideWidth={200} naturalSlideHeight={45} totalSlides={weeks.length} visibleSlides={1}>
				<Slider>
					{weeks.map((item, index) => (
						<Slide index={index} key={index}>
							<S.Week>{item}</S.Week>
						</Slide>
					))}
				</Slider>
				<S.BackBtn>
					<S.ArrowIconBack />
				</S.BackBtn>

				<S.NextBtn>
					<S.ArrowIconNext />
				</S.NextBtn>
			</CarouselProvider>
		</S.WeekSliderWrapper>
	);
};

export default WeekSlider;
