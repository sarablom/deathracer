"use client";
import { useTheme } from "../../context/ThemeContext";
import { ToggleButton } from "../ToggleButton";
import { Moon, Sun } from "react-feather";

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<ToggleButton
			checked={theme === "light"}
			onClickHandler={() => setTheme(theme === "light" ? "dark" : "light")}
			style={{
				flexDirection: theme === "light" ? "row" : "row-reverse",
				justifyContent: theme === "light" ? "flex-end" : "flex-start",
			}}
		>
			<div>
				{theme === "light" ? (
					<Sun size={18} fill="#FFD200" stroke="var(--color-text)" />
				) : (
					<Moon size={22} stroke="var(--color-grey)" />
				)}
			</div>
		</ToggleButton>
	);
};
