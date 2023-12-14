import { useTranslation } from '@/app/i18n';
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface Props {}

export const Menu = async ({}: Props) => {
	const { language } = useLanguage();
	const { t, languages } = await useTranslation({ language, ns: 'menu' });
	const itemsMenu = ['about', 'work', 'stack', 'contact'];
	return (
		<div className='flex min-h-screen relative'>
			<div className='w-full flex flex-col z-10 p-7 lg:p-14'>
				<div className='flex justify-between'>
					<span className='text-2xl'>ektl.dev</span>
					<span className='text-2xl text-secondary '>
						{languages.map((language) => (
							<Link
								key={language}
								className='mr-4 cursor-pointer hover:text-foreground uppercase'
								href={`/${language}`}
							>
								[ {language} ]
							</Link>
						))}
					</span>
				</div>
				<div className='flex flex-col justify-center h-full pl-1 md:pl-14 lg:pl-28'>
					{itemsMenu.map((item, index) => (
						<a
							key={item}
							className='w-fit font-bold mb-10 cursor-pointer transition-all duration-1000 text-5xl md:text-8xl lg:text-9xl lg:hover:pl-60 hover:text-secondary'
						>
							{t(item)}
							<span className='text-2xl font-normal ml-8'>[ {++index < 10 ? `0${index}` : index} ]</span>
						</a>
					))}
				</div>
			</div>

			<div className='w-5/12 h-full right-0 absolute bg-principal_light z-0 hidden lg:block'></div>
		</div>
	);
};
