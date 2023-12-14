import { useTranslation } from '@/app/i18n';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import React from 'react';

import Mail from '../../../public/contact/mail.svg';
import Location from '../../../public/contact/location.svg';
import Linkedin from '../../../public/contact/linkedin.svg';
import Github from '../../../public/contact/github.svg';
import Instagram from '../../../public/contact/instagram.svg';

export const Contact = async () => {
	const { language } = useLanguage();
	const { t } = await useTranslation({ language, ns: 'contact' });

	return (
		<div className='h-auto bg-secondary text-foreground'>
			<div className='lg:h-full w-full lg:w-1/3 flex items-start justify-center lg:justify-start p-7 lg:p-14'>
				<p className='text-5xl '>{t('page')}</p>
			</div>
			<div className='flex flex-col lg:flex-row items-center'>
				<div className='lg:pb-14 lg:px-28 w-auto'>
					<span className='flex items-center'>
						<Image src={Mail} width={50} alt='mail' className='mr-3' />
						<p>ekatl.ramirez@gmail.com</p>
					</span>
					<span className='flex items-center mt-3'>
						<Image src={Location} width={50} alt='location' className='mr-3' />
						<p>Pachuca, Hidalgo, Mexico</p>
					</span>
				</div>
				<span className='flex my-14 lg:pb-14 lg:px-28 w-auto'>
					<a href=''>
						<Image className='mx-3' src={Linkedin} width={50} alt='linkedin' />
					</a>
					<a href=''>
						<Image className='mx-3' src={Github} width={50} alt='github' />
					</a>
					<a href=''>
						<Image className='mx-3' src={Instagram} width={50} alt='instagram' />
					</a>
				</span>
			</div>
		</div>
	);
};
