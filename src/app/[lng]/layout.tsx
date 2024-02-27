import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ektl.dev",
	description: "Portfolio of ektl.dev",
};

export async function generateStaticParams() {
	return languages.map((lng) => ({ lng }));
}

interface Props {
	children: React.ReactNode;
	params: Params;
}
export type Params = {
	lng: string;
};
export default function RootLayout({ children, params: { lng } }: Props) {
	return (
		<html lang={lng} dir={dir(lng)} className='scroll-smooth'>
			<body className={inter.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
}
