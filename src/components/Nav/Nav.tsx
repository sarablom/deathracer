"use client";
import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import MobileNav from "./MobileNav";
import Links from "./Links";
import { VisuallyHidden } from "../VisuallyHidden";
import { ThemeToggle } from "../ThemeToggle";

import { Menu } from "react-feather";
import styled from "styled-components";

export const Nav = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const { width } = useWindowDimensions();
	const { theme, setTheme } = useTheme();

	return (
		<NavContainer>
			{!width ? (
				<></>
			) : width > 800 ? (
				<>
					<NavWrapper>
						<Links />
					</NavWrapper>
					<div style={{ marginLeft: "auto" }}>
						<ThemeToggle
							value={theme}
							onChange={() => setTheme(theme === "light" ? "dark" : "light")}
						/>
					</div>
				</>
			) : (
				<>
					<MenuButton onClick={() => setShowMobileMenu(true)}>
						<Menu
							style={{ stroke: "var(--color-blackish)", fontSize: "1.5rem" }}
						/>
						<VisuallyHidden text="Show menu" />
					</MenuButton>
				</>
			)}
			{showMobileMenu && <MobileNav showMenuHandler={setShowMobileMenu} />}
		</NavContainer>
	);
};

const NavContainer = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	min-height: 3rem;
`;

const NavWrapper = styled.nav`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	margin: auto 0;

	a {
		text-decoration: none;
		color: var(--color-blackish);
		cursor: pointer;
	}
`;

const MenuButton = styled.button`
	border: none;
	background: transparent;
	margin-left: auto;
	cursor: pointer;
`;
