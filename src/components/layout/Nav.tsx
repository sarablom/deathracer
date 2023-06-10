import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Menu } from "react-feather";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

export const Nav = () => {
	const { width } = useWindowDimensions();

	return (
		<NavWrapper>
			{width && width > 800 ? (
				<>
					<Link href="/about">About</Link>
					<Link href="/music">Music</Link>
					<Link href="/shows">Shows</Link>
					<Link href="/merch">Merch</Link>
					<Link href="/lyrics">Lyrics</Link>
				</>
			) : (
				<Menu style={{ marginLeft: "auto", marginRight: "32px" }} />
			)}
		</NavWrapper>
	);
};

const NavWrapper = styled.nav`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 5rem;
	gap: 3rem;
	a {
		text-decoration: none;
		color: var(--color-blackish);
		cursor: pointer;
		&:hover {
			color: var(--color-whiteish);
			background: var(--color-secondary);
		}
	}
`;
