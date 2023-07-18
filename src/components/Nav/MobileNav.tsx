import React from "react";
import styled from "styled-components";
import Links from "./Links";
import { X as Close } from "react-feather";
import { VisuallyHidden } from "../VisuallyHidden";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

type NavProps = {
	showMenuHandler: (showMenu: boolean) => void;
};

export const MobileNav = ({ showMenuHandler }: NavProps) => {
	return (
		<FocusLock>
			<RemoveScroll>
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
			</RemoveScroll>
		</FocusLock>
	);
};

export default MobileNav;

const MobielNavWrapper = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.7rem;
	height: 100vh;
	padding: 16px;
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
	}
`;
