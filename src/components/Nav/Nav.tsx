"use client";
import React, { Suspense, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import MobileNav from "./MobileNav";
import Links from "./Links";
import { VisuallyHidden } from "../VisuallyHidden";
import { ThemeToggle } from "../ThemeToggle";

import { Menu } from "react-feather";
import { Kanit } from "next/font/google";
import styled from "styled-components";

const kanitRegular = Kanit({
	subsets: ["latin"],
	weight: "400",
});

export const Nav = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const { width } = useWindowDimensions();
	const { theme } = useTheme();

	return (
		<NavContainer className={kanitRegular.className}>
			<Suspense>
				{!width ? (
					<></>
				) : width > 800 ? (
					<>
						<NavWrapper>
							<Links />
						</NavWrapper>
						<div style={{ marginLeft: "auto" }}>
							<ThemeToggle />
						</div>
					</>
				) : (
					<ButtonsWrapper>
						<ThemeToggle />
						<MenuButton onClick={() => setShowMobileMenu(true)}>
							<Menu
								style={{
									stroke: "var(--color-text)",
									fontSize: "1.5rem",
								}}
							/>
							<VisuallyHidden text="Show menu" />
						</MenuButton>
					</ButtonsWrapper>
				)}
				{showMobileMenu && <MobileNav showMenuHandler={setShowMobileMenu} />}
			</Suspense>
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
		color: inherit;
		cursor: pointer;
	}
`;

const ButtonsWrapper = styled.div`
	display: flex;
	gap: 16px;
	margin-left: auto;
`;

const MenuButton = styled.button`
	border: none;
	background: transparent;
	cursor: pointer;
`;
