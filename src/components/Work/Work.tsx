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

	return <div className='flex min-h-screen max-h-screen'></div>;
};
