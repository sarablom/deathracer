"use client";
import { motion } from "framer-motion";
import { Moon, Sun } from "react-feather";

import styled from "styled-components";

type Props = {
	value: "light" | "dark";
	onChange: (value: "light" | "dark") => void;
};

export const ThemeToggle = ({ value, onChange, ...delegated }: Props) => {
	return (
		<ToggleWrapper
			type="button"
			role="switch"
			aria-checked={value === "light"}
			onClick={() => onChange(value === "light" ? "dark" : "light")}
			style={{
				flexDirection: value === "light" ? "row" : "row-reverse",
				justifyContent: value === "light" ? "flex-end" : "flex-start",
			}}
			{...delegated}
		>
			<div>{value === "light" ? <Sun size={16} /> : <Moon size={22} /> }</div>
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

const ToggleWrapper = styled.button`
	display: flex;
  align-items: center;
  gap: 4px;
	width: 48px;
	height: 22px;
	border-radius: 1000px;
	border: none;
	padding: 2px;
	border: 3px solid var(--color-blackish);
	background: transparent;
	cursor: pointer;
	box-sizing: content-box;
	outline-offset: 6px;

	span {
		display: block;
		height: 100%;
		aspect-ratio: 1 / 1;
		background: var(--color-blackish);
		border-radius: 1000px;
	}
`;
