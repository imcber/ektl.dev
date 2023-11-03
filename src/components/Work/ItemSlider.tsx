import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Props {
	isSame: boolean;
	handleClick: () => void;
	image: StaticImageData;
	name: string;
}

export const ItemSlider = ({ isSame, handleClick, image, name }: Props) => {
	return (
		<div className={`transition-all duration-200 px-5 ${isSame ? 'opacity-100 hover:px-3' : 'opacity-25'}`}>
			<span>{name}</span>
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
