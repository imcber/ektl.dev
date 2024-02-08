import { useTranslation } from "@/app/i18n";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface Props {}

export const Menu = async ({}: Props) => {
	const { language } = useLanguage();
	const { t, languages } = await useTranslation({ language, ns: "menu" });
	const itemsMenu = ["about", "work", "stack", "contact"];
	return (
		<div className='flex min-h-screen relative'>
			<div className='w-full flex flex-col z-10 p-7 lg:p-14'>
				<div className='flex justify-between'>
					<span className='text-2xl'>ektl.dev</span>
					<span className='text-2xl text-secondary '>
						{languages.map((language) => (
							<Link key={language} className='mr-4 cursor-pointer hover:text-foreground uppercase' href={`/${language}`}>
								[ {language} ]
							</Link>
						))}
					</span>
				</div>
				<div className='flex flex-col justify-center h-full pl-1 md:pl-14 lg:pl-28'></div>
			</div>
		</div>
	);
};
