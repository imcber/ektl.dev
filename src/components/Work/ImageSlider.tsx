'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import Nebular from '../../../public/Nebular.jpg';
import Needed from '../../../public/Needed.jpg';
import TAR from '../../../public/TAR.jpg';
import Uniken from '../../../public/Uniken.jpg';
import Refer from '../../../public/Refer.jpg';
import RightArrow from '../../../public/right-arrow.svg';
import LeftArrow from '../../../public/left-arrow.svg';

export interface Project {
	name: string;
	image: StaticImageData;
}

const ImageSlider: React.FC = () => {
	const projects: Project[] = [
		{ name: 'TAR', image: TAR },
		{ name: 'Nebular', image: Nebular },
		{ name: 'Needed', image: Needed },
		{ name: 'Uniken', image: Uniken },
		{ name: 'Refer', image: Refer },
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
	};

	const goToNextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<div className={` bg-foreground overflow-hidden`}>
			<div className='w-full h-[80vh] absolute flex justify-between'>
				<Image
					src={LeftArrow}
					alt='left'
					width={100}
					className='cursor-pointer z-20 opacity-10 hover:opacity-50 transition-all duration-100'
					onClick={goToPrevSlide}
				/>
				<Image
					src={RightArrow}
					alt='right'
					width={100}
					className='cursor-pointer z-20 opacity-10 hover:opacity-50 transition-all duration-100 animate-pulse'
					onClick={goToNextSlide}
				/>
			</div>
			<div
				className='flex transition-all duration-300'
				style={{
					transform: `translateX(-${currentIndex * 100}%)`,
				}}
			>
				{projects.map((project, index) => (
					<div key={project.name}>
						<div className='h-[80vh] w-screen relative lg:p-5'>
							<div
								className={`text-principal lg:pl-28 z-10 absolute top-20 lg:top-1/2`}
								style={{ transform: 'translate(0, -50%)' }}
							>
								<h4 className='text-end'>[ {index + 1 < 10 ? `0${index + 1}` : index + 1} ]</h4>
								<h3 className='text-6xl lg:text-8xl font-bold'>{project.name}</h3>
							</div>
							<div className='w-full h-full opacity-30 bg-principal_light rounded-[1rem]'>
								<Image
									className={`z-0 h-full w-full object-cover object-center opacity-50 rounded-[1rem]`}
									src={project.image}
									alt={project.name}
								/>
							</div>
						</div>
						<div className='grid lg:grid-cols-3 gap-x-1 gap-y-6 lg:gap-y-28 py-8 lg:p-16'>
							<p className='text-2xl lg:text-4xl'>About</p>
							<p className='col-span-2 text-base lg:text-xl font-light text-secondary'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, accusamus! Illo
								temporibus labore culpa, obcaecati earum a cupiditate et exercitationem nobis veritatis facere
								fugiat maiores alias aliquid eum sunt id.
							</p>
							<p className='text-2xl lg:text-4xl'>Problematic</p>
							<p className='col-span-2 text-base lg:text-xl font-light text-secondary'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, accusamus! Illo
								temporibus labore culpa, obcaecati earum a cupiditate et exercitationem nobis veritatis facere
								fugiat maiores alias aliquid eum sunt id.
							</p>
							<p className='text-2xl lg:text-4xl'>Solution</p>
							<p className='col-span-2 text-base lg:text-xl font-light text-secondary'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, accusamus! Illo
								temporibus labore culpa, obcaecati earum a cupiditate et exercitationem nobis veritatis facere
								fugiat maiores alias aliquid eum sunt id.
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;

/*  */
