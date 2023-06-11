import React, { useState } from "react";
import styled from "styled-components";
import Links from "./Links";
import { X as Close } from "react-feather";
import { VisuallyHidden } from "../VisuallyHidden";
import Link from "next/link";

type NavProps = {
	showMenuHandler: (showMenu: boolean) => void;
};

export const MobileNav = ({ showMenuHandler }: NavProps) => {
	return (
		<MobielNavWrapper>
			<button
				onClick={() => {
					showMenuHandler(false);
				}}
			>
				<Close
					style={{ stroke: "var(--color-whiteish)", fontSize: "1.5rem" }}
				/>
				<VisuallyHidden text="Dismiss menu" />
			</button>
			<Links onClickHandler={() => showMenuHandler(false)} />
		</MobielNavWrapper>
	);
};

export default MobileNav;

const MobielNavWrapper = styled.div`
	position: absolute;
	inset: 0;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.7rem;
  padding: 32px;
	background: var(--color-blackish);
	color: var(--color-whiteish);

	button {
		border: none;
		background: transparent;
		cursor: pointer;
		align-self: flex-end;
	}

	a {
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		font-size: 1.5rem;
		width: 100%;
		&:hover {
			background: var(--color-secondary);
		}
	}
`;
