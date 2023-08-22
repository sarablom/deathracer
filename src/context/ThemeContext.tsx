"use client";
import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import Cookie from "js-cookie";

export type ThemeTypes = "dark" | "light";

type ThemeContextType = {
	theme: ThemeTypes;
	setTheme: (theme: ThemeTypes) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
	children: ReactNode;
	initialTheme: ThemeTypes;
};

export const ThemeProvider = ({ children, initialTheme }: Props) => {
	const [theme, setTheme] = useState<ThemeTypes>(initialTheme);

	useEffect(() => {
		if (theme === "dark") {
			document.body.classList.add("dark");
			Cookie.set("savedTheme", "dark", { expires: 365 });
		} else if (theme === "light") {
			document.body.classList.remove("dark");
			Cookie.set("savedTheme", "light", { expires: 365 });
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
