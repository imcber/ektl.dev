import React from "react";
import { LanguageProps } from "../page";
import { LanguageProvider } from "@/context/LanguageContext";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";

const aboutMe = ({ params: { lng } }: LanguageProps) => {
	return (
		<main>
			<LanguageProvider initialValue={lng}>
				<About />
				<Stack />
			</LanguageProvider>
		</main>
	);
};

export default aboutMe;
