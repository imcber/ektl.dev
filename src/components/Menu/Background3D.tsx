"use client";

import Spline from "@splinetool/react-spline";
import Image from "next/image";
import MobileBackground from "../../../public/menu/mobile-background.jpg";
import Background from "../../../public/menu/cloner_tubes.jpg";
import { useState } from "react";

export const Background3D = () => {
	// const [loading, setLoading] = useState(true);
	// const onLoad = () => {
	// 	setLoading(false);
	// };

	return (
		<>
			<video
				autoPlay
				loop
				muted
				poster={Background.src}
				className={`absolute w-auto min-w-full min-h-screen max-w-none hidden lg:block`}
			>
				<source src='./menu/cloner-tubes.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>

			<div className='absolute h-full w-full block lg:hidden'>
				<Image alt='background' src={Background} className='h-full w-full' />
			</div>
		</>
	);
};
