import React from 'react';
import { StackSlider } from './StackSlider';

export const Stack = async () => {
	return (
		<div className='h-screen bg-foreground lg:flex'>
			<div className='lg:h-full w-full lg:w-1/3 flex items-start justify-center lg:justify-start p-7 lg:p-14'>
				<p className='text-5xl '>Stack</p>
			</div>
			<div className='h-3/4 lg:h-full w-auto overflow-hidden flex justify-start items-center'>
				<StackSlider />
			</div>
		</div>
	);
};
