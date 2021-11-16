import React from 'react';
import * as S from './DaySlider.Elements';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { DayProps } from '../MealWeekColumn/MealWeekColumn';

interface DaySliderProps {
	activeIndex: number;
	data: DayProps[];
}

const DaySlider: React.FC<DaySliderProps> = ({ activeIndex, data }) => {
	return (
		<S.Wrapper>
			<CarouselProvider naturalSlideWidth={200} naturalSlideHeight={50} totalSlides={data.length} visibleSlides={1} currentSlide={activeIndex}>
				<Slider>
					{data.map((item, index) => (
						<Slide index={index} key={index}>
							<S.Day>{item.day}</S.Day>
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
		</S.Wrapper>
	);
};

export default DaySlider;
