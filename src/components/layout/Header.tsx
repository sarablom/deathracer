"use client";
import styled from "styled-components";
import { Nav } from "../Nav";
import logo from "../../../public/images/death-logo.svg";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
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
	padding: 16px 32px;

	img {
		position: absolute;
		top: 16px;
		left: 32px;
	}
`;
