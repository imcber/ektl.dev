import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ektl.dev",
	description: "Portfolio of ektl.dev",
};
interface Props {
	children: React.ReactNode;
	params: Params;
}
export type Params = {
	lng: string;
};
export default function RootLayout({ children, params: { lng } }: Props) {
	return (
		<html dir={dir(lng)} className='scroll-smooth'>
			<body className={inter.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
}
