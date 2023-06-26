"use client";
import { ReactNode, useRef, useEffect } from "react";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { VisuallyHidden } from "../VisuallyHidden";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleModal } from "../../store/slices/uiSlice";
import styled from "styled-components";

interface Props {
	title: string;
	children: ReactNode;
}

export const Modal = ({ title, children }: Props) => {
	const closeBtnRef = useRef<HTMLButtonElement>(null);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (closeBtnRef.current) {
			closeBtnRef.current.focus();
		} else if (document.activeElement instanceof HTMLElement) {
			document.activeElement.focus();
		}
	}, []);

	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.code === "Escape") {
				dispatch(toggleModal());
			}
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [dispatch]);

	return (
		<FocusLock>
			<RemoveScroll>
				<ModalWrapper>
					<Backdrop onClick={() => dispatch(toggleModal())} />
					<Dialog role="dialog" aria-modal="true" aria-label={title}>
						<button ref={closeBtnRef} onClick={() => dispatch(toggleModal())}>
							<Close />
							<VisuallyHidden text="Dismiss modal" />
						</button>
						{children}
					</Dialog>
				</ModalWrapper>
			</RemoveScroll>
		</FocusLock>
	);
};

const ModalWrapper = styled.div`
	position: fixed;
	inset: 0;
	display: grid;
	place-content: center;
	padding: 16px;
`;

const Backdrop = styled.div`
	position: absolute;
	inset: 0;
	background: hsl(0deg 0% 0% / 0.75);
`;

const Dialog = styled.div`
	position: relative;
	background: white;
	border-radius: 8px;
	padding: 32px;

	button {
		position: absolute;
		top: 0;
		right: 0;
		padding: 16px;
		color: white;
		transform: translateY(-100%);
		cursor: pointer;
		background: transparent;
		border: none;
	}
`;
