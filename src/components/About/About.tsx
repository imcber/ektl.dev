import { useTranslation } from "@/app/i18n";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import Image from "next/image";
import photo from "../../../public/PA070155.jpeg";

interface AboutAttributes {
	description: string;
	value: string;
}

export const About = async () => {
	const { language } = useLanguage();
	const { t } = await useTranslation({ language, ns: "about" });

	//NO pude encontrar el type correcto
	const tableData = t<any, any, any>("table", { returnObjects: true });

	return (
		<div className='h-auto block lg:flex bg-principal'>
			<Image className='h-auto w-full lg:w-5/12 object-cover' src={photo} alt='My photo' priority />
			<div className='w-full lg:w-7/12 flex flex-col z-10 p-7 lg:p-14'>
				<p className='text-5xl text-secondary'>{t("hello")}</p>
				<p className='text-2xl text-foreground leading-9 font-light mx-0 my-7 lg:m-14'>{t("about")}</p>
				<div className='m-0 lg:m-14'>
					<table className='border-collapse border-spacing-4 w-full text-base font-light'>
						<tbody>
							{tableData.map((row: AboutAttributes) => (
								<tr key={row.description} className='border-b-[1px] border-foreground transition-all duration-200 hover:text-xl '>
									<td className='text-secondary w-1/2 py-3'>{row.description}</td>
									<td className='text-foreground w-1/2'>{row.value}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
