import { useTranslation } from '@/app/i18n';
import { useLanguage } from '@/context/LanguageContext';
import React from 'react';

interface AboutAttributes {
	description: string;
	value: string;
}

export const Work = async () => {
	const { language } = useLanguage();
	const { t } = await useTranslation({ language, ns: 'work' });

	return (
		<div className='h-screen block lg:flex lg:flex-col'>
			<div className='w-full h-full lg:h-1/4 z-10 p-7 lg:p-14 flex justify-center items-center'>
				<h2 className='text-5xl'>WORK</h2>
			</div>
			<div className='w-full h-full lg:h-3/4 z-10 p-7 lg:p-14'></div>
		</div>
	);
};

/* <div className='min-h-screen max-h-screen'>
			<div className='h-auto h-fit text-center w-full m-7 lg:m-14'>
				<h2 className='text-5xl'>WORK</h2>
			</div>
			<div className='grid gap-x-8 gap-y-4 grid-cols-3 mx-28'>
				<div className='flex flex-col'></div>
			</div>
		</div> */
