import { useTranslation } from '@/app/i18n';
import { useLanguage } from '@/context/LanguageContext';
import React from 'react';
import ImageSlider from './ImageSlider';

interface AboutAttributes {
	description: string;
	value: string;
}

export const Work = async () => {
	const { language } = useLanguage();
	const { t } = await useTranslation({ language, ns: 'work' });

	return (
		<div className='h-screen block lg:flex lg:flex-col bg-secondary text-principal_light relative'>
			<div className='w-full h-full lg:h-1/5 z-10 p-7 lg:p-14 flex justify-center items-center'>
				<h2 className='text-5xl'>WORK</h2>
			</div>
			<div className='lg:h-4/5 z-10 p-7 lg:p-14 '>
				<ImageSlider />
			</div>
		</div>
	);
};
