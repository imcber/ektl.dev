import { Menu } from '@/components/Menu';
import { Params } from './layout';
import { About } from '@/components/About';
import { LanguageProvider } from '@/context/LanguageContext';
import { Work } from '@/components/Work';

interface Props {
	params: Params;
}

export default function Home({ params: { lng } }: Props) {
	return (
		<main>
			<LanguageProvider initialValue={lng}>
				<Menu />
				<About />
				<Work />
			</LanguageProvider>
		</main>
	);
}