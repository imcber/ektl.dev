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
		<div className='min-h-screen block lg:flex lg:flex-col text-principal relative '>
			<div className='w-full h-full lg:h-[10%] p-7 lg:p-14 flex justify-center lg:justify-start items-center'>
				<h2 className='text-5xl'>WORK</h2>
			</div>
			<div>
				<ImageSlider />
			</div>
		</div>
	);
};
