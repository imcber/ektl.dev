import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Project } from './ImageSlider';

interface Props {
	isSame: boolean;
	handleClick: () => void;
	itemSlider: Project;
}

export const ItemSlider = ({ isSame, handleClick, itemSlider: { image, name, index } }: Props) => {
	return (
		<div className={`transition-all duration-200 px-5 ${isSame ? 'opacity-100 hover:px-3' : 'opacity-25'}`}>
			<span>{`${name} [ ${index < 10 ? `0${index}` : index} ]`}</span>
			<Image
				className={`h-96 transition-all duration-300 mt-2 object-cover object-center rounded-lg cursor-pointer ${
					isSame ? 'hover:h-[26rem]' : ''
				}`}
				src={image}
				alt={name}
				onClick={isSame ? handleClick : () => {}}
			/>
		</div>
	);
};
