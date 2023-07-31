"use client";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { Moon, Sun } from "react-feather";

import styled from "styled-components";

export const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<ToggleWrapper
			type="button"
			role="switch"
			theme={theme}
			aria-checked={theme === "light"}
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			style={{
				flexDirection: theme === "light" ? "row" : "row-reverse",
				justifyContent: theme === "light" ? "flex-end" : "flex-start",
			}}
		>
			<div>
				{theme === "light" ? (
					<Sun size={18} fill="#FFD200" stroke="var(--color-blackish)" />
				) : (
					<Moon size={22} stroke="var(--color-grey)" />
				)}
			</div>
			<motion.span
				layout={true}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 40,
				}}
			/>
		</ToggleWrapper>
	);
};

type StyleProps = {
	theme: "light" | "dark";
};

const ToggleWrapper = styled.button<StyleProps>`
	display: flex;
	align-items: center;
	gap: 4px;
	width: 48px;
	height: 22px;
	border-radius: 1000px;
	border: none;
	padding: 2px;
	border: ${({ theme }) =>
		theme === "light"
			? "3px solid var(--color-blackish)"
			: "3px solid var(--color-grey)"};
	background: transparent;
	cursor: pointer;
	box-sizing: content-box;
	outline-offset: 6px;

	span {
		display: block;
		height: 100%;
		aspect-ratio: 1 / 1;
		background: ${({ theme }) =>
			theme === "light" ? "var(--color-blackish)" : "var(--color-grey)"};
		border-radius: 1000px;
	}
`;
