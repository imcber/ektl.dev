import { useTranslation } from '@/app/i18n';
import { useLanguage } from '@/context/LanguageContext';
import React from 'react';
import ImageSlider from './ImageSlider';

export const Work = async () => {
	const { language } = useLanguage();
	const { t } = await useTranslation({ language, ns: 'work' });

	const workData = t<any, any, any>('work', { returnObjects: true });

	return (
		<div className='min-h-screen block lg:flex lg:flex-col text-principal relative '>
			<div className='w-full h-full lg:h-[10%] p-7 lg:p-14 flex justify-center lg:justify-start items-center'>
				<h2 className='text-5xl'>{t('page')}</h2>
			</div>
			<div>
				<ImageSlider workData={workData} />
			</div>
		</div>
	);
};
