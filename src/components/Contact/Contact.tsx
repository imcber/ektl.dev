import { useTranslation } from "@/app/i18n";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import React from "react";

import Mail from "../../../public/contact/mail.svg";
import Location from "../../../public/contact/location.svg";
import Linkedin from "../../../public/contact/linkedin.svg";
import Github from "../../../public/contact/github.svg";
import Instagram from "../../../public/contact/instagram.svg";

import RightArrowOut from "../../../public/right-arrow-principal-color.svg";

export const Contact = async () => {
	const { language } = useLanguage();
	const { t } = await useTranslation({ language, ns: "contact" });

	return (
		<div className='h-auto text-principal p-7 lg:px-28'>
			<div className='h-full w-full flex items-start justify-start border-b-2 pb-5'>
				<p className='text-6xl [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:--principal] font-bold text-transparent'>{t("page")}</p>
			</div>
			<div className='flex flex-col lg:flex-row justify-around py-8 lg:p-8 items-start'>
				<div className='flex items-center pb-5 lg:p-0'>
					<p className='font-bold pr-12 text-3xl '>Mail</p>
					<p className='text-xl'>ekatl.ramirez@gmail.com</p>
				</div>
				<div className='flex'>
					<p className='font-bold pr-12 text-3xl'>Social</p>
					<div>
						<a href='https://www.linkedin.com/in/imcber/' target='_blank' className='cursor-pointer flex text-xl py-2'>
							Linkedin
							<Image src={RightArrowOut} width={20} alt='mail' />
						</a>
						<a href='https://www.instagram.com/imcber1/' target='_blank' className='cursor-pointer flex text-xl py-2'>
							Instagram
							<Image src={RightArrowOut} width={20} alt='mail' />
						</a>
						<a href='https://github.com/imcber' target='_blank' className='cursor-pointer flex text-xl py-2'>
							Github
							<Image src={RightArrowOut} width={20} alt='mail' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
