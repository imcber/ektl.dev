"use client";

import Spline from "@splinetool/react-spline";

export const Background3D = () => {
	return (
		<div className='absolute h-full w-full'>
			<Spline scene='https://prod.spline.design/BafwJzRaMDYRMrwo/scene.splinecode' />;
		</div>
	);
};
