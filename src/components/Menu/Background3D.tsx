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
				className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -z-10 max-w-none -translate-x-1/2 -translate-y-1/2`}
			>
				<source src='./menu/cloner-tubes.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>

			{/* <div className='absolute h-full w-full block md:hidden'>
				<Image alt='background' src={Background} className='h-full w-full' />
			</div> */}
		</>
	);
};
