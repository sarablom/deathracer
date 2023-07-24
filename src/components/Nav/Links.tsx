"use client";
import React, { MouseEventHandler } from "react";
import Link from "next/link";
import styled from "styled-components";

type LinksProps = {
	onClickHandler?: MouseEventHandler;
};

function Links({ onClickHandler }: LinksProps) {
	return (
		<>
			<NavbarLink href="/about" onClick={onClickHandler}>
				About
			</NavbarLink>
			<NavbarLink href="/music" onClick={onClickHandler}>
				Music
			</NavbarLink>
			<NavbarLink href="/shows" onClick={onClickHandler}>
				Shows
			</NavbarLink>
			<NavbarLink href="/merch" onClick={onClickHandler}>
				Merch
			</NavbarLink>
			<NavbarLink href="/lyrics" onClick={onClickHandler}>
				Lyrics
			</NavbarLink>
		</>
	);
}

export default Links;

const NavbarLink = styled(Link)`
	&:hover {
		font-weight: 700;
		text-decoration: underline;

		@media only screen and (min-width: 801px) {
			transform: scale(1.1);
		}
	}
	&:active,
	&:focus {
		font-size: 1.3rem;
		font-weight: 700;
		text-decoration: 1.5px var(--color-success) wavy underline;
	}
`;
