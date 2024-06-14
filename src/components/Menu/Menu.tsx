import { useTranslation } from "@/app/i18n";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import RightArrow from "../../../public/right-arrow-principal-color.svg";
import Header from "../Header/Header";
import { Background3D } from "./Background3D";

interface Props {}

export const Menu = async ({}: Props) => {
	const { language } = useLanguage();
	const { t } = await useTranslation({ language, ns: "menu" });

	return (
		<div className='flex min-h-screen relative overflow-hidden'>
			<Background3D />
			<div className='w-full flex flex-col z-10 p-7 lg:p-14'>
				<Header />
				<div className='flex flex-col justify-center items-center h-full'>
					<h1 className='text-5xl my-3 text-center text-transparent font-bold [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:--principal]'>
						<span>{t("hello")}</span>
						<span className='[-webkit-text-stroke-width:2px] text-principal font-semibold'>
							{t("name")}
						</span>
						<span>{t("rest")}</span>
						<span className='[-webkit-text-stroke-width:2px] text-principal font-semibold'>
							{t("alias")}
						</span>
					</h1>
					<h2 className='text-2xl text-principal w-2/3 lg:w-2/6 text-center font-bold my-4'>
						{t("i_am")}
					</h2>

					<div className='text-xl my-16 text-principal text-center w-full lg:w-2/6 flex justify-center'>
						<a
							className='cursor-pointer flex mx-3 font-bold md:text-2xl xl:text-3xl'
							href='#myWork'
						>
							<Image src={RightArrow} className='md:w-8 xl:w-10' alt='arrow_projects' />
							<span>{t("projects")}</span>
						</a>
						<Link href={`${language}/about-me`}>
							<span className='cursor-pointer flex mx-3 font-bold md:text-2xl xl:text-3xl'>
								<Image src={RightArrow} className='md:w-8 xl:w-10' alt='arrow_about_me' />
								<span>{t("about_me")}</span>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
