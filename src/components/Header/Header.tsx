import { useTranslation } from "@/app/i18n";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import React from "react";

interface Props {
	hostClass?: string;
	languagesClass?: string;
	path?: string;
}

const Header = async (props: Props) => {
	const { hostClass = "", languagesClass = "", path } = props;

	const { language } = useLanguage();
	const { languages } = await useTranslation({ language, ns: "menu" });
	return (
		<div className='flex justify-between text-2xl'>
			<a href={`/${language}`} className={`cursor-pointer ${hostClass}`}>
				ektl.dev
			</a>
			<span className={`text-secondary_light ${languagesClass}`}>
				{languages.map((language) => (
					<Link key={language} className='mr-4 cursor-pointer hover:text-principal uppercase' href={`/${language}${Boolean(path) ? "/" + path : ""}`}>
						[ {language} ]
					</Link>
				))}
			</span>
		</div>
	);
};

export default Header;
