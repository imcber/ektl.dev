"use client";

import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Background from "../../../public/menu/mobile-background.jpg";

export const Background3D = () => {
	return (
		<>
			<div className='absolute h-full w-full hidden lg:block'>
				<Spline scene='https://prod.spline.design/qcr8NxgWoWnYhTAr/scene.splinecode' />
			</div>
			<div className='absolute h-full w-full block lg:hidden'>
				<Image alt='background' src={Background} className='h-full w-full' />
			</div>
		</>
	);
};
