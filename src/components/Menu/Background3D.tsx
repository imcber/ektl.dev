"use client";

import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Background from "../../../public/menu/mobile-background.jpg";
import { useState } from "react";

export const Background3D = () => {
	const [loading, setLoading] = useState(false);
	const onLoad = () => {
		setLoading(true);
	};

	return (
		<>
			<div className={`absolute h-full w-full hidden lg:block ${!loading ? "lg:hidden" : ""}`}>
				<Spline scene='https://prod.spline.design/qcr8NxgWoWnYhTAr/scene.splinecode' onLoad={onLoad} />
			</div>

			<div className={`absolute h-full w-full hidden lg:block  ${loading ? "lg:hidden" : ""}`}>
				<Image alt='background' src={Background} className='h-full w-full' />
			</div>

			<div className='absolute h-full w-full block lg:hidden'>
				<Image alt='background' src={Background} className='h-full w-full' />
			</div>
		</>
	);
};
