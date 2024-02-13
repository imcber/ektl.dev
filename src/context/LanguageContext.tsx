import React, { createServerContext, useContext, ReactNode } from "react";
import { fallbackLng } from "../app/i18n/settings";

type Language = string;

interface LanguageContextType {
	language: Language;
	/* setLanguage: Dispatch<SetStateAction<Language>>; */
}

interface ProviderProps {
	children: ReactNode;
	initialValue: Language;
}

const LanguageContext = createServerContext("language", { language: fallbackLng });

export const LanguageProvider: React.FC<ProviderProps> = ({ children, initialValue }) => {
	return <LanguageContext.Provider value={{ language: initialValue }}>{children}</LanguageContext.Provider>;
};

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
