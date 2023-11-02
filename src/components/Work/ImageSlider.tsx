'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Nebular from '../../../public/Nebular.jpg';
import Needed from '../../../public/Needed.jpg';
import TAR from '../../../public/TAR.jpg';
import Uniken from '../../../public/Uniken.jpg';
import Refer from '../../../public/Refer.jpg';
import Slider from 'react-slick';

const ImageSlider: React.FC = () => {
	const [indexSlider, setIndexSlider] = useState(0);
	var settings = {
		className: 'ImageSlider',
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		focusOnSelect: true,
		afterChange: (index: number) => {
			setIndexSlider(index);
		},
	};

	const projects = [Nebular, Needed, TAR, Uniken, Refer];

	return (
		<div className=''>
			<h2>Slider de Imágenes</h2>
			<Slider {...settings}>
				{projects.map((item, idx) => (
					<div
						key={idx}
						className={`transition-all duration-500 px-5 ${
							indexSlider === idx ? 'opacity-100' : 'opacity-25'
						}`}
					>
						<Image className='h-96 object-cover object-center rounded-lg' src={item} alt='Project' />
					</div>
				))}
			</Slider>
		</div>
	);
};
/*
 */

export default ImageSlider;
