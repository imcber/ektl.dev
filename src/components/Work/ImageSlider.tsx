'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import Nebular from '../../../public/Nebular.jpg';
import Needed from '../../../public/Needed.jpg';
import TAR from '../../../public/TAR.jpg';
import Uniken from '../../../public/Uniken.jpg';
import Refer from '../../../public/Refer.jpg';
import { ItemSlider } from './ItemSlider';

export interface Project {
	name: string;
	image: StaticImageData;
	index: number;
}

const ImageSlider: React.FC = () => {
	const projects: Project[] = [
		{ name: 'TAR', image: TAR, index: 1 },
		{ name: 'Nebular', image: Nebular, index: 2 },
		{ name: 'Needed', image: Needed, index: 3 },
		{ name: 'Uniken', image: Uniken, index: 4 },
		{ name: 'Refer', image: Refer, index: 5 },
	];

	const [itemSlider, setItemSlider] = useState<Project>(projects[0]);
	const [openModal, setOpenModal] = useState(false);

	var settings = {
		className: " h-full before:content-[' '] before:h-[15%] before:align-middle before:inline-block",
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		focusOnSelect: true,
		afterChange: (index: number) => {
			setItemSlider({ ...projects[index], ...{ index } });
		},
		arrows: false,
		dots: true,
		dotsClass: 'slick-dots',
	};

	const handleClick = () => {
		setOpenModal(true);
	};

	return (
		<>
			<Slider {...settings}>
				{projects.map((item) => (
					<ItemSlider
						key={item.name}
						isSame={itemSlider?.name === item.name}
						handleClick={handleClick}
						itemSlider={item}
					/>
				))}
			</Slider>
			<div
				className={`transition-all duration-300  absolute top-0 left-0 bg-foreground ${
					openModal ? 'w-screen h-screen ' : 'w-0 h-0'
				}   `}
			>
				<div className='w-full h-5/6 bg-secondary relative'>
					<div
						className={`text-principal_light p-14 z-10 absolute w-full h-full flex flex-col justify-center ${
							!openModal ? 'hidden' : ''
						}`}
					>
						<h4>[ {itemSlider.index < 10 ? `0${itemSlider.index}` : itemSlider.index} ]</h4>
						<h3 className='text-8xl  font-bold' onClick={() => setOpenModal(false)}>
							{itemSlider.name}
						</h3>
					</div>
					<Image
						className={`z-0 h-full p-7 w-full object-cover object-center rounded-[3rem] opacity-40 absolute top-0`}
						src={itemSlider.image}
						alt={itemSlider.name}
					/>
				</div>
			</div>
		</>
	);
};

export default ImageSlider;

/*  */
