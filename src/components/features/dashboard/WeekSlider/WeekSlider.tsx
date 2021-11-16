import React from 'react';
import * as S from './WeekSlider.Elements';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

interface SliderData {
	data: string[];
	activeIndex: number;
}

const WeekSlider: React.FC<SliderData> = ({ activeIndex, data }) => {
	const length = data.length;

	return (
		<S.WeekSliderWrapper>
			<S.SliderWrapper>
				<CarouselProvider naturalSlideWidth={200} naturalSlideHeight={50} totalSlides={length} visibleSlides={1} currentSlide={activeIndex}>
					<Slider>
						{data.map((item, index) => (
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
