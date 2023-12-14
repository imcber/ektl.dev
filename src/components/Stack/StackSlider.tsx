'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

import RightArrow from '../../../public/right-arrow.svg';
import LeftArrow from '../../../public/left-arrow.svg';

export interface Tech {
	id: string;
	name: string;
	experience: number;
	skill: string;
}

export const StackSlider = () => {
	const techs: Tech[] = [
		{ id: 'js', name: 'Javascript', experience: 5, skill: 'advanced' },
		{ id: 'java', name: 'Java', experience: 5, skill: 'advanced' },
		{ id: 'react', name: 'ReactJS', experience: 3, skill: 'advanced' },
		{ id: 'next', name: 'NextJs', experience: 2, skill: 'medium' },
		{ id: 'spring', name: 'Spring', experience: 3, skill: 'medium' },
		{ id: 'nodejs', name: 'Nodejs', experience: 3, skill: 'medium' },
		{ id: 'mongo', name: 'Mongo', experience: 2, skill: 'medium' },
		{ id: 'sql', name: 'SQL', experience: 4, skill: 'medium' },
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? techs.length - 1 : prevIndex - 1));
	};

	const goToNextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === techs.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<div>
			<div
				className='flex transition-all duration-200'
				style={{
					transform: `translateX(-${currentIndex * 25.5}rem)`,
				}}
			>
				{techs.map(({ id, name, experience, skill }, index) => (
					<div
						key={id}
						className={`w-96 h-96 border-2 border-secondary rounded-2xl p-7 m-3 text-secondary flex flex-col justify-between relative ${
							currentIndex === index ? 'bg-principal_light' : 'bg-foreground'
						}`}
					>
						<h1 className='text-5xl'>{name}</h1>
						{currentIndex === index ? (
							<>
								<div className='lg:flex flex-col lgtext-2xl '>
									<div className='flex'>
										<p className='mr-3'>Experience:</p>
										<p className='col-span-2 font-semibold'>{`${experience} y`}</p>
									</div>
									<div className='flex'>
										<p className='mr-3'>Skill:</p>
										<p className='col-span-2 font-semibold'>{skill}</p>
									</div>
								</div>
								<div className='absolute top-0 left-0 w-96 h-96 flex items-center justify-between'>
									<Image
										src={LeftArrow}
										alt='left'
										width={100}
										className='cursor-pointer z-20  hover:opacity-50 transition-all duration-100'
										onClick={goToPrevSlide}
									/>
									<Image
										src={RightArrow}
										alt='right'
										width={100}
										className='cursor-pointer z-20  hover:opacity-50 transition-all duration-100'
										onClick={goToNextSlide}
									/>
								</div>
							</>
						) : (
							<p>[ {index + 1 < 10 ? `0${index + 1}` : index + 1} ]</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
