import { useTranslation } from "@/app/i18n";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

import RightArrow from "../../../public/right-arrow-principal-color.svg";
import Header from "../Header/Header";

interface Props {}

export const Menu = async ({}: Props) => {
	const { language } = useLanguage();
	const { t } = await useTranslation({ language, ns: "menu" });

	return (
		<div className='flex min-h-screen relative'>
			<div className='w-full flex flex-col z-10 p-7 lg:p-14'>
				<Header />
				<div className='flex flex-col justify-center items-center h-full'>
					<h1 className='text-5xl my-3 text-center text-foreground font-bold [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:--secondary_light]'>
						<span>{t("hello")}</span>
						<span className='[-webkit-text-stroke-width:2px] text-secondary_light font-semibold'>{t("name")}</span>
						<span>{t("rest")}</span>
						<span className='[-webkit-text-stroke-width:2px] text-secondary_light font-semibold'>{t("alias")}</span>
					</h1>
					<h2 className='text-xl text-principal w-2/3 lg:w-2/6 text-center'>{t("i_am")}</h2>

					<div className='text-xl my-6 text-principal text-center w-full lg:w-2/6 flex justify-center'>
						<a className='cursor-pointer flex mx-3'>
							<Image src={RightArrow} width={20} alt='mail' className='' />
							<span>{t("projects")}</span>
						</a>
						<a className='cursor-pointer flex mx-3' href={`${language}/about-me`}>
							<Image src={RightArrow} width={20} alt='mail' className='' />
							<span>{t("about_me")}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
