import { Menu } from "@/components/Menu";
import { Params } from "./layout";
import { About } from "@/components/About";
import { LanguageProvider } from "@/context/LanguageContext";
import { Work } from "@/components/Work";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";

export interface LanguageProps {
	params: Params;
}

export default function Home({ params: { lng } }: LanguageProps) {
	return (
		<main>
			<LanguageProvider initialValue={lng}>
				<Menu />
				<Work />
				<Contact />
			</LanguageProvider>
		</main>
	);
}
