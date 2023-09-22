"use client";
import React from "react";
import Links from "./Links";
import { X as Close } from "react-feather";
import { VisuallyHidden } from "../VisuallyHidden";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { MobielNavWrapper } from "./styledComponents";

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

