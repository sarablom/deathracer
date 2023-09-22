"use client";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Nav } from "../Nav";

import logo from "../../../public/images/death-logo.svg";
import styled from "styled-components";

export const Header = () => {
	const { width } = useWindowDimensions();

	if (!width) return <></>;

	return (
		<HeaderWrapper>
			<Link href="/">
				<Image
					src={logo}
					alt="Deathracer logo - the word DEATH written in white againt black background"
					height={48}
				/>
			</Link>
			<Nav />
		</HeaderWrapper>
	);
};
const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	background: var(--color-secondary);
	padding: 1rem;
	/* animation: foldFromTop 1s ease-in forwards; */
	z-index: 1;

	@keyframes foldFromTop {
		from {
			transform: translateY(-175px);
			opacity: 0;
		}

		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	img {
		position: absolute;
		top: 16px;
		left: 32px;
	}
`;
