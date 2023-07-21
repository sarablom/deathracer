"use client";
import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type ThemeTypes = "dark" | "light";

type ThemeContextType = {
	theme: ThemeTypes;
	setTheme: (theme: ThemeTypes) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
	children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState<ThemeTypes>("light");

	useEffect(() => {
		if (theme === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export function useTheme() {
	const data = useContext(ThemeContext);

	if (!data) {
		throw new Error(
			"Cannot consume ThemeContext without a ThemeContextProvider"
		);
	}

	return data;
}
