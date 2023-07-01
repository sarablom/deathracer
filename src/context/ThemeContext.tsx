"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

type ThemeTypes = "dark" | "light";

type ThemeContextType = {
	theme: ThemeTypes;
	setTheme: (theme: ThemeTypes) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
	children: ReactNode;
};

function ThemeProvider({ children }: Props) {
	const [theme, setTheme] = useState<ThemeTypes>("light");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const data = useContext(ThemeContext);

	if (!data) {
		throw new Error(
			"Cannot consume ThemeContext context without a ThemeContextProvider"
		);
	}

	return data;
}

export default ThemeProvider;
